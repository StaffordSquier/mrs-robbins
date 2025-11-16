/**
 * Voice Evaluation Service
 * Handles scoring and evaluation of voice-transformed outputs
 */

import { createMessage } from './anthropic';

/**
 * Variable descriptions for scoring prompts
 */
export const VARIABLE_DESCRIPTIONS: Record<string, { low: string; high: string }> = {
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

/**
 * Available voice variables for UI components
 */
export const VOICE_VARIABLES = [
  { id: 'formality', name: 'Formality' },
  { id: 'complexity', name: 'Complexity' },
  { id: 'emotionality', name: 'Emotionality' },
  { id: 'directness', name: 'Directness' },
  { id: 'energy', name: 'Energy' },
  { id: 'abstraction', name: 'Abstraction' },
  { id: 'metaphor', name: 'Metaphor Density' },
  { id: 'paragraph_length', name: 'Paragraph Length' },
  { id: 'technical', name: 'Technical Depth' }
];

export interface EvaluationResult {
  score: number;
  evidence: string;
}

/**
 * Generate a scoring prompt for evaluating voice output
 */
export function generateScoringPrompt(outputText: string, variable: string): string {
  const desc = VARIABLE_DESCRIPTIONS[variable];

  if (!desc) {
    throw new Error(`Unknown variable: ${variable}`);
  }

  return `You are evaluating writing samples on the dimension of ${variable}.

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
}

/**
 * Parse and validate evaluation response from Claude
 */
export function parseEvaluationResponse(responseText: string): EvaluationResult {
  // Strip markdown code fences if present
  const cleanedText = responseText
    .replace(/```json\s*/g, '')
    .replace(/```\s*/g, '')
    .trim();

  const result = JSON.parse(cleanedText);

  // Validate result structure
  if (typeof result.score !== 'number' || !result.evidence) {
    throw new Error('Invalid response structure from Claude');
  }

  return {
    score: result.score,
    evidence: result.evidence
  };
}

/**
 * Evaluate voice output against a specific variable
 */
export async function evaluateVoiceOutput(
  outputText: string,
  variable: string
): Promise<EvaluationResult> {
  const scoringPrompt = generateScoringPrompt(outputText, variable);

  const message = await createMessage({
    messages: [{ role: 'user', content: scoringPrompt }],
    maxTokens: 500
  });

  const responseText = message.content[0].type === 'text'
    ? message.content[0].text
    : '';

  return parseEvaluationResponse(responseText);
}

/**
 * Check if a variable ID is valid
 */
export function isValidVariable(variableId: string): boolean {
  return variableId in VARIABLE_DESCRIPTIONS;
}
