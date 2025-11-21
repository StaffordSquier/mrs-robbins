import { NextRequest, NextResponse } from 'next/server';
import { evaluateVoiceOutput, isValidVariable } from '@/lib/evaluation';

export async function POST(request: NextRequest) {
  try {
    const { outputText, variable } = await request.json();

    if (!outputText || !variable) {
      return NextResponse.json(
        { error: 'Missing outputText or variable' },
        { status: 400 }
      );
    }

    if (!isValidVariable(variable)) {
      return NextResponse.json(
        { error: `Unknown variable: ${variable}` },
        { status: 400 }
      );
    }

    const result = await evaluateVoiceOutput(outputText, variable);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Evaluate voice API error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      {
        error: 'Failed to evaluate output',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
