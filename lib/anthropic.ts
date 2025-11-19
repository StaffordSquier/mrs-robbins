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
  if (!anthropicClient) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY environment variable is not set');
    }
    anthropicClient = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
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
