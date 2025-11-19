-- =============================================================================
-- ERROR LOGGING TABLE
-- =============================================================================
-- Table to track errors in production (especially cataloging failures)

CREATE TABLE IF NOT EXISTS error_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Error classification
  error_type VARCHAR(100) NOT NULL, -- 'cataloging', 'embedding', 'api', etc.
  severity VARCHAR(20) NOT NULL DEFAULT 'error', -- 'info', 'warning', 'error', 'critical'

  -- Context
  content_id UUID NULL,
  content_type VARCHAR(50) NULL,
  operation VARCHAR(100) NULL, -- 'extractConcepts', 'mapToVocabulary', etc.

  -- Error details
  error_message TEXT NOT NULL,
  error_stack TEXT NULL,
  error_data JSONB NULL, -- Additional context

  -- Metadata
  user_agent TEXT NULL,
  environment VARCHAR(50) DEFAULT 'production'
);

-- Indexes for querying
CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON error_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_error_logs_type ON error_logs(error_type);
CREATE INDEX IF NOT EXISTS idx_error_logs_content_id ON error_logs(content_id);
CREATE INDEX IF NOT EXISTS idx_error_logs_severity ON error_logs(severity);

-- RLS policies (allow service role to insert/read)
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role full access to error_logs"
  ON error_logs
  FOR ALL
  USING (true)
  WITH CHECK (true);
