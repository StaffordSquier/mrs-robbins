// lib/content-processor.ts

import { SupabaseClient } from '@supabase/supabase-js';
import { EmbeddingService } from './embeddings';
import { EmbeddingStorage } from './embedding-storage';

export interface ContentProcessor {
  processContent(contentId: string, text: string): Promise<void>;
  reprocessContent(contentId: string): Promise<void>;
}

export class DefaultContentProcessor implements ContentProcessor {
  constructor(
    private embeddingService: EmbeddingService,
    private embeddingStorage: EmbeddingStorage,
    private supabase: SupabaseClient
  ) {}

  async processContent(contentId: string, text: string): Promise<void> {
    // 1. Chunk the text
    const chunks = this.embeddingService.chunkText(text);

    // 2. Generate embeddings for all chunks
    const embeddings = await this.embeddingService.generateEmbeddings(chunks);

    // 3. Calculate positions
    let position = 0;
    const chunksWithPositions = chunks.map((chunkText, i) => {
      const startPosition = position;
      const endPosition = position + chunkText.length;
      position = endPosition;

      return {
        text: chunkText,
        embedding: embeddings[i],
        startPosition,
        endPosition
      };
    });

    // 4. Store in database
    await this.embeddingStorage.storeEmbedding({
      contentId,
      chunks: chunksWithPositions
    });
  }

  async reprocessContent(contentId: string): Promise<void> {
    // Get content from database
    const { data, error } = await this.supabase
      .from('thought_blobs')
      .select('content')
      .eq('id', contentId)
      .single();

    if (error) throw error;

    // Delete old embeddings
    await this.embeddingStorage.deleteEmbeddingsForContent(contentId);

    // Reprocess
    await this.processContent(contentId, data.content);
  }
}
