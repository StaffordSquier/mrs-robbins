// lib/embedding-storage.ts

import { SupabaseClient } from '@supabase/supabase-js';

export interface StoreEmbeddingParams {
  contentId: string;
  chunks: Array<{
    text: string;
    embedding: number[];
    startPosition: number;
    endPosition: number;
  }>;
}

export interface SearchSimilarParams {
  embedding: number[];
  threshold?: number; // 0-1, default 0.7
  limit?: number; // default 10
  excludeContentIds?: string[];
}

export interface SimilarContent {
  contentId: string;
  chunkText: string;
  similarity: number;
  startPosition: number;
  endPosition: number;
}

interface DatabaseEmbeddingRow {
  content_id: string;
  chunk_text: string;
  similarity: number;
  start_position: number;
  end_position: number;
}

export interface EmbeddingStorage {
  storeEmbedding(params: StoreEmbeddingParams): Promise<void>;
  searchSimilar(params: SearchSimilarParams): Promise<SimilarContent[]>;
  deleteEmbeddingsForContent(contentId: string): Promise<void>;
}

export class SupabaseEmbeddingStorage implements EmbeddingStorage {
  constructor(private supabase: SupabaseClient) {}

  async storeEmbedding(params: StoreEmbeddingParams): Promise<void> {
    const records = params.chunks.map((chunk, index) => ({
      content_id: params.contentId,
      chunk_id: `${params.contentId}_${index}`,
      chunk_text: chunk.text,
      embedding: chunk.embedding,
      start_position: chunk.startPosition,
      end_position: chunk.endPosition
    }));

    const { error } = await this.supabase
      .from('embeddings')
      .insert(records);

    if (error) throw error;
  }

  async searchSimilar(params: SearchSimilarParams): Promise<SimilarContent[]> {
    const threshold = params.threshold ?? 0.7;
    const limit = params.limit ?? 10;

    // pgvector cosine similarity search
    const query = this.supabase.rpc('match_embeddings', {
      query_embedding: params.embedding,
      match_threshold: threshold,
      match_count: limit
    });

    const { data, error } = await query;

    if (error) throw error;

    return data.map((row: DatabaseEmbeddingRow) => ({
      contentId: row.content_id,
      chunkText: row.chunk_text,
      similarity: row.similarity,
      startPosition: row.start_position,
      endPosition: row.end_position
    }));
  }

  async deleteEmbeddingsForContent(contentId: string): Promise<void> {
    const { error } = await this.supabase
      .from('embeddings')
      .delete()
      .eq('content_id', contentId);

    if (error) throw error;
  }
}
