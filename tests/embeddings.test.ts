// tests/embeddings.test.ts

import { describe, it, expect } from '@jest/globals';
import { OpenAIEmbeddingService } from '../lib/embeddings';
import { SupabaseEmbeddingStorage } from '../lib/embedding-storage';
import { createClient } from '@supabase/supabase-js';

describe('Embedding Service', () => {
  it('should generate embedding for text', async () => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.log('Skipping test: OPENAI_API_KEY not set');
      return;
    }

    const service = new OpenAIEmbeddingService(apiKey);
    const embedding = await service.generateEmbedding('test text');
    expect(embedding).toHaveLength(1536);
  });

  it('should chunk long text', () => {
    const service = new OpenAIEmbeddingService('fake-key');
    const longText = 'word '.repeat(5000);
    const chunks = service.chunkText(longText, 1000);
    expect(chunks.length).toBeGreaterThan(1);
  });

  it('should store and retrieve embeddings', async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.log('Skipping test: Supabase credentials not set');
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const storage = new SupabaseEmbeddingStorage(supabase);

    // Create a test embedding
    const testContentId = 'test-' + Date.now();
    const testEmbedding = new Array(1536).fill(0).map(() => Math.random());

    await storage.storeEmbedding({
      contentId: testContentId,
      chunks: [{
        text: 'test chunk',
        embedding: testEmbedding,
        startPosition: 0,
        endPosition: 10
      }]
    });

    // Search for similar content
    const results = await storage.searchSimilar({
      embedding: testEmbedding,
      threshold: 0.5,
      limit: 5
    });

    expect(results).toBeDefined();
    expect(Array.isArray(results)).toBe(true);

    // Cleanup
    await storage.deleteEmbeddingsForContent(testContentId);
  });
});
