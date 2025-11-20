#!/bin/bash
# sync-vercel-env.sh
# Syncs environment variables from .env.local to Vercel
#
# Prerequisites:
# 1. Install Vercel CLI: npm i -g vercel
# 2. Login to Vercel: vercel login
# 3. Link project: vercel link (run in project directory)
#
# Usage: chmod +x sync-vercel-env.sh && ./sync-vercel-env.sh

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Vercel Environment Variables Sync${NC}"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ Vercel CLI not found${NC}"
    echo "Install with: npm i -g vercel"
    exit 1
fi

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo -e "${RED}❌ .env.local not found${NC}"
    exit 1
fi

echo -e "${YELLOW}⚠️  This will add/update environment variables in Vercel${NC}"
echo -e "${YELLOW}⚠️  Make sure you've run 'vercel link' first${NC}"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled"
    exit 0
fi

echo ""
echo -e "${GREEN}Adding environment variables to Vercel...${NC}"
echo ""

# Function to add env var to all environments
add_env_var() {
    local key=$1
    local value=$2

    echo -e "Adding ${GREEN}${key}${NC}..."

    # Add to production
    echo "$value" | vercel env add "$key" production --force > /dev/null 2>&1 || true

    # Add to preview
    echo "$value" | vercel env add "$key" preview --force > /dev/null 2>&1 || true

    # Add to development
    echo "$value" | vercel env add "$key" development --force > /dev/null 2>&1 || true

    echo -e "  ✅ ${key} synced to all environments"
}

# Extract values from .env.local (removes comments and whitespace)
SUPABASE_URL=$(grep "^NEXT_PUBLIC_SUPABASE_URL=" .env.local | cut -d '=' -f2- | tr -d ' ')
SUPABASE_ANON=$(grep "^NEXT_PUBLIC_SUPABASE_ANON_KEY=" .env.local | cut -d '=' -f2- | tr -d ' ')
SUPABASE_SERVICE=$(grep "^SUPABASE_SERVICE_ROLE_KEY=" .env.local | cut -d '=' -f2- | tr -d ' ')
ANTHROPIC_KEY=$(grep "^ANTHROPIC_API_KEY=" .env.local | cut -d '=' -f2- | tr -d ' ')

# Add required variables
add_env_var "NEXT_PUBLIC_SUPABASE_URL" "$SUPABASE_URL"
add_env_var "NEXT_PUBLIC_SUPABASE_ANON_KEY" "$SUPABASE_ANON"
add_env_var "SUPABASE_SERVICE_ROLE_KEY" "$SUPABASE_SERVICE"
add_env_var "ANTHROPIC_API_KEY" "$ANTHROPIC_KEY"

echo ""
echo -e "${GREEN}✅ All environment variables synced!${NC}"
echo ""
echo -e "${YELLOW}⚠️  Next steps:${NC}"
echo "1. Deploy to Vercel: vercel --prod"
echo "2. After deploy, update NEXT_PUBLIC_APP_URL with your deployment URL"
echo "3. Run this script again to sync the updated URL"
echo ""
echo -e "${YELLOW}📋 To verify:${NC}"
echo "vercel env ls"
echo ""
