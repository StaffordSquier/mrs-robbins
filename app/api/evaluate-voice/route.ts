import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const VARIABLE_DESCRIPTIONS: Record<string, { low: string; high: string }> = {
  formality: {
    low: 'Extremely casual, conversational, like talking to a friend',
    high: 'Highly formal, academic, sophisticated vocabulary'
  },
  complexity: {
    low: 'Simple, direct sentences (subject-verb-object)',
    high: 'Sophisticated syntax with multiple clauses'
  },
  emotionality: {
    low: 'Detached, objective, minimal emotion',
    high: 'Vivid emotional language, passionate'
  },
  directness: {
    low: 'Indirect, nuanced, contextual',
    high: 'Blunt, direct, conclusions upfront'
  },
  energy: {
    low: 'Calm, measured, restrained',
    high: 'High energy, excitement, intensity'
  },
  abstraction: {
    low: 'Concrete, specific, tangible examples',
    high: 'Abstract, theoretical, conceptual'
  },
  metaphor: {
    low: 'Literal, straightforward language',
    high: 'Rich with metaphors and analogies'
  },
  paragraph_length: {
    low: 'Short paragraphs (1-3 sentences)',
    high: 'Long paragraphs (8+ sentences)'
  },
  technical: {
    low: 'Accessible to general audience',
    high: 'Technical jargon, expert-level detail'
  }
};

export async function POST(request: NextRequest) {
  try {
    const { outputText, variable } = await request.json();
    
    if (!outputText || !variable) {
      return NextResponse.json(
        { error: 'Missing outputText or variable' },
        { status: 400 }
      );
    }

    const desc = VARIABLE_DESCRIPTIONS[variable];
    
    if (!desc) {
      return NextResponse.json(
        { error: `Unknown variable: ${variable}` },
        { status: 400 }
      );
    }

    const scoringPrompt = `You are evaluating writing samples on the dimension of ${variable}.

Rate this text on ${variable} from 1-10, where:
- 1 = ${desc.low}
- 10 = ${desc.high}

Text to evaluate:
"""
${outputText}
"""

Respond with ONLY a JSON object (no markdown, no backticks, no preamble):
{
  "score": [number between 1-10 with one decimal],
  "evidence": "[2-3 sentence explanation with specific examples]"
}`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{ role: 'user', content: scoringPrompt }]
    });

    const responseText = message.content[0].type === 'text' 
      ? message.content[0].text 
      : '';
    
    // Strip markdown code fences if present
    const cleanedText = responseText
      .replace(/```json\s*/g, '')
      .replace(/```\s*/g, '')
      .trim();
      
    // Parse JSON response
    const result = JSON.parse(cleanedText);
    
    // Validate result structure
    if (typeof result.score !== 'number' || !result.evidence) {
      throw new Error('Invalid response structure from Claude');
    }
    
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