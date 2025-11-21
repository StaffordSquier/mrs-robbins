#!/bin/bash

# Load environment variables
source .env.local

# Run migration 004 (Error Logging)
echo "Running migration 004: Error Logging..."

psql "$SUPABASE_DB_URL" -f supabase/migrations/004_error_logging.sql

if [ $? -eq 0 ]; then
  echo "✅ Migration 004 completed successfully"
else
  echo "❌ Migration 004 failed"
  exit 1
fi
