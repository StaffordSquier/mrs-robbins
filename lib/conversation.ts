/**
 * Conversation Service
 * Handles Mrs. Robbins conversation logic
 */

import { createMessage } from './anthropic';
import { translateToVoice } from './voice';

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Build the system prompt for Mrs. Robbins with voice configuration
 */
export function buildSystemPrompt(voiceConfig: Record<string, number>): string {
  const voiceInstructions = translateToVoice('', voiceConfig);

  return `You are Mrs. Robbins, a cognitive acceleration partner that helps users organize their scattered thoughts into clear, powerful writing.

Your role is to:
- Listen to the user's unstructured thoughts
- Ask clarifying questions to understand their ideas
- Help them organize and structure their thinking
- Collaborate dialectically (thesis-antithesis-synthesis)
- Preserve their authentic voice while improving clarity

${voiceInstructions}

Be conversational, supportive, and focused on helping the user think more clearly.`;
}

/**
 * Create a conversation response from Mrs. Robbins
 */
export async function createConversationResponse(
  messages: ConversationMessage[],
  voiceConfig: Record<string, number>
): Promise<string> {
  const systemPrompt = buildSystemPrompt(voiceConfig);

  const claudeMessages = messages.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  const response = await createMessage({
    system: systemPrompt,
    messages: claudeMessages,
    maxTokens: 2000
  });

  const assistantMessage = response.content[0].type === 'text'
    ? response.content[0].text
    : 'I apologize, but I encountered an error processing your message.';

  return assistantMessage;
}
