import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient, isSupabaseConfigured } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    const projectId = params.id;

    if (!projectId) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Fetch project details
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('id, title, endpoint_type, created_at, updated_at')
      .eq('id', projectId)
      .single();

    if (projectError || !project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Fetch voice recordings for this project
    const { data: voiceRecordings, error: recordingsError } = await supabase
      .from('voice_recordings')
      .select('id, audio_url, transcript, duration_seconds, created_at, transcription_method')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false });

    if (recordingsError) {
      console.error('Error fetching voice recordings:', recordingsError);
    }

    // Fetch thought blobs for this project
    const { data: thoughtBlobs, error: blobsError } = await supabase
      .from('thought_blobs')
      .select('id, content, content_type, word_count, created_at')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false });

    if (blobsError) {
      console.error('Error fetching thought blobs:', blobsError);
    }

    return NextResponse.json({
      project,
      voiceRecordings: voiceRecordings || [],
      thoughtBlobs: thoughtBlobs || [],
    });

  } catch (error) {
    console.error('Project detail fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
