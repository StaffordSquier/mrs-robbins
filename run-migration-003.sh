#!/bin/bash

# Migration 003 - Seed Creative Writing Vocabulary
# Executes via Supabase REST API

SUPABASE_URL="https://lugkwarvllyhpzqklisv.supabase.co"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z2t3YXJ2bGx5aHB6cWtsaXN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjYyNTUzOSwiZXhwIjoyMDc4MjAxNTM5fQ.8IdYv-5vqGtXuh4GRSRPChv6e5qhN3HXYG3b04afqSI"

echo "🚀 Starting Migration 003: Creative Writing Vocabulary"
echo "======================================================="
echo ""

# 1. Insert vocabulary set
echo "📦 Inserting vocabulary set..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/vocabulary_sets" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '{
    "id": "00000000-0000-0000-0000-000000000001",
    "name": "Creative Writing",
    "description": "Comprehensive vocabulary for creative writing, including themes, emotions, literary elements, and sensory details"
  }' > /dev/null

if [ $? -eq 0 ]; then
  echo "   ✅ Vocabulary set created"
else
  echo "   ❌ Failed to create vocabulary set"
  exit 1
fi

# 2. Insert root categories
echo "📚 Inserting root categories..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/controlled_vocabulary" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '[
    {"id": "10000000-0000-0000-0000-000000000000", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Themes", "parent_id": null, "synonyms": ["topics", "subjects"], "description": "Central ideas and concepts in writing"},
    {"id": "20000000-0000-0000-0000-000000000000", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Emotions", "parent_id": null, "synonyms": ["feelings", "affect"], "description": "Emotional content and tone"},
    {"id": "30000000-0000-0000-0000-000000000000", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Elements", "parent_id": null, "synonyms": ["devices", "techniques"], "description": "Literary devices and techniques"},
    {"id": "40000000-0000-0000-0000-000000000000", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Structure", "parent_id": null, "synonyms": ["form", "composition"], "description": "Organizational patterns and forms"},
    {"id": "50000000-0000-0000-0000-000000000000", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Sensory", "parent_id": null, "synonyms": ["senses", "perception"], "description": "Sensory details and imagery"}
  ]' > /dev/null

if [ $? -eq 0 ]; then
  echo "   ✅ Root categories created (5)"
else
  echo "   ❌ Failed to create root categories"
  exit 1
fi

# 3. Insert theme terms
echo "🎭 Inserting theme terms..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/controlled_vocabulary" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '[
    {"id": "10000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Love", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["affection", "romance", "devotion"], "description": "Expressions and experiences of love"},
    {"id": "10000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Loss", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["grief", "bereavement", "absence"], "description": "Experiences of loss and grief"},
    {"id": "10000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Hope", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["optimism", "faith", "aspiration"], "description": "Hopeful and aspirational content"},
    {"id": "10000000-0000-0000-0000-000000000004", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Conflict", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["struggle", "tension", "opposition"], "description": "Conflict and struggle"},
    {"id": "10000000-0000-0000-0000-000000000005", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Journey", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["quest", "voyage", "travel"], "description": "Physical or metaphorical journeys"},
    {"id": "10000000-0000-0000-0000-000000000006", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Identity", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["self", "character", "personality"], "description": "Questions of identity and self"},
    {"id": "10000000-0000-0000-0000-000000000007", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Time", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["temporality", "duration", "passage"], "description": "Time and its effects"},
    {"id": "10000000-0000-0000-0000-000000000008", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Nature", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["natural world", "environment", "landscape"], "description": "Nature and the natural world"},
    {"id": "10000000-0000-0000-0000-000000000009", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Memory", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["remembrance", "recollection", "nostalgia"], "description": "Memory and remembrance"},
    {"id": "10000000-0000-0000-0000-00000000000a", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Transformation", "parent_id": "10000000-0000-0000-0000-000000000000", "synonyms": ["change", "metamorphosis", "evolution"], "description": "Change and transformation"}
  ]' > /dev/null

echo "   ✅ Theme terms created (10)"

# 4. Insert theme subtypes
echo "🎭 Inserting theme subtypes..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/controlled_vocabulary" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '[
    {"id": "11000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Romantic Love", "parent_id": "10000000-0000-0000-0000-000000000001", "synonyms": ["romance", "passion", "attraction"], "description": "Romantic and passionate love"},
    {"id": "11000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Familial Love", "parent_id": "10000000-0000-0000-0000-000000000001", "synonyms": ["family bonds", "kinship"], "description": "Love between family members"},
    {"id": "11000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Self-Love", "parent_id": "10000000-0000-0000-0000-000000000001", "synonyms": ["self-acceptance", "self-compassion"], "description": "Love and acceptance of oneself"},
    {"id": "11000000-0000-0000-0000-000000000004", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Platonic Love", "parent_id": "10000000-0000-0000-0000-000000000001", "synonyms": ["friendship", "companionship"], "description": "Non-romantic love and friendship"},
    {"id": "12000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Death", "parent_id": "10000000-0000-0000-0000-000000000002", "synonyms": ["mortality", "passing", "dying"], "description": "Death and mortality"},
    {"id": "12000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Separation", "parent_id": "10000000-0000-0000-0000-000000000002", "synonyms": ["parting", "distance", "heartbreak"], "description": "Separation and distance"},
    {"id": "12000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Regret", "parent_id": "10000000-0000-0000-0000-000000000002", "synonyms": ["remorse", "sorrow", "guilt"], "description": "Regret and remorse"},
    {"id": "12000000-0000-0000-0000-000000000004", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Abandonment", "parent_id": "10000000-0000-0000-0000-000000000002", "synonyms": ["desertion", "loneliness", "isolation"], "description": "Being left or abandoned"},
    {"id": "14000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Internal Conflict", "parent_id": "10000000-0000-0000-0000-000000000004", "synonyms": ["inner struggle", "self-conflict"], "description": "Internal psychological conflict"},
    {"id": "14000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "External Conflict", "parent_id": "10000000-0000-0000-0000-000000000004", "synonyms": ["interpersonal conflict", "opposition"], "description": "Conflict with external forces"},
    {"id": "15000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Physical Journey", "parent_id": "10000000-0000-0000-0000-000000000005", "synonyms": ["travel", "voyage", "trip"], "description": "Literal physical travel"},
    {"id": "15000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Emotional Journey", "parent_id": "10000000-0000-0000-0000-000000000005", "synonyms": ["growth", "development", "transformation"], "description": "Emotional or psychological journey"},
    {"id": "15000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Spiritual Journey", "parent_id": "10000000-0000-0000-0000-000000000005", "synonyms": ["enlightenment", "awakening"], "description": "Spiritual quest or awakening"}
  ]' > /dev/null

echo "   ✅ Theme subtypes created (13)"

# 5. Insert emotion terms
echo "😊 Inserting emotion terms..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/controlled_vocabulary" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '[
    {"id": "20000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Joy", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["happiness", "delight", "elation", "bliss"], "description": "Feelings of joy and happiness"},
    {"id": "20000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Sadness", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["sorrow", "melancholy", "dejection"], "description": "Feelings of sadness"},
    {"id": "20000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Anger", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["rage", "fury", "wrath"], "description": "Feelings of anger"},
    {"id": "20000000-0000-0000-0000-000000000004", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Fear", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["anxiety", "dread", "terror", "fright"], "description": "Feelings of fear"},
    {"id": "20000000-0000-0000-0000-000000000005", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Longing", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["yearning", "desire", "craving"], "description": "Feelings of longing or desire"},
    {"id": "20000000-0000-0000-0000-000000000006", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Peace", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["calm", "tranquility", "serenity"], "description": "Feelings of peace and calm"},
    {"id": "20000000-0000-0000-0000-000000000007", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Confusion", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["bewilderment", "disorientation"], "description": "Feelings of confusion"},
    {"id": "20000000-0000-0000-0000-000000000008", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Excitement", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["enthusiasm", "thrill", "exhilaration"], "description": "Feelings of excitement"},
    {"id": "20000000-0000-0000-0000-000000000009", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Nostalgia", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["wistfulness", "reminiscence"], "description": "Nostalgic feelings"},
    {"id": "20000000-0000-0000-0000-00000000000a", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Wonder", "parent_id": "20000000-0000-0000-0000-000000000000", "synonyms": ["awe", "amazement", "marvel"], "description": "Feelings of wonder and awe"}
  ]' > /dev/null

echo "   ✅ Emotion terms created (10)"

# 6. Insert element terms
echo "📖 Inserting element terms..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/controlled_vocabulary" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '[
    {"id": "30000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Imagery", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["images", "description", "vivid language"], "description": "Descriptive imagery"},
    {"id": "30000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Metaphor", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["figurative language", "comparison"], "description": "Metaphorical language"},
    {"id": "30000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Symbolism", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["symbols", "symbolic meaning"], "description": "Use of symbols"},
    {"id": "30000000-0000-0000-0000-000000000004", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Narrative", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["storytelling", "plot", "story"], "description": "Narrative elements"},
    {"id": "30000000-0000-0000-0000-000000000005", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Dialogue", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["conversation", "speech"], "description": "Dialogue and conversation"},
    {"id": "30000000-0000-0000-0000-000000000006", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Voice", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["perspective", "point of view", "narrator"], "description": "Narrative voice and perspective"},
    {"id": "30000000-0000-0000-0000-000000000007", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Rhythm", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["cadence", "flow", "pace"], "description": "Rhythmic elements"},
    {"id": "30000000-0000-0000-0000-000000000008", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Repetition", "parent_id": "30000000-0000-0000-0000-000000000000", "synonyms": ["refrain", "echo"], "description": "Repetition for effect"}
  ]' > /dev/null

echo "   ✅ Element terms created (8)"

# 7. Insert structure terms
echo "🏗️  Inserting structure terms..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/controlled_vocabulary" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '[
    {"id": "40000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Verse", "parent_id": "40000000-0000-0000-0000-000000000000", "synonyms": ["stanza", "poetry"], "description": "Verse structure"},
    {"id": "40000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Chorus", "parent_id": "40000000-0000-0000-0000-000000000000", "synonyms": ["refrain", "repeated section"], "description": "Chorus or refrain"},
    {"id": "40000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Bridge", "parent_id": "40000000-0000-0000-0000-000000000000", "synonyms": ["transition", "connecting section"], "description": "Bridge or transition"},
    {"id": "40000000-0000-0000-0000-000000000004", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Scene", "parent_id": "40000000-0000-0000-0000-000000000000", "synonyms": ["setting", "episode"], "description": "Scene or episode"},
    {"id": "40000000-0000-0000-0000-000000000005", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Arc", "parent_id": "40000000-0000-0000-0000-000000000000", "synonyms": ["progression", "development"], "description": "Narrative arc"},
    {"id": "40000000-0000-0000-0000-000000000006", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Fragment", "parent_id": "40000000-0000-0000-0000-000000000000", "synonyms": ["snippet", "piece"], "description": "Fragmentary structure"}
  ]' > /dev/null

echo "   ✅ Structure terms created (6)"

# 8. Insert sensory terms
echo "👁️  Inserting sensory terms..."
curl -s -X POST "${SUPABASE_URL}/rest/v1/controlled_vocabulary" \
  -H "apikey: ${SERVICE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '[
    {"id": "50000000-0000-0000-0000-000000000001", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Visual", "parent_id": "50000000-0000-0000-0000-000000000000", "synonyms": ["sight", "seeing", "visual imagery"], "description": "Visual descriptions"},
    {"id": "50000000-0000-0000-0000-000000000002", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Auditory", "parent_id": "50000000-0000-0000-0000-000000000000", "synonyms": ["sound", "hearing", "acoustic"], "description": "Sound and hearing"},
    {"id": "50000000-0000-0000-0000-000000000003", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Tactile", "parent_id": "50000000-0000-0000-0000-000000000000", "synonyms": ["touch", "texture", "feeling"], "description": "Touch and texture"},
    {"id": "50000000-0000-0000-0000-000000000004", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Olfactory", "parent_id": "50000000-0000-0000-0000-000000000000", "synonyms": ["smell", "scent", "aroma"], "description": "Smell and scent"},
    {"id": "50000000-0000-0000-0000-000000000005", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Gustatory", "parent_id": "50000000-0000-0000-0000-000000000000", "synonyms": ["taste", "flavor"], "description": "Taste descriptions"},
    {"id": "50000000-0000-0000-0000-000000000006", "vocabulary_set_id": "00000000-0000-0000-0000-000000000001", "term": "Kinesthetic", "parent_id": "50000000-0000-0000-0000-000000000000", "synonyms": ["movement", "motion", "bodily"], "description": "Movement and bodily sensations"}
  ]' > /dev/null

echo "   ✅ Sensory terms created (6)"

echo ""
echo "======================================================="
echo "✅ Migration 003 Complete!"
echo ""
echo "📊 Summary:"
echo "   • 1 vocabulary set"
echo "   • 5 root categories"
echo "   • 58 vocabulary terms"
echo "   • Total: 64 terms"
echo ""
echo "Run verification:"
echo "   ./verify-db.sh"
echo "======================================================="
