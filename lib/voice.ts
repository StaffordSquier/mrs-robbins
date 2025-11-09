// src/lib/voice.ts
// Voice Translation Engine - Converts mixer configuration to Claude prompt directives

export type VoiceVariableType = 'parametric' | 'exemplar';

export interface VoiceVariable {
  id: string;
  name: string;
  type: VoiceVariableType;
  description: string;
  getDirective?: (value: number) => string; // For parametric variables
}

export interface MixerSlot {
  variableId: string;
  value: number; // 0-10 slider value
  exemplarText?: string; // For exemplar variables only
}

export interface VoiceConfig {
  slots: MixerSlot[]; // Up to 5 slots
}

// ============================================================================
// PARAMETRIC VARIABLES (10)
// ============================================================================

const PARAMETRIC_VARIABLES: VoiceVariable[] = [
  {
    id: 'formality',
    name: 'Formality',
    type: 'parametric',
    description: 'Controls casual vs. formal language style',
    getDirective: (value: number) => {
      if (value <= 2) return "Use extremely casual, conversational language. Write like texting a friend. Contractions everywhere. Sentence fragments are fine.";
      if (value <= 4) return "Use casual, friendly language. Contract words freely. Write like you talk to a colleague.";
      if (value <= 6) return "Balance between conversational and professional. Use contractions occasionally. Mix informal and formal structures.";
      if (value <= 8) return "Use professional, polished language. Avoid most contractions. Maintain business-appropriate tone.";
      return "Use formal, academic language. Never use contractions. Maintain strict grammatical precision and scholarly tone.";
    }
  },
  {
    id: 'sentence_complexity',
    name: 'Sentence Complexity',
    type: 'parametric',
    description: 'Controls sentence length and structure sophistication',
    getDirective: (value: number) => {
      if (value <= 2) return "Use very short, simple sentences. 5-10 words each. Subject-verb-object. One idea per sentence.";
      if (value <= 4) return "Use short to medium sentences. 10-15 words average. Simple structures with occasional compound sentences.";
      if (value <= 6) return "Balance sentence lengths. Mix short punchy sentences with longer flowing ones. Vary structure for rhythm.";
      if (value <= 8) return "Use sophisticated sentence structures. Comfortable with 20-30 word sentences. Complex ideas can span multiple clauses.";
      return "Use dense, elaborate sentence structures. 30-50 word sentences are fine. Nested clauses, semicolons, and complex grammatical constructions expected.";
    }
  },
  {
    id: 'technical_depth',
    name: 'Technical Depth',
    type: 'parametric',
    description: 'Controls use of jargon and specialized terminology',
    getDirective: (value: number) => {
      if (value <= 2) return "Avoid all technical jargon. Explain everything in plain, everyday language. Use common analogies and simple examples.";
      if (value <= 4) return "Use minimal technical terms, always explained. Prefer accessible language over precise jargon.";
      if (value <= 6) return "Use industry-standard terminology when appropriate, with brief context. Balance technical precision with accessibility.";
      if (value <= 8) return "Use technical vocabulary freely. Assume domain familiarity. Prioritize precision over accessibility.";
      return "Use highly specialized terminology without explanation. Assume expert-level domain knowledge. Maximum technical precision.";
    }
  },
  {
    id: 'emotional_tone',
    name: 'Emotional Tone',
    type: 'parametric',
    description: 'Controls emotional weight and intensity',
    getDirective: (value: number) => {
      if (value <= 2) return "Keep tone extremely light, playful, even humorous. Use wit and levity. Writing should feel fun and energetic.";
      if (value <= 4) return "Maintain warm, friendly tone. Occasional humor is welcome. Conversational and approachable emotional register.";
      if (value <= 6) return "Balanced emotional tone. Neither overly light nor heavy. Professional warmth without excessive levity or gravity.";
      if (value <= 8) return "Use thoughtful, serious tone. Reflective and considered. Emotional weight without being grim.";
      return "Use grave, weighty tone. Deep seriousness and solemnity. No levity or lightness. Writing carries emotional and intellectual heft.";
    }
  },
  {
    id: 'abstraction_level',
    name: 'Abstraction Level',
    type: 'parametric',
    description: 'Controls concrete vs. abstract thinking',
    getDirective: (value: number) => {
      if (value <= 2) return "Stay concrete and specific. Use tangible examples, physical details, and sensory language. Ground every idea in real-world specifics.";
      if (value <= 4) return "Prefer concrete examples but allow some conceptual discussion. Anchor abstract ideas with specific illustrations.";
      if (value <= 6) return "Balance concrete and abstract. Move between specific examples and broader concepts as needed.";
      if (value <= 8) return "Comfortable with abstract thinking. Use conceptual frameworks and theoretical ideas, with occasional concrete examples for clarity.";
      return "Highly abstract and conceptual. Philosophical and theoretical language. Concrete examples rare or unnecessary.";
    }
  },
  {
    id: 'metaphor_density',
    name: 'Metaphor Density',
    type: 'parametric',
    description: 'Controls use of figurative language',
    getDirective: (value: number) => {
      if (value <= 2) return "Avoid metaphors entirely. Use literal, direct language. Say exactly what you mean with no figurative flourishes.";
      if (value <= 4) return "Use metaphors sparingly, only when they genuinely clarify. Prefer direct language most of the time.";
      if (value <= 6) return "Use metaphors when they serve the meaning. Balance literal and figurative language naturally.";
      if (value <= 8) return "Use metaphors frequently to illuminate ideas. Figurative language is a core tool for expression.";
      return "Rich, dense metaphorical language. Figurative thinking is primary mode of expression. Poetic and layered.";
    }
  },
  {
    id: 'paragraph_length',
    name: 'Paragraph Length',
    type: 'parametric',
    description: 'Controls paragraph structure and breaks',
    getDirective: (value: number) => {
      if (value <= 2) return "Use very short paragraphs. 1-3 sentences maximum. Break frequently for visual breathing room.";
      if (value <= 4) return "Use short paragraphs. 3-5 sentences. Keep visual blocks small and scannable.";
      if (value <= 6) return "Standard paragraph length. 5-7 sentences. Develop one complete idea per paragraph.";
      if (value <= 8) return "Longer paragraphs acceptable. 7-10 sentences. Develop complex ideas within single paragraph.";
      return "Dense, sustained paragraphs. 10-15 sentences. Build elaborate arguments without breaking flow.";
    }
  },
  {
    id: 'active_passive',
    name: 'Active/Passive Voice',
    type: 'parametric',
    description: 'Controls active vs. passive voice preference',
    getDirective: (value: number) => {
      if (value <= 2) return "Use active voice exclusively. Every sentence should have a clear actor performing an action. Passive voice forbidden.";
      if (value <= 4) return "Strongly prefer active voice. Use passive only when actor is genuinely unknown or irrelevant.";
      if (value <= 6) return "Default to active voice but allow passive when appropriate. Use passive for emphasis or de-emphasis strategically.";
      if (value <= 8) return "Mix active and passive freely. Passive voice is a legitimate stylistic choice for variety and emphasis.";
      return "Use passive voice liberally. Prefer impersonal, academic constructions. De-emphasize actors and emphasize actions/states.";
    }
  },
  {
    id: 'humor_level',
    name: 'Humor Level',
    type: 'parametric',
    description: 'Controls use of wit and humor',
    getDirective: (value: number) => {
      if (value <= 2) return "No humor whatsoever. Completely serious and straightforward. Never attempt wit or levity.";
      if (value <= 4) return "Minimal humor. Occasional dry observation is acceptable but rare.";
      if (value <= 6) return "Moderate humor where appropriate. Wit and lightness are tools but not constant presence.";
      if (value <= 8) return "Frequent humor and wit. Playful observations and clever turns of phrase are welcome.";
      return "Heavy humor and wit. Writing should be entertaining and clever. Wordplay, irony, and comedic timing are central.";
    }
  },
  {
    id: 'sentence_variety',
    name: 'Sentence Variety',
    type: 'parametric',
    description: 'Controls rhythm and structural variation',
    getDirective: (value: number) => {
      if (value <= 2) return "Use consistent, uniform sentence structure. Little variation in length or pattern. Predictable rhythm.";
      if (value <= 4) return "Some sentence variation but generally consistent patterns. Rhythm is steady and even.";
      if (value <= 6) return "Moderate sentence variety. Mix structures and lengths for natural flow without excessive experimentation.";
      if (value <= 8) return "High sentence variety. Deliberately vary structure, length, and rhythm for dynamic reading experience.";
      return "Extreme sentence variety. Constantly shift structures, rhythms, and patterns. Unpredictable and stylistically bold.";
    }
  }
];

// ============================================================================
// EXEMPLAR VARIABLES (5 slots available)
// ============================================================================

const EXEMPLAR_VARIABLES: VoiceVariable[] = [
  {
    id: 'exemplar_1',
    name: 'Exemplar 1',
    type: 'exemplar',
    description: 'Paste a text sample to match its style (intensity controls strength)'
  },
  {
    id: 'exemplar_2',
    name: 'Exemplar 2',
    type: 'exemplar',
    description: 'Paste a text sample to match its style (intensity controls strength)'
  },
  {
    id: 'exemplar_3',
    name: 'Exemplar 3',
    type: 'exemplar',
    description: 'Paste a text sample to match its style (intensity controls strength)'
  },
  {
    id: 'exemplar_4',
    name: 'Exemplar 4',
    type: 'exemplar',
    description: 'Paste a text sample to match its style (intensity controls strength)'
  },
  {
    id: 'exemplar_5',
    name: 'Exemplar 5',
    type: 'exemplar',
    description: 'Paste a text sample to match its style (intensity controls strength)'
  }
];

// ============================================================================
// COMBINED LIBRARY
// ============================================================================

export const VOICE_VARIABLE_LIBRARY: VoiceVariable[] = [
  ...PARAMETRIC_VARIABLES,
  ...EXEMPLAR_VARIABLES
];

// ============================================================================
// VOICE DIRECTIVE GENERATION
// ============================================================================

/**
 * Generate exemplar directive from text sample and intensity
 */
function generateExemplarDirective(exemplarText: string, intensity: number): string {
  if (!exemplarText?.trim()) {
    return ''; // No directive if no text provided
  }

  const intensityInstructions = [
    "Very subtly echo some stylistic elements from this sample:", // 0-2
    "Loosely match the style of this sample:", // 3-4
    "Match the style of this sample:", // 5-6
    "Strongly match the style and voice of this sample:", // 7-8
    "Precisely replicate the exact style, voice, and rhythm of this sample:" // 9-10
  ];

  const instructionIndex = Math.floor(intensity / 2);
  const instruction = intensityInstructions[instructionIndex];

  return `${instruction}\n\n"${exemplarText.trim()}"\n`;
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