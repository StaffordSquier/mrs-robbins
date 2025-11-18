#!/bin/bash

# Database Verification Script using Supabase REST API
# Uses curl to directly query the database

SUPABASE_URL="https://lugkwarvllyhpzqklisv.supabase.co"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z2t3YXJ2bGx5aHB6cWtsaXN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTYxNDg2MiwiZXhwIjoyMDQ3MTkwODYyfQ.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z2t3YXJ2bGx5aHB6cWtsaXN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTYxNDg2MiwiZXhwIjoyMDQ3MTkwODYyfQ"

echo "================================================================================"
echo "DATABASE VERIFICATION REPORT"
echo "================================================================================"
echo ""

# 1. Check controlled_vocabulary table
echo "📊 1. Checking controlled_vocabulary table..."
response=$(curl -s -X GET \
  "${SUPABASE_URL}/rest/v1/controlled_vocabulary?limit=1" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}")

if echo "$response" | grep -q "error"; then
  echo "   ❌ FAIL: controlled_vocabulary table issue"
  echo "   Response: $response"
else
  echo "   ✅ PASS: controlled_vocabulary table exists"
fi
echo ""

# 2. Check content_metadata table
echo "📊 2. Checking content_metadata table..."
response=$(curl -s -X GET \
  "${SUPABASE_URL}/rest/v1/content_metadata?limit=1" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}")

if echo "$response" | grep -q "error"; then
  echo "   ❌ FAIL: content_metadata table issue"
  echo "   Response: $response"
else
  echo "   ✅ PASS: content_metadata table exists"
fi
echo ""

# 3. Count vocabulary terms
echo "📊 3. Counting vocabulary terms..."
response=$(curl -s -X GET \
  "${SUPABASE_URL}/rest/v1/controlled_vocabulary?select=id" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Prefer: count=exact")

if echo "$response" | grep -q "error"; then
  echo "   ❌ FAIL: Could not count terms"
  echo "   Response: $response"
else
  # Extract count from response (it's in the array)
  count=$(echo "$response" | grep -o '\[' | wc -l)
  # Better: get actual count from the data
  count=$(echo "$response" | jq '. | length' 2>/dev/null || echo "unknown")
  echo "   ✅ Total Terms: $count"

  if [ "$count" = "0" ]; then
    echo "   ⚠️  WARNING: No vocabulary terms found! Need to run migration 003"
  elif [ "$count" -lt 60 ] 2>/dev/null; then
    echo "   ⚠️  WARNING: Expected ~65 terms, found $count"
  else
    echo "   ✅ PASS: Vocabulary properly seeded"
  fi
fi
echo ""

# 4. Get root categories
echo "📊 4. Checking root vocabulary categories..."
response=$(curl -s -X GET \
  "${SUPABASE_URL}/rest/v1/controlled_vocabulary?select=term,description&parent_id=is.null&order=term" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}")

if echo "$response" | grep -q "error"; then
  echo "   ❌ FAIL: Could not fetch root categories"
  echo "   Response: $response"
else
  echo "   ✅ Root categories found:"
  echo "$response" | jq -r '.[] | "      • \(.term): \(.description)"' 2>/dev/null || echo "$response"
fi
echo ""

# 5. Check vocabulary_sets table
echo "📊 5. Checking vocabulary_sets table..."
response=$(curl -s -X GET \
  "${SUPABASE_URL}/rest/v1/vocabulary_sets?select=name,description" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}")

if echo "$response" | grep -q "error"; then
  echo "   ❌ FAIL: vocabulary_sets table issue"
  echo "   Response: $response"
else
  echo "   ✅ Vocabulary sets found:"
  echo "$response" | jq -r '.[] | "      • \(.name): \(.description)"' 2>/dev/null || echo "$response"
fi
echo ""

# 6. Check embeddings table
echo "📊 6. Checking embeddings table..."
response=$(curl -s -X GET \
  "${SUPABASE_URL}/rest/v1/embeddings?limit=1" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}")

if echo "$response" | grep -q "error"; then
  echo "   ❌ FAIL: embeddings table issue"
  echo "   Response: $response"
else
  echo "   ✅ PASS: embeddings table exists"
fi
echo ""

# 7. Sample vocabulary terms
echo "📊 7. Sample vocabulary terms (first 10)..."
response=$(curl -s -X GET \
  "${SUPABASE_URL}/rest/v1/controlled_vocabulary?select=term,parent_id,synonyms&order=term&limit=10" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}")

if echo "$response" | grep -q "error"; then
  echo "   ❌ FAIL: Could not fetch sample terms"
  echo "   Response: $response"
else
  echo "   ✅ Sample terms:"
  echo "$response" | jq -r '.[] | "      • \(.term) \(if .parent_id then "(child)" else "(root)" end)"' 2>/dev/null || echo "$response"
fi
echo ""

echo "================================================================================"
echo "✅ Verification Complete!"
echo "================================================================================"
