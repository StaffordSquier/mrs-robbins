import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient, isSupabaseConfigured } from '@/lib/supabase';
import { catalogingService } from '@/lib/services/cataloging';

export async function GET(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Supabase is not configured' },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');
    const tagsParam = searchParams.get('tags');
    const searchQuery = searchParams.get('search');

    const supabase = createServiceClient();

    let contentIds: string[] | null = null;

    // Filter by tags if provided
    if (tagsParam) {
      const tags = tagsParam.split(',').map(t => t.trim());

      // Get term IDs from term names
      const { data: terms } = await supabase
        .from('controlled_vocabulary')
        .select('id')
        .in('term', tags);

      if (terms && terms.length > 0) {
        // Type assertion for terms
        const typedTerms = terms as Array<{ id: string }>;
        const termIds = typedTerms.map(t => t.id);
        contentIds = await catalogingService.filterByTerms(termIds);
      } else {
        contentIds = []; // No matching terms found
      }
    }

    // Semantic search if query provided
    if (searchQuery) {
      const searchResults = await catalogingService.searchSimilar(
        searchQuery,
        50,
        'thought_blob'
      );
      const searchContentIds = searchResults.map(r => r.contentId);

      // Intersect with tag-filtered results if both exist
      if (contentIds) {
        contentIds = contentIds.filter(id => searchContentIds.includes(id));
      } else {
        contentIds = searchContentIds;
      }
    }

    // Build query for thought blobs
    let query = supabase
      .from('thought_blobs')
      .select('id, content, content_type, word_count, created_at, project_id, user_id')
      .order('created_at', { ascending: false });

    // Filter by project if provided
    if (projectId) {
      query = query.eq('project_id', projectId);
    }

    // Filter by content IDs from tag/search if applicable
    if (contentIds !== null) {
      if (contentIds.length === 0) {
        // No matches found
        return NextResponse.json({ blobs: [] });
      }
      query = query.in('id', contentIds);
    }

    const { data: blobs, error } = await query;

    if (error) {
      throw error;
    }

    // Type assertion for blobs
    const typedBlobs = (blobs || []) as Array<{
      id: string;
      content: string;
      content_type: string;
      word_count: number;
      created_at: string;
      project_id: string;
      user_id: string;
    }>;

    // Fetch metadata (tags) for each blob
    const blobsWithMetadata = await Promise.all(
      typedBlobs.map(async (blob) => {
        const { data: metadata } = await supabase
          .from('content_metadata')
          .select(`
            vocabulary_term_id,
            confidence,
            controlled_vocabulary (
              id,
              term
            )
          `)
          .eq('content_id', blob.id)
          .eq('content_type', 'thought_blob');

        // Type assertion for metadata with join
        const typedMetadata = (metadata || []) as Array<{
          vocabulary_term_id: string;
          confidence: number;
          controlled_vocabulary: {
            id: string;
            term: string;
          } | null;
        }>;

        return {
          ...blob,
          tags: typedMetadata.map(m => ({
            termId: m.vocabulary_term_id,
            term: m.controlled_vocabulary?.term || '',
            confidence: m.confidence,
          })),
        };
      })
    );

    return NextResponse.json({
      blobs: blobsWithMetadata,
    });
  } catch (error) {
    console.error('Blobs fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
