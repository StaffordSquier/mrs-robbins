/**
 * Supabase Client Configuration
 *
 * Provides configured Supabase clients for browser and server contexts.
 * Includes TypeScript types for database tables.
 *
 * NOTE: This module gracefully handles missing environment variables
 * to allow builds to complete without Supabase configured.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// =============================================================================
// ENVIRONMENT CONFIGURATION
// =============================================================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Check if Supabase is configured
 */
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Log warning at build time if not configured (but don't throw)
if (!isSupabaseConfigured && typeof window === 'undefined') {
  console.warn(
    '⚠️  Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable database features.'
  );
}

// =============================================================================
// DATABASE TYPES
// =============================================================================

/**
 * Database schema types for TypeScript support
 */
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          subscription_tier: string;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          subscription_tier?: string;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          subscription_tier?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          endpoint_type: string | null;
          uber_blob: string | null;
          uber_blob_created_at: string | null;
          uber_blob_updated_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          endpoint_type?: string | null;
          uber_blob?: string | null;
          uber_blob_created_at?: string | null;
          uber_blob_updated_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          endpoint_type?: string | null;
          uber_blob?: string | null;
          uber_blob_created_at?: string | null;
          uber_blob_updated_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      thought_blobs: {
        Row: {
          id: string;
          project_id: string;
          user_id: string;
          content: string;
          content_type: string;
          word_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          user_id: string;
          content: string;
          content_type: string;
          word_count?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          user_id?: string;
          content?: string;
          content_type?: string;
          word_count?: number;
          created_at?: string;
        };
      };
      embeddings: {
        Row: {
          id: string;
          content_id: string;
          chunk_id: string | null;
          chunk_text: string;
          embedding: number[];
          start_position: number | null;
          end_position: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          content_id: string;
          chunk_id?: string | null;
          chunk_text: string;
          embedding: number[];
          start_position?: number | null;
          end_position?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          content_id?: string;
          chunk_id?: string | null;
          chunk_text?: string;
          embedding?: number[];
          start_position?: number | null;
          end_position?: number | null;
          created_at?: string;
        };
      };
      voice_avatars: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          config: Record<string, unknown>;
          is_default: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          config: Record<string, unknown>;
          is_default?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          config?: Record<string, unknown>;
          is_default?: boolean;
          created_at?: string;
        };
      };
      conversations: {
        Row: {
          id: string;
          project_id: string;
          user_id: string;
          messages: Array<{ role: string; content: string; timestamp: string }>;
          uncommitted_draft: string | null;
          uncommitted_target_section: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          user_id: string;
          messages?: Array<{ role: string; content: string; timestamp: string }>;
          uncommitted_draft?: string | null;
          uncommitted_target_section?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          user_id?: string;
          messages?: Array<{ role: string; content: string; timestamp: string }>;
          uncommitted_draft?: string | null;
          uncommitted_target_section?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      documents: {
        Row: {
          id: string;
          project_id: string;
          user_id: string;
          title: string;
          content: string;
          version: number;
          endpoint_type: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          user_id: string;
          title: string;
          content: string;
          version?: number;
          endpoint_type?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          user_id?: string;
          title?: string;
          content?: string;
          version?: number;
          endpoint_type?: string | null;
          created_at?: string;
        };
      };
      document_sections: {
        Row: {
          id: string;
          project_id: string;
          section_name: string;
          meta_blob: string | null;
          section_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          section_name: string;
          meta_blob?: string | null;
          section_order: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          section_name?: string;
          meta_blob?: string | null;
          section_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      content_metadata: {
        Row: {
          id: string;
          content_id: string;
          primary_categories: string[];
          secondary_tags: string[];
          controlled_vocabulary: string[];
          extracted_entities: Record<string, unknown>;
          created_at: string;
        };
        Insert: {
          id?: string;
          content_id: string;
          primary_categories?: string[];
          secondary_tags?: string[];
          controlled_vocabulary?: string[];
          extracted_entities?: Record<string, unknown>;
          created_at?: string;
        };
        Update: {
          id?: string;
          content_id?: string;
          primary_categories?: string[];
          secondary_tags?: string[];
          controlled_vocabulary?: string[];
          extracted_entities?: Record<string, unknown>;
          created_at?: string;
        };
      };
      controlled_vocabulary: {
        Row: {
          id: string;
          term: string;
          parent_id: string | null;
          synonyms: string[];
          related_terms: string[];
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          term: string;
          parent_id?: string | null;
          synonyms?: string[];
          related_terms?: string[];
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          term?: string;
          parent_id?: string | null;
          synonyms?: string[];
          related_terms?: string[];
          description?: string | null;
          created_at?: string;
        };
      };
      discovery_history: {
        Row: {
          id: string;
          user_id: string;
          source_content_id: string;
          discovered_content_id: string;
          similarity_score: number;
          connection_type: string;
          was_helpful: boolean | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          source_content_id: string;
          discovered_content_id: string;
          similarity_score: number;
          connection_type: string;
          was_helpful?: boolean | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          source_content_id?: string;
          discovered_content_id?: string;
          similarity_score?: number;
          connection_type?: string;
          was_helpful?: boolean | null;
          created_at?: string;
        };
      };
      voice_recordings: {
        Row: {
          id: string;
          user_id: string;
          project_id: string;
          audio_url: string;
          transcript: string;
          duration_seconds: number;
          transcription_method: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          project_id: string;
          audio_url: string;
          transcript: string;
          duration_seconds: number;
          transcription_method: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          project_id?: string;
          audio_url?: string;
          transcript?: string;
          duration_seconds?: number;
          transcription_method?: string;
          created_at?: string;
        };
      };
    };
  };
}

// =============================================================================
// CLIENT EXPORTS
// =============================================================================

/**
 * Supabase client for browser/client-side usage
 * Uses anon key - respects Row Level Security
 * Returns null if Supabase is not configured
 */
export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl!, supabaseAnonKey!)
  : null;

/**
 * Get the Supabase client, throwing if not configured
 * Use this when Supabase is required for an operation
 */
export function getSupabaseClient(): SupabaseClient<Database> {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
    );
  }
  return supabase;
}

/**
 * Create a Supabase client with service role key for server-side operations
 * Bypasses Row Level Security - use only in secure server contexts
 */
export function createServiceClient(): SupabaseClient<Database> {
  if (!isSupabaseConfigured) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
    );
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');
  }

  return createClient<Database>(supabaseUrl!, serviceKey);
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get current authenticated user
 * Returns null if Supabase is not configured
 */
export async function getCurrentUser() {
  if (!supabase) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

/**
 * Check if user is authenticated
 * Returns false if Supabase is not configured
 */
export async function isAuthenticated(): Promise<boolean> {
  if (!supabase) return false;

  const {
    data: { session },
  } = await supabase.auth.getSession();
  return !!session;
}

/**
 * Get user's projects
 * Throws if Supabase is not configured
 */
export async function getUserProjects(userId: string) {
  const client = getSupabaseClient();

  const { data, error } = await client
    .from('projects')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Get user's voice avatars
 * Throws if Supabase is not configured
 */
export async function getUserVoiceAvatars(userId: string) {
  const client = getSupabaseClient();

  const { data, error } = await client
    .from('voice_avatars')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Get default voice avatar for user
 * Throws if Supabase is not configured
 */
export async function getDefaultVoiceAvatar(userId: string) {
  const client = getSupabaseClient();

  const { data, error } = await client
    .from('voice_avatars')
    .select('*')
    .eq('user_id', userId)
    .eq('is_default', true)
    .single();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows returned
  return data;
}
