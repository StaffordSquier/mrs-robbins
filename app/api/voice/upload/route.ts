import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient, isSupabaseConfigured, Database } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';
import { getOrCreateDemoUser } from '@/lib/user-helper';

type VoiceRecordingInsert = Database['public']['Tables']['voice_recordings']['Insert'];

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const audioFile = formData.get('audio') as File | null;
    const projectId = formData.get('projectId') as string | null;
    const durationSecondsStr = formData.get('durationSeconds') as string | null;

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

    const durationSeconds = durationSecondsStr ? parseInt(durationSecondsStr, 10) : 0;

    // Generate unique filename
    const recordingId = uuidv4();
    const fileExtension = audioFile.name.split('.').pop() || 'webm';
    const fileName = `${recordingId}.${fileExtension}`;
    const storagePath = `voice-recordings/${projectId}/${fileName}`;

    // Get Supabase service client
    const supabase = createServiceClient();

    // Convert File to ArrayBuffer for upload
    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage
    const { data: _uploadData, error: uploadError } = await supabase.storage
      .from('voice-memos')
      .upload(storagePath, buffer, {
        contentType: audioFile.type || 'audio/webm',
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
    const { data: urlData } = supabase.storage
      .from('voice-memos')
      .getPublicUrl(storagePath);

    const audioUrl = urlData.publicUrl;

    // Get or create demo user
    const userId = await getOrCreateDemoUser();

    // Save metadata to database
    const insertData: VoiceRecordingInsert = {
      id: recordingId,
      user_id: userId,
      project_id: projectId,
      audio_url: audioUrl,
      transcript: '', // Will be filled after transcription
      duration_seconds: durationSeconds,
      transcription_method: 'pending',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: recordingData, error: dbError } = await (supabase as any)
      .from('voice_recordings')
      .insert(insertData)
      .select()
      .single();

    if (dbError) {
      console.error('Database insert error:', dbError);
      // Clean up uploaded file if database insert fails
      await supabase.storage.from('voice-memos').remove([storagePath]);
      return NextResponse.json(
        { error: `Failed to save recording metadata: ${dbError.message}` },
        { status: 500 }
      );
    }

    const recordingId_result = (recordingData as { id: string } | null)?.id || recordingId;

    return NextResponse.json({
      recordingId: recordingId_result,
      audioUrl: audioUrl,
      storagePath: storagePath,
      durationSeconds: durationSeconds,
    });

  } catch (error) {
    console.error('Voice upload error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
