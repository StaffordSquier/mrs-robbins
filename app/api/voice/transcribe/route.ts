import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient, isSupabaseConfigured, Database } from '@/lib/supabase';
import OpenAI from 'openai';

type ThoughtBlobInsert = Database['public']['Tables']['thought_blobs']['Insert'];

export async function POST(request: NextRequest) {
  try {
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

    const body = await request.json();
    const { recordingId, audioUrl } = body;

    if (!recordingId) {
      return NextResponse.json(
        { error: 'Recording ID is required' },
        { status: 400 }
      );
    }

    if (!audioUrl) {
      return NextResponse.json(
        { error: 'Audio URL is required' },
        { status: 400 }
      );
    }

    // Fetch the audio file
    const audioResponse = await fetch(audioUrl);
    if (!audioResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch audio file' },
        { status: 500 }
      );
    }

    const audioBuffer = await audioResponse.arrayBuffer();

    // Create a File object for OpenAI
    const audioFile = new File(
      [audioBuffer],
      'recording.webm',
      { type: 'audio/webm' }
    );

    // Transcribe using Whisper
    // Using default JSON format to get properly typed response
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: 'en',
    });

    const transcriptText = transcription.text;

    // Update the database with the transcript
    const supabase = createServiceClient();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error: updateError } = await (supabase as any)
      .from('voice_recordings')
      .update({
        transcript: transcriptText,
        transcription_method: 'whisper-1',
      })
      .eq('id', recordingId);

    if (updateError) {
      console.error('Database update error:', updateError);
      return NextResponse.json(
        { error: `Failed to save transcript: ${updateError.message}` },
        { status: 500 }
      );
    }

    // Also create a thought blob from the transcript
    const { data: recordingData } = await supabase
      .from('voice_recordings')
      .select('project_id, user_id')
      .eq('id', recordingId)
      .single();

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
      await (supabase as any).from('thought_blobs').insert(thoughtBlobData);
    }

    return NextResponse.json({
      recordingId,
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
