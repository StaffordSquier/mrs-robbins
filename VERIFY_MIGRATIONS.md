# Database Migration Verification Guide

## Quick Verification Checklist

Run these SQL queries in **Supabase SQL Editor** to verify your migrations:

---

## 1. Check All Required Tables Exist

```sql
-- List all tables that should exist
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE'
ORDER BY table_name;
```

**Expected Tables (from migrations 001 & 002):**
```
✓ users
✓ projects
✓ thought_blobs
✓ voice_recordings
✓ voice_avatars
✓ conversations
✓ documents
✓ document_sections
✓ document_lines
✓ document_versions
✓ discovery_history
✓ filter_results
✓ vocabulary_sets          ← Migration 002
✓ controlled_vocabulary    ← Migration 002
✓ content_metadata         ← Migration 002
✓ embeddings               ← Migration 002
```

---

## 2. Verify Cataloging Tables Structure

### Check `vocabulary_sets` table:
```sql
SELECT
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'vocabulary_sets'
ORDER BY ordinal_position;
```

**Expected Columns:**
- `id` (uuid, NOT NULL)
- `name` (character varying, NOT NULL)
- `description` (text, YES)
- `created_at` (timestamp with time zone, YES)

---

### Check `controlled_vocabulary` table:
```sql
SELECT
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'controlled_vocabulary'
ORDER BY ordinal_position;
```

**Expected Columns:**
- `id` (uuid, NOT NULL)
- `vocabulary_set_id` (uuid, YES)
- `term` (character varying, NOT NULL)
- `parent_id` (uuid, YES)
- `synonyms` (ARRAY, YES)
- `description` (text, YES)
- `created_at` (timestamp with time zone, YES)

---

### Check `content_metadata` table:
```sql
SELECT
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'content_metadata'
ORDER BY ordinal_position;
```

**Expected Columns:**
- `id` (uuid, NOT NULL)
- `content_id` (uuid, NOT NULL)
- `content_type` (character varying, NOT NULL)
- `vocabulary_term_id` (uuid, YES)
- `confidence` (numeric, YES)
- `created_at` (timestamp with time zone, YES)

---

### Check `embeddings` table:
```sql
SELECT
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'embeddings'
ORDER BY ordinal_position;
```

**Expected Columns:**
- `id` (uuid, NOT NULL)
- `content_id` (uuid, NOT NULL)
- `content_type` (character varying, NOT NULL)
- `embedding` (USER-DEFINED/vector, YES)
- `created_at` (timestamp with time zone, YES)

---

## 3. Verify Vocabulary Seed Data (Migration 003)

### Check if vocabulary set exists:
```sql
SELECT * FROM vocabulary_sets;
```

**Expected Result:**
```
id: 00000000-0000-0000-0000-000000000001
name: Creative Writing
description: Comprehensive vocabulary for creative writing...
```

---

### Count vocabulary terms:
```sql
SELECT
  COUNT(*) as total_terms,
  COUNT(CASE WHEN parent_id IS NULL THEN 1 END) as root_terms,
  COUNT(CASE WHEN parent_id IS NOT NULL THEN 1 END) as child_terms
FROM controlled_vocabulary;
```

**Expected Result:**
```
total_terms: ~65 terms
root_terms: 5 (Themes, Emotions, Elements, Structure, Sensory)
child_terms: ~60
```

---

### List root categories:
```sql
SELECT id, term, description
FROM controlled_vocabulary
WHERE parent_id IS NULL
ORDER BY term;
```

**Expected Result:**
```
✓ Elements   - Literary devices and techniques
✓ Emotions   - Emotional content and tone
✓ Sensory    - Sensory details and imagery
✓ Structure  - Organizational patterns and forms
✓ Themes     - Central ideas and concepts in writing
```

---

### Sample vocabulary hierarchy (Themes):
```sql
-- Get Themes and their children
WITH RECURSIVE vocab_tree AS (
  -- Get root "Themes" category
  SELECT id, term, parent_id, 0 as level
  FROM controlled_vocabulary
  WHERE term = 'Themes' AND parent_id IS NULL

  UNION ALL

  -- Get children recursively
  SELECT cv.id, cv.term, cv.parent_id, vt.level + 1
  FROM controlled_vocabulary cv
  JOIN vocab_tree vt ON cv.parent_id = vt.id
)
SELECT
  REPEAT('  ', level) || term as hierarchy,
  level
FROM vocab_tree
ORDER BY level, term;
```

**Expected Output (sample):**
```
Themes
  Conflict
    External Conflict
    Internal Conflict
  Journey
    Emotional Journey
    Physical Journey
    Spiritual Journey
  Love
    Familial Love
    Platonic Love
    Romantic Love
    Self-Love
  Loss
    Abandonment
    Death
    Regret
    Separation
  ...
```

---

## 4. Verify Indexes

```sql
-- Check indexes on cataloging tables
SELECT
  tablename,
  indexname,
  indexdef
FROM pg_indexes
WHERE tablename IN ('vocabulary_sets', 'controlled_vocabulary', 'content_metadata', 'embeddings')
ORDER BY tablename, indexname;
```

**Expected Indexes:**
- `controlled_vocabulary`:
  - `idx_vocabulary_term` (on term)
  - `idx_vocabulary_parent` (on parent_id)
  - `idx_vocabulary_set` (on vocabulary_set_id)
  - `idx_vocab_creative_writing` (filtered index)

- `content_metadata`:
  - `idx_metadata_content` (on content_id)
  - `idx_metadata_term` (on vocabulary_term_id)
  - `idx_metadata_type` (on content_type)

- `embeddings`:
  - `idx_embeddings_content` (on content_id)
  - `idx_embeddings_vector` (ivfflat vector index)

---

## 5. Verify pgvector Extension

```sql
SELECT * FROM pg_extension WHERE extname = 'vector';
```

**Expected Result:**
```
extname: vector
extversion: 0.5.0 (or similar)
```

If empty, run:
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

---

## 6. Verify Row Level Security (RLS)

```sql
-- Check RLS is enabled on cataloging tables
SELECT
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables
WHERE tablename IN ('vocabulary_sets', 'controlled_vocabulary', 'content_metadata', 'embeddings')
ORDER BY tablename;
```

**Expected Result:**
All tables should have `rowsecurity = true`

---

### Check RLS Policies:
```sql
-- List all policies on cataloging tables
SELECT
  schemaname,
  tablename,
  policyname,
  cmd as command,
  qual as using_expression
FROM pg_policies
WHERE tablename IN ('vocabulary_sets', 'controlled_vocabulary', 'content_metadata', 'embeddings')
ORDER BY tablename, policyname;
```

**Expected Policies:**
- `vocabulary_sets`: "Anyone can view vocabulary sets" (SELECT)
- `controlled_vocabulary`: "Anyone can view controlled vocabulary" (SELECT)
- `content_metadata`: "Users can view their own content metadata" (SELECT)
- `embeddings`: "Users can view their own embeddings" (SELECT)

---

## 7. Verify Foreign Key Constraints

```sql
-- Check foreign keys on cataloging tables
SELECT
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name,
  rc.delete_rule
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
JOIN information_schema.referential_constraints AS rc
  ON tc.constraint_name = rc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
  AND tc.table_name IN ('controlled_vocabulary', 'content_metadata', 'embeddings')
ORDER BY tc.table_name, kcu.column_name;
```

**Expected Constraints:**
- `controlled_vocabulary.vocabulary_set_id` → `vocabulary_sets.id` (CASCADE)
- `controlled_vocabulary.parent_id` → `controlled_vocabulary.id` (SET NULL)
- `content_metadata.vocabulary_term_id` → `controlled_vocabulary.id` (CASCADE)

---

## 8. Quick Health Check (All-in-One)

Run this single query to verify everything:

```sql
-- Comprehensive migration verification
SELECT
  'Tables' as check_type,
  CASE
    WHEN COUNT(*) >= 16 THEN '✅ PASS'
    ELSE '❌ FAIL'
  END as status,
  COUNT(*)::text || ' tables found' as details
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE'

UNION ALL

SELECT
  'Vocabulary Set',
  CASE
    WHEN COUNT(*) > 0 THEN '✅ PASS'
    ELSE '❌ FAIL'
  END,
  COUNT(*)::text || ' vocabulary sets' as details
FROM vocabulary_sets

UNION ALL

SELECT
  'Vocabulary Terms',
  CASE
    WHEN COUNT(*) >= 60 THEN '✅ PASS'
    ELSE '❌ FAIL'
  END,
  COUNT(*)::text || ' terms loaded'
FROM controlled_vocabulary

UNION ALL

SELECT
  'pgvector Extension',
  CASE
    WHEN COUNT(*) > 0 THEN '✅ PASS'
    ELSE '❌ FAIL'
  END,
  'vector extension installed'
FROM pg_extension
WHERE extname = 'vector'

UNION ALL

SELECT
  'RLS Enabled',
  CASE
    WHEN COUNT(*) = 4 THEN '✅ PASS'
    ELSE '❌ FAIL'
  END,
  COUNT(*)::text || ' of 4 tables secured'
FROM pg_tables
WHERE tablename IN ('vocabulary_sets', 'controlled_vocabulary', 'content_metadata', 'embeddings')
  AND rowsecurity = true;
```

---

## 9. Test Auto-Tagging (After Recording a Voice Memo)

After recording and transcribing a voice memo, check if auto-tagging worked:

```sql
-- Find recent thought blobs with their tags
SELECT
  tb.id,
  tb.content::text as content_preview,
  tb.created_at,
  COUNT(cm.id) as tag_count
FROM thought_blobs tb
LEFT JOIN content_metadata cm ON cm.content_id = tb.id
WHERE tb.created_at > NOW() - INTERVAL '1 hour'
GROUP BY tb.id, tb.content, tb.created_at
ORDER BY tb.created_at DESC
LIMIT 5;
```

---

### View tags for a specific thought blob:
```sql
-- Replace 'YOUR_BLOB_ID' with actual ID from above query
SELECT
  cv.term,
  cm.confidence,
  cm.created_at
FROM content_metadata cm
JOIN controlled_vocabulary cv ON cv.id = cm.vocabulary_term_id
WHERE cm.content_id = 'YOUR_BLOB_ID'
ORDER BY cm.confidence DESC;
```

---

### Check if embeddings were generated:
```sql
-- Check recent embeddings
SELECT
  content_id,
  content_type,
  created_at,
  CASE
    WHEN embedding IS NOT NULL THEN '✅ Vector generated'
    ELSE '❌ No vector'
  END as embedding_status
FROM embeddings
WHERE created_at > NOW() - INTERVAL '1 hour'
ORDER BY created_at DESC
LIMIT 5;
```

---

## Troubleshooting

### If tables are missing:
Run migrations in Supabase SQL Editor:
1. Copy contents of `supabase/migrations/001_initial_schema.sql`
2. Run in SQL Editor
3. Copy contents of `supabase/migrations/002_cataloging_schema.sql`
4. Run in SQL Editor
5. Copy contents of `supabase/migrations/003_creative_writing_vocabulary.sql`
6. Run in SQL Editor

### If vocabulary is empty:
Re-run migration 003:
```sql
-- Clear existing data first
TRUNCATE controlled_vocabulary CASCADE;
TRUNCATE vocabulary_sets CASCADE;

-- Then run 003_creative_writing_vocabulary.sql
```

### If pgvector is missing:
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

---

## Expected Final State

After successful migrations, you should have:

✅ **16+ tables** including cataloging tables
✅ **1 vocabulary set** (Creative Writing)
✅ **~65 vocabulary terms** in hierarchical structure
✅ **pgvector extension** enabled
✅ **RLS policies** protecting user data
✅ **Indexes** for performance
✅ **Foreign keys** maintaining referential integrity

Once verified, your auto-tagging pipeline is ready to use!
