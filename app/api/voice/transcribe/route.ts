import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { createServiceClient, isSupabaseConfigured, Database } from '@/lib/supabase';
import OpenAI from 'openai';

type ThoughtBlobInsert = Database['public']['Tables']['thought_blobs']['Insert'];

async function getAuthenticatedClient() {
  try {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          },
        },
      }
    );

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    return supabase;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const authClient = await getAuthenticatedClient();

    if (!authClient) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 503 }
      );
    }

    // Initialize OpenAI client at runtime with timeout and no retries
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      timeout: 60000, // 60 second timeout
      maxRetries: 0, // Don't retry on failure
    });

    // Get FormData from request
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File;
    const projectId = formData.get('projectId') as string;
    const durationSeconds = formData.get('durationSeconds') as string;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'Audio file is required' },
        { status: 400 }
      );
    }

    if (!projectId) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    console.log(`📷 [TRANSCRIBE] Received audio file: ${audioFile.name}, size: ${audioFile.size} bytes`);

    // Transcribe using Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: 'en',
    });

    const transcriptText = transcription.text;
    console.log(`📷 [TRANSCRIBE] Transcription complete: ${transcriptText.length} characters`);

    const supabase = createServiceClient();

    // Use valid UUID format for test user
    const userId = '00000000-0000-0000-0000-000000000001';

    // Upload audio to Supabase Storage
    const fileName = `${userId}/${Date.now()}-recording.webm`;
    const { data: _uploadData, error: uploadError } = await supabase.storage
      .from('voice-memos')
      .upload(fileName, audioFile, {
        contentType: audioFile.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return NextResponse.json(
        { error: `Failed to upload audio: ${uploadError.message}` },
        { status: 500 }
      );
    }

    // Get public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('voice-memos')
      .getPublicUrl(fileName);

    // Create voice recording record
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: recordingData, error: recordingError } = await (supabase as any)
      .from('voice_recordings')
      .insert({
        project_id: projectId,
        user_id: userId,
        audio_url: publicUrl,
        duration_seconds: parseInt(durationSeconds) || 0,
        transcript: transcriptText,
        transcription_method: 'whisper-1',
      })
      .select()
      .single();

    if (recordingError) {
      console.error('Database insert error:', recordingError);
      return NextResponse.json(
        { error: `Failed to save recording: ${recordingError.message}` },
        { status: 500 }
      );
    }

    const typedRecordingData = recordingData as { project_id: string; user_id: string } | null;

    if (typedRecordingData) {
      const wordCount = transcriptText.split(/\s+/).filter(Boolean).length;

      const thoughtBlobData: ThoughtBlobInsert = {
        project_id: typedRecordingData.project_id,
        user_id: typedRecordingData.user_id,
        content: transcriptText,
        content_type: 'voice_transcript',
        word_count: wordCount,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase as any)
        .from('thought_blobs')
        .insert(thoughtBlobData)
        .select()
        .single();

      console.log(`✅ [TRANSCRIBE] Created thought_blob successfully`);
    }

    return NextResponse.json({
      recordingId: recordingData.id,
      transcript: transcriptText,
      wordCount: transcriptText.split(/\s+/).filter(Boolean).length,
    });

  } catch (err: unknown) {
    console.error('Transcription error:', err);

    // Check if it's an OpenAI API error
    if (err && typeof err === 'object' && 'status' in err && 'message' in err) {
      const apiError = err as { status?: number; message?: string };
      return NextResponse.json(
        { error: `OpenAI API error: ${apiError.message || 'Unknown error'}` },
        { status: apiError.status || 500 }
      );
    }

    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 }
    );
  }
}