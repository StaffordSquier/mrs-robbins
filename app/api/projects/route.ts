import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient, isSupabaseConfigured, Database } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

type ProjectInsert = Database['public']['Tables']['projects']['Insert'];

// GET - List all projects
export async function GET() {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    const supabase = createServiceClient();

    // For now, use a placeholder user ID (in production, get from auth)
    const userId = 'user_placeholder';

    const { data: projects, error } = await supabase
      .from('projects')
      .select('id, title, endpoint_type, created_at, updated_at')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Database query error:', error);
      return NextResponse.json(
        { error: `Failed to fetch projects: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      projects: projects || [],
    });

  } catch (error) {
    console.error('Projects fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new project
export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { title, endpointType } = body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json(
        { error: 'Project title is required' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // For now, use a placeholder user ID (in production, get from auth)
    const userId = 'user_placeholder';

    const projectId = uuidv4();

    const projectData: ProjectInsert = {
      id: projectId,
      user_id: userId,
      title: title.trim(),
      endpoint_type: endpointType || null,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: project, error } = await (supabase as any)
      .from('projects')
      .insert(projectData)
      .select()
      .single();

    if (error) {
      console.error('Database insert error:', error);
      return NextResponse.json(
        { error: `Failed to create project: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      project: project as Database['public']['Tables']['projects']['Row'],
    });

  } catch (error) {
    console.error('Project creation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
