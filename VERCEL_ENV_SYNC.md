# Vercel Environment Variables Sync Checklist

## 📋 Quick Copy-Paste Guide

Copy these values to your Vercel project settings:
**Settings → Environment Variables → Add New**

---

## ✅ Required Variables (Copy Exactly)

### 1. NEXT_PUBLIC_SUPABASE_URL
**Value:**
```
https://lugkwarvllyhpzqklisv.supabase.co
```
**Environment:** Production, Preview, Development (all)
**Reason:** Public Supabase project URL - needed for all database connections

---

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z2t3YXJ2bGx5aHB6cWtsaXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2MjU1MzksImV4cCI6MjA3ODIwMTUzOX0.kVtDUi2spMXJbwOCR0_9In9b7mIFwYw1y-zA5JAye38
```
**Environment:** Production, Preview, Development (all)
**Reason:** Public anonymous key for client-side Supabase access (safe to expose)

---

### 3. SUPABASE_SERVICE_ROLE_KEY
**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z2t3YXJ2bGx5aHB6cWtsaXN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjYyNTUzOSwiZXhwIjoyMDc4MjAxNTM5fQ.8IdYv-5vqGtXuh4GRSRPChv6e5qhN3HXYG3b04afqSI
```
**Environment:** Production, Preview, Development (all)
**Reason:** Server-side key with full database access - NEVER expose in client code

---

### 4. ANTHROPIC_API_KEY
**Value:**
```
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
```
**Environment:** Production, Preview, Development (all)
**Reason:** Required for auto-tagging (Claude extracts concepts from content)

---

## ⚠️ Variables That Need Different Values in Vercel

### 5. NODE_ENV
**Local value:** `development`
**Vercel value:** `production`
**Environment:** Production only
**Action:** Vercel sets this automatically - DO NOT manually set it

---

### 6. NEXT_PUBLIC_APP_URL
**Local value:** `http://localhost:3000`
**Vercel value:** Your deployment URL (e.g., `https://mrs-robbins.vercel.app`)
**Environment:** Production, Preview, Development
**Action:** Set to your actual Vercel deployment URL after first deploy

---

## 🔧 Optional Variables

### 7. OPENAI_API_KEY
**Current local value:** `your-openai-api-key-here` (placeholder)
**Status:** ⚠️ NOT SET - Optional for now
**Reason:** Only needed for semantic search embeddings (future feature)
**Action:** Skip for now, add later when you get an OpenAI API key

---

## 📝 Step-by-Step Vercel Setup

### Option A: Manual Setup (Recommended First Time)

1. Go to https://vercel.com/dashboard
2. Select your `mrs-robbins` project
3. Click **Settings** → **Environment Variables**
4. For each variable above, click **Add New**:
   - **Key:** Variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value:** Copy from above
   - **Environment:** Select all (Production, Preview, Development)
   - Click **Save**

5. After adding all variables, redeploy:
   - Go to **Deployments** tab
   - Click ⋯ on latest deployment
   - Click **Redeploy**

### Option B: CLI Script (Faster)

Run the automated script (see below).

---

## ✅ Verification Checklist

After syncing, verify in Vercel dashboard that you see:

- [ ] NEXT_PUBLIC_SUPABASE_URL
- [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] SUPABASE_SERVICE_ROLE_KEY
- [ ] ANTHROPIC_API_KEY
- [ ] NEXT_PUBLIC_APP_URL (update after first deploy)

**Do NOT manually set:**
- [ ] NODE_ENV (Vercel handles this)

**Skip for now:**
- [ ] OPENAI_API_KEY (optional, not yet configured)

---

## 🚨 Security Notes

**NEVER commit to Git:**
- `.env.local` is in `.gitignore` ✅
- These secrets should ONLY exist in:
  1. Your local `.env.local` file
  2. Vercel environment variables dashboard

**Service Role Key:**
- `SUPABASE_SERVICE_ROLE_KEY` has FULL database access
- Only use in server-side code (API routes, server components)
- Never expose in client-side code or browser

---

## 🔄 After First Vercel Deploy

Once your app is deployed to Vercel:

1. Get your deployment URL (e.g., `https://mrs-robbins.vercel.app`)
2. Update `NEXT_PUBLIC_APP_URL` in Vercel to this URL
3. Update your local `.env.local` with:
   ```
   NEXT_PUBLIC_APP_URL=https://mrs-robbins.vercel.app
   ```
4. Redeploy on Vercel

---

## 📊 Current Status

| Variable | Local .env.local | Needs Vercel Sync | Notes |
|----------|-----------------|-------------------|-------|
| NEXT_PUBLIC_SUPABASE_URL | ✅ Set | ✅ Yes | Same value |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | ✅ Set | ✅ Yes | Same value |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set | ✅ Yes | Same value |
| ANTHROPIC_API_KEY | ✅ Set | ✅ Yes | Same value |
| OPENAI_API_KEY | ⚠️ Placeholder | ❌ Skip | Optional |
| NODE_ENV | development | ❌ Skip | Vercel auto-sets |
| NEXT_PUBLIC_APP_URL | localhost:3000 | ⚠️ Different | Update after deploy |
