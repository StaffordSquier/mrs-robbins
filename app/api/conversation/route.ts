import { NextResponse } from 'next/server';
import { createConversationResponse, ConversationMessage } from '@/lib/conversation';

export async function POST(request: Request) {
  try {
    const { messages, voiceConfig } = await request.json();

    const response = await createConversationResponse(
      messages as ConversationMessage[],
      voiceConfig
    );

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Conversation API error:', error);
    return NextResponse.json(
      { error: 'Failed to process conversation' },
      { status: 500 }
    );
  }
}
