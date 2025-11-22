// Projects API routes with try/catch error handling
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { SupabaseProjectService, CreateProjectParams } from '@/lib/projects';

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

export async function GET() {
  try {
    const supabase = await getAuthenticatedClient();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const projectService = new SupabaseProjectService(supabase);
    const projects = await projectService.getProjects();

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Get projects error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await getAuthenticatedClient();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, endpointType } = body;

    if (!title || !endpointType) {
      return NextResponse.json(
        { error: 'Title and endpointType are required' },
        { status: 400 }
      );
    }

    const validEndpointTypes = ['writer', 'entrepreneur', 'consultant', 'researcher', 'documentation'];
    if (!validEndpointTypes.includes(endpointType)) {
      return NextResponse.json(
        { error: 'Invalid endpointType' },
        { status: 400 }
      );
    }

    const params: CreateProjectParams = { title, endpointType };
    const projectService = new SupabaseProjectService(supabase);
    const project = await projectService.createProject(params);

    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
