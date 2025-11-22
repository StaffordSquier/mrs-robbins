import { NextRequest, NextResponse } from 'next/server';
import { catalogingService } from '@/lib/services/cataloging';
import { createServiceClient } from '@/lib/supabase';

/**
 * Debug endpoint to test cataloging
 * GET: Check environment and recent blobs
 * POST: Test cataloging on a specific blob
 */

export async function GET() {
  const diagnostics: {
    timestamp: string;
    environment: Record<string, string>;
    recentBlobs: unknown[];
    recentTags: unknown[];
    recentBlobsError?: string;
    recentTagsError?: string;
    vocabularyCountError?: string;
    vocabularyTermsCount?: number | null;
    error?: string;
  } = {
    timestamp: new Date().toISOString(),
    environment: {
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY ? '✅ Set (' + process.env.ANTHROPIC_API_KEY.substring(0, 20) + '...)' : '❌ Not set',
      OPENAI_API_KEY: process.env.OPENAI_API_KEY ? '✅ Set (' + process.env.OPENAI_API_KEY.substring(0, 20) + '...)' : '❌ Not set (optional)',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Not set',
    },
    recentBlobs: [],
    recentTags: [],
  };

  try {
    const supabase = createServiceClient();

    // Get recent thought blobs
    const { data: blobs, error: blobsError } = await supabase
      .from('thought_blobs')
      .select('id, content, created_at, word_count')
      .order('created_at', { ascending: false })
      .limit(5);

    if (blobsError) {
      diagnostics.recentBlobsError = blobsError.message;
    } else {
      diagnostics.recentBlobs = blobs;
    }

    // Get recent tags
    const { data: tags, error: tagsError } = await supabase
      .from('content_metadata')
      .select('content_id, vocabulary_term_id, confidence, created_at')
      .order('created_at', { ascending: false })
      .limit(10);

    if (tagsError) {
      diagnostics.recentTagsError = tagsError.message;
    } else {
      diagnostics.recentTags = tags;
    }

    // Count vocabulary terms
    const { count, error: vocabError } = await supabase
      .from('controlled_vocabulary')
      .select('*', { count: 'exact', head: true });

    if (vocabError) {
      diagnostics.vocabularyCountError = vocabError.message;
    } else {
      diagnostics.vocabularyTermsCount = count;
    }

  } catch (error) {
    diagnostics.error = error instanceof Error ? error.message : 'Unknown error';
  }

  return NextResponse.json(diagnostics, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { blobId, testContent } = body;

    if (!blobId && !testContent) {
      return NextResponse.json(
        { error: 'Provide either blobId or testContent' },
        { status: 400 }
      );
    }

    let contentId = blobId;
    let content = testContent;

    // If blobId provided, fetch the blob content
    if (blobId) {
      const supabase = createServiceClient();
      const { data: blob, error } = await supabase
        .from('thought_blobs')
        .select('id, content')
        .eq('id', blobId)
        .single();

      if (error || !blob) {
        return NextResponse.json(
          { error: 'Blob not found: ' + (error?.message || 'Unknown error') },
          { status: 404 }
        );
      }

      const typedBlob = blob as { id: string; content: string };
      content = typedBlob.content;
    } else {
      // Generate a test blob ID for test content
      contentId = 'test-' + Date.now();
    }

    console.log('🧪 Testing cataloging for content:', contentId);
    console.log('Content preview:', content.substring(0, 100) + '...');

    // Test the cataloging service
    const result = await catalogingService.categorize(
      contentId,
      content,
      'thought_blob'
    );

    console.log('✅ Cataloging successful:', result);

    return NextResponse.json({
      success: true,
      contentId,
      result,
      message: 'Cataloging completed successfully',
    });

  } catch (error) {
    console.error('❌ Cataloging error:', error);

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
}
