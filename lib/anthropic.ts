/**
 * Centralized Anthropic Client
 * Single source of truth for Claude API access
 */
import Anthropic from '@anthropic-ai/sdk';

let anthropicClient: Anthropic | null = null;

/**
 * Get or create the Anthropic client singleton
 */
export function getAnthropicClient(): Anthropic {
  // FORCE RECREATION FOR DEBUGGING
  anthropicClient = null;
  
  if (!anthropicClient) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    console.log('[ANTHROPIC] API Key exists:', !!apiKey);
    console.log('[ANTHROPIC] API Key length:', apiKey?.length);
    console.log('[ANTHROPIC] API Key first 15 chars:', apiKey?.substring(0, 15));
    console.log('[ANTHROPIC] Full key:', apiKey);
    
    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY environment variable is not set');
    }
    
    anthropicClient = new Anthropic({
      apiKey: apiKey,
    });
  }
  
  return anthropicClient;
}

/**
 * Default model for all Claude API calls
 */
export const DEFAULT_MODEL = 'claude-sonnet-4-20250514';

/**
 * Create a message using the Claude API
 */
export async function createMessage(params: {
  system?: string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  maxTokens?: number;
}) {
  const client = getAnthropicClient();
  
  return client.messages.create({
    model: DEFAULT_MODEL,
    max_tokens: params.maxTokens || 2000,
    system: params.system,
    messages: params.messages,
  });
}
