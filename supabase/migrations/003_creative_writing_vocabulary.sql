-- =============================================================================
-- CREATIVE WRITING VOCABULARY SEED DATA
-- =============================================================================

-- Insert vocabulary set
INSERT INTO vocabulary_sets (id, name, description) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Creative Writing', 'Comprehensive vocabulary for creative writing, including themes, emotions, literary elements, and sensory details');

-- Helper function to get parent ID (temporary - for building hierarchy)
-- Note: In production, you might want to insert in hierarchical order

-- =============================================================================
-- ROOT CATEGORIES
-- =============================================================================

-- Themes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('10000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000001', 'Themes', NULL, ARRAY['topics', 'subjects'], 'Central ideas and concepts in writing');

-- Emotions
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('20000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000001', 'Emotions', NULL, ARRAY['feelings', 'affect'], 'Emotional content and tone');

-- Elements
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('30000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000001', 'Elements', NULL, ARRAY['devices', 'techniques'], 'Literary devices and techniques');

-- Structure
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('40000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000001', 'Structure', NULL, ARRAY['form', 'composition'], 'Organizational patterns and forms');

-- Sensory
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('50000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000001', 'Sensory', NULL, ARRAY['senses', 'perception'], 'Sensory details and imagery');

-- =============================================================================
-- THEMES - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Love', '10000000-0000-0000-0000-000000000000', ARRAY['affection', 'romance', 'devotion'], 'Expressions and experiences of love'),
  ('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Loss', '10000000-0000-0000-0000-000000000000', ARRAY['grief', 'bereavement', 'absence'], 'Experiences of loss and grief'),
  ('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Hope', '10000000-0000-0000-0000-000000000000', ARRAY['optimism', 'faith', 'aspiration'], 'Hopeful and aspirational content'),
  ('10000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Conflict', '10000000-0000-0000-0000-000000000000', ARRAY['struggle', 'tension', 'opposition'], 'Conflict and struggle'),
  ('10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'Journey', '10000000-0000-0000-0000-000000000000', ARRAY['quest', 'voyage', 'travel'], 'Physical or metaphorical journeys'),
  ('10000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'Identity', '10000000-0000-0000-0000-000000000000', ARRAY['self', 'character', 'personality'], 'Questions of identity and self'),
  ('10000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'Time', '10000000-0000-0000-0000-000000000000', ARRAY['temporality', 'duration', 'passage'], 'Time and its effects'),
  ('10000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'Nature', '10000000-0000-0000-0000-000000000000', ARRAY['natural world', 'environment', 'landscape'], 'Nature and the natural world'),
  ('10000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'Memory', '10000000-0000-0000-0000-000000000000', ARRAY['remembrance', 'recollection', 'nostalgia'], 'Memory and remembrance'),
  ('10000000-0000-0000-0000-00000000000a', '00000000-0000-0000-0000-000000000001', 'Transformation', '10000000-0000-0000-0000-000000000000', ARRAY['change', 'metamorphosis', 'evolution'], 'Change and transformation');

-- =============================================================================
-- THEMES - LEVEL 3 (Sub-themes)
-- =============================================================================

-- Love subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('11000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Romantic Love', '10000000-0000-0000-0000-000000000001', ARRAY['romance', 'passion', 'attraction'], 'Romantic and passionate love'),
  ('11000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Familial Love', '10000000-0000-0000-0000-000000000001', ARRAY['family bonds', 'kinship'], 'Love between family members'),
  ('11000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Self-Love', '10000000-0000-0000-0000-000000000001', ARRAY['self-acceptance', 'self-compassion'], 'Love and acceptance of oneself'),
  ('11000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Platonic Love', '10000000-0000-0000-0000-000000000001', ARRAY['friendship', 'companionship'], 'Non-romantic love and friendship');

-- Loss subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('12000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Death', '10000000-0000-0000-0000-000000000002', ARRAY['mortality', 'passing', 'dying'], 'Death and mortality'),
  ('12000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Separation', '10000000-0000-0000-0000-000000000002', ARRAY['parting', 'distance', 'heartbreak'], 'Separation and distance'),
  ('12000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Regret', '10000000-0000-0000-0000-000000000002', ARRAY['remorse', 'sorrow', 'guilt'], 'Regret and remorse'),
  ('12000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Abandonment', '10000000-0000-0000-0000-000000000002', ARRAY['desertion', 'loneliness', 'isolation'], 'Being left or abandoned');

-- Conflict subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('14000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Internal Conflict', '10000000-0000-0000-0000-000000000004', ARRAY['inner struggle', 'self-conflict'], 'Internal psychological conflict'),
  ('14000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'External Conflict', '10000000-0000-0000-0000-000000000004', ARRAY['interpersonal conflict', 'opposition'], 'Conflict with external forces');

-- Journey subtypes
INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('15000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Physical Journey', '10000000-0000-0000-0000-000000000005', ARRAY['travel', 'voyage', 'trip'], 'Literal physical travel'),
  ('15000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Emotional Journey', '10000000-0000-0000-0000-000000000005', ARRAY['growth', 'development', 'transformation'], 'Emotional or psychological journey'),
  ('15000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Spiritual Journey', '10000000-0000-0000-0000-000000000005', ARRAY['enlightenment', 'awakening'], 'Spiritual quest or awakening');

-- =============================================================================
-- EMOTIONS - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('20000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Joy', '20000000-0000-0000-0000-000000000000', ARRAY['happiness', 'delight', 'elation', 'bliss'], 'Feelings of joy and happiness'),
  ('20000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Sadness', '20000000-0000-0000-0000-000000000000', ARRAY['sorrow', 'melancholy', 'dejection'], 'Feelings of sadness'),
  ('20000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Anger', '20000000-0000-0000-0000-000000000000', ARRAY['rage', 'fury', 'wrath'], 'Feelings of anger'),
  ('20000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Fear', '20000000-0000-0000-0000-000000000000', ARRAY['anxiety', 'dread', 'terror', 'fright'], 'Feelings of fear'),
  ('20000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'Longing', '20000000-0000-0000-0000-000000000000', ARRAY['yearning', 'desire', 'craving'], 'Feelings of longing or desire'),
  ('20000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'Peace', '20000000-0000-0000-0000-000000000000', ARRAY['calm', 'tranquility', 'serenity'], 'Feelings of peace and calm'),
  ('20000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'Confusion', '20000000-0000-0000-0000-000000000000', ARRAY['bewilderment', 'disorientation'], 'Feelings of confusion'),
  ('20000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'Excitement', '20000000-0000-0000-0000-000000000000', ARRAY['enthusiasm', 'thrill', 'exhilaration'], 'Feelings of excitement'),
  ('20000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000001', 'Nostalgia', '20000000-0000-0000-0000-000000000000', ARRAY['wistfulness', 'reminiscence'], 'Nostalgic feelings'),
  ('20000000-0000-0000-0000-00000000000a', '00000000-0000-0000-0000-000000000001', 'Wonder', '20000000-0000-0000-0000-000000000000', ARRAY['awe', 'amazement', 'marvel'], 'Feelings of wonder and awe');

-- =============================================================================
-- ELEMENTS - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('30000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Imagery', '30000000-0000-0000-0000-000000000000', ARRAY['images', 'description', 'vivid language'], 'Descriptive imagery'),
  ('30000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Metaphor', '30000000-0000-0000-0000-000000000000', ARRAY['figurative language', 'comparison'], 'Metaphorical language'),
  ('30000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Symbolism', '30000000-0000-0000-0000-000000000000', ARRAY['symbols', 'symbolic meaning'], 'Use of symbols'),
  ('30000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Narrative', '30000000-0000-0000-0000-000000000000', ARRAY['storytelling', 'plot', 'story'], 'Narrative elements'),
  ('30000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'Dialogue', '30000000-0000-0000-0000-000000000000', ARRAY['conversation', 'speech'], 'Dialogue and conversation'),
  ('30000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'Voice', '30000000-0000-0000-0000-000000000000', ARRAY['perspective', 'point of view', 'narrator'], 'Narrative voice and perspective'),
  ('30000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'Rhythm', '30000000-0000-0000-0000-000000000000', ARRAY['cadence', 'flow', 'pace'], 'Rhythmic elements'),
  ('30000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'Repetition', '30000000-0000-0000-0000-000000000000', ARRAY['refrain', 'echo'], 'Repetition for effect');

-- =============================================================================
-- STRUCTURE - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('40000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Verse', '40000000-0000-0000-0000-000000000000', ARRAY['stanza', 'poetry'], 'Verse structure'),
  ('40000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Chorus', '40000000-0000-0000-0000-000000000000', ARRAY['refrain', 'repeated section'], 'Chorus or refrain'),
  ('40000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Bridge', '40000000-0000-0000-0000-000000000000', ARRAY['transition', 'connecting section'], 'Bridge or transition'),
  ('40000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Scene', '40000000-0000-0000-0000-000000000000', ARRAY['setting', 'episode'], 'Scene or episode'),
  ('40000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'Arc', '40000000-0000-0000-0000-000000000000', ARRAY['progression', 'development'], 'Narrative arc'),
  ('40000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'Fragment', '40000000-0000-0000-0000-000000000000', ARRAY['snippet', 'piece'], 'Fragmentary structure');

-- =============================================================================
-- SENSORY - LEVEL 2
-- =============================================================================

INSERT INTO controlled_vocabulary (id, vocabulary_set_id, term, parent_id, synonyms, description) VALUES
  ('50000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Visual', '50000000-0000-0000-0000-000000000000', ARRAY['sight', 'seeing', 'visual imagery'], 'Visual descriptions'),
  ('50000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Auditory', '50000000-0000-0000-0000-000000000000', ARRAY['sound', 'hearing', 'acoustic'], 'Sound and hearing'),
  ('50000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Tactile', '50000000-0000-0000-0000-000000000000', ARRAY['touch', 'texture', 'feeling'], 'Touch and texture'),
  ('50000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Olfactory', '50000000-0000-0000-0000-000000000000', ARRAY['smell', 'scent', 'aroma'], 'Smell and scent'),
  ('50000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'Gustatory', '50000000-0000-0000-0000-000000000000', ARRAY['taste', 'flavor'], 'Taste descriptions'),
  ('50000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'Kinesthetic', '50000000-0000-0000-0000-000000000000', ARRAY['movement', 'motion', 'bodily'], 'Movement and bodily sensations');

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_vocab_creative_writing ON controlled_vocabulary(vocabulary_set_id) WHERE vocabulary_set_id = '00000000-0000-0000-0000-000000000001';
