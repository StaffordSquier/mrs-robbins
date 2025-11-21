import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { vocabularySetId, term, parentId, synonyms, description } = body;

    if (!vocabularySetId || !term) {
      return NextResponse.json(
        { error: 'vocabularySetId and term are required' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    const termData = {
      vocabulary_set_id: vocabularySetId,
      term: term.trim(),
      parent_id: parentId || null,
      synonyms: synonyms || [],
      description: description || null,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await (supabase as any)
      .from('controlled_vocabulary')
      .insert(termData)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      termId: data.id,
      term: data,
    });
  } catch (error) {
    console.error('Vocabulary term creation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
