# Debugging Cataloging in Production

The cataloging system is currently failing silently in production. This guide will help you debug and fix the issue.

## Quick Summary

**Problem:** The `content_metadata` table is empty - auto-cataloging isn't being triggered when voice memos are saved.

**Solution:** We've added comprehensive error logging to track exactly where cataloging fails.

## Step 1: Run the Database Migration

The error logging table needs to be created in your Supabase database.

### Option A: Supabase Dashboard (Recommended)

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/lugkwarvllyhpzqklisv
2. Navigate to **SQL Editor**
3. Create a new query
4. Copy and paste the contents of `supabase/migrations/004_error_logging.sql`
5. Click **Run** to execute the migration
6. Verify the table was created:
   ```sql
   SELECT * FROM error_logs LIMIT 1;
   ```

### Option B: Command Line (if psql is installed)

```bash
./run-migration-004.sh
```

## Step 2: Deploy to Vercel

After running the migration, deploy your latest code to Vercel:

```bash
git add .
git commit -m "Add production error logging for cataloging"
git push
```

Vercel will automatically deploy the changes.

## Step 3: Test and Monitor Errors

### Method 1: Error Logs Page (Easiest)

1. Go to: **https://your-app.vercel.app/error-logs**
2. Record a voice memo
3. Refresh the error logs page
4. You'll see detailed error information including:
   - Which step failed (extractConcepts, mapToVocabulary, storeMetadata, generateEmbedding)
   - Error message and stack trace
   - Context data (content preview, concepts extracted, etc.)

### Method 2: Vercel Function Logs

1. Go to your Vercel dashboard: https://vercel.com/your-username/mrs-robbins
2. Click on the **Logs** tab
3. Filter by **Functions**
4. Record a voice memo
5. Look for logs with 🔷 (info) and ❌ (error) emojis:
   ```
   🔷 [INIT_EVENTS] Initializing event listeners...
   🔷 [TRANSCRIBE] Created thought_blob with ID: abc-123
   🔷 [EVENT_BUS] Emitting event: content:created, handlers registered: 3
   ❌ [CATALOGING] Error auto-cataloging content abc-123: ...
   ```

### Method 3: Vercel CLI (Real-time)

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# View logs in real-time
vercel logs --follow
```

Then record a voice memo and watch the logs stream in real-time.

## Step 4: Analyze the Error

Common issues and solutions:

### Error: "ANTHROPIC_API_KEY is not configured"

**Solution:** Add the API key in Vercel:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add `ANTHROPIC_API_KEY` with your key
3. Redeploy

### Error: "No vocabulary matches found"

**Problem:** Migration 003 (vocabulary) didn't run.

**Solution:**
1. Run `supabase/migrations/003_creative_writing_vocabulary.sql` via Supabase SQL Editor
2. Verify: `SELECT COUNT(*) FROM controlled_vocabulary;` should return ~80 terms

### Error: Database connection issues

**Problem:** Environment variables not set correctly.

**Solution:**
1. Verify in Vercel Dashboard → Settings → Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Error: "Event handlers not registered"

**Problem:** Event initialization failed.

**Check:**
- Look for `🔷 [INIT_EVENTS] Initializing event listeners...` in logs
- If missing, the import in `app/api/voice/transcribe/route.ts:5` might not be loading

## Step 5: Fix and Verify

Once you identify the error:

1. Fix the issue
2. Deploy: `git push`
3. Record a test voice memo
4. Check `/error-logs` page - should show successful cataloging
5. Verify data was created:
   ```sql
   SELECT * FROM content_metadata ORDER BY created_at DESC LIMIT 10;
   ```

## Logging Details

All cataloging operations now log to:

1. **Console** (visible in Vercel function logs)
   - 🔷 = Info/progress
   - ✅ = Success
   - ❌ = Error
   - ⚠️  = Warning

2. **Supabase error_logs table**
   - Persisted for later analysis
   - Includes full context and stack traces
   - Viewable at `/error-logs`

## Key Files Modified

- `lib/error-logger.ts` - Error logging utility
- `lib/init-events.ts` - Event handlers with error logging
- `lib/services/cataloging.ts` - Cataloging service with detailed logging
- `app/error-logs/page.tsx` - Error viewer UI
- `supabase/migrations/004_error_logging.sql` - Error logs table

## Expected Flow

When working correctly, you should see:

```
🔷 [TRANSCRIBE] Created thought_blob with ID: abc-123
🔷 [TRANSCRIBE] Emitting CONTENT_CREATED event
🔷 [EVENT_BUS] Emitting event: content:created, handlers registered: 3
🔷 [CATALOGING] Starting auto-cataloging for content: abc-123
🔷 [CATALOGING_SERVICE] Step 1: Extracting concepts with Claude...
🔷 [CATALOGING_SERVICE] Extracted 4 concepts: ["love", "hope", "journey", "memory"]
🔷 [CATALOGING_SERVICE] Step 2: Mapping concepts to vocabulary...
🔷 [CATALOGING_SERVICE] Found 4 vocabulary matches
🔷 [STORE_METADATA] Inserting metadata for content abc-123
✅ [STORE_METADATA] Successfully inserted 4 records
🔷 [CATALOGING_SERVICE] Step 4: Generating embedding...
✅ [CATALOGING_SERVICE] Embedding generated
✅ [CATALOGING] Successfully cataloged content: abc-123
```

Then verify in Supabase:
```sql
-- Should show 4 tags for your content
SELECT cm.*, cv.term
FROM content_metadata cm
JOIN controlled_vocabulary cv ON cv.id = cm.vocabulary_term_id
WHERE cm.content_id = 'abc-123';
```

## Need Help?

If cataloging is still failing after following these steps, check the error logs at `/error-logs` or Vercel function logs. The detailed error messages will pinpoint exactly where the issue is.
