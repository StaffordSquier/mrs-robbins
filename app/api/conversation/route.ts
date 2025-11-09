import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { translateToVoice } from '@/lib/voice';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  try {
    const { messages, voiceConfig } = await request.json();

    // Build conversation history for Claude
    const claudeMessages = messages.map((msg: Message) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Create system prompt with voice instructions
    const voiceInstructions = translateToVoice('', voiceConfig);
    const systemPrompt = `You are Mrs. Robbins, a cognitive acceleration partner that helps users organize their scattered thoughts into clear, powerful writing.

Your role is to:
- Listen to the user's unstructured thoughts
- Ask clarifying questions to understand their ideas
- Help them organize and structure their thinking
- Collaborate dialectically (thesis-antithesis-synthesis)
- Preserve their authentic voice while improving clarity

${voiceInstructions}

Be conversational, supportive, and focused on helping the user think more clearly.`;

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      system: systemPrompt,
      messages: claudeMessages,
    });

    const assistantMessage = response.content[0].type === 'text' 
      ? response.content[0].text 
      : 'I apologize, but I encountered an error processing your message.';

    return NextResponse.json({ response: assistantMessage });
  } catch (error) {
    console.error('Conversation API error:', error);
    return NextResponse.json(
      { error: 'Failed to process conversation' },
      { status: 500 }
    );
  }
}