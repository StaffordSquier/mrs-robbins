import { NextRequest, NextResponse } from 'next/server';
import { generateVoiceDirectives, validateVoiceConfig, type VoiceConfig } from '@/lib/voice';
import { createMessage } from '@/lib/anthropic';

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

    // Call Claude API through service
    const message = await createMessage({
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: baselineText
        }
      ],
      maxTokens: 2000
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

    // Check if it's an Anthropic API error
    if (error && typeof error === 'object' && 'status' in error) {
      const apiError = error as { status?: number; message?: string };
      return NextResponse.json(
        { error: `Claude API error: ${apiError.message || 'Unknown error'}` },
        { status: apiError.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
