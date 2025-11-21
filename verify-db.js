#!/usr/bin/env node

/**
 * Database Verification Script
 * Connects to Supabase and verifies migrations have been applied
 */

const { createClient } = require('@supabase/supabase-js');

// Read environment variables
const SUPABASE_URL = 'https://lugkwarvllyhpzqklisv.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z2t3YXJ2bGx5aHB6cWtsaXN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTYxNDg2MiwiZXhwIjoyMDQ3MTkwODYyfQ.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z2t3YXJ2bGx5aHB6cWtsaXN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTYxNDg2MiwiZXhwIjoyMDQ3MTkwODYyfQ';

async function verifyDatabase() {
  console.log('🔍 Connecting to Supabase...\n');

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  console.log('='.repeat(80));
  console.log('DATABASE VERIFICATION REPORT');
  console.log('='.repeat(80));
  console.log();

  // 1. Check if controlled_vocabulary table exists
  console.log('📊 1. Checking controlled_vocabulary table...');
  try {
    const { data: vocabData, error: vocabError } = await supabase
      .from('controlled_vocabulary')
      .select('*')
      .limit(1);

    if (vocabError) {
      console.log('   ❌ FAIL: controlled_vocabulary table does not exist or has issues');
      console.log('   Error:', vocabError.message);
    } else {
      console.log('   ✅ PASS: controlled_vocabulary table exists');
    }
  } catch (err) {
    console.log('   ❌ FAIL: Error checking controlled_vocabulary');
    console.log('   Error:', err.message);
  }
  console.log();

  // 2. Check if content_metadata table exists
  console.log('📊 2. Checking content_metadata table...');
  try {
    const { data: metadataData, error: metadataError } = await supabase
      .from('content_metadata')
      .select('*')
      .limit(1);

    if (metadataError) {
      console.log('   ❌ FAIL: content_metadata table does not exist or has issues');
      console.log('   Error:', metadataError.message);
    } else {
      console.log('   ✅ PASS: content_metadata table exists');
    }
  } catch (err) {
    console.log('   ❌ FAIL: Error checking content_metadata');
    console.log('   Error:', err.message);
  }
  console.log();

  // 3. Count vocabulary terms
  console.log('📊 3. Counting vocabulary terms...');
  try {
    const { count, error: countError } = await supabase
      .from('controlled_vocabulary')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.log('   ❌ FAIL: Could not count vocabulary terms');
      console.log('   Error:', countError.message);
    } else {
      console.log(`   ✅ Total Terms: ${count}`);

      if (count === 0) {
        console.log('   ⚠️  WARNING: No vocabulary terms found! Need to run migration 003');
      } else if (count < 60) {
        console.log('   ⚠️  WARNING: Expected ~65 terms, found', count);
      } else {
        console.log('   ✅ PASS: Vocabulary properly seeded');
      }
    }
  } catch (err) {
    console.log('   ❌ FAIL: Error counting vocabulary terms');
    console.log('   Error:', err.message);
  }
  console.log();

  // 4. Get root categories
  console.log('📊 4. Checking root vocabulary categories...');
  try {
    const { data: rootTerms, error: rootError } = await supabase
      .from('controlled_vocabulary')
      .select('id, term, description')
      .is('parent_id', null)
      .order('term');

    if (rootError) {
      console.log('   ❌ FAIL: Could not fetch root categories');
      console.log('   Error:', rootError.message);
    } else {
      console.log(`   ✅ Found ${rootTerms.length} root categories:`);
      rootTerms.forEach(term => {
        console.log(`      • ${term.term}: ${term.description}`);
      });
    }
  } catch (err) {
    console.log('   ❌ FAIL: Error fetching root categories');
    console.log('   Error:', err.message);
  }
  console.log();

  // 5. Check vocabulary_sets table
  console.log('📊 5. Checking vocabulary_sets table...');
  try {
    const { data: vocabSets, error: setsError } = await supabase
      .from('vocabulary_sets')
      .select('*');

    if (setsError) {
      console.log('   ❌ FAIL: vocabulary_sets table does not exist or has issues');
      console.log('   Error:', setsError.message);
    } else {
      console.log(`   ✅ Found ${vocabSets.length} vocabulary set(s):`);
      vocabSets.forEach(set => {
        console.log(`      • ${set.name}: ${set.description}`);
      });
    }
  } catch (err) {
    console.log('   ❌ FAIL: Error checking vocabulary_sets');
    console.log('   Error:', err.message);
  }
  console.log();

  // 6. Check embeddings table
  console.log('📊 6. Checking embeddings table...');
  try {
    const { data: embeddingsData, error: embeddingsError } = await supabase
      .from('embeddings')
      .select('*')
      .limit(1);

    if (embeddingsError) {
      console.log('   ❌ FAIL: embeddings table does not exist or has issues');
      console.log('   Error:', embeddingsError.message);
    } else {
      console.log('   ✅ PASS: embeddings table exists');
    }
  } catch (err) {
    console.log('   ❌ FAIL: Error checking embeddings');
    console.log('   Error:', err.message);
  }
  console.log();

  // 7. Sample some vocabulary terms
  console.log('📊 7. Sample vocabulary terms (first 10)...');
  try {
    const { data: sampleTerms, error: sampleError } = await supabase
      .from('controlled_vocabulary')
      .select('term, parent_id, synonyms')
      .order('term')
      .limit(10);

    if (sampleError) {
      console.log('   ❌ FAIL: Could not fetch sample terms');
      console.log('   Error:', sampleError.message);
    } else {
      console.log('   ✅ Sample terms:');
      sampleTerms.forEach(term => {
        const synonymsStr = term.synonyms ? `[${term.synonyms.join(', ')}]` : '[]';
        const parentStr = term.parent_id ? '(child)' : '(root)';
        console.log(`      • ${term.term} ${parentStr} ${synonymsStr}`);
      });
    }
  } catch (err) {
    console.log('   ❌ FAIL: Error fetching sample terms');
    console.log('   Error:', err.message);
  }
  console.log();

  console.log('='.repeat(80));
  console.log('✅ Verification Complete!');
  console.log('='.repeat(80));
}

// Run the verification
verifyDatabase().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
