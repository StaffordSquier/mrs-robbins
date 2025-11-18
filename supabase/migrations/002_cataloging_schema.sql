-- =============================================================================
-- CATALOGING & EMBEDDING SCHEMA
-- =============================================================================

-- Vocabulary containers (supports multiple vocabularies)
CREATE TABLE IF NOT EXISTS vocabulary_sets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Terms within vocabularies (hierarchical)
CREATE TABLE IF NOT EXISTS controlled_vocabulary (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  vocabulary_set_id UUID REFERENCES vocabulary_sets(id) ON DELETE CASCADE,
  term VARCHAR(100) NOT NULL,
  parent_id UUID REFERENCES controlled_vocabulary(id) ON DELETE SET NULL,
  synonyms TEXT[], -- array of alias terms
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_vocabulary_term ON controlled_vocabulary(term);
CREATE INDEX IF NOT EXISTS idx_vocabulary_parent ON controlled_vocabulary(parent_id);
CREATE INDEX IF NOT EXISTS idx_vocabulary_set ON controlled_vocabulary(vocabulary_set_id);

-- Content metadata (links blobs to vocabulary terms)
CREATE TABLE IF NOT EXISTS content_metadata (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID NOT NULL, -- references thought_blobs.id or voice_recordings.id
  content_type VARCHAR(50) NOT NULL, -- 'thought_blob', 'voice_recording', etc.
  vocabulary_term_id UUID REFERENCES controlled_vocabulary(id) ON DELETE CASCADE,
  confidence DECIMAL(3,2), -- 0.00 to 1.00
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(content_id, content_type, vocabulary_term_id) -- prevent duplicate tags
);

CREATE INDEX IF NOT EXISTS idx_metadata_content ON content_metadata(content_id);
CREATE INDEX IF NOT EXISTS idx_metadata_term ON content_metadata(vocabulary_term_id);
CREATE INDEX IF NOT EXISTS idx_metadata_type ON content_metadata(content_type);

-- Embeddings (for semantic search)
-- Note: pgvector extension must be enabled first
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  embedding vector(1536), -- OpenAI ada-002/text-embedding-3-small dimensions
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(content_id, content_type) -- one embedding per content item
);

CREATE INDEX IF NOT EXISTS idx_embeddings_content ON embeddings(content_id);
CREATE INDEX IF NOT EXISTS idx_embeddings_vector ON embeddings USING ivfflat (embedding vector_cosine_ops);

-- Enable RLS on cataloging tables
ALTER TABLE vocabulary_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE controlled_vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE embeddings ENABLE ROW LEVEL SECURITY;

-- RLS policies for vocabulary sets (read-only for all, admin can modify)
CREATE POLICY "Anyone can view vocabulary sets"
  ON vocabulary_sets FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view controlled vocabulary"
  ON controlled_vocabulary FOR SELECT
  USING (true);

-- RLS policies for content metadata (users can only see their own content's metadata)
CREATE POLICY "Users can view their own content metadata"
  ON content_metadata FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM thought_blobs tb
      WHERE tb.id = content_metadata.content_id
        AND tb.user_id = auth.uid()
    )
    OR
    EXISTS (
      SELECT 1 FROM voice_recordings vr
      WHERE vr.id = content_metadata.content_id
        AND vr.user_id = auth.uid()
    )
  );

-- RLS policies for embeddings (users can only see their own content's embeddings)
CREATE POLICY "Users can view their own embeddings"
  ON embeddings FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM thought_blobs tb
      WHERE tb.id = embeddings.content_id
        AND tb.user_id = auth.uid()
    )
    OR
    EXISTS (
      SELECT 1 FROM voice_recordings vr
      WHERE vr.id = embeddings.content_id
        AND vr.user_id = auth.uid()
    )
  );
