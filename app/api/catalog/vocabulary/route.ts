import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient, isSupabaseConfigured } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const vocabularySetId = searchParams.get('vocabularySetId');

    const supabase = createServiceClient();

    // Fetch vocabulary sets
    const { data: vocabularySets, error: setsError } = await supabase
      .from('vocabulary_sets')
      .select('*')
      .order('name');

    if (setsError) {
      throw setsError;
    }

    // Fetch terms
    let termsQuery = supabase
      .from('controlled_vocabulary')
      .select('*')
      .order('term');

    if (vocabularySetId) {
      termsQuery = termsQuery.eq('vocabulary_set_id', vocabularySetId);
    }

    const { data: terms, error: termsError } = await termsQuery;

    if (termsError) {
      throw termsError;
    }

    // Type assertion for terms
    const typedTerms = (terms || []) as Array<{
      id: string;
      vocabulary_set_id: string;
      term: string;
      parent_id: string | null;
      synonyms: string[] | null;
      description: string | null;
      created_at: string;
    }>;

    // Build hierarchical tree structure
    const buildTree = (parentId: string | null = null): any[] => {
      return typedTerms
        .filter(t => t.parent_id === parentId)
        .map(term => ({
          ...term,
          children: buildTree(term.id),
        }));
    };

    const termsTree = buildTree(null);

    return NextResponse.json({
      vocabularySets: vocabularySets || [],
      terms: termsTree,
    });
  } catch (error) {
    console.error('Vocabulary fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
