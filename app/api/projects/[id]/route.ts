import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { SupabaseProjectService, UpdateProjectParams } from '@/lib/projects';

async function getAuthenticatedClient() {
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
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await getAuthenticatedClient();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const projectService = new SupabaseProjectService(supabase);
    const project = await projectService.getProject(id);

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error('Get project error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await getAuthenticatedClient();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const body = await request.json();
    const { title, endpointType } = body;

    if (!title && !endpointType) {
      return NextResponse.json(
        { error: 'At least one field (title or endpointType) is required' },
        { status: 400 }
      );
    }

    if (endpointType) {
      const validEndpointTypes = ['writer', 'entrepreneur', 'consultant', 'researcher', 'documentation'];
      if (!validEndpointTypes.includes(endpointType)) {
        return NextResponse.json(
          { error: 'Invalid endpointType' },
          { status: 400 }
        );
      }
    }

    const params: UpdateProjectParams = {};
    if (title) params.title = title;
    if (endpointType) params.endpointType = endpointType;

    const projectService = new SupabaseProjectService(supabase);
    const project = await projectService.updateProject(id, params);

    return NextResponse.json({ project });
  } catch (error) {
    console.error('Update project error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await getAuthenticatedClient();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const projectService = new SupabaseProjectService(supabase);
    await projectService.deleteProject(id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Delete project error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
