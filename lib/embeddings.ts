// lib/embeddings.ts

import OpenAI from 'openai';

export interface EmbeddingService {
  generateEmbedding(text: string): Promise<number[]>;
  generateEmbeddings(texts: string[]): Promise<number[][]>;
  chunkText(text: string, maxTokens?: number): string[];
}

export class OpenAIEmbeddingService implements EmbeddingService {
  private openai: OpenAI;
  private model = 'text-embedding-3-small';
  private maxTokens = 8000; // Safe limit for embedding model

  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey });
  }

  async generateEmbedding(text: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: this.model,
      input: text,
      encoding_format: 'float'
    });

    return response.data[0].embedding;
  }

  async generateEmbeddings(texts: string[]): Promise<number[][]> {
    const response = await this.openai.embeddings.create({
      model: this.model,
      input: texts,
      encoding_format: 'float'
    });

    return response.data.map(d => d.embedding);
  }

  chunkText(text: string, maxTokens = 1000): string[] {
    // Simple word-based chunking (rough token approximation: 1 token ≈ 4 chars)
    const maxChars = maxTokens * 4;
    const chunks: string[] = [];

    let currentChunk = '';
    const sentences = text.split(/[.!?]+\s+/);

    for (const sentence of sentences) {
      // If sentence itself is too long, split by words
      if (sentence.length > maxChars) {
        // Flush current chunk if it has content
        if (currentChunk.trim()) {
          chunks.push(currentChunk.trim());
          currentChunk = '';
        }

        // Split long sentence by words
        const words = sentence.split(/\s+/);
        for (const word of words) {
          if ((currentChunk + ' ' + word).length > maxChars && currentChunk.length > 0) {
            chunks.push(currentChunk.trim());
            currentChunk = word;
          } else {
            currentChunk += (currentChunk ? ' ' : '') + word;
          }
        }
      } else {
        // Normal sentence handling
        if ((currentChunk + sentence).length > maxChars && currentChunk.length > 0) {
          chunks.push(currentChunk.trim());
          currentChunk = sentence;
        } else {
          currentChunk += (currentChunk ? ' ' : '') + sentence;
        }
      }
    }

    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }

    return chunks;
  }
}
