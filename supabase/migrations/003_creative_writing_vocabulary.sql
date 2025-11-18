-- =============================================================================
-- CREATIVE WRITING VOCABULARY SEED DATA
-- =============================================================================

-- Insert vocabulary set
INSERT INTO vocabulary_sets (id, name, description) VALUES
  ('cw-vocab-001', 'Creative Writing', 'Comprehensive vocabulary for creative writing, including themes, emotions, literary elements, and sensory details');

-- Helper function to get parent ID (temporary - for building hierarchy)
-- Note: In production, you might want to insert in hierarchical order

-- =============================================================================
-- ROOT CATEGORIES
-- =============================================================================

-- Themes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('theme-root', 'cw-vocab-001', 'Themes', NULL, ARRAY['topics', 'subjects'], 'Central ideas and concepts in writing');

-- Emotions
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('emotion-root', 'cw-vocab-001', 'Emotions', NULL, ARRAY['feelings', 'affect'], 'Emotional content and tone');

-- Elements
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('element-root', 'cw-vocab-001', 'Elements', NULL, ARRAY['devices', 'techniques'], 'Literary devices and techniques');

-- Structure
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('structure-root', 'cw-vocab-001', 'Structure', NULL, ARRAY['form', 'composition'], 'Organizational patterns and forms');

-- Sensory
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('sensory-root', 'cw-vocab-001', 'Sensory', NULL, ARRAY['senses', 'perception'], 'Sensory details and imagery');

-- =============================================================================
-- THEMES - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('theme-love', 'cw-vocab-001', 'Love', 'theme-root', ARRAY['affection', 'romance', 'devotion'], 'Expressions and experiences of love'),
  ('theme-loss', 'cw-vocab-001', 'Loss', 'theme-root', ARRAY['grief', 'bereavement', 'absence'], 'Experiences of loss and grief'),
  ('theme-hope', 'cw-vocab-001', 'Hope', 'theme-root', ARRAY['optimism', 'faith', 'aspiration'], 'Hopeful and aspirational content'),
  ('theme-conflict', 'cw-vocab-001', 'Conflict', 'theme-root', ARRAY['struggle', 'tension', 'opposition'], 'Conflict and struggle'),
  ('theme-journey', 'cw-vocab-001', 'Journey', 'theme-root', ARRAY['quest', 'voyage', 'travel'], 'Physical or metaphorical journeys'),
  ('theme-identity', 'cw-vocab-001', 'Identity', 'theme-root', ARRAY['self', 'character', 'personality'], 'Questions of identity and self'),
  ('theme-time', 'cw-vocab-001', 'Time', 'theme-root', ARRAY['temporality', 'duration', 'passage'], 'Time and its effects'),
  ('theme-nature', 'cw-vocab-001', 'Nature', 'theme-root', ARRAY['natural world', 'environment', 'landscape'], 'Nature and the natural world'),
  ('theme-memory', 'cw-vocab-001', 'Memory', 'theme-root', ARRAY['remembrance', 'recollection', 'nostalgia'], 'Memory and remembrance'),
  ('theme-transformation', 'cw-vocab-001', 'Transformation', 'theme-root', ARRAY['change', 'metamorphosis', 'evolution'], 'Change and transformation');

-- =============================================================================
-- THEMES - LEVEL 3 (Sub-themes)
-- =============================================================================

-- Love subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('theme-love-romantic', 'cw-vocab-001', 'Romantic Love', 'theme-love', ARRAY['romance', 'passion', 'attraction'], 'Romantic and passionate love'),
  ('theme-love-familial', 'cw-vocab-001', 'Familial Love', 'theme-love', ARRAY['family bonds', 'kinship'], 'Love between family members'),
  ('theme-love-self', 'cw-vocab-001', 'Self-Love', 'theme-love', ARRAY['self-acceptance', 'self-compassion'], 'Love and acceptance of oneself'),
  ('theme-love-platonic', 'cw-vocab-001', 'Platonic Love', 'theme-love', ARRAY['friendship', 'companionship'], 'Non-romantic love and friendship');

-- Loss subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('theme-loss-death', 'cw-vocab-001', 'Death', 'theme-loss', ARRAY['mortality', 'passing', 'dying'], 'Death and mortality'),
  ('theme-loss-separation', 'cw-vocab-001', 'Separation', 'theme-loss', ARRAY['parting', 'distance', 'heartbreak'], 'Separation and distance'),
  ('theme-loss-regret', 'cw-vocab-001', 'Regret', 'theme-loss', ARRAY['remorse', 'sorrow', 'guilt'], 'Regret and remorse'),
  ('theme-loss-abandonment', 'cw-vocab-001', 'Abandonment', 'theme-loss', ARRAY['desertion', 'loneliness', 'isolation'], 'Being left or abandoned');

-- Conflict subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('theme-conflict-internal', 'cw-vocab-001', 'Internal Conflict', 'theme-conflict', ARRAY['inner struggle', 'self-conflict'], 'Internal psychological conflict'),
  ('theme-conflict-external', 'cw-vocab-001', 'External Conflict', 'theme-conflict', ARRAY['interpersonal conflict', 'opposition'], 'Conflict with external forces');

-- Journey subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('theme-journey-physical', 'cw-vocab-001', 'Physical Journey', 'theme-journey', ARRAY['travel', 'voyage', 'trip'], 'Literal physical travel'),
  ('theme-journey-emotional', 'cw-vocab-001', 'Emotional Journey', 'theme-journey', ARRAY['growth', 'development', 'transformation'], 'Emotional or psychological journey'),
  ('theme-journey-spiritual', 'cw-vocab-001', 'Spiritual Journey', 'theme-journey', ARRAY['enlightenment', 'awakening'], 'Spiritual quest or awakening');

-- =============================================================================
-- EMOTIONS - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('emotion-joy', 'cw-vocab-001', 'Joy', 'emotion-root', ARRAY['happiness', 'delight', 'elation', 'bliss'], 'Feelings of joy and happiness'),
  ('emotion-sadness', 'cw-vocab-001', 'Sadness', 'emotion-root', ARRAY['sorrow', 'melancholy', 'dejection'], 'Feelings of sadness'),
  ('emotion-anger', 'cw-vocab-001', 'Anger', 'emotion-root', ARRAY['rage', 'fury', 'wrath'], 'Feelings of anger'),
  ('emotion-fear', 'cw-vocab-001', 'Fear', 'emotion-root', ARRAY['anxiety', 'dread', 'terror', 'fright'], 'Feelings of fear'),
  ('emotion-longing', 'cw-vocab-001', 'Longing', 'emotion-root', ARRAY['yearning', 'desire', 'craving'], 'Feelings of longing or desire'),
  ('emotion-peace', 'cw-vocab-001', 'Peace', 'emotion-root', ARRAY['calm', 'tranquility', 'serenity'], 'Feelings of peace and calm'),
  ('emotion-confusion', 'cw-vocab-001', 'Confusion', 'emotion-root', ARRAY['bewilderment', 'disorientation'], 'Feelings of confusion'),
  ('emotion-excitement', 'cw-vocab-001', 'Excitement', 'emotion-root', ARRAY['enthusiasm', 'thrill', 'exhilaration'], 'Feelings of excitement'),
  ('emotion-nostalgia', 'cw-vocab-001', 'Nostalgia', 'emotion-root', ARRAY['wistfulness', 'reminiscence'], 'Nostalgic feelings'),
  ('emotion-wonder', 'cw-vocab-001', 'Wonder', 'emotion-root', ARRAY['awe', 'amazement', 'marvel'], 'Feelings of wonder and awe');

-- =============================================================================
-- ELEMENTS - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('element-imagery', 'cw-vocab-001', 'Imagery', 'element-root', ARRAY['images', 'description', 'vivid language'], 'Descriptive imagery'),
  ('element-metaphor', 'cw-vocab-001', 'Metaphor', 'element-root', ARRAY['figurative language', 'comparison'], 'Metaphorical language'),
  ('element-symbolism', 'cw-vocab-001', 'Symbolism', 'element-root', ARRAY['symbols', 'symbolic meaning'], 'Use of symbols'),
  ('element-narrative', 'cw-vocab-001', 'Narrative', 'element-root', ARRAY['storytelling', 'plot', 'story'], 'Narrative elements'),
  ('element-dialogue', 'cw-vocab-001', 'Dialogue', 'element-root', ARRAY['conversation', 'speech'], 'Dialogue and conversation'),
  ('element-voice', 'cw-vocab-001', 'Voice', 'element-root', ARRAY['perspective', 'point of view', 'narrator'], 'Narrative voice and perspective'),
  ('element-rhythm', 'cw-vocab-001', 'Rhythm', 'element-root', ARRAY['cadence', 'flow', 'pace'], 'Rhythmic elements'),
  ('element-repetition', 'cw-vocab-001', 'Repetition', 'element-root', ARRAY['refrain', 'echo'], 'Repetition for effect');

-- =============================================================================
-- STRUCTURE - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('structure-verse', 'cw-vocab-001', 'Verse', 'structure-root', ARRAY['stanza', 'poetry'], 'Verse structure'),
  ('structure-chorus', 'cw-vocab-001', 'Chorus', 'structure-root', ARRAY['refrain', 'repeated section'], 'Chorus or refrain'),
  ('structure-bridge', 'cw-vocab-001', 'Bridge', 'structure-root', ARRAY['transition', 'connecting section'], 'Bridge or transition'),
  ('structure-scene', 'cw-vocab-001', 'Scene', 'structure-root', ARRAY['setting', 'episode'], 'Scene or episode'),
  ('structure-arc', 'cw-vocab-001', 'Arc', 'structure-root', ARRAY['progression', 'development'], 'Narrative arc'),
  ('structure-fragment', 'cw-vocab-001', 'Fragment', 'structure-root', ARRAY['snippet', 'piece'], 'Fragmentary structure');

-- =============================================================================
-- SENSORY - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('sensory-visual', 'cw-vocab-001', 'Visual', 'sensory-root', ARRAY['sight', 'seeing', 'visual imagery'], 'Visual descriptions'),
  ('sensory-auditory', 'cw-vocab-001', 'Auditory', 'sensory-root', ARRAY['sound', 'hearing', 'acoustic'], 'Sound and hearing'),
  ('sensory-tactile', 'cw-vocab-001', 'Tactile', 'sensory-root', ARRAY['touch', 'texture', 'feeling'], 'Touch and texture'),
  ('sensory-olfactory', 'cw-vocab-001', 'Olfactory', 'sensory-root', ARRAY['smell', 'scent', 'aroma'], 'Smell and scent'),
  ('sensory-gustatory', 'cw-vocab-001', 'Gustatory', 'sensory-root', ARRAY['taste', 'flavor'], 'Taste descriptions'),
  ('sensory-kinesthetic', 'cw-vocab-001', 'Kinesthetic', 'sensory-root', ARRAY['movement', 'motion', 'bodily'], 'Movement and bodily sensations');

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_vocab_creative_writing ON controlled_vocabulary(vocabulary_set_id) WHERE vocabulary_set_id = 'cw-vocab-001';
