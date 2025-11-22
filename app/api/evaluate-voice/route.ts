import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { evaluateVoiceOutput, isValidVariable } from '@/lib/evaluation';

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
    const supabase = await getAuthenticatedClient();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { outputText, variable } = await request.json();

    if (!outputText || !variable) {
      return NextResponse.json(
        { error: 'Missing outputText or variable' },
        { status: 400 }
      );
    }

    if (!isValidVariable(variable)) {
      return NextResponse.json(
        { error: `Unknown variable: ${variable}` },
        { status: 400 }
      );
    }

    const result = await evaluateVoiceOutput(outputText, variable);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Evaluate voice API error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      {
        error: 'Failed to evaluate output',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
