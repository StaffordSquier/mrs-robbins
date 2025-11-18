import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { createServiceClient } from '../supabase';

export interface CatalogResult {
  contentId: string;
  terms: Array<{
    termId: string;
    term: string;
    confidence: number;
  }>;
  embeddingGenerated: boolean;
}

export interface VocabularyMatch {
  termId: string;
  term: string;
  confidence: number;
  matchType: 'exact' | 'synonym' | 'parent';
}

export interface ContentMatch {
  contentId: string;
  contentType: string;
  content: string;
  similarity: number;
}

/**
 * Cataloging Service
 * Handles auto-categorization, embedding generation, and semantic search
 */
export class CatalogingService {
  private anthropic: Anthropic;
  private openai: OpenAI;

  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  /**
   * Auto-categorize content using Claude and map to controlled vocabulary
   */
  async categorize(
    contentId: string,
    content: string,
    contentType: 'thought_blob' | 'voice_recording' = 'thought_blob',
    vocabularySetId?: string
  ): Promise<CatalogResult> {
    try {
      // Step 1: Extract key concepts using Claude
      const concepts = await this.extractConcepts(content);

      // Step 2: Map concepts to vocabulary terms
      const matches = await this.mapToVocabulary(concepts, vocabularySetId);

      // Step 3: Store metadata in database
      await this.storeMetadata(contentId, contentType, matches);

      // Step 4: Generate and store embedding
      const embeddingGenerated = await this.generateEmbedding(contentId, content, contentType);

      return {
        contentId,
        terms: matches.map(m => ({
          termId: m.termId,
          term: m.term,
          confidence: m.confidence,
        })),
        embeddingGenerated,
      };
    } catch (error) {
      console.error('Categorization error:', error);
      throw error;
    }
  }

  /**
   * Extract 3-5 key concepts from content using Claude
   */
  private async extractConcepts(content: string): Promise<string[]> {
    const message = await this.anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: `Analyze this creative writing content and extract 3-5 key concepts, themes, or topics.

Return only the concepts as a JSON array of strings, nothing else.

Content:
${content}

Example output: ["love", "loss", "journey", "hope"]`,
        },
      ],
    });

    const responseText = message.content[0].type === 'text' ? message.content[0].text : '[]';

    try {
      const concepts = JSON.parse(responseText);
      return Array.isArray(concepts) ? concepts : [];
    } catch {
      // Fallback: try to extract concepts from text
      const matches = responseText.match(/"([^"]+)"/g);
      return matches ? matches.map(m => m.replace(/"/g, '')) : [];
    }
  }

  /**
   * Map extracted concepts to controlled vocabulary terms
   */
  async mapToVocabulary(
    concepts: string[],
    vocabularySetId?: string
  ): Promise<VocabularyMatch[]> {
    const supabase = createServiceClient();
    const matches: VocabularyMatch[] = [];

    // Build query for vocabulary terms
    let query = supabase
      .from('controlled_vocabulary')
      .select('id, term, synonyms, parent_id');

    if (vocabularySetId) {
      query = query.eq('vocabulary_set_id', vocabularySetId);
    }

    const { data: terms } = await query;

    if (!terms) return matches;

    // Type assertion for vocabulary terms
    const typedTerms = terms as Array<{
      id: string;
      term: string;
      synonyms: string[] | null;
      parent_id: string | null;
    }>;

    // Match concepts to vocabulary terms
    for (const concept of concepts) {
      const conceptLower = concept.toLowerCase();

      // Try exact match
      const exactMatch = typedTerms.find(t => t.term.toLowerCase() === conceptLower);
      if (exactMatch) {
        matches.push({
          termId: exactMatch.id,
          term: exactMatch.term,
          confidence: 0.95,
          matchType: 'exact',
        });
        continue;
      }

      // Try synonym match
      const synonymMatch = typedTerms.find(t =>
        t.synonyms?.some((s: string) => s.toLowerCase() === conceptLower)
      );
      if (synonymMatch) {
        matches.push({
          termId: synonymMatch.id,
          term: synonymMatch.term,
          confidence: 0.85,
          matchType: 'synonym',
        });
        continue;
      }

      // Try partial match
      const partialMatch = typedTerms.find(t =>
        t.term.toLowerCase().includes(conceptLower) ||
        conceptLower.includes(t.term.toLowerCase())
      );
      if (partialMatch) {
        matches.push({
          termId: partialMatch.id,
          term: partialMatch.term,
          confidence: 0.70,
          matchType: 'parent',
        });
      }
    }

    return matches;
  }

  /**
   * Store content metadata (tags) in database
   */
  private async storeMetadata(
    contentId: string,
    contentType: string,
    matches: VocabularyMatch[]
  ): Promise<void> {
    const supabase = createServiceClient();

    const metadata = matches.map(match => ({
      content_id: contentId,
      content_type: contentType,
      vocabulary_term_id: match.termId,
      confidence: match.confidence,
    }));

    if (metadata.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await (supabase as any)
        .from('content_metadata')
        .insert(metadata);

      if (error) {
        console.error('Error storing metadata:', error);
        throw error;
      }
    }
  }

  /**
   * Generate embedding using OpenAI and store in database
   */
  async generateEmbedding(
    contentId: string,
    content: string,
    contentType: string
  ): Promise<boolean> {
    try {
      const supabase = createServiceClient();

      // Generate embedding
      const response = await this.openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: content,
      });

      const embedding = response.data[0].embedding;

      // Store in database
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await (supabase as any)
        .from('embeddings')
        .upsert({
          content_id: contentId,
          content_type: contentType,
          embedding: JSON.stringify(embedding), // pgvector handles array conversion
        });

      if (error) {
        console.error('Error storing embedding:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error generating embedding:', error);
      return false;
    }
  }

  /**
   * Semantic search using vector similarity
   */
  async searchSimilar(
    query: string,
    limit: number = 10,
    contentType?: string
  ): Promise<ContentMatch[]> {
    try {
      const supabase = createServiceClient();

      // Generate query embedding
      const response = await this.openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: query,
      });

      const queryEmbedding = response.data[0].embedding;

      // Search for similar embeddings
      // Note: This requires pgvector extension and proper indexing
      let query_builder = supabase
        .from('embeddings')
        .select('content_id, content_type');

      if (contentType) {
        query_builder = query_builder.eq('content_type', contentType);
      }

      const { data: embeddings } = await query_builder.limit(limit);

      if (!embeddings) return [];

      // Type assertion for embeddings
      const typedEmbeddings = embeddings as Array<{
        content_id: string;
        content_type: string;
      }>;

      // Get content for matched embeddings
      const contentIds = typedEmbeddings.map(e => e.content_id);
      const { data: blobs } = await supabase
        .from('thought_blobs')
        .select('id, content')
        .in('id', contentIds);

      const typedBlobs = (blobs || []) as Array<{
        id: string;
        content: string;
      }>;

      return typedBlobs.map(blob => ({
        contentId: blob.id,
        contentType: 'thought_blob',
        content: blob.content,
        similarity: 0.8, // Placeholder - real similarity would come from vector comparison
      }));
    } catch (error) {
      console.error('Error searching similar content:', error);
      return [];
    }
  }

  /**
   * Filter content by vocabulary terms
   */
  async filterByTerms(termIds: string[]): Promise<string[]> {
    const supabase = createServiceClient();

    // Expand hierarchy to include child terms
    const expandedTermIds = await this.expandHierarchy(termIds);

    // Get content IDs that match any of the terms
    const { data: metadata } = await supabase
      .from('content_metadata')
      .select('content_id')
      .in('vocabulary_term_id', expandedTermIds);

    if (!metadata) return [];

    // Type assertion for metadata
    const typedMetadata = metadata as Array<{ content_id: string }>;

    // Return unique content IDs
    return [...new Set(typedMetadata.map(m => m.content_id))];
  }

  /**
   * Expand term hierarchy to include all descendant terms
   */
  async expandHierarchy(termIds: string[]): Promise<string[]> {
    const supabase = createServiceClient();
    const allTermIds = new Set(termIds);

    // Recursively find all children
    const findChildren = async (parentIds: string[]): Promise<void> => {
      const { data: children } = await supabase
        .from('controlled_vocabulary')
        .select('id')
        .in('parent_id', parentIds);

      if (children && children.length > 0) {
        // Type assertion for children
        const typedChildren = children as Array<{ id: string }>;
        const childIds = typedChildren.map(c => c.id);
        childIds.forEach(id => allTermIds.add(id));
        await findChildren(childIds);
      }
    };

    await findChildren(termIds);
    return Array.from(allTermIds);
  }
}

// Export singleton instance
export const catalogingService = new CatalogingService();
