-- Mrs. Robbins Initial Database Schema
-- Migration: 001_initial_schema
-- Tech Spec Reference: Section 3 - Storage Layer Architecture, CARD A7
--
-- This migration creates the core database schema for Mrs. Robbins MVP
-- including all tables, indexes, and Row Level Security policies.

-- =============================================================================
-- EXTENSIONS
-- =============================================================================

-- Enable pgvector for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================================
-- CORE TABLES
-- =============================================================================

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscription_tier VARCHAR(50) DEFAULT 'free',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  endpoint_type VARCHAR(50), -- 'writer', 'entrepreneur', 'consultant', 'researcher'
  uber_blob TEXT, -- Hierarchical Context System (CARD A12)
  uber_blob_created_at TIMESTAMPTZ,
  uber_blob_updated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Thought blobs (raw content capture)
CREATE TABLE IF NOT EXISTS thought_blobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  content_type VARCHAR(50) NOT NULL, -- 'voice', 'text', 'import', 'paste'
  word_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Vector embeddings for semantic search (CARD A5)
CREATE TABLE IF NOT EXISTS embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID NOT NULL REFERENCES thought_blobs(id) ON DELETE CASCADE,
  chunk_id VARCHAR(100),
  chunk_text TEXT NOT NULL,
  embedding vector(1536) NOT NULL, -- OpenAI text-embedding-ada-002
  start_position INTEGER,
  end_position INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Voice avatars (CARD A6)
CREATE TABLE IF NOT EXISTS voice_avatars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  config JSONB NOT NULL, -- Parametric settings + exemplar texts
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Conversations (dialectical sessions)
CREATE TABLE IF NOT EXISTS conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  messages JSONB DEFAULT '[]'::jsonb, -- Array of {role, content, timestamp}
  uncommitted_draft TEXT,
  uncommitted_target_section VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents (final outputs)
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  version INTEGER DEFAULT 1,
  endpoint_type VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Document sections (Hierarchical Context - CARD A12)
CREATE TABLE IF NOT EXISTS document_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  section_name VARCHAR(255) NOT NULL,
  meta_blob TEXT,
  section_order INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(project_id, section_name)
);

-- Document lines (for fine-grained context)
CREATE TABLE IF NOT EXISTS document_lines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_id UUID NOT NULL REFERENCES document_sections(id) ON DELETE CASCADE,
  line_text TEXT NOT NULL,
  line_blob TEXT,
  line_order INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Content metadata (cataloging results - CARD A2)
CREATE TABLE IF NOT EXISTS content_metadata (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID NOT NULL REFERENCES thought_blobs(id) ON DELETE CASCADE,
  primary_categories VARCHAR(100)[] DEFAULT '{}',
  secondary_tags VARCHAR(100)[] DEFAULT '{}',
  controlled_vocabulary VARCHAR(100)[] DEFAULT '{}',
  extracted_entities JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Controlled vocabulary (taxonomy)
CREATE TABLE IF NOT EXISTS controlled_vocabulary (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  term VARCHAR(100) UNIQUE NOT NULL,
  parent_id UUID REFERENCES controlled_vocabulary(id),
  synonyms VARCHAR(100)[] DEFAULT '{}',
  related_terms VARCHAR(100)[] DEFAULT '{}',
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Discovery history (Serendipity Engine - CARD A3)
CREATE TABLE IF NOT EXISTS discovery_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  source_content_id UUID NOT NULL REFERENCES thought_blobs(id) ON DELETE CASCADE,
  discovered_content_id UUID NOT NULL REFERENCES thought_blobs(id) ON DELETE CASCADE,
  similarity_score DECIMAL(5,4) NOT NULL,
  connection_type VARCHAR(50) NOT NULL, -- 'metaphorical', 'analogical', 'contradictory', etc.
  was_helpful BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Voice recordings (CARD B3)
CREATE TABLE IF NOT EXISTS voice_recordings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  audio_url TEXT NOT NULL,
  transcript TEXT NOT NULL,
  duration_seconds INTEGER NOT NULL,
  transcription_method VARCHAR(50) NOT NULL, -- 'web_speech_api', 'whisper'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Document versions (Version Control - CARD C1)
CREATE TABLE IF NOT EXISTS document_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  version INTEGER NOT NULL,
  content TEXT NOT NULL,
  changed_section VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Filter results (Content Filter System - CARD A9)
CREATE TABLE IF NOT EXISTS filter_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  filter_id VARCHAR(100) NOT NULL,
  findings JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- INDEXES
-- =============================================================================

-- Projects
CREATE INDEX idx_projects_user ON projects(user_id);
CREATE INDEX idx_projects_updated ON projects(updated_at DESC);

-- Thought blobs
CREATE INDEX idx_blobs_project ON thought_blobs(project_id);
CREATE INDEX idx_blobs_user ON thought_blobs(user_id);
CREATE INDEX idx_blobs_created ON thought_blobs(created_at DESC);

-- Vector embeddings - IVFFlat index for similarity search
CREATE INDEX idx_embeddings_vector ON embeddings
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

CREATE INDEX idx_embeddings_content ON embeddings(content_id);

-- Voice avatars
CREATE INDEX idx_avatars_user ON voice_avatars(user_id);
CREATE INDEX idx_avatars_default ON voice_avatars(user_id, is_default) WHERE is_default = true;

-- Conversations
CREATE INDEX idx_conversations_project ON conversations(project_id);
CREATE INDEX idx_conversations_user ON conversations(user_id);
CREATE INDEX idx_conversations_updated ON conversations(updated_at DESC);

-- Documents
CREATE INDEX idx_documents_project ON documents(project_id);
CREATE INDEX idx_documents_user ON documents(user_id);

-- Document sections
CREATE INDEX idx_sections_project ON document_sections(project_id);
CREATE INDEX idx_sections_order ON document_sections(project_id, section_order);

-- Content metadata
CREATE INDEX idx_metadata_content ON content_metadata(content_id);

-- Discovery history
CREATE INDEX idx_discovery_user ON discovery_history(user_id);
CREATE INDEX idx_discovery_source ON discovery_history(source_content_id);

-- Voice recordings
CREATE INDEX idx_recordings_project ON voice_recordings(project_id);
CREATE INDEX idx_recordings_user ON voice_recordings(user_id);

-- Document versions
CREATE INDEX idx_versions_document ON document_versions(document_id, version);

-- =============================================================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================================================

-- Enable RLS on all user-specific tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE thought_blobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE embeddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE voice_avatars ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_lines ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE discovery_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE voice_recordings ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE filter_results ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile"
ON users FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON users FOR UPDATE
USING (auth.uid() = id);

-- Projects policies
CREATE POLICY "Users can view own projects"
ON projects FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own projects"
ON projects FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects"
ON projects FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own projects"
ON projects FOR DELETE
USING (auth.uid() = user_id);

-- Thought blobs policies
CREATE POLICY "Users can view own blobs"
ON thought_blobs FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own blobs"
ON thought_blobs FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own blobs"
ON thought_blobs FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own blobs"
ON thought_blobs FOR DELETE
USING (auth.uid() = user_id);

-- Embeddings policies (via content ownership)
CREATE POLICY "Users can view own embeddings"
ON embeddings FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM thought_blobs
    WHERE thought_blobs.id = embeddings.content_id
    AND thought_blobs.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own embeddings"
ON embeddings FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM thought_blobs
    WHERE thought_blobs.id = embeddings.content_id
    AND thought_blobs.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete own embeddings"
ON embeddings FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM thought_blobs
    WHERE thought_blobs.id = embeddings.content_id
    AND thought_blobs.user_id = auth.uid()
  )
);

-- Voice avatars policies
CREATE POLICY "Users can view own avatars"
ON voice_avatars FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own avatars"
ON voice_avatars FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own avatars"
ON voice_avatars FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own avatars"
ON voice_avatars FOR DELETE
USING (auth.uid() = user_id);

-- Conversations policies
CREATE POLICY "Users can view own conversations"
ON conversations FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own conversations"
ON conversations FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own conversations"
ON conversations FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own conversations"
ON conversations FOR DELETE
USING (auth.uid() = user_id);

-- Documents policies
CREATE POLICY "Users can view own documents"
ON documents FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own documents"
ON documents FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own documents"
ON documents FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own documents"
ON documents FOR DELETE
USING (auth.uid() = user_id);

-- Document sections policies (via project ownership)
CREATE POLICY "Users can view own sections"
ON document_sections FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM projects
    WHERE projects.id = document_sections.project_id
    AND projects.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own sections"
ON document_sections FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM projects
    WHERE projects.id = document_sections.project_id
    AND projects.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update own sections"
ON document_sections FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM projects
    WHERE projects.id = document_sections.project_id
    AND projects.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete own sections"
ON document_sections FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM projects
    WHERE projects.id = document_sections.project_id
    AND projects.user_id = auth.uid()
  )
);

-- Document lines policies (via section ownership)
CREATE POLICY "Users can view own lines"
ON document_lines FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM document_sections
    JOIN projects ON projects.id = document_sections.project_id
    WHERE document_sections.id = document_lines.section_id
    AND projects.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own lines"
ON document_lines FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM document_sections
    JOIN projects ON projects.id = document_sections.project_id
    WHERE document_sections.id = document_lines.section_id
    AND projects.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update own lines"
ON document_lines FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM document_sections
    JOIN projects ON projects.id = document_sections.project_id
    WHERE document_sections.id = document_lines.section_id
    AND projects.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete own lines"
ON document_lines FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM document_sections
    JOIN projects ON projects.id = document_sections.project_id
    WHERE document_sections.id = document_lines.section_id
    AND projects.user_id = auth.uid()
  )
);

-- Content metadata policies (via content ownership)
CREATE POLICY "Users can view own metadata"
ON content_metadata FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM thought_blobs
    WHERE thought_blobs.id = content_metadata.content_id
    AND thought_blobs.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own metadata"
ON content_metadata FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM thought_blobs
    WHERE thought_blobs.id = content_metadata.content_id
    AND thought_blobs.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update own metadata"
ON content_metadata FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM thought_blobs
    WHERE thought_blobs.id = content_metadata.content_id
    AND thought_blobs.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete own metadata"
ON content_metadata FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM thought_blobs
    WHERE thought_blobs.id = content_metadata.content_id
    AND thought_blobs.user_id = auth.uid()
  )
);

-- Discovery history policies
CREATE POLICY "Users can view own discoveries"
ON discovery_history FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own discoveries"
ON discovery_history FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own discoveries"
ON discovery_history FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own discoveries"
ON discovery_history FOR DELETE
USING (auth.uid() = user_id);

-- Voice recordings policies
CREATE POLICY "Users can view own recordings"
ON voice_recordings FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own recordings"
ON voice_recordings FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own recordings"
ON voice_recordings FOR DELETE
USING (auth.uid() = user_id);

-- Document versions policies (via document ownership)
CREATE POLICY "Users can view own versions"
ON document_versions FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM documents
    WHERE documents.id = document_versions.document_id
    AND documents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own versions"
ON document_versions FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM documents
    WHERE documents.id = document_versions.document_id
    AND documents.user_id = auth.uid()
  )
);

-- Filter results policies (via document ownership)
CREATE POLICY "Users can view own filter results"
ON filter_results FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM documents
    WHERE documents.id = filter_results.document_id
    AND documents.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert own filter results"
ON filter_results FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM documents
    WHERE documents.id = filter_results.document_id
    AND documents.user_id = auth.uid()
  )
);

-- Controlled vocabulary is public (read-only for regular users)
CREATE POLICY "Anyone can view vocabulary"
ON controlled_vocabulary FOR SELECT
USING (true);

-- =============================================================================
-- TRIGGERS
-- =============================================================================

-- Auto-update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER projects_updated_at
BEFORE UPDATE ON projects
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER conversations_updated_at
BEFORE UPDATE ON conversations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER document_sections_updated_at
BEFORE UPDATE ON document_sections
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER document_lines_updated_at
BEFORE UPDATE ON document_lines
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Auto-calculate word count for thought blobs
CREATE OR REPLACE FUNCTION calculate_word_count()
RETURNS TRIGGER AS $$
BEGIN
  NEW.word_count = array_length(regexp_split_to_array(trim(NEW.content), E'\\s+'), 1);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blobs_word_count
BEFORE INSERT OR UPDATE ON thought_blobs
FOR EACH ROW
EXECUTE FUNCTION calculate_word_count();

-- =============================================================================
-- INITIAL DATA
-- =============================================================================

-- Add some default controlled vocabulary terms
INSERT INTO controlled_vocabulary (term, description) VALUES
  ('idea', 'A new concept or thought'),
  ('question', 'An inquiry or point of uncertainty'),
  ('observation', 'A noted fact or occurrence'),
  ('plan', 'A proposed course of action'),
  ('reflection', 'Thoughtful consideration'),
  ('reference', 'External source or citation')
ON CONFLICT (term) DO NOTHING;
