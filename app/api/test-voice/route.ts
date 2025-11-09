// src/app/api/test-voice/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { generateVoiceDirectives, validateVoiceConfig, type VoiceConfig } from '@/lib/voice';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { baselineText, config } = body as { baselineText: string; config: VoiceConfig };

    // Validate inputs
    if (!baselineText?.trim()) {
      return NextResponse.json(
        { error: 'Baseline text is required' },
        { status: 400 }
      );
    }

    if (!config?.slots || config.slots.length === 0) {
      return NextResponse.json(
        { error: 'Voice configuration is required' },
        { status: 400 }
      );
    }

    // Validate voice config
    const validation = validateVoiceConfig(config);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // Generate voice directives from mixer configuration
    const systemPrompt = generateVoiceDirectives(config);

    // Call Claude API
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: baselineText
        }
      ]
    });

    // Extract text response
    const output = message.content
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('\n');

    return NextResponse.json({
      output,
      tokensUsed: message.usage.input_tokens + message.usage.output_tokens
    });

  } catch (error) {
    console.error('Test voice API error:', error);
    
    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        { error: `Claude API error: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}