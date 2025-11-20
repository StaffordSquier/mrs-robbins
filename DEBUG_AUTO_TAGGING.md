# Auto-Tagging Debug Guide

## 🔍 Why Tags Aren't Appearing

Based on code analysis, here's the most likely issue:

### **Problem: ANTHROPIC_API_KEY is not accessible at runtime**

The cataloging service requires `ANTHROPIC_API_KEY` to extract concepts from content. If this environment variable isn't loaded properly, the cataloging will fail silently.

---

## 📊 Complete Data Flow

```
1. User records voice memo
   └─> POST /api/voice/upload
       └─> Audio saved to Supabase Storage
       └─> voice_recordings record created

2. User transcribes
   └─> POST /api/voice/transcribe
       ├─> Calls OpenAI Whisper API
       ├─> Creates thought_blob record
       └─> Emits CONTENT_CREATED event ✅
           └─> Event data: {contentId, content, contentType, projectId, userId}

3. Event Listener catches CONTENT_CREATED
   └─> lib/init-events.ts (line 20)
       └─> Calls catalogingService.categorize() ✅

4. Cataloging Service runs
   └─> lib/services/cataloging.ts
       ├─> extractConcepts() - Uses ANTHROPIC_API_KEY ⚠️
       │   └─> Calls Claude to extract 3-5 concepts
       │   └─> Returns: ["love", "loss", "hope"]
       │
       ├─> mapToVocabulary() - Database query
       │   └─> Matches concepts to controlled_vocabulary
       │   └─> Returns: [{termId, term, confidence}]
       │
       ├─> storeMetadata() - Database insert
       │   └─> Inserts into content_metadata table
       │
       └─> generateEmbedding() - Uses OPENAI_API_KEY (optional)
           └─> Creates vector embedding (can fail, won't break tagging)
```

---

## 🐛 Where It's Failing

**Most likely failure point:** `extractConcepts()`

```typescript
private getAnthropic(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY environment variable is required');
    // ⚠️ This error is caught and logged, but tags won't be created
  }
  // ...
}
```

**The error is caught silently** in `lib/init-events.ts` (line 32-35):
```typescript
catch (error) {
  console.error(`Error auto-cataloging content ${data.contentId}:`, error);
  // Don't throw - we don't want cataloging failures to break content creation
}
```

So the voice memo saves successfully, but cataloging fails without visible error.

---

## ✅ How to Debug

### **Step 1: Check Server Logs**

Start the dev server and look for these log messages:

```bash
npm run dev
```

**Expected logs when working:**
```
Initializing event listeners...
Event listeners initialized
Auto-cataloging content: <uuid>
Successfully cataloged content: <uuid>
Content cataloged: <uuid> with X terms
```

**If failing, you'll see:**
```
Error auto-cataloging content <uuid>: ANTHROPIC_API_KEY environment variable is required
```

---

### **Step 2: Test with Debug Endpoint**

I've created a debug endpoint at `/api/debug/catalog`

**Test environment variables:**
```bash
curl http://localhost:3000/api/debug/catalog
```

**Expected response:**
```json
{
  "environment": {
    "ANTHROPIC_API_KEY": "✅ Set (sk-ant-api03-eGcw0w...)",
    "OPENAI_API_KEY": "⚠️ Not set (optional)",
    "SUPABASE_SERVICE_ROLE_KEY": "✅ Set"
  },
  "recentBlobs": [...],
  "recentTags": [...],
  "vocabularyTermsCount": 58
}
```

**Test cataloging on test content:**
```bash
curl -X POST http://localhost:3000/api/debug/catalog \
  -H "Content-Type: application/json" \
  -d '{"testContent": "I am writing about love and loss in my novel"}'
```

**Expected response:**
```json
{
  "success": true,
  "result": {
    "contentId": "test-...",
    "terms": [
      {"termId": "...", "term": "Love", "confidence": 0.95},
      {"termId": "...", "term": "Loss", "confidence": 0.95}
    ],
    "embeddingGenerated": false
  }
}
```

---

### **Step 3: Verify Environment Variables**

**Check `.env.local` exists and is loaded:**
```bash
cat .env.local | grep ANTHROPIC_API_KEY
```

**Should output:**
```
ANTHROPIC_API_KEY=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
```

**⚠️ Common Issue:** Next.js doesn't auto-reload `.env.local` changes

**Solution:** Restart the dev server after changing `.env.local`
```bash
# Stop the server (Ctrl+C)
npm run dev
```

---

### **Step 4: Check Database for Tags**

**Query recent thought blobs:**
```sql
SELECT id, content::text, created_at
FROM thought_blobs
ORDER BY created_at DESC
LIMIT 5;
```

**Query tags for a specific blob:**
```sql
SELECT
  cm.content_id,
  cv.term,
  cm.confidence,
  cm.created_at
FROM content_metadata cm
JOIN controlled_vocabulary cv ON cv.id = cm.vocabulary_term_id
WHERE cm.content_id = 'YOUR_BLOB_ID_HERE'
ORDER BY cm.confidence DESC;
```

**If no results:** Tags weren't created (cataloging failed)

---

## 🔧 Fixes

### **Fix 1: Ensure .env.local is loaded**

The `.env.local` file should be in the project root:
```
/mrs-robbins/.env.local
```

**Restart the dev server** after any changes to `.env.local`

---

### **Fix 2: Verify API Key Format**

Check that the Anthropic key is valid:
```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: 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" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 10,
    "messages": [{"role": "user", "content": "Hi"}]
  }'
```

**Expected:** Should return a valid response (not an auth error)

---

### **Fix 3: Add Better Error Logging**

Temporarily modify `lib/init-events.ts` to see exact errors:

```typescript
// Line 32-35 - make the error more visible
catch (error) {
  console.error('❌❌❌ CATALOGING FAILED ❌❌❌');
  console.error(`Content ID: ${data.contentId}`);
  console.error(`Error:`, error);
  console.error(`Stack:`, error instanceof Error ? error.stack : 'No stack');
}
```

---

## 🧪 Test Checklist

Run through this checklist:

- [ ] `.env.local` exists in project root
- [ ] `ANTHROPIC_API_KEY` is set in `.env.local`
- [ ] Dev server has been restarted after `.env.local` changes
- [ ] Server logs show "Initializing event listeners..."
- [ ] Created a test voice memo
- [ ] Server logs show "Auto-cataloging content: ..."
- [ ] No errors in server logs
- [ ] Database query shows tags in `content_metadata` table

---

## 📝 Expected Outcome

When working correctly, after creating a voice memo about "love and loss":

**Database should contain:**
```sql
-- content_metadata table
content_id: <blob-uuid>
vocabulary_term_id: 10000000-0000-0000-0000-000000000001  -- "Love"
confidence: 0.95

content_id: <blob-uuid>
vocabulary_term_id: 10000000-0000-0000-0000-000000000002  -- "Loss"
confidence: 0.95
```

**Server logs should show:**
```
Auto-cataloging content: <blob-uuid>
Successfully cataloged content: <blob-uuid>
Content cataloged: <blob-uuid> with 2 terms
```

---

## 🚨 Quick Fix Summary

**If tags aren't appearing:**

1. **Restart dev server** (most common fix)
2. Check server logs for errors
3. Use debug endpoint: `GET /api/debug/catalog`
4. Verify `.env.local` is in project root
5. Check database for tags with SQL query

**Most likely cause:** Environment variable not loaded (restart server)
