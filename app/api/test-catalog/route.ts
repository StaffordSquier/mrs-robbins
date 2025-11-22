import { NextRequest, NextResponse } from 'next/server';
import { catalogingService } from '@/lib/services/cataloging';
import { createServiceClient } from '@/lib/supabase';

/**
 * Simple test endpoint to verify cataloging works
 *
 * GET /api/test-catalog?text=your+test+text
 * POST /api/test-catalog with JSON body: { "text": "your test text" }
 */

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get('text') || 'This is a test about love, loss, and finding hope in difficult times.';

  return testCataloging(text);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const text = body.text || 'This is a test about love, loss, and finding hope in difficult times.';

    return testCataloging(text);
  } catch (err) {
    return NextResponse.json({
      error: 'Invalid request body',
      details: err instanceof Error ? err.message : String(err),
    }, { status: 400 });
  }
}

async function testCataloging(text: string) {
  const result: {
    timestamp: string;
    input: { text: string; length: number };
    environment: Record<string, string>;
    vocabularyCheck: Record<string, unknown>;
    catalogingResult: unknown;
    databaseCheck: Record<string, unknown>;
    error: { message: string; stack?: string } | null;
  } = {
    timestamp: new Date().toISOString(),
    input: {
      text,
      length: text.length,
    },
    environment: {
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY ? '✅ Set' : '❌ Missing',
      OPENAI_API_KEY: process.env.OPENAI_API_KEY ? '✅ Set' : '❌ Missing',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Missing',
    },
    vocabularyCheck: {},
    catalogingResult: null,
    databaseCheck: {},
    error: null,
  };

  try {
    // Step 1: Check if we have vocabulary terms
    console.log('🧪 [TEST_CATALOG] Step 1: Checking vocabulary terms...');
    const supabase = createServiceClient();

    const { data: vocabTerms, error: vocabError, count } = await supabase
      .from('controlled_vocabulary')
      .select('id, term', { count: 'exact' })
      .limit(10);

    if (vocabError) {
      result.vocabularyCheck.error = vocabError.message;
      console.error('❌ [TEST_CATALOG] Vocabulary check failed:', vocabError);
    } else {
      const typedVocabTerms = vocabTerms as Array<{ id: string; term: string }> | null;
      result.vocabularyCheck.count = count;
      result.vocabularyCheck.sampleTerms = typedVocabTerms?.map(t => t.term) || [];
      console.log(`✅ [TEST_CATALOG] Found ${count} vocabulary terms`);
      console.log(`📋 [TEST_CATALOG] Sample terms:`, result.vocabularyCheck.sampleTerms);
    }

    // Step 2: Generate a test content ID
    const testContentId = `test-${Date.now()}`;
    console.log(`🧪 [TEST_CATALOG] Step 2: Using test content ID: ${testContentId}`);

    // Step 3: Call cataloging service
    console.log('🧪 [TEST_CATALOG] Step 3: Calling cataloging service...');
    console.log(`📝 [TEST_CATALOG] Text to catalog: "${text}"`);

    const catalogResult = await catalogingService.categorize(
      testContentId,
      text,
      'thought_blob'
    );

    result.catalogingResult = catalogResult;
    console.log('✅ [TEST_CATALOG] Cataloging completed successfully!');
    console.log(`📊 [TEST_CATALOG] Result:`, JSON.stringify(catalogResult, null, 2));

    // Step 4: Check if metadata was actually stored
    console.log('🧪 [TEST_CATALOG] Step 4: Checking if metadata was stored...');
    const { data: metadata, error: metadataError } = await supabase
      .from('content_metadata')
      .select('*')
      .eq('content_id', testContentId);

    if (metadataError) {
      result.databaseCheck.error = metadataError.message;
      console.error('❌ [TEST_CATALOG] Metadata check failed:', metadataError);
    } else {
      result.databaseCheck.metadataCount = metadata?.length || 0;
      result.databaseCheck.metadata = metadata;
      console.log(`✅ [TEST_CATALOG] Found ${metadata?.length || 0} metadata records in database`);
      if (metadata && metadata.length > 0) {
        console.log(`📋 [TEST_CATALOG] Metadata:`, metadata);
      } else {
        console.warn('⚠️  [TEST_CATALOG] No metadata was stored! This is the problem.');
      }
    }

    // Step 5: Check if embedding was stored
    console.log('🧪 [TEST_CATALOG] Step 5: Checking if embedding was stored...');
    const { data: embedding, error: embeddingError } = await supabase
      .from('embeddings')
      .select('*')
      .eq('content_id', testContentId)
      .single();

    if (embeddingError && embeddingError.code !== 'PGRST116') {
      result.databaseCheck.embeddingError = embeddingError.message;
      console.error('❌ [TEST_CATALOG] Embedding check failed:', embeddingError);
    } else if (embedding) {
      result.databaseCheck.embeddingStored = true;
      console.log('✅ [TEST_CATALOG] Embedding was stored');
    } else {
      result.databaseCheck.embeddingStored = false;
      console.warn('⚠️  [TEST_CATALOG] No embedding was stored');
    }

    console.log('\n========================================');
    console.log('📊 TEST CATALOG SUMMARY');
    console.log('========================================');
    console.log(`Environment: ${result.environment.ANTHROPIC_API_KEY === '✅ Set' ? '✅' : '❌'}`);
    console.log(`Vocabulary terms: ${result.vocabularyCheck.count || 0}`);
    console.log(`Terms matched: ${catalogResult.terms.length}`);
    console.log(`Metadata stored: ${result.databaseCheck.metadataCount || 0}`);
    console.log(`Embedding stored: ${result.databaseCheck.embeddingStored ? '✅' : '❌'}`);
    console.log('========================================\n');

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('❌ [TEST_CATALOG] Fatal error:', error);
    result.error = {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    };

    return NextResponse.json(result, { status: 500 });
  }
}
