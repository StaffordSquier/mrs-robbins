/**
 * Voice Translation Engine
 * Converts voice parameters into Claude API system prompts
 */

export interface VoiceVariable {
  id: string;
  name: string;
  description: string;
  type: 'parametric' | 'exemplar';
  getDirective?: (value: number) => string;
}

export interface VoiceSlot {
  variableId: string;
  value: number;
  exemplarText?: string;
}

export interface VoiceConfig {
  slots: VoiceSlot[];
}

/**
 * Parametric Variables (10 total)
 */
export const PARAMETRIC_VARIABLES: VoiceVariable[] = [
  {
    id: 'formality',
    name: 'Formality',
    description: 'Controls casual vs. formal language style',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Use casual, conversational language like talking to a friend';
      if (value <= 7) return 'Use moderately formal language appropriate for professional communication';
      return 'Use highly formal, academic language with sophisticated vocabulary';
    }
  },
  {
    id: 'complexity',
    name: 'Sentence Complexity',
    description: 'Controls sentence structure complexity',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Use simple, direct sentences (mostly subject-verb-object)';
      if (value <= 7) return 'Use moderately complex sentences with occasional dependent clauses';
      return 'Use sophisticated sentence structures with multiple clauses and varied syntax';
    }
  },
  {
    id: 'technical',
    name: 'Technical Depth',
    description: 'Controls use of jargon and technical language',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Use plain language, avoid jargon entirely';
      if (value <= 7) return 'Use some technical terms but explain them clearly';
      return 'Use field-specific terminology and assume expert-level knowledge';
    }
  },
  {
    id: 'emotionality',
    name: 'Emotional Tone',
    description: 'Controls emotional expression',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Maintain detached, objective tone with minimal emotional language';
      if (value <= 7) return 'Include moderate emotional expression where appropriate';
      return 'Use vivid emotional language and passionate expression';
    }
  },
  {
    id: 'directness',
    name: 'Directness',
    description: 'Controls how directly points are stated',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'State points indirectly with context and nuance';
      if (value <= 7) return 'Balance direct statements with supporting context';
      return 'Be blunt and direct, state conclusions upfront';
    }
  },
  {
    id: 'energy',
    name: 'Energy Level',
    description: 'Controls enthusiasm and intensity',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Use calm, measured tone with restrained enthusiasm';
      if (value <= 7) return 'Show moderate energy and engagement';
      return 'Express high energy, excitement, and intensity';
    }
  },
  {
    id: 'abstraction',
    name: 'Abstraction Level',
    description: 'Controls concrete vs. abstract thinking',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Focus on concrete examples, specific details, and tangible concepts';
      if (value <= 7) return 'Balance concrete examples with conceptual thinking';
      return 'Emphasize abstract concepts, theory, and philosophical implications';
    }
  },
  {
    id: 'metaphor',
    name: 'Metaphor Density',
    description: 'Controls use of figurative language',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Use literal, straightforward language without metaphors';
      if (value <= 7) return 'Include occasional metaphors and analogies when helpful';
      return 'Use rich metaphorical language and vivid figurative expressions';
    }
  },
  {
    id: 'paragraph_length',
    name: 'Paragraph Length',
    description: 'Controls paragraph size',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Use short paragraphs (2-3 sentences)';
      if (value <= 7) return 'Use medium paragraphs (4-6 sentences)';
      return 'Use long, developed paragraphs (7+ sentences)';
    }
  },
  {
    id: 'voice_preference',
    name: 'Active/Passive Voice',
    description: 'Controls sentence voice',
    type: 'parametric',
    getDirective: (value: number) => {
      if (value <= 3) return 'Strongly prefer active voice constructions';
      if (value <= 7) return 'Mix active and passive voice naturally';
      return 'Frequently use passive voice constructions';
    }
  }
];

/**
 * Exemplar Variables (5 slots)
 */
export const EXEMPLAR_VARIABLES: VoiceVariable[] = [
  {
    id: 'exemplar_1',
    name: 'Exemplar 1',
    description: 'Style matching based on user-provided text sample',
    type: 'exemplar'
  },
  {
    id: 'exemplar_2',
    name: 'Exemplar 2',
    description: 'Style matching based on user-provided text sample',
    type: 'exemplar'
  },
  {
    id: 'exemplar_3',
    name: 'Exemplar 3',
    description: 'Style matching based on user-provided text sample',
    type: 'exemplar'
  },
  {
    id: 'exemplar_4',
    name: 'Exemplar 4',
    description: 'Style matching based on user-provided text sample',
    type: 'exemplar'
  },
  {
    id: 'exemplar_5',
    name: 'Exemplar 5',
    description: 'Style matching based on user-provided text sample',
    type: 'exemplar'
  }
];

/**
 * Complete variable library
 */
export const VOICE_VARIABLE_LIBRARY: VoiceVariable[] = [
  ...PARAMETRIC_VARIABLES,
  ...EXEMPLAR_VARIABLES
];

/**
 * Generate exemplar directive from text sample
 */
function generateExemplarDirective(exemplarText: string, intensity: number): string | null {
  if (!exemplarText?.trim() || intensity === 0) return null;

  const intensityDesc = intensity <= 3 ? 'subtle influence' :
                       intensity <= 7 ? 'moderate influence' :
                       'strong influence';

  return `Match the style of this example text (${intensityDesc}):\n\n"${exemplarText.trim()}"`;
}

/**
 * Convert voice configuration to Claude system prompt directives
 */
export function generateVoiceDirectives(config: VoiceConfig): string {
  const directives: string[] = [
    "You are Mrs. Robbins, a voice-preserving writing assistant. Your job is to transform raw input into polished prose while maintaining the writer's authentic voice and intent.",
    "",
    "Apply these voice parameters:",
    ""
  ];

  // Process each mixer slot
  config.slots.forEach((slot, index) => {
    const variable = VOICE_VARIABLE_LIBRARY.find(v => v.id === slot.variableId);
    if (!variable) return;

    if (variable.type === 'parametric' && variable.getDirective) {
      directives.push(`${index + 1}. ${variable.name}: ${variable.getDirective(slot.value)}`);
    } else if (variable.type === 'exemplar') {
      const exemplarDirective = generateExemplarDirective(slot.exemplarText || '', slot.value);
      if (exemplarDirective) {
        directives.push(`${index + 1}. ${variable.name} (Intensity ${slot.value}/10):`);
        directives.push(exemplarDirective);
      }
    }
  });

  directives.push("");
  directives.push("Transform the user's input according to these parameters while preserving their core meaning and intent.");

  return directives.join('\n');
}

/**
 * Get variable by ID from library
 */
export function getVoiceVariable(id: string): VoiceVariable | undefined {
  return VOICE_VARIABLE_LIBRARY.find(v => v.id === id);
}

/**
 * Get all parametric variables
 */
export function getParametricVariables(): VoiceVariable[] {
  return PARAMETRIC_VARIABLES;
}

/**
 * Get all exemplar variables
 */
export function getExemplarVariables(): VoiceVariable[] {
  return EXEMPLAR_VARIABLES;
}

/**
 * Validate mixer configuration
 */
export function validateVoiceConfig(config: VoiceConfig): { valid: boolean; error?: string } {
  if (!config.slots || config.slots.length === 0) {
    return { valid: false, error: 'Configuration must have at least one slot' };
  }

  if (config.slots.length > 5) {
    return { valid: false, error: 'Configuration cannot have more than 5 slots' };
  }

  for (const slot of config.slots) {
    if (!slot.variableId) {
      return { valid: false, error: 'Each slot must have a variableId' };
    }

    const variable = getVoiceVariable(slot.variableId);
    if (!variable) {
      return { valid: false, error: `Unknown variable: ${slot.variableId}` };
    }

    if (slot.value < 0 || slot.value > 10) {
      return { valid: false, error: 'Slider values must be between 0 and 10' };
    }

    if (variable.type === 'exemplar' && slot.value > 0 && !slot.exemplarText?.trim()) {
      return { valid: false, error: `Exemplar slot requires text when intensity > 0` };
    }
  }

  return { valid: true };
}

/**
 * Simple translation function for basic voice config (used by conversation API)
 */
export function translateToVoice(text: string, voiceConfig: Record<string, number>): string {
  const slots = Object.entries(voiceConfig).map(([key, value]) => ({
    variableId: key,
    value: value,
  }));

  const config: VoiceConfig = { slots };
  return generateVoiceDirectives(config);
}