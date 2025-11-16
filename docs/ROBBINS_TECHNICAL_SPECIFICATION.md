# Mrs. Robbins Technical Specification v3.0

## CHUNK 1 of 29: Executive Overview & System Architecture

**Project:** Mrs. Robbins

**Document Version:** 3.0

**Last Updated:** November 16, 2025

**Status:** Comprehensive Development Specification

------------------------------------------------------------------------

## Section 1: Executive Technical Overview

### What the System Does

Mrs. Robbins is cognition-to-execution infrastructure that removes the
mechanical bottleneck between thinking and documented output. It serves
anyone who thinks faster than they can type (150 words per minute
speaking vs. 40 words per minute typing) - transforming conversational
exploration into structured deliverables across multiple output formats:
polished prose, scored business plans, strategic memos, research
documentation, and more.

The competition is not Grammarly or other writing tools. The competition
is scattered thinking that never becomes organized output.

The system does NOT function as:

- A writing tool or text editor with AI refinement
- A grammar checker or style guide
- A prompt-based content generator
- An auto-writing tool that replaces the author
- A single-purpose application limited to one output type

The system ACTUALLY functions as:

- Cognition-to-execution infrastructure serving multiple personas
  (writers, entrepreneurs, consultants, researchers)
- A persistent thinking partner that helps organize scattered thoughts
  through dialectic conversation
- A voice-preserved collaboration framework where deliverables emerge
  FROM conversation
- A platform with configurable endpoints - same core engines produce
  different output formats
- A teaching infrastructure that helps users recognize and eliminate
  weak thinking patterns

### Core Technical Approach

**Architecture Pattern:** Cellular microservices with modular component
boundaries

**Primary Technologies:** React (frontend), Supabase (PostgreSQL
database + auth + pgvector), Claude API (dialectic engine + content
analysis), OpenAI Embeddings API (semantic search), ElevenLabs
(text-to-speech), WooCommerce (payment gateway)

**Core Interaction Model: Thesis → Antithesis → Synthesis Loop**

**Phase 1: Mind-Mapping Raw Cognition**

- User dumps unstructured thoughts (speech, text, fragments,
  stream-of-consciousness)
- Mrs. Robbins analyzes and responds: "I see 3 core themes here: X,
  Y, Z. These ideas connect at point A. Have you considered structuring
  it this way?"
- User responds: "Yes, and also this angle I'm thinking about..."
- Dialectic collaboration begins immediately - NOT one-way refinement

**Phase 2: Collaborative Structuring**

- Mrs. Robbins synthesizes: "So I'm hearing the narrative arc is A→B→C?"
- User adjusts: "Almost - but flip B and C, and add this connecting
  idea"
- Thesis → Antithesis → Synthesis → New Thesis
- Process continues until structure is collaboratively agreed upon

**Phase 3: Iterative Sectional Refinement**

- Same dialectic process applied to each section/component
- Mrs. Robbins: "Here's what I'm hearing in this section..."
- User: "Yes, but I also want to bring in this idea..."
- **Critical guardrail**: AI never runs off and writes without user
  direction
- Each exchange builds on last with full conversation context

**Phase 4: Draft Analysis & Quality Feedback**

- User requests draft generation from agreed structure
- System generates draft maintaining voice profile
- Content filter system analyzes draft for quality issues:
  - Decorative/non-functional metaphors
  - Place anchoring presence/absence
  - Contextual integrity violations
- Mrs. Robbins surfaces findings conversationally or via visual
  highlights
- User refines specific sections through continued dialectic

**Throughout All Phases:**

- Voice preservation maintained across entire conversation
- Full project context retained (goals, audience, structure, tone)
- Conversation transcript = evolution of thinking = version history

### Key Technical Differentiators

This is NOT an incremental improvement to existing tools. This is a new
category.

**Nobody else combines:**

1.  **Conversational dialectic collaboration framework** as primary
    interface
2.  **Long-term project memory** and context retention across sessions
3.  **Voice preservation engine** that maintains user authenticity
    through all iterations
4.  **Content quality analysis filters** that teach craft-level pattern
    recognition
5.  **Cellular component architecture** supporting independent scaling
    and future thought assembly system
6.  **Serendipity engine** for cross-domain discovery and breakthrough
    thinking
7.  **Configurable endpoint system** enabling multiple output formats
    from same dialectic process

**Competitive Comparison:**

  ---------------------------------------------------------------------------------------------
  Attribute       Mrs. Robbins                  ChatGPT/Claude   Grammarly      Speechify
  --------------- ----------------------------- ---------------- -------------- ---------------
  Persistent      ✅ Full conversation history  ❌ No memory     ❌ No project  ❌ No memory
  project memory                                between sessions concept        

  Voice           ✅ Core feature               ❌ Generic AI    ❌ Actively    ❌ No editorial
  preservation                                  voice            flattens voice layer

  Dialectic       ✅                            ⚠️ One-off       ❌ Correction  ❌
  collaboration   Thesis-antithesis-synthesis   prompts          only           Transcription
                                                                                only

  Content quality ✅ Craft-level filters        ❌ No analysis   ⚠️ Grammar     ❌ No analysis
  analysis                                                       only           

  Input           ✅ Text, voice, paste         ✅ Text, voice   ❌ Text only   ✅ Voice only
  agnosticism                                                                   
  ---------------------------------------------------------------------------------------------

## CHUNK 2 of 29: Competitive Analysis & Technical Risks

**Competitive Comparison (continued):**

  -------------------------------------------------------------------------------
  Attribute       Mrs. Robbins    ChatGPT/Claude   Grammarly      Speechify
  --------------- --------------- ---------------- -------------- ---------------
  Cross-project   ✅ Serendipity  ❌ No            ❌ No project  ❌ No discovery
  discovery       engine          cross-project    concept        
                                  awareness                       

  Bidirectional   ✅ Analyze text ❌ No voice      ❌ No voice    ❌ No analysis
  voice analysis  to extract      concept          concept        
                  voice                                           

  Configurable    ✅ Writer,      ❌ Single        ❌ Writing     ❌
  endpoints       Entrepreneur,   conversational   only           Transcription
                  Consultant,     interface                       only
                  Researcher                                      

  Domain          ✅ Pluggable    ❌ General       ❌ No domain   ❌ No domain
  expertise       knowledge       knowledge only   awareness      awareness
  integration     repositories                                    

  Cellular        ✅ Independent, ⚠️ Monolithic    ⚠️ Monolithic  ⚠️ Monolithic
  architecture    scalable                                        
                  components                                      
  -------------------------------------------------------------------------------

**This creates a defensible moat:**

- ChatGPT forgets everything between sessions, has no concept of voice
  preservation or configurable endpoints
- Grammarly has no concept of voice preservation, project memory, or
  dialectic collaboration
- ProWritingAid offers style suggestions but no dialectic process or
  multi-format output
- Speechify transcribes but provides no editorial intelligence or
  thinking partnership
- No competitor combines cataloging + serendipity + voice preservation +
  dialectic collaboration + configurable endpoints

**Total Addressable Market Expansion:**

By positioning as cognition-to-execution infrastructure rather than a
writing tool, Mrs. Robbins serves:

- **Writers:** Creative writers, bloggers, content marketers, academics,
  journalists
- **Entrepreneurs:** Business plan development, pitch deck preparation,
  strategic planning
- **Consultants:** Client deliverables, strategic memos, analysis
  reports
- **Researchers:** Literature reviews, research documentation, grant
  proposals
- **Anyone who "thinks by talking":** Executives dictating strategy,
  founders working through problems, academics exploring ideas

This 10x expands addressable market beyond the "neurodivergent writing
assistance" niche.

### Critical Technical Risks and Mitigation

  -----------------------------------------------------------------------
  Risk              Likelihood        Impact            Mitigation
  ----------------- ----------------- ----------------- -----------------
  Claude API rate   Medium            High              Implement request
  limits during                                         queuing, response
  beta                                                  caching, graceful
                                                        degradation
                                                        messages to users

  Conversation      Medium            Medium            Smart
  context window                                        summarization of
  limits (200K                                          older turns,
  tokens)                                               context pruning
                                                        strategy, archive
                                                        full history to
                                                        DB

  ElevenLabs TTS    Medium            Medium            Async audio
  latency affecting                                     generation with
  UX                                                    streaming,
                                                        fallback to
                                                        browser Web
                                                        Speech API

  Voice             High              High              Extensive prompt
  preservation                                          engineering, A/B
  consistency                                           testing with beta
  across long                                           users, feedback
  projects                                              loops,
                                                        bidirectional
                                                        analysis
                                                        validation

  Content filter    Medium            Medium            Confidence
  false positives                                       thresholds, user
  annoying users                                        dismissal
                                                        tracking, filter
                                                        sensitivity
                                                        controls

  Vector embedding  Medium            Medium            Cache embeddings,
  costs at scale                                        batch processing,
                                                        incremental
                                                        updates only

  Serendipity       Medium            High              Optimize vector
  engine                                                queries,
  performance                                           implement caching
  degradation with                                      layer,
  large datasets                                        materialized
                                                        views for common
                                                        patterns

  Cellular          Low               Medium            Clear API
  architecture                                          contracts,
  complexity                                            comprehensive
  slowing                                               documentation,
  development                                           automated
                                                        integration
                                                        testing

  Endpoint          Medium            Medium            Guided
  configuration                                         onboarding, smart
  complexity                                            defaults,
  confusing users                                       template library
                                                        with clear use
                                                        cases

  Domain expertise  Medium            High              Curated knowledge
  repository                                            sources, user
  quality control                                       feedback loops,
                                                        expert validation
                                                        for specialized
                                                        domains
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Section 2: Objectives, Constraints and Success Criteria

### Objectives

**Primary Technical Goals:**

1.  **Launch functional Alpha within 8-12 weeks** with all core
    architectural components operational
2.  **Support 100 concurrent users** with \<2 second response times for
    AI interactions
3.  **Achieve 99% uptime** during beta testing period
4.  **Process conversations of up to 50K words** without context
    degradation
5.  **Enable seamless voice profile switching** mid-conversation with
    instant application
6.  **Deliver TTS audio playback** within 3 seconds of request
7.  **Maintain conversation state** across sessions with zero data loss
8.  **Content filter accuracy** \>85% true positive rate on target
    patterns
9.  **Serendipity engine discovery quality** \>70% user-rated "valuable
    connections" on suggested relationships
10. **Cross-project search performance** \<500ms for semantic queries
    across 1000+ documents

**Performance Targets:**

- Page load time: \<1.5 seconds (React app)
- AI response generation: \<3 seconds (95th percentile)
- Database query response: \<100ms
- TTS audio generation: \<3 seconds for 500 words
- Content filter analysis: \<5 seconds per draft (up to 2000 words)
- Vector embedding generation: \<2 seconds per document
- Serendipity query execution: \<500ms for cross-project search
- Concurrent users supported: 100+ (Alpha), 10,000+ (Year 2)

**Quality Standards:**

- Test coverage: ≥70% for critical paths
- Code review: 100% of PRs reviewed by at least one other developer
- Zero P0 bugs in production
- \<5 P1 bugs at any given time
- User satisfaction (voice preservation): \>8/10 rating
- Content filter usefulness: \>7/10 rating
- Serendipity discovery value: \>7/10 rating
- Endpoint output quality: \>8/10 rating across all personas

### Constraints

**Budget Limits:**

- Alpha development budget: \$15K (primarily contractor/API costs)
- Monthly operational costs target: \<\$500 for infrastructure and APIs
  at 100 users
- CAC target: \<\$20 per user (Year 1)
- LTV/CAC target: ≥3:1 by Month 12

## CHUNK 3 of 29: Constraints, Scope & Technology Stack

**Timeline and Milestones:**

- Week 1-8: Alpha development (core architectural components)
- Week 9-12: Beta launch and paid tier activation
- Month 4-6: V1.0 with expanded features
- Month 7-12: V2.0 with analytics and version control
- Month 12 target: \$85K+ net income

**Technology Restrictions:**

- Must integrate with existing WordPress infrastructure for marketing
  site
- Must use WooCommerce for payment processing (no alternative payment
  processors)
- Must support browser-based speech-to-text (no native app development
  in Alpha)
- Must work with Claude API (no custom LLM training in Alpha)
- Must use managed services only (no custom server management)

**Resource Limitations:**

- Primary developer: 1 (Stafford, using Cursor + Claude workflow)
- Contractors available for specialized tasks only
- No dedicated QA team (founder-led testing + beta user feedback)
- No dedicated DevOps (using managed services: Vercel, Supabase)
- No dedicated design team (founder-led UX)

**Scope Boundaries (Explicitly OUT of Scope):**

- Native mobile apps (iOS/Android) - browser-based only
- Custom LLM training or fine-tuning - use Claude API as-is
- Real-time collaborative editing (multi-user simultaneous) -
  single-user projects only
- Video/image generation - text and audio only
- Integration with third-party tools (Google Docs, Notion, etc.) -
  export only
- White-label or enterprise custom deployments - SaaS only
- Multiple language support - English only in Alpha

------------------------------------------------------------------------

## Section 3: System Architecture

### Architectural Overview

Mrs. Robbins uses a **cellular architecture** where each major component
is self-contained with clearly defined API boundaries. Components can be
added, removed, or scaled independently without requiring rewrites of
existing systems.

**Core Architectural Principles:**

1.  **Component Independence:** Each component has its own data models,
    business logic, and API contracts
2.  **API-First Design:** All inter-component communication happens
    through documented APIs
3.  **Horizontal Scalability:** Components can be scaled independently
    based on demand
4.  **Forward Compatibility:** New components integrate without
    modifying existing ones
5.  **Modular Knowledge:** Domain expertise repositories plug into
    Serendipity Engine without coupling

### Major System Components

The system consists of 9 major architectural components:

1.  **Content Collection Engine** - Multi-modal input capture (voice,
    text, import)
2.  **Cataloging Engine** - Systematic content indexing with controlled
    vocabulary
3.  **Embedding Service** - Vector representation generation for
    semantic search
4.  **Storage Layer** - PostgreSQL + pgvector persistence
5.  **Serendipity Engine** - Cross-domain discovery and connection
    surfacing
6.  **Document Preparation Workspace** - Project setup and endpoint
    selection
7.  **Dialectical Editor** - Conversational collaboration interface with
    Hot/Warm/Cold context
8.  **Content Filter System** - Pluggable quality analysis framework
9.  **Endpoint Publication** - Format-specific output generation

### Component API Contracts

Each component exposes defined interfaces for integration:

#### 1. Content Collection Engine

**Input API:**

``` typescript
interface ContentCollectionInput {
  type: 'voice' | 'text' | 'import';
  data: string | File | AudioBlob;
  metadata?: {
    projectId: string;
    userId: string;
    timestamp: Date;
  };
}
```

**Output API:**

``` typescript
interface ContentCollectionOutput {
  rawContent: string;
  contentType: 'voice' | 'text' | 'import';
  wordCount: number;
  metadata: {
    captureTimestamp: Date;
    processingDuration: number;
  };
}
```

**Integration Points:** - Receives input from frontend UI (voice
recorder, text input, file upload) - Sends raw content to Cataloging
Engine - Sends raw content to Embedding Service - Stores raw content in
Storage Layer

**Error Handling:** - Voice transcription failures: Retry with
exponential backoff, fallback to manual text entry - File parsing
errors: Surface to user with clear error message, suggest supported
formats - Network failures: Queue for retry, notify user of offline
status

------------------------------------------------------------------------

#### 2. Cataloging Engine

**Input API:**

``` typescript
interface CatalogingInput {
  content: string;
  contentId: string;
  projectId: string;
  userId: string;
}
```

**Output API:**

``` typescript
interface CatalogingOutput {
  contentId: string;
  metadata: {
    primaryCategories: string[];
    secondaryTags: string[];
    controlledVocabulary: string[];
    extractedEntities: {
      type: 'person' | 'place' | 'concept' | 'event';
      value: string;
      confidence: number;
    }[];
  };
  processingTime: number;
}
```

**Processing Steps:** 1. Extract key concepts from content using Claude
API 2. Map concepts to controlled vocabulary hierarchy 3. Apply semantic
categorization 4. Extract named entities (people, places, events,
concepts) 5. Generate metadata tags for searchability

**Integration Points:** - Receives content from Content Collection
Engine - Sends metadata to Storage Layer for indexing - Metadata used by
Serendipity Engine for discovery

**Dependencies:** - Claude API for semantic analysis - Controlled
vocabulary database (hierarchical taxonomy) - Named entity recognition
patterns

**Error Handling:** - Claude API failures: Fallback to keyword-based
categorization - Vocabulary mapping errors: Use "uncategorized" bucket,
flag for manual review - Entity extraction failures: Continue without
entities, log for analysis

------------------------------------------------------------------------

#### 3. Embedding Service

**Input API:**

``` typescript
interface EmbeddingInput {
  content: string;
  contentId: string;
  chunkStrategy?: 'full' | 'paragraph' | 'sentence';
}
```

**Output API:**

``` typescript
interface EmbeddingOutput {
  contentId: string;
  embeddings: {
    chunkId: string;
    vector: number[]; // 1536-dimensional for OpenAI ada-002
    chunkText: string;
    startPosition: number;
    endPosition: number;
  }[];
  totalChunks: number;
  processingTime: number;
}
```

**Processing Steps:** 1. Chunk content based on strategy (default:
paragraph-level) 2. Generate embeddings via OpenAI API 3. Store vector
representations with chunk metadata 4. Return embedding references for
storage

**Integration Points:** - Receives content from Content Collection
Engine - Sends embeddings to Storage Layer (pgvector) - Embeddings
queried by Serendipity Engine

**Dependencies:** - OpenAI Embeddings API (text-embedding-ada-002) -
Chunking algorithm (paragraph/sentence boundaries)

**Error Handling:** - API rate limits: Queue and batch process,
implement exponential backoff - Embedding generation failures: Retry up
to 3 times, flag content for manual review - Large content handling:
Auto-chunk into smaller segments if \>8K tokens

## CHUNK 4 of 29: Storage Layer & Serendipity Engine Architecture

#### 4. Storage Layer (PostgreSQL + pgvector)

**Input API:**

``` typescript
interface StorageInput {
  operation: 'insert' | 'update' | 'query' | 'delete';
  table: string;
  data?: Record<string, any>;
  query?: {
    conditions: Record<string, any>;
    orderBy?: string;
    limit?: number;
  };
}
```

**Output API:**

``` typescript
interface StorageOutput {
  success: boolean;
  data?: Record<string, any>[];
  affectedRows?: number;
  error?: string;
}
```

**Database Schema (Key Tables):**

``` sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  subscription_tier VARCHAR(50) DEFAULT 'free'
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  endpoint_type VARCHAR(50), -- 'writer', 'entrepreneur', 'consultant', 'researcher'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Thought blobs (raw content capture)
CREATE TABLE thought_blobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  content_type VARCHAR(50), -- 'voice', 'text', 'import'
  word_count INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Metadata (from cataloging)
CREATE TABLE content_metadata (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID REFERENCES thought_blobs(id),
  primary_categories VARCHAR(100)[],
  secondary_tags VARCHAR(100)[],
  controlled_vocabulary VARCHAR(100)[],
  extracted_entities JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Vector embeddings
CREATE TABLE embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID REFERENCES thought_blobs(id),
  chunk_id VARCHAR(100),
  chunk_text TEXT,
  embedding vector(1536), -- pgvector extension
  start_position INTEGER,
  end_position INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Voice avatars
CREATE TABLE voice_avatars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  config JSONB NOT NULL, -- stores all slider values + exemplar text
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Conversations (dialectic history)
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  messages JSONB[], -- array of {role, content, timestamp}
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Documents (canonical output)
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  title VARCHAR(255),
  content TEXT,
  version INTEGER DEFAULT 1,
  endpoint_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Domain expertise repositories
CREATE TABLE domain_repositories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  source_type VARCHAR(50), -- 'manual', 'scraped', 'imported'
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Domain content
CREATE TABLE domain_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  repository_id UUID REFERENCES domain_repositories(id),
  title VARCHAR(255),
  content TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Domain embeddings (for serendipity)
CREATE TABLE domain_embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID REFERENCES domain_content(id),
  chunk_text TEXT,
  embedding vector(1536),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Integration Points:** - All components read/write through this layer -
pgvector extension enables similarity search for Serendipity Engine -
Supabase provides built-in auth, real-time subscriptions, storage

**Error Handling:** - Connection pooling to handle concurrent requests -
Transaction rollback on multi-step operation failures - Automatic retry
on deadlock detection - Database backup every 24 hours

------------------------------------------------------------------------

#### 5. Serendipity Engine

**Input API:**

``` typescript
interface SerendipityInput {
  queryType: 'similarity' | 'cluster' | 'discovery';
  sourceContentId?: string;
  sourceEmbedding?: number[];
  filters?: {
    projectIds?: string[];
    excludeCurrentProject?: boolean;
    timePeriod?: { start: Date; end: Date };
    minSimilarity?: number; // 0-1, default 0.7
  };
  limit?: number; // default 10
}
```

**Output API:**

``` typescript
interface SerendipityOutput {
  connections: {
    contentId: string;
    contentSnippet: string;
    similarity: number;
    metadata: {
      projectTitle: string;
      createdAt: Date;
      categories: string[];
    };
    explanation: string; // Why this connection matters
  }[];
  clusters?: {
    clusterId: string;
    theme: string;
    contentIds: string[];
    coherenceScore: number;
  }[];
}
```

**Processing Steps:**

1.  **Vector Similarity Search:**
    - Query pgvector for cosine similarity above threshold
    - Search across user's content AND domain expertise repositories
    - Return ranked results with similarity scores
2.  **Controlled Vocabulary Mapping:**
    - Map content categories to hierarchical taxonomy
    - Find related concepts through vocabulary relationships
    - Surface non-obvious connections (e.g., "ski dampening" → "wing
      cavitation")
3.  **Cluster Generation:**
    - Group related content blobs by theme
    - Use K-means or DBSCAN on embedding vectors
    - Generate human-readable cluster themes via Claude API
4.  **Explanation Generation:**
    - For each connection, generate brief explanation of why it's
      relevant
    - Use Claude API with source + target content as context
    - Return actionable insight, not just "these are similar"

**Domain Expertise Integration:**

The Serendipity Engine searches BOTH: - User's personal content (thought
blobs, documents, conversations) - Domain expertise repositories
(curated knowledge bases)

**Example Domain Repositories:** - DSM-5 diagnostic criteria (for
clinical diagnosis workflow) - Harvard Business Review case studies (for
entrepreneur endpoint) - Academic literature databases (for researcher
endpoint) - Industry-specific taxonomies (photography, architecture,
law, etc.)

**Repository Structure:**

``` typescript
interface DomainRepository {
  id: string;
  name: string;
  description: string;
  contentCount: number;
  lastUpdated: Date;
  accessControl: 'public' | 'private' | 'subscription';
}
```

**Integration Process:** 1. Content added to domain repository 2.
Embeddings generated automatically 3. Stored in domain_embeddings table
with repository linkage 4. Serendipity queries search user content +
relevant domain repos 5. Results indicate source (user vs. domain
knowledge)

**Integration Points:** - Receives queries from Document Preparation
Workspace - Receives queries from Dialectical Editor ("related blobs"
sidebar) - Queries Storage Layer for user content embeddings - Queries
domain_embeddings for expertise repository content - Returns results to
UI for user exploration

**Dependencies:** - pgvector for similarity search - Claude API for
cluster theme generation and explanations - Controlled vocabulary
database - Domain expertise repositories

**Error Handling:** - Large result sets: Paginate and return top N most
relevant - No similar content found: Return empty array, suggest
broadening filters - Domain repository unavailable: Fall back to user
content only - Embedding quality issues: Log for analysis, return
lower-confidence results

## CHUNK 5 of 29: Document Preparation & Dialectical Editor Architecture

#### 6. Document Preparation Workspace

**Input API:**

``` typescript
interface DocumentPrepInput {
  userId: string;
  action: 'browse_clusters' | 'create_new' | 'select_endpoint';
  serendipityQuery?: SerendipityInput;
  endpointType?: 'writer' | 'entrepreneur' | 'consultant' | 'researcher';
}
```

**Output API:**

``` typescript
interface DocumentPrepOutput {
  projectId: string;
  endpointConfig: {
    type: string;
    template: string;
    requiredFields: string[];
    defaultVoiceAvatar?: string;
  };
  relatedBlobs?: {
    contentId: string;
    snippet: string;
    relevance: number;
  }[];
}
```

**User Workflow:**

1.  **Discovery Phase:**
    - User triggers serendipity query
    - System surfaces clusters of related content
    - User browses blob clusters in UI
    - User selects blobs to include in new project
2.  **Endpoint Selection:**
    - User selects endpoint type: Writer, Entrepreneur, Consultant,
      Researcher
    - System loads appropriate template and configuration
    - System suggests default voice avatar based on endpoint
3.  **Project Initialization:**
    - Create new project record in database
    - Link selected blobs to project
    - Load endpoint-specific configuration
    - Initialize conversation history
    - Redirect to Dialectical Editor

**Endpoint Configurations:**

**Writer Endpoint:**

``` typescript
{
  type: 'writer',
  template: 'narrative_prose',
  requiredFields: ['target_audience', 'tone', 'length_target'],
  defaultVoiceAvatar: 'Creative Writer',
  outputFormat: 'markdown | docx',
  contentFilters: ['decorative_metaphor', 'place_anchoring', 'contextual_integrity']
}
```

**Entrepreneur Endpoint:**

``` typescript
{
  type: 'entrepreneur',
  template: 'business_plan',
  requiredFields: ['business_model', 'target_market', 'revenue_model'],
  defaultVoiceAvatar: 'CEO',
  outputFormat: 'scored_plan', // Uses Rookery 9-axis scoring
  contentFilters: ['market_validation', 'financial_logic', 'execution_feasibility']
}
```

**Consultant Endpoint:**

``` typescript
{
  type: 'consultant',
  template: 'strategic_memo',
  requiredFields: ['client_name', 'problem_statement', 'recommendation_format'],
  defaultVoiceAvatar: 'Strategy Consultant',
  outputFormat: 'executive_summary',
  contentFilters: ['recommendation_clarity', 'data_support', 'action_orientation']
}
```

**Researcher Endpoint:**

``` typescript
{
  type: 'researcher',
  template: 'research_documentation',
  requiredFields: ['research_question', 'methodology', 'literature_scope'],
  defaultVoiceAvatar: 'Academic Researcher',
  outputFormat: 'structured_paper',
  contentFilters: ['citation_completeness', 'methodology_rigor', 'conclusion_support']
}
```

**Integration Points:** - Receives serendipity results from Serendipity
Engine - Creates project records in Storage Layer - Passes configuration
to Dialectical Editor - Links related blobs to project context

------------------------------------------------------------------------

#### 7. Dialectical Editor

**Input API:**

``` typescript
interface DialecticalEditorInput {
  projectId: string;
  userId: string;
  userInput: {
    type: 'voice' | 'text';
    content: string | AudioBlob;
    timestamp: Date;
  };
  activeAvatarId: string;
}
```

**Output API:**

``` typescript
interface DialecticalEditorOutput {
  conversationId: string;
  response: {
    role: 'assistant';
    content: string;
    timestamp: Date;
  };
  contextUpdate?: {
    hotContext: string[];
    warmContext: string[];
    coldContextRetrieved: boolean;
  };
  filterResults?: ContentFilterOutput[];
}
```

**Hot/Warm/Cold Context Architecture:**

**Hot Context (Always Loaded):** - Current section being edited (\~2K
tokens) - Last 5 conversation exchanges (\~3K tokens) - Active voice
avatar configuration - Current document structure outline

**Warm Context (Always Available):** - Full document outline and section
summaries (\~2K tokens) - Project goals, audience, tone guidelines (\~1K
tokens) - Related blobs sidebar (snippets, \~2K tokens)

**Cold Context (Retrieved On-Demand):** - Full document content via
vector search when needed - Historical conversation turns beyond last
5 - Related projects and content via serendipity query - Domain
expertise repository content

**Context Management Strategy:**

``` typescript
// Total context budget: ~50K tokens (leaving 150K for response)
const contextAllocation = {
  hot: 8000,      // Current work + recent conversation
  warm: 5000,     // Document structure + project context
  cold: 10000,    // Retrieved content on-demand
  systemPrompt: 3000,
  voiceDirectives: 2000,
  reserved: 22000  // Safety buffer
};
```

**When to retrieve Cold Context:** - User references specific
chapter/section not in Hot - User asks about earlier conversation
topic - System detects potential contradiction with existing content -
User requests related content exploration

**Voice Translation Engine Integration:**

``` typescript
interface VoiceTranslationInput {
  content: string;
  avatarConfig: {
    formality: number;      // 1-10
    complexity: number;     // 1-10
    metaphorDensity: number; // 1-10
    sentenceLength: number; // 1-10
    emotionalTone: number;  // 1-10
    directness: number;     // 1-10
    technicalDepth: number; // 1-10
    humor: number;          // 1-10
    contractionUse: number; // 1-10
    passiveVoice: number;   // 1-10
    exemplars?: string[];   // Sample texts demonstrating desired voice
  };
}

interface VoiceTranslationOutput {
  promptDirectives: string; // Full voice instructions for Claude API
  estimatedTokens: number;
}
```

**Voice Avatar Switching Mid-Conversation:**

Users can switch voice avatars even within a single project: -
Introduction section: "CEO" avatar (formal, strategic) - Technical
section: "Engineer" avatar (precise, detailed) - Conclusion: "Creative
Writer" avatar (inspiring, metaphorical)

**Implementation:**

``` typescript
function switchAvatar(projectId: string, newAvatarId: string) {
  // Load new avatar configuration
  const newAvatar = await getVoiceAvatar(newAvatarId);
  
  // Update conversation context with avatar change marker
  await addConversationMessage({
    role: 'system',
    content: `[AVATAR_SWITCH: ${newAvatar.name}]`,
    metadata: { avatarId: newAvatarId }
  });
  
  // Apply new voice directives to next Claude API call
  return newAvatar;
}
```

**Bridge Layer (Related Blobs Sidebar):**

The sidebar continuously shows related content from: - Other sections of
current document - Other projects by this user - Domain expertise
repositories - Serendipity suggestions

**Sidebar Update Strategy:** - Updates every 10 conversation turns -
Updates when user explicitly requests discovery - Updates when new blobs
added to project - Never interrupts ongoing conversation

**Integration Points:** - Receives user input from frontend - Calls
Voice Translation Engine for prompt directives - Calls Claude API with
full context + directives - Calls Content Filter System when user
commits content - Updates conversation history in Storage Layer -
Queries Serendipity Engine for related blobs sidebar

**Dependencies:** - Claude API (conversational dialectic) - Voice
Translation Engine (voice preservation) - Content Filter System (quality
analysis) - Serendipity Engine (related content discovery) - Storage
Layer (conversation persistence)

**Error Handling:** - Claude API failures: Display error, allow retry,
preserve conversation state - Context window overflow: Auto-prune oldest
cold context, notify user - Voice avatar loading failures: Fall back to
default avatar, log error - Serendipity query failures: Continue without
sidebar updates, log error

## CHUNK 6 of 29: Content Filter System & Endpoint Publication

#### 8. Content Filter System

**Input API:**

``` typescript
interface ContentFilterInput {
  content: string;
  filterTypes: string[]; // e.g., ['decorative_metaphor', 'place_anchoring']
  voiceAvatarConfig?: VoiceAvatarConfig; // For voice-constrained filters
  contextualData?: {
    documentStructure?: string;
    previousSections?: string[];
  };
}
```

**Output API:**

``` typescript
interface ContentFilterOutput {
  filterId: string;
  filterName: string;
  findings: {
    location: { start: number; end: number }; // Character positions
    snippet: string;
    issue: string;
    confidence: number; // 0-1
    suggestion?: string;
    severity: 'info' | 'warning' | 'error';
  }[];
  overallScore?: number; // 0-100
  processingTime: number;
}
```

**Filter Architecture Types:**

**Type 1: Voice-Constrained Filters** - Filter logic depends on user's
voice profile - Example: Decorative Metaphor Detection checks against
avatar's metaphor inventory - Requires avatar config as input

**Type 2: Context-Only Filters** - Standalone pattern detection - No
voice dependency - Examples: Place Anchoring, Contextual Integrity

**Pluggable Filter Framework:**

``` typescript
interface ContentFilter {
  id: string;
  name: string;
  description: string;
  type: 'voice-constrained' | 'context-only';
  
  analyze(input: ContentFilterInput): Promise<ContentFilterOutput>;
  
  // Configuration
  confidenceThreshold: number; // Default 0.7
  isEnabled: boolean;
  priority: number; // Execution order
}
```

**Initial Filter Implementations:**

**Filter 1: Decorative Metaphor Detection (Type 1 - Voice-Constrained)**

**User Story:** As a user with a "low metaphor" voice avatar, I want the
system to flag metaphors that don't serve functional purpose, so I can
maintain my authentic voice.

**Acceptance Criteria:** - Detects metaphors in content using Claude API
semantic analysis - Compares detected metaphors against avatar's
metaphor density setting - Flags metaphors when density exceeds avatar
threshold by \>20% - Provides specific suggestions for literal
alternatives - Confidence score \>0.7 for flagged metaphors

**Technical Implementation:**

``` typescript
async function detectDecorativeMetaphors(
  content: string,
  avatarConfig: VoiceAvatarConfig
): Promise<ContentFilterOutput> {
  // Step 1: Extract metaphors via Claude API
  const metaphors = await extractMetaphors(content);
  
  // Step 2: Calculate metaphor density
  const wordCount = content.split(/\s+/).length;
  const metaphorDensity = (metaphors.length / wordCount) * 100;
  
  // Step 3: Compare to avatar threshold
  const avatarThreshold = avatarConfig.metaphorDensity * 2; // Scale 1-10 to percentage
  const exceeds = metaphorDensity > (avatarThreshold * 1.2);
  
  // Step 4: Analyze each metaphor for functionality
  const findings = [];
  for (const metaphor of metaphors) {
    const isFunctional = await isMetaphorFunctional(metaphor, content);
    if (!isFunctional && exceeds) {
      findings.push({
        location: metaphor.position,
        snippet: metaphor.text,
        issue: "Decorative metaphor doesn't serve functional purpose",
        confidence: metaphor.confidence,
        suggestion: await generateLiteralAlternative(metaphor.text),
        severity: 'warning'
      });
    }
  }
  
  return { filterId: 'decorative_metaphor', filterName: 'Decorative Metaphor Detection', findings };
}
```

**Database Schema:**

``` sql
CREATE TABLE filter_results (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  filter_id VARCHAR(100),
  findings JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Error Handling:** - Claude API failures: Skip filter, log error,
continue with other filters - Low confidence results: Flag for manual
review but still surface - Timeout (\>5 seconds): Cancel filter
execution, return partial results

------------------------------------------------------------------------

**Filter 2: Place Anchoring Analysis (Type 2 - Context-Only)**

**User Story:** As a writer, I want feedback on whether my narrative
maintains consistent place grounding, so readers don't get disoriented.

**Acceptance Criteria:** - Identifies all location references in
content - Tracks spatial continuity across sections - Flags abrupt
location shifts without transition - Suggests transition phrases where
needed - Works independently of voice avatar configuration

**Technical Implementation:**

``` typescript
async function analyzePlaceAnchoring(
  content: string,
  documentStructure?: string
): Promise<ContentFilterOutput> {
  // Step 1: Extract location references
  const locations = await extractLocationReferences(content);
  
  // Step 2: Map locations to document sections
  const locationMap = mapLocationsToSections(locations, documentStructure);
  
  // Step 3: Detect abrupt shifts
  const findings = [];
  for (let i = 1; i < locationMap.length; i++) {
    const prev = locationMap[i-1];
    const curr = locationMap[i];
    
    if (curr.location !== prev.location && !hasTransition(prev.section, curr.section)) {
      findings.push({
        location: curr.position,
        snippet: curr.snippet,
        issue: `Abrupt location shift from "${prev.location}" to "${curr.location}" without transition`,
        confidence: 0.85,
        suggestion: `Consider adding a transition like: "Meanwhile, in ${curr.location}..."`,
        severity: 'info'
      });
    }
  }
  
  return { filterId: 'place_anchoring', filterName: 'Place Anchoring Analysis', findings };
}
```

------------------------------------------------------------------------

**Filter 3: Contextual Integrity Check (Type 2 - Context-Only)**

**User Story:** As a writer working on long-form content, I want the
system to flag contradictions or inconsistencies, so my narrative
remains coherent.

**Acceptance Criteria:** - Detects factual contradictions across
sections - Flags character behavior inconsistencies - Identifies
timeline violations - Surfaces potential continuity errors - Provides
side-by-side comparison of contradictory statements

**Technical Implementation:**

``` typescript
async function checkContextualIntegrity(
  content: string,
  previousSections?: string[]
): Promise<ContentFilterOutput> {
  // Step 1: Extract factual claims from current content
  const claims = await extractFactualClaims(content);
  
  // Step 2: Search previous sections for contradictions
  const findings = [];
  for (const claim of claims) {
    const contradictions = await findContradictions(claim, previousSections);
    
    for (const contradiction of contradictions) {
      findings.push({
        location: claim.position,
        snippet: claim.text,
        issue: `Contradicts earlier statement: "${contradiction.text}"`,
        confidence: contradiction.confidence,
        suggestion: `Review these two statements for consistency`,
        severity: 'warning'
      });
    }
  }
  
  return { filterId: 'contextual_integrity', filterName: 'Contextual Integrity Check', findings };
}
```

**Integration Points:** - Called by Dialectical Editor when user commits
content to canonical document - Results displayed in UI (inline
highlights or sidebar panel) - User can dismiss findings or accept
suggestions - Filter sensitivity adjustable per user preference

**Dependencies:** - Claude API for semantic analysis - Document
structure data for context - Voice avatar configuration (for Type 1
filters only)

------------------------------------------------------------------------

#### 9. Endpoint Publication

**Input API:**

``` typescript
interface EndpointPublicationInput {
  documentId: string;
  endpointType: 'writer' | 'entrepreneur' | 'consultant' | 'researcher';
  outputFormat: 'markdown' | 'docx' | 'pdf' | 'audio' | 'clipboard';
  customTemplate?: string;
}
```

**Output API:**

``` typescript
interface EndpointPublicationOutput {
  success: boolean;
  outputUrl?: string; // For file downloads
  clipboardContent?: string;
  audioUrl?: string; // For TTS
  metadata: {
    wordCount: number;
    processingTime: number;
    formatApplied: string;
  };
}
```

**Endpoint-Specific Templates:**

**Writer Endpoint → Markdown/DOCX:** - Standard narrative prose format -
Chapter/section headings - Optional table of contents - Export to .md or
.docx

**Entrepreneur Endpoint → Scored Business Plan:** - Rookery 9-axis
scoring framework - Executive summary - Market analysis, financial
projections, execution plan - Score visualization (0-100 per axis) -
Export to PDF with scoring dashboard

**Consultant Endpoint → Strategic Memo:** - Executive summary (1-page) -
Problem statement - Analysis - Recommendations with action items -
Export to DOCX or PDF

**Researcher Endpoint → Structured Paper:** - Abstract - Introduction,
methodology, findings, conclusion - Bibliography/citations -
Appendices - Export to structured document format

**TTS Integration (ElevenLabs):**

``` typescript
async function generateAudio(
  content: string,
  voiceId: string = 'default'
): Promise<string> {
  const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech', {
    method: 'POST',
    headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY },
    body: JSON.stringify({
      text: content,
      voice_id: voiceId,
      model_id: 'eleven_monolingual_v1'
    })
  });
  
  const audioBlob = await response.blob();
  const audioUrl = await uploadToStorage(audioBlob);
  
  return audioUrl;
}
```

**Integration Points:** - Receives document from Dialectical Editor -
Applies endpoint-specific template - Generates output in requested
format - Returns download URL or clipboard content - Optionally
generates TTS audio

**Dependencies:** - Document template library - File generation
libraries (docx, pdf) - ElevenLabs API (TTS) - Storage service (for file
hosting)

**Error Handling:** - Template loading failures: Fall back to basic
markdown - File generation errors: Retry once, then surface error to
user - TTS API failures: Continue without audio, notify user - Large
documents: Chunk for TTS (max 5K words per request)

## CHUNK 7 of 29: Feature Specifications - Core Architecture Features

## Section 4: Feature Specifications

This section provides comprehensive specifications for all features in
the Mrs. Robbins platform, organized by architectural component. Each
feature includes: User Story, Detailed Acceptance Criteria, Technical
Implementation, Database Schema additions, API contracts, Integration
points, Error handling, and Dependencies.

------------------------------------------------------------------------

### FEATURE 1: Voice Translation Engine (CARD A1)

**Status:** ✅ Built and Validated

**User Story:** As a user, I want my voice avatar settings to produce
measurably different output, so I can maintain my authentic voice across
all generated content.

**Acceptance Criteria:** - Slider settings (1-10) for 10 parametric
variables map to specific Claude API directives - Formality slider 2
produces casual tone vs. slider 10 produces formal academic language -
Metaphor density slider controls frequency and complexity of metaphors
used - Statistical validation confirms \>80% distinguishability between
extreme slider settings - Voice directives integrate seamlessly into
Claude API calls without breaking conversation flow - Exemplar text
analysis extracts patterns and applies them to avatar configuration

**Technical Implementation:**

``` typescript
// Voice Translation Engine
interface VoiceAvatarConfig {
  formality: number;        // 1-10
  complexity: number;       // 1-10
  metaphorDensity: number;  // 1-10
  sentenceLength: number;   // 1-10
  emotionalTone: number;    // 1-10
  directness: number;       // 1-10
  technicalDepth: number;   // 1-10
  humor: number;            // 1-10
  contractionUse: number;   // 1-10
  passiveVoice: number;     // 1-10
  exemplars?: string[];
}

function getVoiceDirectives(config: VoiceAvatarConfig): string {
  const directives = [];
  
  // Formality mapping
  if (config.formality <= 3) {
    directives.push("Write conversationally, like texting a friend. Use casual language.");
  } else if (config.formality <= 7) {
    directives.push("Write in professional business tone. Balance formality with accessibility.");
  } else {
    directives.push("Write in formal academic language. Use precise terminology and complex sentence structures.");
  }
  
  // Metaphor density mapping
  if (config.metaphorDensity <= 3) {
    directives.push("Use literal, concrete language. Avoid metaphors unless absolutely necessary.");
  } else if (config.metaphorDensity <= 7) {
    directives.push("Use occasional metaphors when they clarify meaning.");
  } else {
    directives.push("Use rich, layered metaphors frequently. Make abstract concepts vivid through comparison.");
  }
  
  // [Additional mappings for other 8 parameters...]
  
  return directives.join("\n");
}
```

**Database Schema:**

``` sql
-- Already defined in voice_avatars table (see Section 3)
```

**API Contract:**

``` typescript
POST /api/voice/translate
Request: { content: string, avatarId: string }
Response: { promptDirectives: string, estimatedTokens: number }
```

**Integration Points:** - Called by Dialectical Editor before every
Claude API call - Avatar configuration loaded from voice_avatars table -
Directives prepended to conversation context

**Error Handling:** - Missing avatar config: Fall back to system default
avatar - Invalid slider values: Clamp to 1-10 range - Exemplar parsing
failures: Continue with parametric settings only

**Dependencies:** - Voice avatar configuration stored in database -
Claude API for applying directives

------------------------------------------------------------------------

### FEATURE 2: Cataloging Engine (CARD A2)

**Status:** ⚠️ Architecture Defined, Not Built

**User Story:** As a user with thousands of thought blobs, I want fast
content retrieval without reading every word, so I can find relevant
ideas quickly.

**Acceptance Criteria:** - Automatic categorization of content using
controlled vocabulary hierarchy - Semantic tagging extracts key concepts
and entities - Search queries return results in \<500ms across 1000+
documents - Hierarchical taxonomy supports multi-level categorization
(e.g., "Photography → Portraiture → Lighting Techniques") - Manual tag
override allowed for user-specific vocabulary - Category suggestions
based on content analysis with \>85% accuracy

**Technical Implementation:**

``` typescript
interface CatalogingService {
  async categorize(content: string, contentId: string): Promise<CatalogingOutput> {
    // Step 1: Extract key concepts via Claude API
    const concepts = await extractConcepts(content);
    
    // Step 2: Map to controlled vocabulary
    const vocabularyMatches = await mapToVocabulary(concepts);
    
    // Step 3: Extract entities (people, places, concepts, events)
    const entities = await extractEntities(content);
    
    // Step 4: Generate metadata tags
    const tags = await generateTags(concepts, entities);
    
    // Step 5: Store in database
    await storeMetadata({
      contentId,
      primaryCategories: vocabularyMatches.primary,
      secondaryTags: vocabularyMatches.secondary,
      controlledVocabulary: vocabularyMatches.all,
      extractedEntities: entities
    });
    
    return {
      contentId,
      metadata: {
        primaryCategories: vocabularyMatches.primary,
        secondaryTags: vocabularyMatches.secondary,
        controlledVocabulary: vocabularyMatches.all,
        extractedEntities: entities
      },
      processingTime: Date.now() - startTime
    };
  }
}
```

**Controlled Vocabulary Structure:**

``` typescript
interface ControlledVocabularyNode {
  id: string;
  term: string;
  parent?: string; // Parent node ID
  children: string[]; // Child node IDs
  synonyms: string[];
  relatedTerms: string[];
  description: string;
}

// Example hierarchy:
const vocabularyExample = {
  "photography": {
    children: ["portraiture", "landscape", "abstract"],
    synonyms: ["photo", "image-making"],
    relatedTerms: ["visual-arts", "imaging"]
  },
  "portraiture": {
    parent: "photography",
    children: ["lighting-techniques", "posing", "composition"],
    synonyms: ["portrait-photography"],
    relatedTerms: ["headshots", "environmental-portraits"]
  }
};
```

**Database Schema:**

``` sql
CREATE TABLE controlled_vocabulary (
  id UUID PRIMARY KEY,
  term VARCHAR(100) UNIQUE NOT NULL,
  parent_id UUID REFERENCES controlled_vocabulary(id),
  synonyms VARCHAR(100)[],
  related_terms VARCHAR(100)[],
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_vocabulary_term ON controlled_vocabulary(term);
CREATE INDEX idx_vocabulary_parent ON controlled_vocabulary(parent_id);

-- Metadata table already defined in Section 3 (content_metadata)
```

**API Contract:**

``` typescript
POST /api/catalog/categorize
Request: { content: string, contentId: string }
Response: CatalogingOutput

GET /api/catalog/vocabulary
Response: { nodes: ControlledVocabularyNode[] }

POST /api/catalog/vocabulary/add
Request: { term: string, parentId?: string, synonyms?: string[] }
Response: { vocabularyId: string }
```

**Integration Points:** - Called by Content Collection Engine after
content capture - Metadata stored in content_metadata table - Vocabulary
queried by Serendipity Engine for cross-domain mapping - User can
browse/search by category in UI

**Error Handling:** - Claude API failures: Fall back to keyword-based
categorization - Unknown concepts: Add to "uncategorized" bucket, flag
for manual review - Vocabulary mapping conflicts: Use highest-confidence
match, log ambiguity - Large content (\>10K words): Process in chunks,
aggregate results

**Dependencies:** - Claude API for concept extraction - Controlled
vocabulary database (hierarchical taxonomy) - Named entity recognition
(built into Claude prompts)

## CHUNK 8 of 29: Feature Specifications - Core Architecture (Continued)

### FEATURE 3: Serendipity Engine (CARD A3)

**Status:** ⚠️ Concept Clear, Architecture Defined

**User Story:** As a user exploring connections between disparate ideas,
I want the system to surface non-obvious relationships (like "ski
dampening math" = "wing cavitation physics"), so I can accelerate
breakthrough thinking moments.

**Acceptance Criteria:** - Vector similarity search across all user
content + domain repositories with \<500ms query time - Cosine
similarity threshold configurable (default 0.7 for high-quality
matches) - Cross-domain discoveries surface connections across unrelated
projects - Controlled vocabulary mapping finds semantic relationships
beyond keyword matching - Discovery profiles tunable (conservative
vs. exploratory) - Explanation generation describes WHY connections
matter, not just that they're similar - Integration with domain
expertise repositories (DSM-5, HBR case studies, etc.) - User rating
system tracks discovery value (\>70% rated "valuable")

**Technical Implementation:**

``` typescript
interface SerendipityEngine {
  async discover(input: SerendipityInput): Promise<SerendipityOutput> {
    // Step 1: Generate query embedding
    const queryEmbedding = await generateEmbedding(input.sourceContent);
    
    // Step 2: Vector similarity search
    const similarContent = await vectorSearch({
      embedding: queryEmbedding,
      threshold: input.filters?.minSimilarity || 0.7,
      limit: input.limit || 10,
      excludeProjectId: input.filters?.excludeCurrentProject ? input.sourceProjectId : undefined
    });
    
    // Step 3: Controlled vocabulary mapping
    const vocabularyConnections = await findVocabularyRelationships(
      input.sourceContent,
      similarContent
    );
    
    // Step 4: Generate explanations
    const connectionsWithExplanations = await Promise.all(
      similarContent.map(async (content) => ({
        ...content,
        explanation: await generateExplanation(input.sourceContent, content)
      }))
    );
    
    // Step 5: Search domain repositories
    const domainConnections = await searchDomainRepositories({
      embedding: queryEmbedding,
      repositoryIds: input.domainRepositoryIds || []
    });
    
    return {
      connections: [...connectionsWithExplanations, ...domainConnections],
      processingTime: Date.now() - startTime
    };
  }
}

async function generateExplanation(
  sourceContent: string,
  targetContent: string
): Promise<string> {
  const prompt = `Given these two pieces of content, explain in 1-2 sentences WHY this connection is valuable and what insight it provides:

Source: ${sourceContent.substring(0, 500)}
Target: ${targetContent.substring(0, 500)}

Focus on actionable insight, not just similarity.`;

  const response = await callClaudeAPI(prompt);
  return response;
}
```

**Domain Expertise Repository Integration:**

``` typescript
interface DomainRepository {
  id: string;
  name: string;
  description: string;
  contentCount: number;
  isPublic: boolean;
  accessControl: 'free' | 'subscription' | 'private';
}

// Example: DSM-5 Repository for Clinical Diagnosis Workflow
const dsm5Repository: DomainRepository = {
  id: 'dsm5',
  name: 'DSM-5 Diagnostic Criteria',
  description: 'Complete diagnostic criteria from DSM-5 for mental health conditions',
  contentCount: 500, // Number of diagnostic entries
  isPublic: true,
  accessControl: 'subscription'
};

// Search includes both user content AND domain repositories
async function searchDomainRepositories(query: {
  embedding: number[];
  repositoryIds: string[];
}): Promise<SerendipityConnection[]> {
  const results = await db.query(`
    SELECT dc.id, dc.title, dc.content, de.embedding <=> $1 as distance
    FROM domain_content dc
    JOIN domain_embeddings de ON dc.id = de.content_id
    WHERE de.repository_id = ANY($2)
    AND de.embedding <=> $1 < 0.3
    ORDER BY distance ASC
    LIMIT 5
  `, [query.embedding, query.repositoryIds]);
  
  return results.map(r => ({
    contentId: r.id,
    contentSnippet: r.content.substring(0, 200),
    similarity: 1 - r.distance,
    source: 'domain_repository',
    metadata: { title: r.title }
  }));
}
```

**Discovery Profiles:**

``` typescript
interface DiscoveryProfile {
  name: string;
  minSimilarity: number;
  maxResults: number;
  searchScope: 'current_project' | 'all_projects' | 'all_projects_plus_domain';
  vocabularyWeight: number; // 0-1, balance between vector similarity and vocabulary mapping
}

const profiles = {
  conservative: {
    name: 'Conservative',
    minSimilarity: 0.8,
    maxResults: 5,
    searchScope: 'current_project',
    vocabularyWeight: 0.3
  },
  balanced: {
    name: 'Balanced',
    minSimilarity: 0.7,
    maxResults: 10,
    searchScope: 'all_projects',
    vocabularyWeight: 0.5
  },
  exploratory: {
    name: 'Exploratory',
    minSimilarity: 0.6,
    maxResults: 20,
    searchScope: 'all_projects_plus_domain',
    vocabularyWeight: 0.7
  }
};
```

**Database Schema:**

``` sql
-- Domain repositories and content tables already defined in Section 3

-- Discovery history for learning
CREATE TABLE discovery_history (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  source_content_id UUID,
  discovered_content_id UUID,
  similarity_score DECIMAL(3,2),
  user_rating INTEGER, -- 1-5 stars
  was_useful BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_discovery_user ON discovery_history(user_id);
CREATE INDEX idx_discovery_rating ON discovery_history(user_rating);
```

**API Contract:**

``` typescript
POST /api/serendipity/discover
Request: SerendipityInput
Response: SerendipityOutput

POST /api/serendipity/rate
Request: { discoveryId: string, rating: number, wasUseful: boolean }
Response: { success: boolean }

GET /api/domain-repositories
Response: { repositories: DomainRepository[] }

POST /api/domain-repositories/:id/add-content
Request: { title: string, content: string, metadata?: object }
Response: { contentId: string }
```

**Integration Points:** - Called by Document Preparation Workspace for
content discovery - Called by Dialectical Editor for "related blobs"
sidebar - Queries user content embeddings in Storage Layer - Queries
domain repository embeddings - Uses Cataloging Engine metadata for
vocabulary mapping - Stores discovery ratings for machine learning
improvements

**Error Handling:** - No similar content found: Return empty array,
suggest broadening search - Vector search timeout: Return partial
results with warning - Domain repository unavailable: Continue with user
content only - Explanation generation failures: Return connections
without explanations - Embedding generation failures: Fall back to
keyword-based search

**Dependencies:** - pgvector for cosine similarity search - OpenAI
Embeddings API for vector generation - Claude API for explanation
generation - Controlled vocabulary database - Domain expertise
repositories

------------------------------------------------------------------------

### FEATURE 4: Hot/Warm/Cold Context Architecture (CARD A4)

**Status:** ⚠️ Architecture Defined, Not Built

**User Story:** As a user working on a 50,000-word novel, I want the
system to remember character traits from Chapter 3 while I'm editing
Chapter 7, without hitting token limits.

**Acceptance Criteria:** - Hot context (current section + recent
conversation) always loaded (\~8K tokens) - Warm context (document
outline + project goals) always available (\~5K tokens) - Cold context
(full document via vector search) retrieved on-demand (\~10K tokens) -
Total context budget managed within 50K tokens, leaving 150K for Claude
responses - Automatic pruning of old cold context when approaching
limits - User-triggered refresh of warm context when document structure
changes - System detects contradictions by comparing hot context against
cold context - Context retrieval happens within 200ms

**Technical Implementation:**

``` typescript
interface ContextManager {
  hotContext: string[];      // Current section + last 5 exchanges
  warmContext: string[];     // Document structure + project metadata
  coldContext: string[];     // Retrieved on-demand
  totalTokens: number;
  
  async loadContext(projectId: string): Promise<void> {
    // Load hot context
    this.hotContext = await this.loadHotContext(projectId);
    
    // Load warm context
    this.warmContext = await this.loadWarmContext(projectId);
    
    // Cold context loaded on-demand, not at initialization
    this.coldContext = [];
    
    this.totalTokens = this.calculateTokens();
  }
  
  async loadHotContext(projectId: string): Promise<string[]> {
    const conversation = await getConversation(projectId);
    const lastFive = conversation.messages.slice(-5);
    const currentSection = await getCurrentSection(projectId);
    
    return [
      currentSection,
      ...lastFive.map(m => `${m.role}: ${m.content}`)
    ];
  }
  
  async loadWarmContext(projectId: string): Promise<string[]> {
    const project = await getProject(projectId);
    const documentOutline = await getDocumentOutline(project.documentId);
    
    return [
      `Project: ${project.title}`,
      `Endpoint: ${project.endpointType}`,
      `Goals: ${project.goals}`,
      `Audience: ${project.targetAudience}`,
      `Tone: ${project.tone}`,
      `Document Outline:\n${documentOutline}`
    ];
  }
  
  async retrieveColdContext(query: string): Promise<string[]> {
    // Vector search for relevant document sections
    const queryEmbedding = await generateEmbedding(query);
    const relevantSections = await vectorSearch({
      embedding: queryEmbedding,
      documentId: this.projectId,
      limit: 3
    });
    
    // Add to cold context
    this.coldContext = relevantSections.map(s => s.content);
    this.totalTokens = this.calculateTokens();
    
    // If over budget, prune oldest cold context
    if (this.totalTokens > 50000) {
      this.pruneColdContext();
    }
    
    return this.coldContext;
  }
  
  pruneColdContext(): void {
    while (this.totalTokens > 50000 && this.coldContext.length > 0) {
      this.coldContext.shift(); // Remove oldest
      this.totalTokens = this.calculateTokens();
    }
  }
}
```

**When to Retrieve Cold Context:**

``` typescript
function shouldRetrieveColdContext(userInput: string): boolean {
  const triggers = [
    // User references specific section not in hot context
    /chapter \d+/i,
    /section \d+/i,
    /earlier (in|when) (the|this)/i,
    
    // User asks about earlier conversation
    /you (said|mentioned|told me)/i,
    /we (discussed|talked about)/i,
    
    // User requests related content
    /(find|show me|what about) (related|similar)/i,
  ];
  
  return triggers.some(pattern => pattern.test(userInput));
}
```

**Database Schema:**

``` sql
-- Document sections for granular retrieval
CREATE TABLE document_sections (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  section_number INTEGER,
  title VARCHAR(255),
  content TEXT,
  embedding vector(1536),
  word_count INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_section_document ON document_sections(document_id);
CREATE INDEX idx_section_embedding ON document_sections USING ivfflat (embedding vector_cosine_ops);
```

**API Contract:**

``` typescript
GET /api/context/load
Request: { projectId: string }
Response: { hotContext: string[], warmContext: string[], totalTokens: number }

POST /api/context/retrieve-cold
Request: { projectId: string, query: string }
Response: { coldContext: string[], totalTokens: number }

POST /api/context/refresh-warm
Request: { projectId: string }
Response: { warmContext: string[] }
```

**Integration Points:** - Loaded by Dialectical Editor at session
start - Cold context retrieved on-demand during conversation - Hot
context updated after every user/assistant exchange - Warm context
refreshed when document structure changes - All context passed to Claude
API with each request

**Error Handling:** - Context over budget: Auto-prune cold context,
notify user - Vector search failures: Continue with hot + warm only -
Section retrieval failures: Log error, return partial context -
Embedding generation timeouts: Skip cold context retrieval

**Dependencies:** - pgvector for section similarity search - OpenAI
Embeddings API - Document sectioning algorithm - Token counting utility

## CHUNK 9 of 29: Feature Specifications - Core Architecture & Workflow Features

### FEATURE 5: Vector Embedding Storage & Search (CARD A5)

**Status:** ⚠️ Technical Approach Validated, Not Implemented

**User Story:** As a user, I want to find content semantically related
to "villain personality" even if those exact words don't appear, so I
can discover connections beyond keyword matching.

**Acceptance Criteria:** - All content automatically embedded using
OpenAI text-embedding-ada-002 - Embeddings stored in pgvector with
cosine similarity indexing - Search queries return results in \<500ms
across 10,000+ documents - Semantic search finds related content without
exact keyword matching - Batch embedding processing for large content
imports - Incremental updates (only re-embed changed content) - Support
for paragraph-level and document-level embeddings

**Technical Implementation:**

``` typescript
interface EmbeddingService {
  async embedContent(content: string, contentId: string): Promise<void> {
    // Chunk content by paragraphs
    const chunks = this.chunkByParagraphs(content);
    
    // Generate embeddings for each chunk
    const embeddings = await Promise.all(
      chunks.map(async (chunk, index) => ({
        chunkId: `${contentId}_${index}`,
        chunkText: chunk.text,
        embedding: await this.generateEmbedding(chunk.text),
        startPosition: chunk.start,
        endPosition: chunk.end
      }))
    );
    
    // Store in database
    await this.storeEmbeddings(contentId, embeddings);
  }
  
  async generateEmbedding(text: string): Promise<number[]> {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'text-embedding-ada-002',
        input: text
      })
    });
    
    const data = await response.json();
    return data.data[0].embedding; // 1536-dimensional vector
  }
  
  async similaritySearch(query: string, limit: number = 10): Promise<SearchResult[]> {
    const queryEmbedding = await this.generateEmbedding(query);
    
    const results = await db.query(`
      SELECT 
        e.content_id,
        e.chunk_text,
        e.embedding <=> $1 as distance,
        cm.primary_categories,
        tb.created_at
      FROM embeddings e
      JOIN thought_blobs tb ON e.content_id = tb.id
      LEFT JOIN content_metadata cm ON e.content_id = cm.content_id
      WHERE e.embedding <=> $1 < 0.3
      ORDER BY distance ASC
      LIMIT $2
    `, [queryEmbedding, limit]);
    
    return results.map(r => ({
      contentId: r.content_id,
      snippet: r.chunk_text,
      similarity: 1 - r.distance,
      categories: r.primary_categories,
      createdAt: r.created_at
    }));
  }
}
```

**Chunking Strategy:**

``` typescript
function chunkByParagraphs(content: string): Chunk[] {
  const paragraphs = content.split(/\n\n+/);
  let position = 0;
  
  return paragraphs.map(text => {
    const start = position;
    const end = position + text.length;
    position = end + 2; // Account for \n\n
    
    return { text, start, end };
  });
}
```

**Batch Processing for Large Imports:**

``` typescript
async function batchEmbedDocuments(documents: Document[]): Promise<void> {
  const BATCH_SIZE = 10;
  const batches = chunk(documents, BATCH_SIZE);
  
  for (const batch of batches) {
    await Promise.all(
      batch.map(doc => embedContent(doc.content, doc.id))
    );
    
    // Rate limiting: wait 1 second between batches
    await sleep(1000);
  }
}
```

**Database Schema:**

``` sql
-- Embeddings table already defined in Section 3

-- Add index for fast similarity search
CREATE INDEX idx_embeddings_ivfflat 
ON embeddings 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
```

**API Contract:**

``` typescript
POST /api/embeddings/generate
Request: { content: string, contentId: string }
Response: { embeddingCount: number, processingTime: number }

POST /api/embeddings/search
Request: { query: string, limit?: number, filters?: object }
Response: { results: SearchResult[], totalFound: number }

POST /api/embeddings/batch
Request: { documents: { id: string, content: string }[] }
Response: { processed: number, failed: number }
```

**Integration Points:** - Called automatically when new content added
via Content Collection Engine - Queried by Serendipity Engine for
discovery - Queried by Hot/Warm/Cold Context Manager for section
retrieval - Queried by search UI

**Error Handling:** - OpenAI API rate limits: Queue and retry with
exponential backoff - Embedding generation failures: Retry up to 3
times, log for manual review - Large content (\>8K tokens per chunk):
Auto-split into smaller segments - Database insertion failures: Rollback
and retry transaction

**Dependencies:** - OpenAI Embeddings API (text-embedding-ada-002) -
PostgreSQL with pgvector extension - Chunking algorithm (paragraph
boundaries)

------------------------------------------------------------------------

### FEATURE 6: Voice Avatar Persistence (CARD A6)

**Status:** ⚠️ Schema Defined, Save/Load UI Not Built

**User Story:** As a user, I want to save my "Songwriter" voice profile
(Emotional: 9, Metaphor: 8) and reuse it across projects, so I don't
have to reconfigure sliders every time.

**Acceptance Criteria:** - Voice avatars saved to database with unique
IDs - Avatar configuration includes all 10 parametric sliders + exemplar
text - Load avatar by ID or name instantly (\<100ms) - Set default
avatar per user account - Switch avatars mid-project without losing
conversation history - Export/import avatar configurations as JSON -
Share avatars with other users (future: avatar marketplace)

**Technical Implementation:**

``` typescript
interface VoiceAvatarService {
  async saveAvatar(
    userId: string,
    name: string,
    config: VoiceAvatarConfig
  ): Promise<string> {
    const avatarId = uuid();
    
    await db.query(`
      INSERT INTO voice_avatars (id, user_id, name, config, is_default)
      VALUES ($1, $2, $3, $4, $5)
    `, [avatarId, userId, name, JSON.stringify(config), false]);
    
    return avatarId;
  }
  
  async loadAvatar(avatarId: string): Promise<VoiceAvatar> {
    const result = await db.query(`
      SELECT id, user_id, name, config, is_default, created_at
      FROM voice_avatars
      WHERE id = $1
    `, [avatarId]);
    
    if (result.rows.length === 0) {
      throw new Error('Avatar not found');
    }
    
    return {
      id: result.rows[0].id,
      userId: result.rows[0].user_id,
      name: result.rows[0].name,
      config: JSON.parse(result.rows[0].config),
      isDefault: result.rows[0].is_default,
      createdAt: result.rows[0].created_at
    };
  }
  
  async setDefaultAvatar(userId: string, avatarId: string): Promise<void> {
    // Unset existing default
    await db.query(`
      UPDATE voice_avatars
      SET is_default = false
      WHERE user_id = $1
    `, [userId]);
    
    // Set new default
    await db.query(`
      UPDATE voice_avatars
      SET is_default = true
      WHERE id = $1 AND user_id = $2
    `, [avatarId, userId]);
  }
  
  async exportAvatar(avatarId: string): Promise<string> {
    const avatar = await this.loadAvatar(avatarId);
    return JSON.stringify({
      name: avatar.name,
      config: avatar.config,
      exportedAt: new Date().toISOString(),
      version: '1.0'
    }, null, 2);
  }
  
  async importAvatar(userId: string, avatarJson: string): Promise<string> {
    const imported = JSON.parse(avatarJson);
    return await this.saveAvatar(userId, imported.name, imported.config);
  }
}
```

**Preset Avatar Library:**

``` typescript
const PRESET_AVATARS: Record<string, VoiceAvatarConfig> = {
  'Creative Writer': {
    formality: 4,
    complexity: 6,
    metaphorDensity: 8,
    sentenceLength: 7,
    emotionalTone: 8,
    directness: 5,
    technicalDepth: 4,
    humor: 6,
    contractionUse: 7,
    passiveVoice: 3,
    exemplars: []
  },
  'CEO': {
    formality: 8,
    complexity: 7,
    metaphorDensity: 3,
    sentenceLength: 6,
    emotionalTone: 5,
    directness: 8,
    technicalDepth: 6,
    humor: 3,
    contractionUse: 2,
    passiveVoice: 4,
    exemplars: []
  },
  'Songwriter': {
    formality: 2,
    complexity: 5,
    metaphorDensity: 9,
    sentenceLength: 4,
    emotionalTone: 9,
    directness: 6,
    technicalDepth: 3,
    humor: 7,
    contractionUse: 9,
    passiveVoice: 2,
    exemplars: []
  },
  // Additional presets...
};
```

**Database Schema:**

``` sql
-- voice_avatars table already defined in Section 3

-- Add unique constraint on user + name
ALTER TABLE voice_avatars
ADD CONSTRAINT unique_user_avatar_name UNIQUE (user_id, name);
```

**API Contract:**

``` typescript
POST /api/avatars/save
Request: { userId: string, name: string, config: VoiceAvatarConfig }
Response: { avatarId: string }

GET /api/avatars/:avatarId
Response: VoiceAvatar

GET /api/avatars/list
Request: { userId: string }
Response: { avatars: VoiceAvatar[] }

PUT /api/avatars/:avatarId/set-default
Request: { userId: string }
Response: { success: boolean }

GET /api/avatars/:avatarId/export
Response: { json: string }

POST /api/avatars/import
Request: { userId: string, avatarJson: string }
Response: { avatarId: string }

GET /api/avatars/presets
Response: { presets: Record<string, VoiceAvatarConfig> }
```

**Integration Points:** - Called by Voice Translation Engine to load
avatar config - UI allows user to browse/select avatars - Dialect Editor
supports mid-project avatar switching - Export/import for backup and
sharing

**Error Handling:** - Avatar not found: Return default system avatar -
Duplicate name: Append number suffix (e.g., "CEO (2)") - Invalid JSON
import: Validate schema, return clear error - Database save failures:
Retry transaction, rollback on failure

**Dependencies:** - Database for persistent storage - UUID generation
for avatar IDs - JSON validation for import/export

------------------------------------------------------------------------

### FEATURE 7: Database Schema & Infrastructure (CARD A7)

**Status:** ✅ Schema Designed and Deployed to Supabase

**User Story:** As a developer, I need comprehensive database
infrastructure that supports all system components, so data persists
reliably across sessions.

**Acceptance Criteria:** - All tables defined with proper relationships
and constraints - Foreign key relationships enforce data integrity -
Indexes optimize query performance (\<100ms for common queries) -
pgvector extension installed and configured - Row-level security
policies protect user data - Automated backups every 24 hours -
Migration scripts for schema updates

**Technical Implementation:**

Complete database schema provided in Section 3 (Storage Layer). Key
tables: - users - projects - thought_blobs - content_metadata -
embeddings - voice_avatars - conversations - documents -
domain_repositories - domain_content - domain_embeddings

**Row-Level Security (Supabase):**

``` sql
-- Enable RLS on all user-specific tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE thought_blobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE voice_avatars ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY "Users can view own projects"
ON projects FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own projects"
ON projects FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects"
ON projects FOR UPDATE
USING (auth.uid() = user_id);

-- Similar policies for other tables...
```

**Migration Scripts:**

``` typescript
// migrations/001_initial_schema.sql
// migrations/002_add_domain_repositories.sql
// migrations/003_add_discovery_history.sql
// etc.

async function runMigrations() {
  const migrations = await loadMigrationFiles();
  
  for (const migration of migrations) {
    const isApplied = await isMigrationApplied(migration.id);
    
    if (!isApplied) {
      await runMigration(migration);
      await recordMigration(migration.id);
    }
  }
}
```

**Integration Points:** - All system components read/write through this
layer - Supabase provides built-in auth integration - Real-time
subscriptions for live updates (future)

**Error Handling:** - Connection pooling prevents exhaustion -
Transaction rollback on errors - Deadlock detection and retry - Query
timeout (5 seconds max)

**Dependencies:** - Supabase (managed PostgreSQL + pgvector) - Migration
management system - Backup automation

## CHUNK 10 of 29: Feature Specifications - Auth, Filters, Voice Analysis

### FEATURE 8: Authentication System (CARD A8)

**Status:** ✅ Configured, Not Tested in Production

**User Story:** As a user, I want secure access to my personal projects
and avatars, so my data remains private.

**Acceptance Criteria:** - Email + password authentication - OAuth
support (Google, GitHub) - Password reset via email - Session management
with secure tokens - Two-factor authentication (future) - Role-based
access control (admin vs. user)

**Technical Implementation:**

``` typescript
// Supabase Auth handles most functionality
interface AuthService {
  async signUp(email: string, password: string): Promise<User> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });
    
    if (error) throw error;
    return data.user;
  }
  
  async signIn(email: string, password: string): Promise<Session> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data.session;
  }
  
  async signInWithOAuth(provider: 'google' | 'github'): Promise<void> {
    const { error } = await supabase.auth.signInWithOAuth({
      provider
    });
    
    if (error) throw error;
  }
  
  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }
  
  async resetPassword(email: string): Promise<void> {
    await supabase.auth.resetPasswordForEmail(email);
  }
}
```

**Integration Points:** - All API routes protected with auth
middleware - Row-level security enforces data access - Frontend
redirects unauthenticated users to login

**Error Handling:** - Invalid credentials: Clear error message - Network
failures: Retry with exponential backoff - Session expiration:
Auto-refresh or redirect to login

**Dependencies:** - Supabase Auth - Email service for password reset

------------------------------------------------------------------------

### FEATURE 9: Content Filter System Infrastructure (CARD A9)

**Status:** ⚠️ Architecture Defined in Detail, Not Implemented

**User Story:** As a platform developer, I need a pluggable filter
architecture so new quality checks can be added without rebuilding
existing systems.

**Acceptance Criteria:** - Unified input/output interface for all
filters - Filters register dynamically with the system - Each filter
returns structured analysis with confidence scores - Filters execute
independently (parallelizable) - User can enable/disable individual
filters - Filter sensitivity adjustable per user - Results cached to
avoid redundant analysis

**Technical Implementation:**

``` typescript
interface ContentFilter {
  id: string;
  name: string;
  description: string;
  type: 'voice-constrained' | 'context-only';
  isEnabled: boolean;
  confidenceThreshold: number;
  
  analyze(input: ContentFilterInput): Promise<ContentFilterOutput>;
}

class FilterRegistry {
  private filters: Map<string, ContentFilter> = new Map();
  
  register(filter: ContentFilter): void {
    this.filters.set(filter.id, filter);
  }
  
  async runFilters(
    content: string,
    filterIds: string[],
    avatarConfig?: VoiceAvatarConfig
  ): Promise<ContentFilterOutput[]> {
    const enabledFilters = filterIds
      .map(id => this.filters.get(id))
      .filter(f => f && f.isEnabled);
    
    // Run filters in parallel
    const results = await Promise.all(
      enabledFilters.map(filter => 
        filter.analyze({
          content,
          filterTypes: [filter.id],
          voiceAvatarConfig: avatarConfig
        })
      )
    );
    
    return results;
  }
}
```

**Filter Caching:**

``` typescript
class FilterCache {
  private cache: Map<string, ContentFilterOutput> = new Map();
  
  getCacheKey(content: string, filterId: string): string {
    return `${filterId}_${hashContent(content)}`;
  }
  
  get(content: string, filterId: string): ContentFilterOutput | null {
    const key = this.getCacheKey(content, filterId);
    const cached = this.cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < 3600000) { // 1 hour TTL
      return cached;
    }
    
    return null;
  }
  
  set(content: string, filterId: string, result: ContentFilterOutput): void {
    const key = this.getCacheKey(content, filterId);
    this.cache.set(key, { ...result, timestamp: Date.now() });
  }
}
```

**Integration Points:** - Called by Dialectical Editor when user commits
content - Results displayed in UI sidebar - User preferences stored in
database

**Dependencies:** - Claude API (for semantic analysis) - Filter
implementations (Features 1-3 in Chunk 6)

------------------------------------------------------------------------

### FEATURE 10: Bidirectional Voice Analysis Engine (CARD A10)

**Status:** ⚠️ Concept Defined, Implementation Undefined

**User Story:** As a user, I want to paste my best writing and have the
system automatically tune my avatar parameters, so I don't have to guess
slider positions.

**Acceptance Criteria:** - Analyze sample text (500+ words) and extract
voice parameters - Return parameter values (1-10) for all 10 avatar
settings - Provide confidence scores per parameter (some may not be
detectable) - "Apply to Avatar" button instantly configures sliders -
Compare multiple samples to find average voice profile - Statistical
validation: \>70% accuracy on parameter detection

**Technical Implementation:**

``` typescript
interface VoiceAnalysisService {
  async analyzeText(sampleText: string): Promise<VoiceAnalysisResult> {
    const analysis = await analyzeWithClaude(sampleText);
    
    return {
      parameters: {
        formality: analysis.formality,
        complexity: analysis.complexity,
        metaphorDensity: analysis.metaphorDensity,
        sentenceLength: analysis.sentenceLength,
        emotionalTone: analysis.emotionalTone,
        directness: analysis.directness,
        technicalDepth: analysis.technicalDepth,
        humor: analysis.humor,
        contractionUse: analysis.contractionUse,
        passiveVoice: analysis.passiveVoice
      },
      confidence: {
        formality: analysis.formalityConfidence,
        complexity: analysis.complexityConfidence,
        // ... confidence scores for each parameter
      },
      sampleWordCount: sampleText.split(/\s+/).length
    };
  }
  
  async analyzeWithClaude(text: string): Promise<any> {
    const prompt = `Analyze this writing sample and extract voice parameters on a 1-10 scale:

Text: ${text}

Return JSON with these fields:
- formality: 1 (very casual) to 10 (very formal)
- complexity: 1 (simple) to 10 (complex)
- metaphorDensity: 1 (literal) to 10 (highly metaphorical)
- sentenceLength: 1 (short) to 10 (long)
- emotionalTone: 1 (neutral) to 10 (very emotional)
- directness: 1 (indirect) to 10 (very direct)
- technicalDepth: 1 (general) to 10 (highly technical)
- humor: 1 (serious) to 10 (humorous)
- contractionUse: 1 (none) to 10 (frequent)
- passiveVoice: 1 (all active) to 10 (mostly passive)

Also provide confidence scores (0-1) for each parameter.`;

    const response = await callClaudeAPI(prompt);
    return JSON.parse(response);
  }
}
```

**Statistical Text Analysis:**

``` typescript
function measureTextStatistics(text: string): TextStatistics {
  const words = text.split(/\s+/);
  const sentences = text.split(/[.!?]+/);
  const contractions = text.match(/\w+'\w+/g) || [];
  
  return {
    wordCount: words.length,
    sentenceCount: sentences.length,
    avgSentenceLength: words.length / sentences.length,
    contractionFrequency: (contractions.length / words.length) * 100,
    avgWordLength: words.reduce((sum, w) => sum + w.length, 0) / words.length,
    passiveVoiceCount: countPassiveVoice(text)
  };
}

function countPassiveVoice(text: string): number {
  const passivePatterns = [
    /\b(is|are|was|were|been|being)\s+\w+ed\b/gi,
    /\b(is|are|was|were|been|being)\s+\w+en\b/gi
  ];
  
  let count = 0;
  passivePatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) count += matches.length;
  });
  
  return count;
}
```

**Research Validation:**

Before full implementation, run validation study: 1. Collect 100 writing
samples with known authors 2. Extract parameters using analysis engine
3. Generate new text using extracted parameters 4. Blind test: can
humans distinguish original from generated? 5. Target: \>70% accuracy
means parameters capture authentic voice

**Database Schema:**

``` sql
CREATE TABLE voice_analysis_history (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  sample_text TEXT,
  extracted_parameters JSONB,
  confidence_scores JSONB,
  applied_to_avatar_id UUID REFERENCES voice_avatars(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**API Contract:**

``` typescript
POST /api/voice/analyze
Request: { sampleText: string }
Response: VoiceAnalysisResult

POST /api/voice/apply-analysis
Request: { analysisId: string, avatarId: string }
Response: { avatarId: string, updatedConfig: VoiceAvatarConfig }
```

**Integration Points:** - Called from Voice Avatar configurator UI -
Results can be applied directly to avatar - Analysis history stored for
future comparison

**Error Handling:** - Claude API failures: Retry with exponential
backoff - Low confidence results: Flag parameters as "uncertain" -
Sample too short (\<500 words): Request longer sample

**Dependencies:** - Claude API for semantic analysis - Statistical text
analysis utilities - Voice Avatar persistence

------------------------------------------------------------------------

### FEATURE 11: Configurable Endpoint System (CARD A11)

**Status:** ⚠️ Concept Validated, Architecture Undefined

**User Story:** As an entrepreneur, I want the same dialectic engines to
produce a scored business plan instead of prose, so I don't need
separate tools for different output types.

**Acceptance Criteria:** - Single dialectic process supports multiple
output formats - Endpoint templates for: Writer, Entrepreneur,
Consultant, Researcher - Template selection at project creation -
Template switching mid-project possible - Each template defines required
fields and output structure - Rookery 9-axis scoring integrated for
Entrepreneur endpoint - Export formats customized per endpoint (MD,
DOCX, PDF, scored plan)

**Technical Implementation:**

``` typescript
interface EndpointTemplate {
  id: string;
  name: string;
  description: string;
  requiredFields: {
    name: string;
    type: 'text' | 'select' | 'multiselect' | 'number';
    label: string;
    options?: string[];
  }[];
  outputStructure: {
    sections: string[];
    format: 'narrative' | 'structured' | 'scored';
  };
  defaultVoiceAvatar: string;
  exportFormats: string[];
}

const ENDPOINT_TEMPLATES: Record<string, EndpointTemplate> = {
  writer: {
    id: 'writer',
    name: 'Writer',
    description: 'Narrative prose for creative writing, articles, blog posts',
    requiredFields: [
      { name: 'targetAudience', type: 'text', label: 'Target Audience' },
      { name: 'tone', type: 'select', label: 'Tone', options: ['Formal', 'Casual', 'Academic'] },
      { name: 'lengthTarget', type: 'number', label: 'Target Word Count' }
    ],
    outputStructure: {
      sections: ['Introduction', 'Body', 'Conclusion'],
      format: 'narrative'
    },
    defaultVoiceAvatar: 'Creative Writer',
    exportFormats: ['markdown', 'docx', 'pdf', 'audio']
  },
  entrepreneur: {
    id: 'entrepreneur',
    name: 'Entrepreneur',
    description: 'Business plan with Rookery 9-axis scoring',
    requiredFields: [
      { name: 'businessModel', type: 'text', label: 'Business Model' },
      { name: 'targetMarket', type: 'text', label: 'Target Market' },
      { name: 'revenueModel', type: 'text', label: 'Revenue Model' }
    ],
    outputStructure: {
      sections: [
        'Executive Summary',
        'Market Analysis',
        'Product/Service',
        'Financial Projections',
        'Execution Plan'
      ],
      format: 'scored'
    },
    defaultVoiceAvatar: 'CEO',
    exportFormats: ['pdf_scored', 'docx']
  },
  // consultant and researcher templates...
};
```

**Rookery 9-Axis Scoring Integration:**

``` typescript
interface Rookery9AxisScore {
  axes: {
    marketTiming: number;          // 0-100
    competitivePosition: number;   // 0-100
    financialViability: number;    // 0-100
    executionFeasibility: number;  // 0-100
    scalabilityPotential: number;  // 0-100
    teamCapability: number;        // 0-100
    customerValidation: number;    // 0-100
    technicalInnovation: number;   // 0-100
    marketSize: number;            // 0-100
  };
  overallScore: number; // 0-100
  strengths: string[];
  weaknesses: string[];
}

async function generateRookeryScore(businessPlan: string): Promise<Rookery9AxisScore> {
  const prompt = `Analyze this business plan using the Rookery 9-axis framework. Score each axis 0-100:

Business Plan: ${businessPlan}

Return JSON with scores for:
- marketTiming
- competitivePosition
- financialViability
- executionFeasibility
- scalabilityPotential
- teamCapability
- customerValidation
- technicalInnovation
- marketSize

Also provide overallScore, strengths array, weaknesses array.`;

  const response = await callClaudeAPI(prompt);
  return JSON.parse(response);
}
```

**Integration Points:** - Endpoint selected at project creation
(Document Preparation Workspace) - Template determines dialectic prompts
and output structure - Endpoint Publication applies template formatting

**Dependencies:** - Template library - Scoring frameworks (Rookery
9-axis) - Export format generators

## CHUNK 11 of 29: Feature Specifications - Workflow & Interaction Features

### FEATURE 12: Dialectic Conversation Interface (CARD B1)

**Status:** ⚠️ Core Pattern Defined, UI Not Built

**User Story:** As a user, I want to have a back-and-forth conversation
where the system helps me organize my thoughts, NOT just write for me.

**Acceptance Criteria:** - Thesis → Antithesis → Synthesis loop
implemented - System never generates full documents without user
direction - Each exchange builds on previous conversation context - User
can accept, reject, or refine system suggestions - Conversation history
preserved for entire project - Ability to roll back to earlier
conversation state

**Technical Implementation:**

``` typescript
interface DialecticConversation {
  async processUserInput(
    projectId: string,
    userInput: string,
    avatarId: string
  ): Promise<AssistantResponse> {
    // Load full conversation history
    const conversation = await getConversation(projectId);
    
    // Load context
    const context = await loadContext(projectId);
    
    // Load voice avatar
    const avatar = await getVoiceAvatar(avatarId);
    const voiceDirectives = getVoiceDirectives(avatar.config);
    
    // Build Claude prompt
    const prompt = this.buildDialecticPrompt({
      conversation: conversation.messages,
      context,
      voiceDirectives,
      userInput
    });
    
    // Call Claude API
    const response = await callClaudeAPI(prompt);
    
    // Save to conversation history
    await saveConversationTurn(projectId, {
      role: 'user',
      content: userInput,
      timestamp: new Date()
    });
    
    await saveConversationTurn(projectId, {
      role: 'assistant',
      content: response,
      timestamp: new Date()
    });
    
    return {
      content: response,
      conversationId: conversation.id
    };
  }
  
  buildDialecticPrompt(data: {
    conversation: Message[];
    context: Context;
    voiceDirectives: string;
    userInput: string;
  }): string {
    return `You are Mrs. Robbins, a dialectic thinking partner. Your role is to help the user organize their thoughts through conversation, NOT to write for them.

Context:
${data.context.warm.join('\n')}

Voice Guidelines:
${data.voiceDirectives}

Conversation History:
${data.conversation.map(m => `${m.role}: ${m.content}`).join('\n')}

User: ${data.userInput}

Respond by:
1. Reflecting what you hear (Thesis)
2. Exploring alternative perspectives or missing pieces (Antithesis)
3. Asking questions that help clarify direction (Synthesis)

Never write full sections without explicit user direction.`;
  }
}
```

**Conversation Rollback:**

``` typescript
async function rollbackConversation(
  projectId: string,
  targetMessageId: string
): Promise<void> {
  const conversation = await getConversation(projectId);
  const targetIndex = conversation.messages.findIndex(m => m.id === targetMessageId);
  
  if (targetIndex === -1) {
    throw new Error('Target message not found');
  }
  
  // Truncate conversation at target point
  conversation.messages = conversation.messages.slice(0, targetIndex + 1);
  
  await updateConversation(projectId, conversation);
}
```

**Database Schema:**

``` sql
-- conversations table already defined in Section 3
-- Conversation messages stored as JSONB array

ALTER TABLE conversations
ADD COLUMN current_section TEXT,
ADD COLUMN conversation_state VARCHAR(50) DEFAULT 'active'; -- 'active', 'paused', 'complete'
```

**API Contract:**

``` typescript
POST /api/conversation/message
Request: { projectId: string, userInput: string, avatarId: string }
Response: { content: string, conversationId: string }

POST /api/conversation/rollback
Request: { projectId: string, targetMessageId: string }
Response: { success: boolean }

GET /api/conversation/:projectId
Response: { messages: Message[], state: string }
```

**Integration Points:** - Core of Dialectical Editor - Uses Voice
Translation Engine for directives - Uses Hot/Warm/Cold Context Manager -
Stores conversation in database

**Error Handling:** - Claude API failures: Display error, allow retry -
Context overflow: Auto-prune, notify user - Save failures: Retry
transaction

**Dependencies:** - Claude API - Voice Translation Engine - Context
Manager - Database

------------------------------------------------------------------------

### FEATURE 13: Two-Space System (CARD B2)

**Status:** ⚠️ Concept Defined, Not Built

**User Story:** As a user, I want separate spaces for exploration
(conversation) and finalized content (canonical document), so I can
experiment without breaking my document.

**Acceptance Criteria:** - Two distinct UI spaces: Conversation Space
and Document Space - Conversation space shows dialectic exchanges -
Document space shows committed canonical content - User explicitly
commits content from conversation to document - Both spaces visible
simultaneously (split screen or tabs) - Uncommitted conversation doesn't
affect document - Version history tracks document state changes

**Technical Implementation:**

``` typescript
interface TwoSpaceSystem {
  conversationSpace: {
    messages: Message[];
    currentDraft?: string;
    uncommittedChanges: boolean;
  };
  
  documentSpace: {
    canonicalContent: string;
    structure: DocumentSection[];
    lastCommitted: Date;
  };
  
  async commitToDocument(
    projectId: string,
    conversationSnippet: string,
    targetSection: string
  ): Promise<void> {
    // Get current document
    const document = await getDocument(projectId);
    
    // Insert content at target section
    const updatedContent = this.insertAtSection(
      document.content,
      targetSection,
      conversationSnippet
    );
    
    // Create new version
    await createDocumentVersion(projectId, {
      content: updatedContent,
      version: document.version + 1,
      changedSection: targetSection,
      committedFrom: 'conversation'
    });
    
    // Clear uncommitted flag
    this.conversationSpace.uncommittedChanges = false;
  }
  
  insertAtSection(
    documentContent: string,
    targetSection: string,
    newContent: string
  ): string {
    // Parse document structure
    const sections = this.parseDocumentSections(documentContent);
    
    // Find target section
    const sectionIndex = sections.findIndex(s => s.title === targetSection);
    
    if (sectionIndex === -1) {
      // Append as new section
      return `${documentContent}\n\n## ${targetSection}\n\n${newContent}`;
    }
    
    // Insert within existing section
    sections[sectionIndex].content += `\n\n${newContent}`;
    
    return this.reconstructDocument(sections);
  }
}
```

**UI Layout:**

    ┌──────────────────────────────────────────────────┐
    │  Project: Business Plan Draft                   │
    ├─────────────────────┬────────────────────────────┤
    │ CONVERSATION SPACE  │  DOCUMENT SPACE            │
    │                     │                            │
    │ User: I'm thinking  │  ## Executive Summary      │
    │ about...            │                            │
    │                     │  [Committed content]       │
    │ Mrs R: I hear 3     │                            │
    │ themes here...      │  ## Market Analysis        │
    │                     │                            │
    │ User: Yes, and...   │  [Committed content]       │
    │                     │                            │
    │ [Commit to Doc] ──> │                            │
    │                     │                            │
    └─────────────────────┴────────────────────────────┘

**Database Schema:**

``` sql
-- Track uncommitted conversation state
ALTER TABLE conversations
ADD COLUMN uncommitted_draft TEXT,
ADD COLUMN uncommitted_target_section VARCHAR(255);

-- Document versions
CREATE TABLE document_versions (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  version INTEGER NOT NULL,
  content TEXT NOT NULL,
  changed_section VARCHAR(255),
  committed_from VARCHAR(50), -- 'conversation', 'direct_edit', 'import'
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Integration Points:** - Dialectical Editor provides both spaces -
Commit action triggers version control - Content filters run on commit

**Error Handling:** - Commit failures: Rollback, preserve conversation
state - Section not found: Prompt user to create or select section

**Dependencies:** - Document version control system - Document structure
parser

------------------------------------------------------------------------

### FEATURE 14: Voice Capture (CARD B3)

**Status:** ⚠️ Not Started

**User Story:** As a user who thinks by talking, I want to speak my
thoughts and have them transcribed, so I don't have to type at 40 WPM.

**Acceptance Criteria:** - Browser-based voice recording (Web Speech
API) - Real-time transcription with \<2 second latency - Transcription
accuracy \>95% in quiet environments - Support for pause/resume during
recording - Automatic sentence boundary detection - Fallback to Whisper
API for better accuracy (optional) - Voice activity detection (auto-stop
on silence)

**Technical Implementation:**

``` typescript
interface VoiceCaptureService {
  recognition: SpeechRecognition;
  isRecording: boolean;
  transcript: string;
  
  startRecording(): void {
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
    
    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }
      
      this.transcript += finalTranscript;
      this.onTranscriptUpdate(finalTranscript, interimTranscript);
    };
    
    this.recognition.start();
    this.isRecording = true;
  }
  
  stopRecording(): string {
    this.recognition.stop();
    this.isRecording = false;
    return this.transcript;
  }
  
  async transcribeWithWhisper(audioBlob: Blob): Promise<string> {
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.webm');
    formData.append('model', 'whisper-1');
    
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: formData
    });
    
    const data = await response.json();
    return data.text;
  }
}
```

**Voice Activity Detection:**

``` typescript
class VoiceActivityDetector {
  private audioContext: AudioContext;
  private analyser: AnalyserNode;
  private silenceThreshold: number = 0.01;
  private silenceDuration: number = 2000; // ms
  
  async detectSilence(stream: MediaStream): Promise<void> {
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    const source = this.audioContext.createMediaStreamSource(stream);
    source.connect(this.analyser);
    
    let silenceStart: number | null = null;
    
    const checkAudio = () => {
      const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(dataArray);
      
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length / 255;
      
      if (average < this.silenceThreshold) {
        if (!silenceStart) {
          silenceStart = Date.now();
        } else if (Date.now() - silenceStart > this.silenceDuration) {
          this.onSilenceDetected();
          return;
        }
      } else {
        silenceStart = null;
      }
      
      requestAnimationFrame(checkAudio);
    };
    
    checkAudio();
  }
}
```

**Database Schema:**

``` sql
-- Track voice recordings
CREATE TABLE voice_recordings (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  project_id UUID REFERENCES projects(id),
  audio_url TEXT,
  transcript TEXT,
  duration_seconds INTEGER,
  transcription_method VARCHAR(50), -- 'web_speech_api', 'whisper'
  created_at TIMESTAMP DEFAULT NOW()
);
```

**API Contract:**

``` typescript
POST /api/voice/transcribe
Request: { audioBlob: Blob }
Response: { transcript: string, duration: number }

POST /api/voice/save
Request: { projectId: string, audioUrl: string, transcript: string }
Response: { recordingId: string }
```

**Integration Points:** - Content Collection Engine accepts voice
input - Transcript fed into Dialectical Editor - Optional: save audio
file for playback

**Error Handling:** - Browser doesn't support Web Speech API: Fall back
to Whisper - Network failures during Whisper transcription: Retry with
backoff - Microphone permission denied: Show clear error message

**Dependencies:** - Web Speech API (browser-based) - OpenAI Whisper API
(fallback) - Audio recording libraries

## CHUNK 12 of 29: Feature Specifications - Workflow Features (Continued)

### FEATURE 15: Text-to-Speech Playback (CARD B4)

**Status:** ⚠️ Integration Defined, Not Built

**User Story:** As a user, I want to hear my document read aloud, so I
can catch errors I miss when reading silently.

**Acceptance Criteria:** - Generate audio from document text via
ElevenLabs API - Audio generation \<3 seconds for 500-word sections -
Multiple voice options available - Playback controls (play, pause, seek,
speed adjustment) - Async generation doesn't block UI - Fallback to
browser Web Speech API if ElevenLabs unavailable - Cache generated audio
to avoid redundant API calls

**Technical Implementation:**

``` typescript
interface TextToSpeechService {
  async generateAudio(
    text: string,
    voiceId: string = 'default'
  ): Promise<string> {
    // Check cache first
    const cachedUrl = await this.checkCache(text, voiceId);
    if (cachedUrl) return cachedUrl;
    
    // Generate via ElevenLabs
    try {
      const audioUrl = await this.generateWithElevenLabs(text, voiceId);
      await this.cacheAudio(text, voiceId, audioUrl);
      return audioUrl;
    } catch (error) {
      // Fallback to Web Speech API
      return await this.generateWithWebSpeech(text);
    }
  }
  
  async generateWithElevenLabs(text: string, voiceId: string): Promise<string> {
    // Chunk text if longer than 5000 characters
    const chunks = this.chunkText(text, 5000);
    const audioUrls: string[] = [];
    
    for (const chunk of chunks) {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + voiceId, {
        method: 'POST',
        headers: {
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: chunk,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`ElevenLabs API error: ${response.status}`);
      }
      
      const audioBlob = await response.blob();
      const audioUrl = await this.uploadAudio(audioBlob);
      audioUrls.push(audioUrl);
    }
    
    // If multiple chunks, concatenate audio files
    if (audioUrls.length > 1) {
      return await this.concatenateAudio(audioUrls);
    }
    
    return audioUrls[0];
  }
  
  async generateWithWebSpeech(text: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => resolve('web_speech_playback');
      utterance.onerror = (error) => reject(error);
      
      window.speechSynthesis.speak(utterance);
    });
  }
  
  chunkText(text: string, maxLength: number): string[] {
    const sentences = text.split(/[.!?]+/);
    const chunks: string[] = [];
    let currentChunk = '';
    
    for (const sentence of sentences) {
      if ((currentChunk + sentence).length > maxLength) {
        chunks.push(currentChunk.trim());
        currentChunk = sentence;
      } else {
        currentChunk += sentence + '. ';
      }
    }
    
    if (currentChunk) {
      chunks.push(currentChunk.trim());
    }
    
    return chunks;
  }
}
```

**Audio Caching:**

``` sql
CREATE TABLE audio_cache (
  id UUID PRIMARY KEY,
  text_hash VARCHAR(64) UNIQUE, -- SHA-256 of text
  voice_id VARCHAR(100),
  audio_url TEXT,
  duration_seconds INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  accessed_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_audio_cache_hash ON audio_cache(text_hash);

-- Cache invalidation: delete entries older than 30 days
DELETE FROM audio_cache WHERE accessed_at < NOW() - INTERVAL '30 days';
```

**Playback UI Component:**

``` typescript
interface AudioPlayer {
  audioUrl: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  
  play(): void {
    const audio = new Audio(this.audioUrl);
    audio.playbackRate = this.playbackRate;
    audio.currentTime = this.currentTime;
    audio.play();
    this.isPlaying = true;
  }
  
  pause(): void {
    // Implementation
  }
  
  seek(time: number): void {
    this.currentTime = time;
  }
  
  setPlaybackRate(rate: number): void {
    this.playbackRate = rate; // 0.5x to 2.0x
  }
}
```

**API Contract:**

``` typescript
POST /api/tts/generate
Request: { text: string, voiceId?: string }
Response: { audioUrl: string, duration: number }

GET /api/tts/voices
Response: { voices: { id: string, name: string, preview_url: string }[] }
```

**Integration Points:** - Called from Endpoint Publication for audio
export - Called from Document Space for playback - Audio files stored in
Supabase Storage

**Error Handling:** - ElevenLabs API failures: Fall back to Web Speech
API - Large text (\>50K characters): Warn user, offer to chunk - Network
failures: Retry with exponential backoff

**Dependencies:** - ElevenLabs API - Web Speech API (fallback) -
Supabase Storage (audio hosting)

------------------------------------------------------------------------

### FEATURE 16: Project Management (CARD B5)

**Status:** ⚠️ Database Schema Defined, UI Not Built

**User Story:** As a user with multiple writing projects, I want to
organize them in a project library, so I can easily switch between
different works.

**Acceptance Criteria:** - Create, read, update, delete projects -
Project metadata: title, description, endpoint type, status - Filter
projects by endpoint type, status, date - Search projects by title or
content - Archive completed projects - Duplicate project as template -
Project statistics (word count, conversation length, time spent)

**Technical Implementation:**

``` typescript
interface ProjectService {
  async createProject(data: CreateProjectInput): Promise<Project> {
    const projectId = uuid();
    
    await db.query(`
      INSERT INTO projects (id, user_id, title, description, endpoint_type, status)
      VALUES ($1, $2, $3, $4, $5, 'active')
    `, [projectId, data.userId, data.title, data.description, data.endpointType]);
    
    // Create initial conversation
    await createConversation(projectId, data.userId);
    
    // Create initial document
    await createDocument(projectId, data.userId, data.title);
    
    return await this.getProject(projectId);
  }
  
  async listProjects(userId: string, filters?: ProjectFilters): Promise<Project[]> {
    let query = `
      SELECT p.*, COUNT(tb.id) as blob_count, SUM(tb.word_count) as total_words
      FROM projects p
      LEFT JOIN thought_blobs tb ON p.id = tb.project_id
      WHERE p.user_id = $1
    `;
    
    const params: any[] = [userId];
    
    if (filters?.endpointType) {
      params.push(filters.endpointType);
      query += ` AND p.endpoint_type = $${params.length}`;
    }
    
    if (filters?.status) {
      params.push(filters.status);
      query += ` AND p.status = $${params.length}`;
    }
    
    query += ` GROUP BY p.id ORDER BY p.updated_at DESC`;
    
    const result = await db.query(query, params);
    return result.rows;
  }
  
  async archiveProject(projectId: string, userId: string): Promise<void> {
    await db.query(`
      UPDATE projects
      SET status = 'archived', updated_at = NOW()
      WHERE id = $1 AND user_id = $2
    `, [projectId, userId]);
  }
  
  async duplicateProject(projectId: string, userId: string): Promise<Project> {
    const original = await this.getProject(projectId);
    
    const newProjectId = uuid();
    await db.query(`
      INSERT INTO projects (id, user_id, title, description, endpoint_type, status)
      VALUES ($1, $2, $3, $4, $5, 'active')
    `, [
      newProjectId,
      userId,
      `${original.title} (Copy)`,
      original.description,
      original.endpointType
    ]);
    
    // Copy voice avatar settings
    // Copy initial document structure (but not content)
    
    return await this.getProject(newProjectId);
  }
}
```

**Project Statistics:**

``` typescript
interface ProjectStatistics {
  wordCount: number;
  thoughtBlobCount: number;
  conversationTurns: number;
  timeSpent: number; // minutes
  lastActive: Date;
  completionPercent: number;
}

async function getProjectStatistics(projectId: string): Promise<ProjectStatistics> {
  const stats = await db.query(`
    SELECT 
      COALESCE(SUM(tb.word_count), 0) as word_count,
      COUNT(DISTINCT tb.id) as blob_count,
      (SELECT jsonb_array_length(messages) FROM conversations WHERE project_id = $1) as conversation_turns,
      p.updated_at as last_active
    FROM projects p
    LEFT JOIN thought_blobs tb ON p.id = tb.project_id
    WHERE p.id = $1
    GROUP BY p.id, p.updated_at
  `, [projectId]);
  
  return {
    wordCount: stats.rows[0].word_count,
    thoughtBlobCount: stats.rows[0].blob_count,
    conversationTurns: stats.rows[0].conversation_turns,
    lastActive: stats.rows[0].last_active,
    timeSpent: 0, // Requires time tracking feature
    completionPercent: calculateCompletion(stats.rows[0])
  };
}
```

**Database Schema:**

``` sql
ALTER TABLE projects
ADD COLUMN status VARCHAR(50) DEFAULT 'active', -- 'active', 'paused', 'completed', 'archived'
ADD COLUMN description TEXT,
ADD COLUMN target_word_count INTEGER,
ADD COLUMN completion_percent INTEGER DEFAULT 0;

CREATE INDEX idx_projects_user_status ON projects(user_id, status);
CREATE INDEX idx_projects_endpoint ON projects(endpoint_type);
```

**API Contract:**

``` typescript
POST /api/projects/create
Request: CreateProjectInput
Response: Project

GET /api/projects/list
Request: { userId: string, filters?: ProjectFilters }
Response: { projects: Project[] }

GET /api/projects/:projectId/stats
Response: ProjectStatistics

PUT /api/projects/:projectId/archive
Response: { success: boolean }

POST /api/projects/:projectId/duplicate
Response: Project
```

**Integration Points:** - Projects UI (library view) - Document
Preparation Workspace (project creation) - All components reference
projectId

**Error Handling:** - Project not found: Return 404 - Duplicate project
name: Append (2), (3), etc. - Delete with existing content: Require
confirmation

**Dependencies:** - Database - Authentication

------------------------------------------------------------------------

### FEATURE 17: Thought Blob Browser (CARD B6)

**Status:** ⚠️ Concept Defined, Not Built

**User Story:** As a user, I want to browse my captured thoughts
organized by project and category, so I can find ideas I've stored.

**Acceptance Criteria:** - View all thought blobs for a project - Filter
by date, category, word count - Search within blob content - Preview
blob content (first 200 characters) - Click to view full blob - Link
related blobs together - Tag blobs with custom labels - Sort by
relevance, date, or similarity

**Technical Implementation:**

``` typescript
interface ThoughtBlobBrowser {
  async listBlobs(
    projectId: string,
    filters?: BlobFilters
  ): Promise<ThoughtBlob[]> {
    let query = `
      SELECT tb.*, cm.primary_categories, cm.secondary_tags
      FROM thought_blobs tb
      LEFT JOIN content_metadata cm ON tb.id = cm.content_id
      WHERE tb.project_id = $1
    `;
    
    const params: any[] = [projectId];
    
    if (filters?.dateRange) {
      params.push(filters.dateRange.start, filters.dateRange.end);
      query += ` AND tb.created_at BETWEEN $${params.length-1} AND $${params.length}`;
    }
    
    if (filters?.categories) {
      params.push(filters.categories);
      query += ` AND cm.primary_categories && $${params.length}`;
    }
    
    if (filters?.searchQuery) {
      params.push(`%${filters.searchQuery}%`);
      query += ` AND tb.content ILIKE $${params.length}`;
    }
    
    query += ` ORDER BY tb.created_at DESC`;
    
    const result = await db.query(query, params);
    return result.rows.map(row => ({
      ...row,
      preview: row.content.substring(0, 200) + '...'
    }));
  }
  
  async linkBlobs(blob1Id: string, blob2Id: string, relationship: string): Promise<void> {
    await db.query(`
      INSERT INTO blob_relationships (blob1_id, blob2_id, relationship_type)
      VALUES ($1, $2, $3)
    `, [blob1Id, blob2Id, relationship]);
  }
  
  async tagBlob(blobId: string, tags: string[]): Promise<void> {
    await db.query(`
      UPDATE content_metadata
      SET secondary_tags = array_cat(secondary_tags, $1)
      WHERE content_id = $2
    `, [tags, blobId]);
  }
}
```

**Blob Relationships:**

``` sql
CREATE TABLE blob_relationships (
  id UUID PRIMARY KEY,
  blob1_id UUID REFERENCES thought_blobs(id),
  blob2_id UUID REFERENCES thought_blobs(id),
  relationship_type VARCHAR(50), -- 'supports', 'contradicts', 'extends', 'similar_to'
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_blob_relationships ON blob_relationships(blob1_id, blob2_id);
```

**UI Components:**

``` typescript
interface BlobCard {
  id: string;
  preview: string;
  wordCount: number;
  categories: string[];
  tags: string[];
  createdAt: Date;
  onClick: () => void;
}

interface BlobListView {
  blobs: BlobCard[];
  filters: BlobFilters;
  onFilterChange: (filters: BlobFilters) => void;
  onBlobClick: (blobId: string) => void;
}
```

**API Contract:**

``` typescript
GET /api/blobs/list
Request: { projectId: string, filters?: BlobFilters }
Response: { blobs: ThoughtBlob[] }

POST /api/blobs/link
Request: { blob1Id: string, blob2Id: string, relationship: string }
Response: { success: boolean }

POST /api/blobs/tag
Request: { blobId: string, tags: string[] }
Response: { success: boolean }
```

**Integration Points:** - Document Preparation Workspace (blob
selection) - Serendipity Engine (blob discovery) - Search functionality

**Dependencies:** - Cataloging Engine (metadata) - Search service

## CHUNK 13 of 29: Feature Specifications - Functional Tools

### FEATURE 18: Version Control (CARD C1)

**Status:** ⚠️ Database Schema Defined, UI Not Built

**User Story:** As a user, I want to track changes to my document over
time and revert to earlier versions, so I don't lose good writing I
accidentally deleted.

**Acceptance Criteria:** - Auto-save creates new version on every
significant change - Manual save creates named version with
description - Browse version history with timestamps - View diff between
any two versions - Restore previous version (creates new version,
doesn't delete history) - Version metadata includes who changed what and
when - Limit version retention (keep last 100 versions per document)

**Technical Implementation:**

``` typescript
interface VersionControlService {
  async createVersion(
    documentId: string,
    content: string,
    metadata: VersionMetadata
  ): Promise<DocumentVersion> {
    const currentVersion = await this.getCurrentVersion(documentId);
    const newVersionNumber = (currentVersion?.version || 0) + 1;
    
    const versionId = uuid();
    await db.query(`
      INSERT INTO document_versions (id, document_id, version, content, changed_section, committed_from, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      versionId,
      documentId,
      newVersionNumber,
      content,
      metadata.changedSection,
      metadata.committedFrom,
      metadata.description
    ]);
    
    // Update main document
    await db.query(`
      UPDATE documents
      SET content = $1, version = $2, updated_at = NOW()
      WHERE id = $3
    `, [content, newVersionNumber, documentId]);
    
    // Prune old versions (keep last 100)
    await this.pruneOldVersions(documentId, 100);
    
    return await this.getVersion(versionId);
  }
  
  async getVersionHistory(documentId: string): Promise<DocumentVersion[]> {
    const result = await db.query(`
      SELECT * FROM document_versions
      WHERE document_id = $1
      ORDER BY version DESC
      LIMIT 100
    `, [documentId]);
    
    return result.rows;
  }
  
  async compareVersions(
    versionId1: string,
    versionId2: string
  ): Promise<VersionDiff> {
    const v1 = await this.getVersion(versionId1);
    const v2 = await this.getVersion(versionId2);
    
    const diff = this.computeDiff(v1.content, v2.content);
    
    return {
      version1: v1,
      version2: v2,
      diff,
      addedLines: diff.filter(d => d.type === 'added').length,
      removedLines: diff.filter(d => d.type === 'removed').length,
      changedLines: diff.filter(d => d.type === 'changed').length
    };
  }
  
  computeDiff(content1: string, content2: string): DiffLine[] {
    // Use diff library (e.g., diff-match-patch or fast-diff)
    const dmp = new DiffMatchPatch();
    const diffs = dmp.diff_main(content1, content2);
    dmp.diff_cleanupSemantic(diffs);
    
    return diffs.map((diff, index) => ({
      type: diff[0] === 1 ? 'added' : diff[0] === -1 ? 'removed' : 'unchanged',
      content: diff[1],
      lineNumber: index
    }));
  }
  
  async restoreVersion(versionId: string): Promise<DocumentVersion> {
    const version = await this.getVersion(versionId);
    
    // Create new version from restored content
    return await this.createVersion(
      version.documentId,
      version.content,
      {
        changedSection: 'full_document',
        committedFrom: 'version_restore',
        description: `Restored from version ${version.version}`
      }
    );
  }
  
  async pruneOldVersions(documentId: string, keepCount: number): Promise<void> {
    await db.query(`
      DELETE FROM document_versions
      WHERE document_id = $1
      AND version NOT IN (
        SELECT version FROM document_versions
        WHERE document_id = $1
        ORDER BY version DESC
        LIMIT $2
      )
    `, [documentId, keepCount]);
  }
}
```

**Auto-Save Strategy:**

``` typescript
class AutoSaveManager {
  private saveTimeout: NodeJS.Timeout | null = null;
  private lastSaveContent: string = '';
  
  scheduleAutoSave(documentId: string, content: string): void {
    // Clear existing timeout
    if (this.saveTimeout) {
      clearTimeout(this.saveTimeout);
    }
    
    // Only save if content changed significantly
    if (this.hasSignificantChanges(content, this.lastSaveContent)) {
      this.saveTimeout = setTimeout(() => {
        this.createVersion(documentId, content, {
          changedSection: 'auto_save',
          committedFrom: 'auto_save',
          description: 'Auto-saved'
        });
        this.lastSaveContent = content;
      }, 30000); // 30 seconds of inactivity
    }
  }
  
  hasSignificantChanges(newContent: string, oldContent: string): boolean {
    // Significant = >50 characters different OR >5% content change
    const charDiff = Math.abs(newContent.length - oldContent.length);
    const percentChange = charDiff / Math.max(oldContent.length, 1);
    
    return charDiff > 50 || percentChange > 0.05;
  }
}
```

**Database Schema:**

``` sql
-- document_versions table already defined in Section 3

ALTER TABLE document_versions
ADD COLUMN description TEXT,
ADD COLUMN word_count INTEGER,
ADD COLUMN character_count INTEGER;

CREATE INDEX idx_version_document ON document_versions(document_id, version);
```

**API Contract:**

``` typescript
POST /api/versions/create
Request: { documentId: string, content: string, metadata: VersionMetadata }
Response: DocumentVersion

GET /api/versions/history/:documentId
Response: { versions: DocumentVersion[] }

GET /api/versions/compare
Request: { versionId1: string, versionId2: string }
Response: VersionDiff

POST /api/versions/restore
Request: { versionId: string }
Response: DocumentVersion
```

**Integration Points:** - Triggered by Document Space commits - UI shows
version history browser - Diff view shows side-by-side comparison

**Error Handling:** - Version limit reached: Prune oldest
automatically - Restore failures: Rollback, notify user - Diff
computation timeout: Return partial results

**Dependencies:** - Diff library (diff-match-patch) - Database

------------------------------------------------------------------------

### FEATURE 19: Export Formats (CARD C2)

**Status:** ⚠️ Partially Implemented (Markdown), Other Formats Not Built

**User Story:** As a user, I want to export my finished document in
multiple formats (DOCX, PDF, MD), so I can use it in other tools.

**Acceptance Criteria:** - Export to Markdown (.md) - Export to
Microsoft Word (.docx) - Export to PDF (.pdf) - Export to plain text
(.txt) - Export to HTML (.html) - Copy to clipboard (formatted) -
Preserve formatting in exports (headings, lists, emphasis) - Include
metadata (title, author, date) in exports

**Technical Implementation:**

``` typescript
interface ExportService {
  async exportDocument(
    documentId: string,
    format: ExportFormat
  ): Promise<ExportResult> {
    const document = await getDocument(documentId);
    
    switch (format) {
      case 'markdown':
        return await this.exportMarkdown(document);
      case 'docx':
        return await this.exportDocx(document);
      case 'pdf':
        return await this.exportPdf(document);
      case 'txt':
        return await this.exportPlainText(document);
      case 'html':
        return await this.exportHtml(document);
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }
  
  async exportMarkdown(document: Document): Promise<ExportResult> {
    const content = `# ${document.title}\n\n${document.content}`;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = await uploadFile(blob, `${document.title}.md`);
    
    return { url, filename: `${document.title}.md` };
  }
  
  async exportDocx(document: Document): Promise<ExportResult> {
    // Use docx library to generate .docx file
    const docx = require('docx');
    const { Document, Paragraph, TextRun, HeadingLevel } = docx;
    
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: document.title,
            heading: HeadingLevel.HEADING_1
          }),
          ...this.parseMarkdownToDocx(document.content)
        ]
      }]
    });
    
    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = await uploadFile(blob, `${document.title}.docx`);
    
    return { url, filename: `${document.title}.docx` };
  }
  
  async exportPdf(document: Document): Promise<ExportResult> {
    // Use puppeteer or similar to generate PDF
    const html = this.convertToHtml(document);
    const pdfBuffer = await generatePdfFromHtml(html);
    const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
    const url = await uploadFile(blob, `${document.title}.pdf`);
    
    return { url, filename: `${document.title}.pdf` };
  }
  
  async exportPlainText(document: Document): Promise<ExportResult> {
    // Strip markdown formatting
    const plainText = this.stripMarkdown(document.content);
    const content = `${document.title}\n\n${plainText}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = await uploadFile(blob, `${document.title}.txt`);
    
    return { url, filename: `${document.title}.txt` };
  }
  
  async exportHtml(document: Document): Promise<ExportResult> {
    const html = this.convertToHtml(document);
    const blob = new Blob([html], { type: 'text/html' });
    const url = await uploadFile(blob, `${document.title}.html`);
    
    return { url, filename: `${document.title}.html` };
  }
  
  parseMarkdownToDocx(markdown: string): Paragraph[] {
    // Parse markdown and convert to docx Paragraph objects
    const marked = require('marked');
    const tokens = marked.lexer(markdown);
    
    return tokens.map(token => {
      if (token.type === 'heading') {
        return new Paragraph({
          text: token.text,
          heading: HeadingLevel[`HEADING_${token.depth}`]
        });
      } else if (token.type === 'paragraph') {
        return new Paragraph({ text: token.text });
      }
      // Handle other token types...
    });
  }
  
  convertToHtml(document: Document): string {
    const marked = require('marked');
    const htmlContent = marked.parse(document.content);
    
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${document.title}</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; }
  </style>
</head>
<body>
  <h1>${document.title}</h1>
  ${htmlContent}
</body>
</html>`;
  }
  
  stripMarkdown(markdown: string): string {
    // Remove markdown formatting
    return markdown
      .replace(/#+\s/g, '') // Headings
      .replace(/\*\*(.+?)\*\*/g, '$1') // Bold
      .replace(/\*(.+?)\*/g, '$1') // Italic
      .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Links
      .trim();
  }
}
```

**Clipboard Export:**

``` typescript
async function copyToClipboard(document: Document, format: 'markdown' | 'html' | 'plain'): Promise<void> {
  let content: string;
  
  switch (format) {
    case 'markdown':
      content = document.content;
      break;
    case 'html':
      content = convertToHtml(document);
      break;
    case 'plain':
      content = stripMarkdown(document.content);
      break;
  }
  
  await navigator.clipboard.writeText(content);
}
```

**Database Schema:**

``` sql
CREATE TABLE export_history (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  user_id UUID REFERENCES users(id),
  format VARCHAR(50),
  file_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**API Contract:**

``` typescript
POST /api/export
Request: { documentId: string, format: ExportFormat }
Response: ExportResult

POST /api/export/clipboard
Request: { documentId: string, format: 'markdown' | 'html' | 'plain' }
Response: { success: boolean }

GET /api/export/history/:documentId
Response: { exports: ExportRecord[] }
```

**Integration Points:** - Endpoint Publication component - Document
Space "Export" button - Batch export for multiple documents

**Error Handling:** - Large documents (\>50K words): Warn about
processing time - PDF generation failures: Retry or fall back to HTML -
File upload failures: Retry with exponential backoff

**Dependencies:** - docx library (DOCX generation) - marked library
(Markdown → HTML) - puppeteer or similar (PDF generation) - Supabase
Storage (file hosting)

------------------------------------------------------------------------

### FEATURE 20: Search & Discovery (CARD C3)

**Status:** ⚠️ Architecture Defined, Not Built

**User Story:** As a user, I want to search across all my projects and
find relevant content quickly, so I don't have to manually browse
thousands of thought blobs.

**Acceptance Criteria:** - Full-text search across all user content -
Semantic search via vector embeddings - Filter by project, date range,
endpoint type - Search results ranked by relevance - Highlight matching
text in results - Search within specific project or across all
projects - Search autocomplete with suggested queries - Search history
for frequently used queries

**Technical Implementation:**

``` typescript
interface SearchService {
  async search(
    userId: string,
    query: string,
    options: SearchOptions
  ): Promise<SearchResults> {
    // Combine full-text and semantic search
    const fullTextResults = await this.fullTextSearch(userId, query, options);
    const semanticResults = await this.semanticSearch(userId, query, options);
    
    // Merge and rank results
    const mergedResults = this.mergeResults(fullTextResults, semanticResults);
    const rankedResults = this.rankResults(mergedResults, query);
    
    return {
      results: rankedResults,
      totalFound: rankedResults.length,
      query,
      executionTime: Date.now() - startTime
    };
  }
  
  async fullTextSearch(
    userId: string,
    query: string,
    options: SearchOptions
  ): Promise<SearchResult[]> {
    let sql = `
      SELECT tb.id, tb.content, tb.project_id, tb.created_at,
             ts_rank(to_tsvector('english', tb.content), plainto_tsquery('english', $2)) as rank
      FROM thought_blobs tb
      JOIN projects p ON tb.project_id = p.id
      WHERE p.user_id = $1
      AND to_tsvector('english', tb.content) @@ plainto_tsquery('english', $2)
    `;
    
    const params: any[] = [userId, query];
    
    if (options.projectId) {
      params.push(options.projectId);
      sql += ` AND tb.project_id = $${params.length}`;
    }
    
    if (options.dateRange) {
      params.push(options.dateRange.start, options.dateRange.end);
      sql += ` AND tb.created_at BETWEEN $${params.length-1} AND $${params.length}`;
    }
    
    sql += ` ORDER BY rank DESC LIMIT $${params.length + 1}`;
    params.push(options.limit || 20);
    
    const result = await db.query(sql, params);
    return result.rows.map(row => ({
      contentId: row.id,
      snippet: this.highlightMatches(row.content, query),
      projectId: row.project_id,
      relevanceScore: row.rank,
      createdAt: row.created_at,
      matchType: 'full_text'
    }));
  }
  
  async semanticSearch(
    userId: string,
    query: string,
    options: SearchOptions
  ): Promise<SearchResult[]> {
    const queryEmbedding = await generateEmbedding(query);
    
    let sql = `
      SELECT e.content_id, e.chunk_text, e.embedding <=> $1 as distance, tb.project_id
      FROM embeddings e
      JOIN thought_blobs tb ON e.content_id = tb.id
      JOIN projects p ON tb.project_id = p.id
      WHERE p.user_id = $2
      AND e.embedding <=> $1 < 0.3
    `;
    
    const params: any[] = [queryEmbedding, userId];
    
    if (options.projectId) {
      params.push(options.projectId);
      sql += ` AND tb.project_id = $${params.length}`;
    }
    
    sql += ` ORDER BY distance ASC LIMIT $${params.length + 1}`;
    params.push(options.limit || 20);
    
    const result = await db.query(sql, params);
    return result.rows.map(row => ({
      contentId: row.content_id,
      snippet: row.chunk_text,
      projectId: row.project_id,
      relevanceScore: 1 - row.distance,
      matchType: 'semantic'
    }));
  }
  
  highlightMatches(content: string, query: string): string {
    const regex = new RegExp(`(${query})`, 'gi');
    const highlighted = content.replace(regex, '<mark>$1</mark>');
    
    // Return snippet around first match
    const matchIndex = highlighted.toLowerCase().indexOf('<mark>');
    const start = Math.max(0, matchIndex - 100);
    const end = Math.min(highlighted.length, matchIndex + 200);
    
    return '...' + highlighted.substring(start, end) + '...';
  }
}
```

**Search Autocomplete:**

``` sql
CREATE TABLE search_history (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  query TEXT,
  result_count INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_search_history_user ON search_history(user_id);
```

**API Contract:**

``` typescript
POST /api/search
Request: { userId: string, query: string, options: SearchOptions }
Response: SearchResults

GET /api/search/autocomplete
Request: { userId: string, partial: string }
Response: { suggestions: string[] }

GET /api/search/history
Request: { userId: string }
Response: { history: SearchHistoryEntry[] }
```

**Integration Points:** - Global search bar in UI - Serendipity Engine
uses semantic search - Thought Blob Browser uses search

**Dependencies:** - PostgreSQL full-text search - Vector embeddings -
Search indexing

## CHUNK 14 of 29: Feature Specifications - Functional Tools (Continued)

### FEATURE 21: Time Tracking (CARD C4)

**Status:** ⚠️ Not Started

**User Story:** As a user, I want to track how much time I spend on each
project, so I can measure my productivity and bill clients accurately.

**Acceptance Criteria:** - Automatic time tracking when project is
active - Manual start/stop timer - Track time per project and per
session - View time reports (daily, weekly, monthly) - Export time data
as CSV - Pause/resume functionality - Idle detection (auto-pause after 5
minutes of inactivity)

**Technical Implementation:**

``` typescript
interface TimeTrackingService {
  private activeSession: TimeSession | null = null;
  private idleTimeout: NodeJS.Timeout | null = null;
  
  async startTracking(projectId: string, userId: string): Promise<TimeSession> {
    const sessionId = uuid();
    const session = {
      id: sessionId,
      projectId,
      userId,
      startTime: new Date(),
      endTime: null,
      duration: 0,
      isPaused: false
    };
    
    await db.query(`
      INSERT INTO time_sessions (id, project_id, user_id, start_time, status)
      VALUES ($1, $2, $3, $4, 'active')
    `, [sessionId, projectId, userId, session.startTime]);
    
    this.activeSession = session;
    this.setupIdleDetection();
    
    return session;
  }
  
  async stopTracking(): Promise<TimeSession> {
    if (!this.activeSession) {
      throw new Error('No active session');
    }
    
    const endTime = new Date();
    const duration = (endTime.getTime() - this.activeSession.startTime.getTime()) / 1000; // seconds
    
    await db.query(`
      UPDATE time_sessions
      SET end_time = $1, duration_seconds = $2, status = 'completed'
      WHERE id = $3
    `, [endTime, duration, this.activeSession.id]);
    
    const session = { ...this.activeSession, endTime, duration };
    this.activeSession = null;
    
    if (this.idleTimeout) {
      clearTimeout(this.idleTimeout);
    }
    
    return session;
  }
  
  async pauseTracking(): Promise<void> {
    if (!this.activeSession) return;
    
    await db.query(`
      UPDATE time_sessions
      SET status = 'paused', paused_at = NOW()
      WHERE id = $1
    `, [this.activeSession.id]);
    
    this.activeSession.isPaused = true;
  }
  
  async resumeTracking(): Promise<void> {
    if (!this.activeSession) return;
    
    const pausedDuration = await this.getPausedDuration(this.activeSession.id);
    
    await db.query(`
      UPDATE time_sessions
      SET status = 'active', paused_duration = paused_duration + $1
      WHERE id = $2
    `, [pausedDuration, this.activeSession.id]);
    
    this.activeSession.isPaused = false;
    this.setupIdleDetection();
  }
  
  setupIdleDetection(): void {
    // Reset idle timeout on user activity
    const resetIdleTimer = () => {
      if (this.idleTimeout) {
        clearTimeout(this.idleTimeout);
      }
      
      this.idleTimeout = setTimeout(() => {
        if (this.activeSession && !this.activeSession.isPaused) {
          this.pauseTracking();
        }
      }, 300000); // 5 minutes
    };
    
    // Listen for user activity events
    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('keypress', resetIdleTimer);
    
    resetIdleTimer();
  }
  
  async getTimeReport(
    userId: string,
    projectId?: string,
    dateRange?: { start: Date; end: Date }
  ): Promise<TimeReport> {
    let sql = `
      SELECT 
        DATE(start_time) as date,
        SUM(duration_seconds) as total_seconds,
        COUNT(*) as session_count
      FROM time_sessions
      WHERE user_id = $1
    `;
    
    const params: any[] = [userId];
    
    if (projectId) {
      params.push(projectId);
      sql += ` AND project_id = $${params.length}`;
    }
    
    if (dateRange) {
      params.push(dateRange.start, dateRange.end);
      sql += ` AND start_time BETWEEN $${params.length-1} AND $${params.length}`;
    }
    
    sql += ` GROUP BY DATE(start_time) ORDER BY date DESC`;
    
    const result = await db.query(sql, params);
    
    return {
      entries: result.rows.map(row => ({
        date: row.date,
        totalMinutes: Math.round(row.total_seconds / 60),
        sessionCount: row.session_count
      })),
      totalMinutes: result.rows.reduce((sum, row) => sum + row.total_seconds / 60, 0)
    };
  }
  
  async exportTimeData(userId: string, format: 'csv' | 'json'): Promise<string> {
    const sessions = await db.query(`
      SELECT ts.*, p.title as project_title
      FROM time_sessions ts
      JOIN projects p ON ts.project_id = p.id
      WHERE ts.user_id = $1
      ORDER BY ts.start_time DESC
    `, [userId]);
    
    if (format === 'json') {
      return JSON.stringify(sessions.rows, null, 2);
    } else {
      // CSV format
      const header = 'Date,Project,Start Time,End Time,Duration (minutes)\n';
      const rows = sessions.rows.map(s => 
        `${s.start_time.toDateString()},${s.project_title},${s.start_time.toTimeString()},${s.end_time?.toTimeString()},${Math.round(s.duration_seconds / 60)}`
      ).join('\n');
      
      return header + rows;
    }
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE time_sessions (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP,
  paused_at TIMESTAMP,
  paused_duration INTEGER DEFAULT 0, -- seconds
  duration_seconds INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'paused', 'completed'
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_time_sessions_user ON time_sessions(user_id);
CREATE INDEX idx_time_sessions_project ON time_sessions(project_id);
CREATE INDEX idx_time_sessions_date ON time_sessions(DATE(start_time));
```

**API Contract:**

``` typescript
POST /api/time/start
Request: { projectId: string, userId: string }
Response: TimeSession

POST /api/time/stop
Response: TimeSession

POST /api/time/pause
Response: { success: boolean }

POST /api/time/resume
Response: { success: boolean }

GET /api/time/report
Request: { userId: string, projectId?: string, dateRange?: { start: Date, end: Date } }
Response: TimeReport

GET /api/time/export
Request: { userId: string, format: 'csv' | 'json' }
Response: { data: string }
```

**Integration Points:** - Auto-start when project opened in Dialectical
Editor - Auto-stop when browser closed or project switched - Time
reports shown in Project Statistics

**Error Handling:** - Browser closed during session: Mark as incomplete,
calculate partial duration - Multiple sessions for same project:
Consolidate or warn user - Clock changes (timezone): Use UTC timestamps

**Dependencies:** - Browser idle detection APIs - Database

------------------------------------------------------------------------

### FEATURE 22: Collaboration (Future Phase) (CARD C5)

**Status:** ⚠️ Not Planned for Alpha/Beta

**User Story:** As a user working with a co-author, I want to
collaborate on documents in real-time, so we can work together
efficiently.

**Acceptance Criteria:** - Share project with other users (read,
comment, edit permissions) - Real-time synchronization of changes -
Conflict resolution for simultaneous edits - Comment threads on specific
sections - Activity feed showing collaborator actions - @mentions to
notify specific collaborators

**Technical Implementation:**

``` typescript
// Future implementation using Supabase Realtime
interface CollaborationService {
  async shareProject(
    projectId: string,
    recipientEmail: string,
    permission: 'read' | 'comment' | 'edit'
  ): Promise<void> {
    const recipientUser = await getUserByEmail(recipientEmail);
    
    await db.query(`
      INSERT INTO project_collaborators (project_id, user_id, permission)
      VALUES ($1, $2, $3)
    `, [projectId, recipientUser.id, permission]);
    
    await sendInviteEmail(recipientEmail, projectId);
  }
  
  async setupRealtimeSync(projectId: string): Promise<void> {
    const channel = supabase.channel(`project:${projectId}`);
    
    channel
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'documents',
        filter: `project_id=eq.${projectId}`
      }, (payload) => {
        this.handleDocumentUpdate(payload);
      })
      .subscribe();
  }
  
  async addComment(
    documentId: string,
    userId: string,
    selectionRange: { start: number; end: number },
    commentText: string
  ): Promise<Comment> {
    const commentId = uuid();
    
    await db.query(`
      INSERT INTO comments (id, document_id, user_id, selection_start, selection_end, text)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [commentId, documentId, userId, selectionRange.start, selectionRange.end, commentText]);
    
    return await this.getComment(commentId);
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE project_collaborators (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  permission VARCHAR(50), -- 'read', 'comment', 'edit'
  invited_at TIMESTAMP DEFAULT NOW(),
  accepted_at TIMESTAMP
);

CREATE TABLE comments (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  user_id UUID REFERENCES users(id),
  parent_comment_id UUID REFERENCES comments(id), -- for threaded comments
  selection_start INTEGER,
  selection_end INTEGER,
  text TEXT,
  is_resolved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_comments_document ON comments(document_id);
```

**Integration Points:** - Supabase Realtime for real-time sync - UI
shows active collaborators - Notification system for @mentions

**Dependencies:** - Supabase Realtime - Conflict resolution algorithm -
Notification service

------------------------------------------------------------------------

### FEATURE 23: Backup & Recovery (CARD C6)

**Status:** ⚠️ Partially Implemented (Supabase Auto-Backup)

**User Story:** As a user, I want automatic backups of my work, so I
don't lose everything if something goes wrong.

**Acceptance Criteria:** - Automatic daily backups of all user data -
Manual backup on demand - Restore from backup within 30 days - Export
all user data as JSON - Backup includes projects, documents,
conversations, avatars - Point-in-time recovery for critical failures

**Technical Implementation:**

``` typescript
interface BackupService {
  async createBackup(userId: string): Promise<Backup> {
    const backupId = uuid();
    
    // Gather all user data
    const userData = await this.gatherUserData(userId);
    
    // Compress and store
    const compressedData = await this.compressData(userData);
    const backupUrl = await this.uploadBackup(backupId, compressedData);
    
    await db.query(`
      INSERT INTO backups (id, user_id, backup_url, size_bytes, created_at)
      VALUES ($1, $2, $3, $4, NOW())
    `, [backupId, userId, backupUrl, compressedData.length]);
    
    return {
      id: backupId,
      userId,
      url: backupUrl,
      sizeBytes: compressedData.length,
      createdAt: new Date()
    };
  }
  
  async gatherUserData(userId: string): Promise<UserData> {
    const [projects, documents, conversations, avatars, blobs] = await Promise.all([
      db.query('SELECT * FROM projects WHERE user_id = $1', [userId]),
      db.query('SELECT * FROM documents WHERE user_id = $1', [userId]),
      db.query('SELECT * FROM conversations WHERE user_id = $1', [userId]),
      db.query('SELECT * FROM voice_avatars WHERE user_id = $1', [userId]),
      db.query('SELECT * FROM thought_blobs WHERE user_id = $1', [userId])
    ]);
    
    return {
      projects: projects.rows,
      documents: documents.rows,
      conversations: conversations.rows,
      voiceAvatars: avatars.rows,
      thoughtBlobs: blobs.rows
    };
  }
  
  async restoreFromBackup(backupId: string, userId: string): Promise<void> {
    const backup = await this.getBackup(backupId);
    
    if (backup.userId !== userId) {
      throw new Error('Unauthorized');
    }
    
    const backupData = await this.downloadBackup(backup.url);
    const userData = await this.decompressData(backupData);
    
    // Restore data (within transaction)
    await db.transaction(async (trx) => {
      // Delete existing data (optional - or merge)
      await trx.query('DELETE FROM projects WHERE user_id = $1', [userId]);
      await trx.query('DELETE FROM documents WHERE user_id = $1', [userId]);
      // ... delete other tables
      
      // Insert backup data
      for (const project of userData.projects) {
        await trx.query(`
          INSERT INTO projects (id, user_id, title, endpoint_type, created_at)
          VALUES ($1, $2, $3, $4, $5)
        `, [project.id, userId, project.title, project.endpoint_type, project.created_at]);
      }
      
      // ... restore other data
    });
  }
  
  async exportAllData(userId: string, format: 'json' | 'zip'): Promise<string> {
    const userData = await this.gatherUserData(userId);
    
    if (format === 'json') {
      return JSON.stringify(userData, null, 2);
    } else {
      // Create ZIP archive with separate files for each data type
      const zip = new JSZip();
      zip.file('projects.json', JSON.stringify(userData.projects, null, 2));
      zip.file('documents.json', JSON.stringify(userData.documents, null, 2));
      zip.file('conversations.json', JSON.stringify(userData.conversations, null, 2));
      zip.file('voice_avatars.json', JSON.stringify(userData.voiceAvatars, null, 2));
      
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipUrl = await this.uploadFile(zipBlob, `user_data_${userId}.zip`);
      
      return zipUrl;
    }
  }
}
```

**Automated Backup Schedule:**

``` typescript
// Cron job runs daily at 2 AM
async function dailyBackupJob() {
  const users = await getAllActiveUsers();
  
  for (const user of users) {
    try {
      await createBackup(user.id);
      
      // Prune old backups (keep last 30 days)
      await pruneOldBackups(user.id, 30);
    } catch (error) {
      console.error(`Backup failed for user ${user.id}:`, error);
    }
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE backups (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  backup_url TEXT,
  size_bytes BIGINT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_backups_user ON backups(user_id);
CREATE INDEX idx_backups_date ON backups(created_at);
```

**API Contract:**

``` typescript
POST /api/backup/create
Request: { userId: string }
Response: Backup

POST /api/backup/restore
Request: { backupId: string, userId: string }
Response: { success: boolean }

GET /api/backup/list
Request: { userId: string }
Response: { backups: Backup[] }

GET /api/backup/export
Request: { userId: string, format: 'json' | 'zip' }
Response: { url: string }
```

**Integration Points:** - Automated daily cron job - Manual backup
button in user settings - Restore process guided by UI wizard

**Error Handling:** - Backup creation failures: Retry up to 3 times -
Storage quota exceeded: Notify user, skip backup - Restore failures:
Rollback transaction, preserve existing data

**Dependencies:** - Supabase Storage (backup files) - Compression
library (gzip or similar) - Cron scheduler

## CHUNK 15 of 29: Feature Specifications - Functional Tools & Nice-to-Haves

### FEATURE 24: Delta Analytics (CARD C7)

**Status:** ⚠️ Concept Defined, Not Built

**User Story:** As a user, I want to see how my writing has improved
over time, so I can track my growth as a writer.

**Acceptance Criteria:** - Track vocabulary diversity over time -
Measure average sentence complexity - Count metaphor usage trends -
Analyze voice parameter consistency - Generate growth reports (monthly,
quarterly) - Compare early vs. recent writing samples - Visualize
improvement metrics with charts

**Technical Implementation:**

``` typescript
interface DeltaAnalyticsService {
  async analyzeGrowth(
    userId: string,
    timeframe: 'monthly' | 'quarterly' | 'yearly'
  ): Promise<GrowthReport> {
    const documents = await this.getDocumentsInTimeframe(userId, timeframe);
    
    const metrics = await Promise.all(
      documents.map(doc => this.analyzeDocument(doc))
    );
    
    return {
      vocabularyDiversity: this.calculateVocabularyTrend(metrics),
      sentenceComplexity: this.calculateComplexityTrend(metrics),
      metaphorUsage: this.calculateMetaphorTrend(metrics),
      voiceConsistency: this.calculateVoiceConsistency(metrics),
      overallGrowthScore: this.calculateGrowthScore(metrics)
    };
  }
  
  async analyzeDocument(document: Document): Promise<DocumentMetrics> {
    const text = document.content;
    const words = text.split(/\s+/);
    const sentences = text.split(/[.!?]+/);
    
    return {
      documentId: document.id,
      createdAt: document.created_at,
      vocabularyDiversity: this.calculateVocabularyDiversity(words),
      avgSentenceLength: words.length / sentences.length,
      avgWordLength: words.reduce((sum, w) => sum + w.length, 0) / words.length,
      metaphorCount: await this.countMetaphors(text),
      totalWords: words.length
    };
  }
  
  calculateVocabularyDiversity(words: string[]): number {
    const uniqueWords = new Set(words.map(w => w.toLowerCase()));
    return uniqueWords.size / words.length; // Type-Token Ratio
  }
  
  async countMetaphors(text: string): Promise<number> {
    const prompt = `Count the number of metaphors in this text. Return only a number:

${text}`;
    
    const response = await callClaudeAPI(prompt);
    return parseInt(response);
  }
  
  calculateVocabularyTrend(metrics: DocumentMetrics[]): Trend {
    const sorted = metrics.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    
    const early = sorted.slice(0, Math.floor(sorted.length / 3));
    const recent = sorted.slice(-Math.floor(sorted.length / 3));
    
    const earlyAvg = early.reduce((sum, m) => sum + m.vocabularyDiversity, 0) / early.length;
    const recentAvg = recent.reduce((sum, m) => sum + m.vocabularyDiversity, 0) / recent.length;
    
    return {
      early: earlyAvg,
      recent: recentAvg,
      change: ((recentAvg - earlyAvg) / earlyAvg) * 100,
      direction: recentAvg > earlyAvg ? 'improving' : 'declining'
    };
  }
  
  calculateGrowthScore(metrics: DocumentMetrics[]): number {
    // Composite score based on multiple factors
    const vocabTrend = this.calculateVocabularyTrend(metrics);
    const complexityTrend = this.calculateComplexityTrend(metrics);
    const metaphorTrend = this.calculateMetaphorTrend(metrics);
    
    const score = (
      (vocabTrend.direction === 'improving' ? 30 : 0) +
      (complexityTrend.direction === 'improving' ? 30 : 0) +
      (metaphorTrend.direction === 'improving' ? 20 : 0) +
      20 // Base score for consistent writing
    );
    
    return Math.min(100, score);
  }
}
```

**Visualization Data:**

``` typescript
interface ChartData {
  labels: string[]; // Dates
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

function generateGrowthChart(metrics: DocumentMetrics[]): ChartData {
  return {
    labels: metrics.map(m => m.createdAt.toDateString()),
    datasets: [
      {
        label: 'Vocabulary Diversity',
        data: metrics.map(m => m.vocabularyDiversity * 100),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      },
      {
        label: 'Avg Sentence Length',
        data: metrics.map(m => m.avgSentenceLength),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }
    ]
  };
}
```

**Database Schema:**

``` sql
CREATE TABLE document_analytics (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  vocabulary_diversity DECIMAL(5,4),
  avg_sentence_length DECIMAL(6,2),
  avg_word_length DECIMAL(5,2),
  metaphor_count INTEGER,
  total_words INTEGER,
  analyzed_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_analytics_document ON document_analytics(document_id);
```

**API Contract:**

``` typescript
GET /api/analytics/growth
Request: { userId: string, timeframe: 'monthly' | 'quarterly' | 'yearly' }
Response: GrowthReport

GET /api/analytics/document/:documentId
Response: DocumentMetrics

GET /api/analytics/chart-data
Request: { userId: string, metric: 'vocabulary' | 'complexity' | 'metaphor' }
Response: ChartData
```

**Integration Points:** - Analytics dashboard in UI - Charts using
Chart.js or similar - Scheduled analysis runs weekly

**Dependencies:** - Claude API for metaphor counting - Chart
visualization library

------------------------------------------------------------------------

### FEATURE 25: OCR Capture (CARD D1 - Nice-to-Have)

**Status:** ⚠️ Not Planned for Alpha

**User Story:** As a user with handwritten notes, I want to capture them
via photo and have them transcribed, so I can include them in my digital
projects.

**Acceptance Criteria:** - Upload photo of handwritten notes - OCR
extraction with \>90% accuracy - Manual correction of OCR errors -
Support for multiple handwriting styles - Batch upload for multiple
pages

**Technical Implementation:**

``` typescript
interface OCRService {
  async extractText(imageFile: File): Promise<OCRResult> {
    // Use Tesseract.js or cloud OCR API
    const { data } = await Tesseract.recognize(imageFile, 'eng', {
      logger: m => console.log(m)
    });
    
    return {
      text: data.text,
      confidence: data.confidence,
      lines: data.lines.map(line => ({
        text: line.text,
        confidence: line.confidence,
        bbox: line.bbox
      }))
    };
  }
  
  async processHandwrittenNotes(imageFile: File): Promise<string> {
    // For better accuracy, use Google Cloud Vision API
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await fetch('https://vision.googleapis.com/v1/images:annotate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_CLOUD_API_KEY}`
      },
      body: JSON.stringify({
        requests: [{
          image: { content: await this.fileToBase64(imageFile) },
          features: [{ type: 'DOCUMENT_TEXT_DETECTION' }]
        }]
      })
    });
    
    const data = await response.json();
    return data.responses[0].fullTextAnnotation.text;
  }
}
```

**API Contract:**

``` typescript
POST /api/ocr/extract
Request: { imageFile: File }
Response: OCRResult

POST /api/ocr/batch
Request: { imageFiles: File[] }
Response: { results: OCRResult[] }
```

**Integration Points:** - Content Collection Engine - Manual correction
UI

**Dependencies:** - Tesseract.js or Google Cloud Vision API

------------------------------------------------------------------------

### FEATURE 26: Mobile App (CARD D2 - Nice-to-Have)

**Status:** ⚠️ Not Planned for Year 1

**User Story:** As a user on the go, I want a mobile app so I can
capture thoughts and work on projects from my phone.

**Acceptance Criteria:** - iOS and Android native apps - Voice capture
on mobile - Offline mode with sync - Push notifications for
collaboration - Mobile-optimized UI

**Technical Approach:**

- Use React Native for cross-platform development
- Share API backend with web app
- Implement offline-first architecture with local SQLite
- Sync queue for offline changes

**Dependencies:** - React Native - Mobile push notification service -
App Store accounts

------------------------------------------------------------------------

### FEATURE 27: Community Publishing Portal (CARD D3 - Nice-to-Have)

**Status:** ⚠️ Not Planned for Year 1

**User Story:** As a user, I want to publish my finished work to a
community portal, so I can share it with other users and build an
audience.

**Acceptance Criteria:** - Publish documents publicly or to specific
users - Discovery feed for browsing published work - Follow/subscribe to
favorite authors - Comment on published works - Analytics on views and
engagement

**Technical Implementation:**

``` typescript
interface PublishingService {
  async publishDocument(
    documentId: string,
    visibility: 'public' | 'unlisted' | 'private'
  ): Promise<Publication> {
    const document = await getDocument(documentId);
    
    const publicationId = uuid();
    await db.query(`
      INSERT INTO publications (id, document_id, user_id, visibility, published_at)
      VALUES ($1, $2, $3, $4, NOW())
    `, [publicationId, documentId, document.userId, visibility]);
    
    return {
      id: publicationId,
      url: `https://mrs-robbins.com/read/${publicationId}`,
      visibility
    };
  }
  
  async getDiscoveryFeed(
    userId: string,
    filters?: { category?: string; sortBy?: 'recent' | 'popular' }
  ): Promise<Publication[]> {
    let sql = `
      SELECT p.*, d.title, d.content, u.email as author_email
      FROM publications p
      JOIN documents d ON p.document_id = d.id
      JOIN users u ON p.user_id = u.id
      WHERE p.visibility = 'public'
    `;
    
    if (filters?.category) {
      sql += ` AND d.category = '${filters.category}'`;
    }
    
    if (filters?.sortBy === 'popular') {
      sql += ` ORDER BY p.view_count DESC`;
    } else {
      sql += ` ORDER BY p.published_at DESC`;
    }
    
    const result = await db.query(sql);
    return result.rows;
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE publications (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  user_id UUID REFERENCES users(id),
  visibility VARCHAR(50), -- 'public', 'unlisted', 'private'
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  published_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE publication_comments (
  id UUID PRIMARY KEY,
  publication_id UUID REFERENCES publications(id),
  user_id UUID REFERENCES users(id),
  comment_text TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Integration Points:** - Endpoint Publication - Social features
(follow, like, comment)

------------------------------------------------------------------------

### FEATURE 28: Voice Avatar Marketplace (CARD D4 - Nice-to-Have)

**Status:** ⚠️ Not Planned for Year 1

**User Story:** As a user, I want to browse and purchase premium voice
avatars created by other users, so I can experiment with different
writing styles.

**Acceptance Criteria:** - Browse marketplace of voice avatars - Preview
avatar with sample text - Purchase or download free avatars - Creators
earn revenue from sales (Stripe Connect) - Rating and review system

**Technical Implementation:**

``` typescript
interface AvatarMarketplace {
  async listMarketplaceAvatars(
    filters?: { category?: string; priceRange?: [number, number] }
  ): Promise<MarketplaceAvatar[]> {
    let sql = `
      SELECT ma.*, COUNT(r.id) as review_count, AVG(r.rating) as avg_rating
      FROM marketplace_avatars ma
      LEFT JOIN avatar_reviews r ON ma.id = r.avatar_id
      WHERE ma.is_published = true
    `;
    
    if (filters?.category) {
      sql += ` AND ma.category = '${filters.category}'`;
    }
    
    if (filters?.priceRange) {
      sql += ` AND ma.price BETWEEN ${filters.priceRange[0]} AND ${filters.priceRange[1]}`;
    }
    
    sql += ` GROUP BY ma.id ORDER BY ma.created_at DESC`;
    
    const result = await db.query(sql);
    return result.rows;
  }
  
  async purchaseAvatar(
    avatarId: string,
    buyerId: string
  ): Promise<void> {
    const avatar = await this.getMarketplaceAvatar(avatarId);
    
    // Process payment via Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: avatar.price * 100, // cents
      currency: 'usd',
      customer: buyerId,
      transfer_data: {
        destination: avatar.creatorStripeAccountId,
        amount: avatar.price * 0.7 * 100 // 70% to creator, 30% platform fee
      }
    });
    
    // Add avatar to buyer's library
    await this.copyAvatarToUser(avatarId, buyerId);
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE marketplace_avatars (
  id UUID PRIMARY KEY,
  creator_id UUID REFERENCES users(id),
  avatar_id UUID REFERENCES voice_avatars(id),
  name VARCHAR(100),
  description TEXT,
  category VARCHAR(50),
  price DECIMAL(10,2),
  preview_text TEXT,
  is_published BOOLEAN DEFAULT false,
  creator_stripe_account_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE avatar_reviews (
  id UUID PRIMARY KEY,
  avatar_id UUID REFERENCES marketplace_avatars(id),
  user_id UUID REFERENCES users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Integration Points:** - Stripe Connect for payments - Voice Avatar
system - Marketplace UI

**Dependencies:** - Stripe Connect - Payment processing

## CHUNK 16 of 29: Feature Specifications - Nice-to-Have & Strategic Features

### FEATURE 29: API Access for Third Parties (CARD D5 - Nice-to-Have)

**Status:** ⚠️ Not Planned for Year 1-2

**User Story:** As a developer, I want API access to Mrs. Robbins' voice
engine, so I can integrate it into my own applications.

**Acceptance Criteria:** - RESTful API with authentication - Rate
limiting per API key - Comprehensive API documentation - SDK for popular
languages (JavaScript, Python) - Webhook support for async operations -
Usage analytics and billing

**Technical Implementation:**

``` typescript
interface PublicAPI {
  async authenticate(apiKey: string): Promise<AuthToken> {
    const keyRecord = await db.query(`
      SELECT * FROM api_keys
      WHERE key = $1 AND is_active = true
    `, [apiKey]);
    
    if (keyRecord.rows.length === 0) {
      throw new Error('Invalid API key');
    }
    
    const token = jwt.sign(
      { userId: keyRecord.rows[0].user_id, scope: keyRecord.rows[0].scope },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    return { token, expiresIn: 3600 };
  }
  
  async rateLimitCheck(apiKey: string): Promise<boolean> {
    const usage = await redis.get(`rate_limit:${apiKey}`);
    
    if (!usage) {
      await redis.setex(`rate_limit:${apiKey}`, 3600, '1');
      return true;
    }
    
    const count = parseInt(usage);
    if (count >= 100) { // 100 requests per hour
      return false;
    }
    
    await redis.incr(`rate_limit:${apiKey}`);
    return true;
  }
}

// Example API endpoints
app.post('/api/v1/voice/translate', authenticate, rateLimit, async (req, res) => {
  const { content, avatarConfig } = req.body;
  
  const directives = getVoiceDirectives(avatarConfig);
  
  res.json({ directives, estimatedTokens: estimateTokens(directives) });
});

app.post('/api/v1/serendipity/discover', authenticate, rateLimit, async (req, res) => {
  const { content, filters } = req.body;
  
  const connections = await serendipityEngine.discover({
    sourceContent: content,
    filters
  });
  
  res.json({ connections });
});
```

**Database Schema:**

``` sql
CREATE TABLE api_keys (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  key VARCHAR(100) UNIQUE NOT NULL,
  scope VARCHAR(100)[], -- ['voice.translate', 'serendipity.discover']
  is_active BOOLEAN DEFAULT true,
  rate_limit INTEGER DEFAULT 100, -- requests per hour
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE api_usage (
  id UUID PRIMARY KEY,
  api_key_id UUID REFERENCES api_keys(id),
  endpoint VARCHAR(100),
  request_count INTEGER,
  date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**SDK Example (JavaScript):**

``` typescript
// mrs-robbins-sdk
class MrsRobbinsClient {
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.mrs-robbins.com/v1';
  }
  
  async translateVoice(content: string, avatarConfig: VoiceAvatarConfig): Promise<string> {
    const response = await fetch(`${this.baseUrl}/voice/translate`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content, avatarConfig })
    });
    
    const data = await response.json();
    return data.directives;
  }
  
  async discoverConnections(content: string, filters?: any): Promise<Connection[]> {
    const response = await fetch(`${this.baseUrl}/serendipity/discover`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content, filters })
    });
    
    const data = await response.json();
    return data.connections;
  }
}
```

**Integration Points:** - API gateway with authentication - Rate
limiting via Redis - Usage analytics for billing

**Dependencies:** - JWT for authentication - Redis for rate limiting -
API documentation tool (Swagger/OpenAPI)

------------------------------------------------------------------------

### FEATURE 30: Payment & Subscription Integration (CARD E11 - Strategic)

**Status:** ⚠️ Architecture Defined, Not Built

**User Story:** As a user, I want to upgrade to a paid tier for
additional features, so I can unlock the full power of Mrs. Robbins.

**Acceptance Criteria:** - Free tier with basic features - Pro tier with
advanced features - Payment via WooCommerce + Stripe - Subscription
management (upgrade, downgrade, cancel) - Webhook sync between
WooCommerce and Mrs. Robbins - Grace period for failed payments

**Technical Implementation:**

``` typescript
interface SubscriptionService {
  async createSubscription(
    userId: string,
    tier: 'free' | 'pro' | 'enterprise'
  ): Promise<Subscription> {
    // Create WooCommerce subscription
    const wcSubscription = await woocommerce.post('subscriptions', {
      customer_id: await this.getWooCommerceCustomerId(userId),
      billing_period: 'month',
      billing_interval: 1,
      line_items: [
        {
          product_id: this.getProductIdForTier(tier),
          quantity: 1
        }
      ]
    });
    
    // Store subscription in database
    const subscriptionId = uuid();
    await db.query(`
      INSERT INTO subscriptions (id, user_id, tier, wc_subscription_id, status)
      VALUES ($1, $2, $3, $4, 'active')
    `, [subscriptionId, userId, tier, wcSubscription.id]);
    
    // Update user tier
    await this.updateUserTier(userId, tier);
    
    return {
      id: subscriptionId,
      userId,
      tier,
      status: 'active',
      createdAt: new Date()
    };
  }
  
  async handleWebhook(event: WooCommerceWebhook): Promise<void> {
    switch (event.topic) {
      case 'subscription.created':
        await this.syncSubscriptionCreated(event.payload);
        break;
      case 'subscription.updated':
        await this.syncSubscriptionUpdated(event.payload);
        break;
      case 'subscription.cancelled':
        await this.syncSubscriptionCancelled(event.payload);
        break;
      case 'payment.failed':
        await this.handlePaymentFailed(event.payload);
        break;
    }
  }
  
  async syncSubscriptionUpdated(payload: any): Promise<void> {
    const wcSubscriptionId = payload.id;
    const newStatus = payload.status; // 'active', 'on-hold', 'cancelled'
    
    await db.query(`
      UPDATE subscriptions
      SET status = $1, updated_at = NOW()
      WHERE wc_subscription_id = $2
    `, [newStatus, wcSubscriptionId]);
    
    // If downgraded, update user tier
    if (payload.tier) {
      const userId = await this.getUserIdFromWcSubscription(wcSubscriptionId);
      await this.updateUserTier(userId, payload.tier);
    }
  }
  
  async handlePaymentFailed(payload: any): Promise<void> {
    const wcSubscriptionId = payload.subscription_id;
    
    // Update subscription status
    await db.query(`
      UPDATE subscriptions
      SET status = 'payment_failed', updated_at = NOW()
      WHERE wc_subscription_id = $1
    `, [wcSubscriptionId]);
    
    // Send notification to user
    const userId = await this.getUserIdFromWcSubscription(wcSubscriptionId);
    await this.sendPaymentFailedEmail(userId);
    
    // Grace period: 7 days before downgrading
    setTimeout(async () => {
      const sub = await this.getSubscription(wcSubscriptionId);
      if (sub.status === 'payment_failed') {
        await this.updateUserTier(userId, 'free');
      }
    }, 7 * 24 * 60 * 60 * 1000); // 7 days
  }
}
```

**Feature Gating by Tier:**

``` typescript
interface FeatureGate {
  async checkAccess(userId: string, feature: string): Promise<boolean> {
    const user = await getUser(userId);
    const tier = user.subscription_tier;
    
    const featureAccess = {
      free: [
        'basic_dialectic',
        'voice_avatars_limit_3',
        'projects_limit_5',
        'export_markdown'
      ],
      pro: [
        'basic_dialectic',
        'voice_avatars_unlimited',
        'projects_unlimited',
        'export_all_formats',
        'serendipity_engine',
        'content_filters',
        'domain_repositories'
      ],
      enterprise: [
        'all_features',
        'priority_support',
        'custom_domain_repos',
        'api_access'
      ]
    };
    
    return featureAccess[tier].includes(feature) || 
           featureAccess[tier].includes('all_features');
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  tier VARCHAR(50), -- 'free', 'pro', 'enterprise'
  wc_subscription_id INTEGER,
  status VARCHAR(50), -- 'active', 'cancelled', 'payment_failed', 'on_hold'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE users
ADD COLUMN subscription_tier VARCHAR(50) DEFAULT 'free';
```

**Webhook Endpoints:**

``` typescript
app.post('/webhooks/woocommerce', async (req, res) => {
  const signature = req.headers['x-wc-webhook-signature'];
  
  // Verify webhook signature
  if (!verifyWebhookSignature(req.body, signature)) {
    return res.status(401).send('Invalid signature');
  }
  
  const event = {
    topic: req.headers['x-wc-webhook-topic'],
    payload: req.body
  };
  
  await subscriptionService.handleWebhook(event);
  
  res.status(200).send('OK');
});
```

**Integration Points:** - WooCommerce API for subscription management -
Stripe for payment processing (via WooCommerce) - Feature gating
throughout application

**Error Handling:** - Webhook processing failures: Retry with
exponential backoff - Payment failures: Grace period before downgrade -
Sync conflicts: Manual admin review

**Dependencies:** - WooCommerce Subscriptions plugin - Stripe payment
gateway - Webhook signature verification

------------------------------------------------------------------------

### FEATURE 31: Content Import (CARD C8)

**Status:** ⚠️ Not Fully Specified

**User Story:** As a user with existing writing in other tools, I want
to import documents, so I don't have to retype everything.

**Acceptance Criteria:** - Import from DOCX, TXT, MD files - Preserve
formatting where possible - Batch import multiple files - Preview before
import - Assign to existing or new project

**Technical Implementation:**

``` typescript
interface ImportService {
  async importFile(
    file: File,
    projectId: string,
    userId: string
  ): Promise<ImportResult> {
    const fileType = this.detectFileType(file);
    
    let content: string;
    
    switch (fileType) {
      case 'docx':
        content = await this.extractDocx(file);
        break;
      case 'md':
        content = await this.extractMarkdown(file);
        break;
      case 'txt':
        content = await this.extractText(file);
        break;
      default:
        throw new Error(`Unsupported file type: ${fileType}`);
    }
    
    // Create thought blob from imported content
    const blobId = await this.createThoughtBlob({
      projectId,
      userId,
      content,
      contentType: 'import',
      wordCount: content.split(/\s+/).length
    });
    
    // Trigger cataloging and embedding
    await catalogingEngine.categorize(content, blobId);
    await embeddingService.embedContent(content, blobId);
    
    return {
      blobId,
      wordCount: content.split(/\s+/).length,
      fileType
    };
  }
  
  async extractDocx(file: File): Promise<string> {
    const mammoth = require('mammoth');
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    
    return result.value;
  }
  
  async extractMarkdown(file: File): Promise<string> {
    return await file.text();
  }
  
  async extractText(file: File): Promise<string> {
    return await file.text();
  }
  
  async batchImport(
    files: File[],
    projectId: string,
    userId: string
  ): Promise<ImportResult[]> {
    const results = [];
    
    for (const file of files) {
      try {
        const result = await this.importFile(file, projectId, userId);
        results.push(result);
      } catch (error) {
        results.push({ error: error.message, filename: file.name });
      }
    }
    
    return results;
  }
}
```

**API Contract:**

``` typescript
POST /api/import/file
Request: { file: File, projectId: string, userId: string }
Response: ImportResult

POST /api/import/batch
Request: { files: File[], projectId: string, userId: string }
Response: { results: ImportResult[] }
```

**Integration Points:** - Content Collection Engine - Cataloging and
Embedding engines triggered automatically

**Dependencies:** - mammoth (DOCX parsing) - File upload handling

------------------------------------------------------------------------

### FEATURE 32: Notification System (CARD C9)

**Status:** ⚠️ Not Started

**User Story:** As a user, I want notifications for important events, so
I stay informed about my projects and collaborations.

**Acceptance Criteria:** - Email notifications for failed payments -
In-app notifications for comments (future collaboration feature) -
Notification preferences (email, in-app, push) - Batch digest
notifications (daily/weekly summary)

**Technical Implementation:**

``` typescript
interface NotificationService {
  async send(notification: Notification): Promise<void> {
    const user = await getUser(notification.userId);
    const preferences = await this.getPreferences(notification.userId);
    
    if (preferences.email && notification.channels.includes('email')) {
      await this.sendEmail(user.email, notification);
    }
    
    if (preferences.inApp && notification.channels.includes('in_app')) {
      await this.createInAppNotification(notification);
    }
  }
  
  async sendEmail(email: string, notification: Notification): Promise<void> {
    const html = this.renderEmailTemplate(notification);
    
    await sendgrid.send({
      to: email,
      from: 'notifications@mrs-robbins.com',
      subject: notification.subject,
      html
    });
  }
  
  async createInAppNotification(notification: Notification): Promise<void> {
    await db.query(`
      INSERT INTO notifications (id, user_id, type, title, message, is_read)
      VALUES ($1, $2, $3, $4, $5, false)
    `, [uuid(), notification.userId, notification.type, notification.title, notification.message]);
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type VARCHAR(50), -- 'payment_failed', 'comment', 'mention'
  title VARCHAR(255),
  message TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE notification_preferences (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  email BOOLEAN DEFAULT true,
  in_app BOOLEAN DEFAULT true,
  push BOOLEAN DEFAULT false,
  digest_frequency VARCHAR(50) DEFAULT 'daily' -- 'daily', 'weekly', 'never'
);
```

**Integration Points:** - Triggered by various system events - Email
service (SendGrid or similar) - In-app notification UI

**Dependencies:** - SendGrid or email service - Email templates

## CHUNK 17 of 29: Final Features & Technology Stack

### FEATURE 33: Keyboard Shortcuts (CARD B7)

**Status:** ⚠️ Not Started

**User Story:** As a power user, I want keyboard shortcuts for common
actions, so I can work more efficiently.

**Acceptance Criteria:** - Common shortcuts (Ctrl+S save, Ctrl+N new
project, etc.) - Custom shortcut configuration - Shortcut cheat sheet
accessible via ? - Shortcuts work across all views

**Technical Implementation:**

``` typescript
interface KeyboardShortcuts {
  shortcuts: Map<string, () => void>;
  
  register(key: string, callback: () => void): void {
    this.shortcuts.set(key, callback);
  }
  
  handleKeyPress(event: KeyboardEvent): void {
    const key = this.getKeyCombo(event);
    const action = this.shortcuts.get(key);
    
    if (action) {
      event.preventDefault();
      action();
    }
  }
  
  getKeyCombo(event: KeyboardEvent): string {
    const modifiers = [];
    if (event.ctrlKey) modifiers.push('ctrl');
    if (event.shiftKey) modifiers.push('shift');
    if (event.altKey) modifiers.push('alt');
    
    return [...modifiers, event.key].join('+');
  }
}

// Default shortcuts
shortcuts.register('ctrl+s', () => saveDocument());
shortcuts.register('ctrl+n', () => createNewProject());
shortcuts.register('ctrl+f', () => openSearch());
shortcuts.register('?', () => showShortcutCheatSheet());
```

**Integration Points:** - Global event listener - Shortcut preferences
in settings

------------------------------------------------------------------------

### FEATURE 34: Admin Dashboard (CARD E12)

**Status:** ⚠️ Not Started

**User Story:** As an admin, I want a dashboard to manage users and
monitor system health, so I can ensure smooth operations.

**Acceptance Criteria:** - User management (view, suspend, delete) -
System metrics (active users, API usage, storage) - Error logs and
monitoring - Subscription analytics - Manual subscription overrides

**Technical Implementation:**

``` typescript
interface AdminDashboard {
  async getSystemMetrics(): Promise<SystemMetrics> {
    const [activeUsers, totalProjects, apiUsage, storageUsed] = await Promise.all([
      db.query('SELECT COUNT(*) FROM users WHERE last_active > NOW() - INTERVAL \'7 days\''),
      db.query('SELECT COUNT(*) FROM projects'),
      db.query('SELECT SUM(request_count) FROM api_usage WHERE date >= CURRENT_DATE'),
      db.query('SELECT SUM(pg_database_size(datname)) FROM pg_database WHERE datname = current_database()')
    ]);
    
    return {
      activeUsers: activeUsers.rows[0].count,
      totalProjects: totalProjects.rows[0].count,
      apiRequests: apiUsage.rows[0].sum || 0,
      storageGB: (storageUsed.rows[0].sum / 1024 / 1024 / 1024).toFixed(2)
    };
  }
  
  async listUsers(filters?: { tier?: string; status?: string }): Promise<User[]> {
    let sql = 'SELECT * FROM users WHERE 1=1';
    const params: any[] = [];
    
    if (filters?.tier) {
      params.push(filters.tier);
      sql += ` AND subscription_tier = $${params.length}`;
    }
    
    if (filters?.status) {
      params.push(filters.status);
      sql += ` AND status = $${params.length}`;
    }
    
    sql += ' ORDER BY created_at DESC';
    
    const result = await db.query(sql, params);
    return result.rows;
  }
  
  async suspendUser(userId: string, reason: string): Promise<void> {
    await db.query(`
      UPDATE users
      SET status = 'suspended', suspended_reason = $1, suspended_at = NOW()
      WHERE id = $2
    `, [reason, userId]);
  }
}
```

**Database Schema:**

``` sql
ALTER TABLE users
ADD COLUMN status VARCHAR(50) DEFAULT 'active', -- 'active', 'suspended', 'deleted'
ADD COLUMN suspended_reason TEXT,
ADD COLUMN suspended_at TIMESTAMP,
ADD COLUMN last_active TIMESTAMP;
```

**Integration Points:** - Admin-only routes with role checking -
Monitoring dashboard UI

------------------------------------------------------------------------

### FEATURE 35: Contextual Help System (CARD B8)

**Status:** ⚠️ Not Started

**User Story:** As a new user, I want contextual help tips, so I
understand how to use features.

**Acceptance Criteria:** - Tooltips on UI elements - Onboarding wizard
for new users - Feature tours (highlight + explain) - Help search with
relevant articles - Video tutorials embedded

**Technical Implementation:**

``` typescript
interface HelpSystem {
  async showOnboarding(userId: string): Promise<void> {
    const hasCompletedOnboarding = await this.checkOnboardingStatus(userId);
    
    if (!hasCompletedOnboarding) {
      this.startOnboardingTour();
    }
  }
  
  startOnboardingTour(): void {
    const steps = [
      {
        target: '#create-project-btn',
        content: 'Start by creating your first project. Choose an endpoint type based on what you want to create.',
        position: 'bottom'
      },
      {
        target: '#voice-avatar-selector',
        content: 'Select a voice avatar to maintain your authentic voice throughout the writing process.',
        position: 'right'
      },
      {
        target: '#dialectic-editor',
        content: 'This is where the magic happens. Have a conversation with Mrs. Robbins to organize your thoughts.',
        position: 'top'
      }
    ];
    
    this.showTour(steps);
  }
}
```

**Integration Points:** - Tour library (e.g., Shepherd.js) - Help
articles in knowledge base

------------------------------------------------------------------------

### FEATURE 36: Error Logging & Monitoring (CARD E13)

**Status:** ⚠️ Partially Implemented

**User Story:** As a developer, I want comprehensive error logging, so I
can debug issues quickly.

**Acceptance Criteria:** - All errors logged with stack traces - Error
aggregation and grouping - Alerting for critical errors - Performance
monitoring - User-facing error messages (friendly)

**Technical Implementation:**

``` typescript
// Using Sentry for error tracking
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app })
  ],
  tracesSampleRate: 1.0
});

// Error handling middleware
app.use((err, req, res, next) => {
  Sentry.captureException(err);
  
  console.error('Error:', err);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal server error',
      code: err.code || 'INTERNAL_ERROR'
    }
  });
});
```

**Integration Points:** - Sentry or similar error tracking - Performance
monitoring (e.g., New Relic) - Alert notifications (Slack, email)

------------------------------------------------------------------------

## Section 5: Technology Stack & Infrastructure

### Frontend Technologies

**Core Framework:** - **React 18+** - Component-based UI framework -
**TypeScript** - Type safety and better developer experience -
**Vite** - Fast build tooling and dev server

**UI Libraries:** - **Tailwind CSS** - Utility-first CSS framework -
**shadcn/ui** - Reusable component library - **Radix UI** - Accessible
component primitives - **Lucide React** - Icon library

**State Management:** - **React Query (TanStack Query)** - Server state
management and caching - **Zustand** - Client state management
(lightweight alternative to Redux)

**Routing:** - **React Router v6** - Client-side routing

**Forms:** - **React Hook Form** - Form validation and management -
**Zod** - Schema validation

**Rich Text Editing:** - **Tiptap** or **Slate.js** - Extensible rich
text editor framework

**Audio/Voice:** - **Web Speech API** - Browser-based speech
recognition - **Web Audio API** - Audio playback control

**Charts/Visualization:** - **Chart.js** or **Recharts** - Data
visualization for analytics

**Diff Viewing:** - **react-diff-viewer** - Side-by-side diff component
for version comparison

------------------------------------------------------------------------

### Backend Technologies

**Runtime:** - **Node.js 18+** - JavaScript runtime

**Framework:** - **Express.js** or **Fastify** - HTTP server framework

**Database:** - **Supabase (PostgreSQL 14+)** - Managed database with
pgvector extension - **pgvector** - Vector similarity search for
embeddings

**Authentication:** - **Supabase Auth** - User authentication and
session management

**File Storage:** - **Supabase Storage** - File uploads (audio,
documents, backups)

**Caching:** - **Upstash Redis** - Serverless Redis for caching and rate
limiting

**Queue Management:** - **BullMQ** (future) - Job queue for async tasks

------------------------------------------------------------------------

### AI/ML Services

**Language Models:** - **Anthropic Claude API** - Conversational AI for
dialectic collaboration - **Claude Sonnet 4** - Primary model for
conversation and content generation

**Embeddings:** - **OpenAI Embeddings API** - text-embedding-ada-002 for
vector generation

**Text-to-Speech:** - **ElevenLabs API** - High-quality voice
synthesis - **Web Speech API** - Browser fallback

**Speech-to-Text:** - **Web Speech API** - Browser-based transcription -
**OpenAI Whisper API** - Server-side transcription fallback

**OCR (Future):** - **Tesseract.js** or **Google Cloud Vision API** -
Optical character recognition

------------------------------------------------------------------------

### Payment Processing

**E-commerce Platform:** - **WooCommerce** - WordPress plugin for
subscription management

**Payment Gateway:** - **Stripe** - Payment processing integrated with
WooCommerce

**Webhook Processing:** - **WooCommerce Webhooks** - Subscription event
notifications

------------------------------------------------------------------------

### Development Tools

**Version Control:** - **GitHub** - Code repository and CI/CD

**Package Management:** - **npm** or **pnpm** - JavaScript package
management

**Code Quality:** - **ESLint** - JavaScript linting - **Prettier** -
Code formatting - **TypeScript** - Type checking

**Testing:** - **Vitest** - Unit testing framework - **React Testing
Library** - Component testing - **Playwright** (future) - E2E testing

**API Testing:** - **Postman** - Manual API testing - **Newman** -
Automated API testing in CI/CD

**Development Environment:** - **Cursor IDE** with Claude integration -
AI-assisted development

------------------------------------------------------------------------

### Deployment & Hosting

**Frontend Hosting:** - **Vercel** - Serverless deployment platform for
React apps - **Vercel Edge Functions** - Serverless API routes

**Database Hosting:** - **Supabase** - Managed PostgreSQL with built-in
features

**CDN:** - **Vercel Edge Network** - Global content delivery

**Domain & DNS:** - **Cloudflare** or **Vercel DNS** - Domain management

**SSL Certificates:** - **Let's Encrypt** (via Vercel) - Free SSL/TLS
certificates

------------------------------------------------------------------------

### Monitoring & Analytics

**Error Tracking:** - **Sentry** - Error monitoring and crash reporting

**Performance Monitoring:** - **Vercel Analytics** - Web vitals and
performance metrics

**User Analytics:** - **Plausible** or **PostHog** - Privacy-focused
analytics

**Uptime Monitoring:** - **UptimeRobot** or **Pingdom** - Service
availability monitoring

**Logs:** - **Vercel Logs** - Application logging - **Supabase Logs** -
Database query logs

------------------------------------------------------------------------

### Email Services

**Transactional Email:** - **SendGrid** or **Resend** - Email delivery
for notifications

**Email Templates:** - **React Email** - Component-based email templates

------------------------------------------------------------------------

### Security

**Authentication:** - **Supabase Auth** with JWT tokens

**Authorization:** - **Row-Level Security (RLS)** in PostgreSQL via
Supabase

**API Security:** - **CORS** configuration for API protection - **Rate
Limiting** via Redis - **API Key Management** for third-party access

**Data Encryption:** - **TLS/SSL** for data in transit - **PostgreSQL
encryption at rest** via Supabase

**Secrets Management:** - **Environment Variables** via Vercel -
**Supabase Vault** for sensitive data

## CHUNK 18 of 29: Testing Strategy & Quality Assurance

## Section 6: Testing Strategy

### Testing Philosophy

Mrs. Robbins follows a pragmatic testing approach prioritizing: 1.
**Critical path coverage** over comprehensive coverage 2. **Integration
tests** for core user flows 3. **Unit tests** for complex business logic
4. **Manual testing** for UX and edge cases during Alpha/Beta

**Target Coverage:** - Critical paths: 90%+ coverage - Business logic:
70%+ coverage - UI components: 50%+ coverage (visual regression where
needed)

------------------------------------------------------------------------

### Unit Testing

**What to Test:** - Voice translation logic (slider values → prompt
directives) - Cataloging engine (content → metadata extraction) - Text
analysis utilities (vocabulary diversity, metaphor counting) - Data
validation and sanitization - Pure functions with complex logic

**Testing Framework:** - **Vitest** - Fast unit test runner with Vite
integration - **React Testing Library** - Component testing

**Example Unit Tests:**

``` typescript
// tests/voice-translation.test.ts
import { describe, it, expect } from 'vitest';
import { getVoiceDirectives } from '@/lib/voice';

describe('Voice Translation Engine', () => {
  it('should generate casual tone for formality = 2', () => {
    const config = {
      formality: 2,
      complexity: 5,
      metaphorDensity: 5,
      // ... other parameters
    };
    
    const directives = getVoiceDirectives(config);
    
    expect(directives).toContain('conversational');
    expect(directives).toContain('casual');
  });
  
  it('should generate formal tone for formality = 9', () => {
    const config = { formality: 9, /* ... */ };
    const directives = getVoiceDirectives(config);
    
    expect(directives).toContain('formal');
    expect(directives).toContain('academic');
  });
  
  it('should produce measurably different outputs for different metaphor settings', () => {
    const lowMetaphor = getVoiceDirectives({ metaphorDensity: 2, /* ... */ });
    const highMetaphor = getVoiceDirectives({ metaphorDensity: 9, /* ... */ });
    
    expect(lowMetaphor).not.toEqual(highMetaphor);
    expect(highMetaphor).toContain('metaphor');
  });
});
```

``` typescript
// tests/cataloging.test.ts
describe('Cataloging Engine', () => {
  it('should extract primary categories from content', async () => {
    const content = 'This article discusses photography lighting techniques for portraits.';
    const result = await catalogingEngine.categorize(content, 'test-id');
    
    expect(result.metadata.primaryCategories).toContain('photography');
    expect(result.metadata.primaryCategories).toContain('portraiture');
  });
  
  it('should extract named entities', async () => {
    const content = 'Ansel Adams pioneered landscape photography in Yosemite.';
    const result = await catalogingEngine.categorize(content, 'test-id');
    
    const entities = result.metadata.extractedEntities;
    expect(entities.some(e => e.value === 'Ansel Adams' && e.type === 'person')).toBe(true);
    expect(entities.some(e => e.value === 'Yosemite' && e.type === 'place')).toBe(true);
  });
});
```

**Running Tests:**

``` bash
# Run all tests
npm run test

# Run with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

------------------------------------------------------------------------

### Integration Testing

**What to Test:** - Complete user flows (create project → dialectic
conversation → commit to document → export) - API endpoints with
database interactions - Authentication and authorization flows - Payment
webhook processing - Multi-component interactions (e.g., Serendipity
Engine → Database → UI)

**Testing Framework:** - **Vitest** for API integration tests -
**Supabase Test Helpers** for database setup/teardown

**Example Integration Tests:**

``` typescript
// tests/integration/dialectic-flow.test.ts
describe('Dialectic Conversation Flow', () => {
  let testUser: User;
  let testProject: Project;
  
  beforeEach(async () => {
    // Setup: Create test user and project
    testUser = await createTestUser();
    testProject = await createTestProject(testUser.id);
  });
  
  afterEach(async () => {
    // Cleanup
    await deleteTestUser(testUser.id);
  });
  
  it('should complete full dialectic conversation to document export', async () => {
    // 1. Start conversation
    const response1 = await api.post('/api/conversation/message', {
      projectId: testProject.id,
      userInput: 'I want to write about AI ethics.',
      avatarId: 'default'
    });
    expect(response1.status).toBe(200);
    expect(response1.data.content).toBeTruthy();
    
    // 2. Continue conversation
    const response2 = await api.post('/api/conversation/message', {
      projectId: testProject.id,
      userInput: 'Yes, focusing on bias in training data.',
      avatarId: 'default'
    });
    expect(response2.status).toBe(200);
    
    // 3. Commit to document
    const commitResponse = await api.post('/api/document/commit', {
      projectId: testProject.id,
      content: 'AI ethics discussion around bias.',
      section: 'Introduction'
    });
    expect(commitResponse.status).toBe(200);
    
    // 4. Export document
    const exportResponse = await api.post('/api/export', {
      documentId: testProject.documentId,
      format: 'markdown'
    });
    expect(exportResponse.status).toBe(200);
    expect(exportResponse.data.url).toBeTruthy();
  });
});
```

``` typescript
// tests/integration/serendipity.test.ts
describe('Serendipity Engine Integration', () => {
  it('should discover connections across projects', async () => {
    // Setup: Create multiple projects with related content
    const project1 = await createProjectWithContent('Skiing physics: dampening mechanisms');
    const project2 = await createProjectWithContent('Aircraft wing design: cavitation effects');
    
    // Query serendipity
    const result = await serendipityEngine.discover({
      sourceContentId: project1.thoughtBlobId,
      searchScope: 'all_projects'
    });
    
    // Should find connection between ski dampening and wing cavitation
    expect(result.connections.length).toBeGreaterThan(0);
    expect(result.connections.some(c => c.contentId === project2.thoughtBlobId)).toBe(true);
  });
});
```

------------------------------------------------------------------------

### API Testing

**What to Test:** - All API endpoints (request/response formats) -
Authentication and authorization - Error handling (4xx, 5xx responses) -
Rate limiting - Webhook processing

**Testing Tools:** - **Postman** - Manual API testing and collection
management - **Newman** - Automated Postman collection runner - **GitHub
Actions** - CI/CD integration

**Postman Collection Structure:**

    Mrs. Robbins API Tests
    ├── Authentication
    │   ├── Sign Up
    │   ├── Sign In
    │   └── Token Refresh
    ├── Projects
    │   ├── Create Project
    │   ├── List Projects
    │   ├── Get Project
    │   └── Delete Project
    ├── Voice Avatars
    │   ├── Save Avatar
    │   ├── Load Avatar
    │   └── List Avatars
    ├── Conversations
    │   ├── Send Message
    │   └── Get History
    ├── Serendipity
    │   ├── Discover Connections
    │   └── Search Domain Repos
    └── Exports
        ├── Export Markdown
        ├── Export DOCX
        └── Export PDF

**CI/CD Integration:**

``` yaml
# .github/workflows/api-tests.yml
name: API Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Newman
        run: npm install -g newman
      
      - name: Run Postman Collection
        run: newman run postman/mrs-robbins-api.json --environment postman/test-env.json
```

------------------------------------------------------------------------

### End-to-End Testing

**Status:** Not Implemented in Alpha, Planned for Beta

**What to Test:** - Complete user journeys from sign-up to export -
Multi-page flows - Browser compatibility - Responsive design

**Testing Framework (Future):** - **Playwright** - Cross-browser E2E
testing

**Example E2E Test (Future):**

``` typescript
// tests/e2e/complete-user-journey.spec.ts
import { test, expect } from '@playwright/test';

test('new user completes first project', async ({ page }) => {
  // 1. Sign up
  await page.goto('/signup');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'SecurePass123');
  await page.click('button[type="submit"]');
  
  // 2. Create project
  await page.waitForURL('/dashboard');
  await page.click('text=Create New Project');
  await page.fill('[name="title"]', 'My First Essay');
  await page.selectOption('[name="endpoint"]', 'writer');
  await page.click('text=Create');
  
  // 3. Start conversation
  await page.waitForURL(/\/projects\/\w+/);
  await page.fill('[name="userInput"]', 'I want to write about climate change.');
  await page.click('text=Send');
  
  // 4. Verify response
  await expect(page.locator('.assistant-response')).toBeVisible();
  
  // 5. Export document
  await page.click('text=Export');
  await page.click('text=Markdown');
  await expect(page.locator('.export-success')).toBeVisible();
});
```

------------------------------------------------------------------------

### Performance Testing

**What to Test:** - Response times under load - Database query
performance - Vector search latency - Concurrent user handling

**Testing Tools:** - **k6** or **Artillery** - Load testing -
**PostgreSQL EXPLAIN ANALYZE** - Query optimization

**Example Load Test:**

``` javascript
// tests/load/conversation-load.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up to 100 users
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 0 },   // Ramp down to 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000'], // 95% of requests under 3s
  },
};

export default function () {
  const payload = JSON.stringify({
    projectId: 'test-project-id',
    userInput: 'Tell me about AI ethics.',
    avatarId: 'default'
  });
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${__ENV.TEST_TOKEN}`
    },
  };
  
  let response = http.post('https://api.mrs-robbins.com/conversation/message', payload, params);
  
  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time OK': (r) => r.timings.duration < 3000,
  });
  
  sleep(1);
}
```

------------------------------------------------------------------------

### Security Testing

**What to Test:** - SQL injection vulnerabilities - XSS (Cross-Site
Scripting) attacks - CSRF (Cross-Site Request Forgery) protection -
Authentication bypass attempts - Rate limiting effectiveness

**Testing Tools:** - **OWASP ZAP** - Automated security scanning - **npm
audit** - Dependency vulnerability scanning - **Snyk** - Continuous
security monitoring

**CI/CD Security Checks:**

``` yaml
# .github/workflows/security.yml
name: Security Scan

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Run npm audit
        run: npm audit --audit-level=moderate
      
      - name: Run Snyk test
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
      
      - name: Run OWASP ZAP scan
        uses: zaproxy/action-baseline@v0.7.0
        with:
          target: 'https://staging.mrs-robbins.com'
```

------------------------------------------------------------------------

### Manual Testing Checklist

**Alpha/Beta Testing Focus Areas:**

**Voice Preservation:** - \[ \] Different slider settings produce
noticeably different writing - \[ \] Voice remains consistent across
long conversations - \[ \] Exemplar text analysis captures authentic
voice

**Dialectic Collaboration:** - \[ \] System never writes full sections
without user direction - \[ \] Conversation flow feels natural and
helpful - \[ \] Thesis-antithesis-synthesis pattern clear in exchanges

**Serendipity Engine:** - \[ \] Discovers non-obvious connections across
projects - \[ \] Explanations make sense and add value - \[ \] No false
positives (irrelevant connections)

**Content Filters:** - \[ \] Metaphor detection works accurately
(\>85%) - \[ \] Place anchoring flags legitimate issues - \[ \] False
positive rate acceptable (\<15%)

**Export Quality:** - \[ \] Formatting preserved in DOCX export - \[ \]
PDF renders correctly - \[ \] Markdown clean and valid

**Mobile Responsiveness:** - \[ \] UI usable on mobile browsers - \[ \]
Voice capture works on mobile - \[ \] No layout breaking on small
screens

**Browser Compatibility:** - \[ \] Chrome/Edge (Chromium) - \[ \]
Firefox - \[ \] Safari (macOS/iOS)

------------------------------------------------------------------------

### Bug Tracking & Prioritization

**Bug Severity Levels:**

**P0 (Critical):** - Data loss - Security vulnerabilities - Complete
feature breakage - Payment processing failures - **SLA:** Fix within 24
hours

**P1 (High):** - Major feature degradation - Performance issues
affecting \>50% of users - Incorrect AI responses causing user
confusion - **SLA:** Fix within 1 week

**P2 (Medium):** - Minor feature issues - UI glitches - Edge case
errors - **SLA:** Fix within 1 month

**P3 (Low):** - Cosmetic issues - Nice-to-have improvements - **SLA:**
Backlog, prioritize based on user feedback

**Bug Tracking Tool:** - **GitHub Issues** with labels for severity and
component - **Linear** (alternative) for more advanced project
management

## CHUNK 19 of 29: Deployment, CI/CD & Version Control

## Section 7: Deployment, CI/CD and Version Control

### Version Control Strategy

**Repository Structure:**

    mrs-robbins/
    ├── frontend/              # React application
    │   ├── src/
    │   │   ├── components/   # React components
    │   │   ├── lib/          # Utilities and services
    │   │   ├── pages/        # Page components
    │   │   └── styles/       # Global styles
    │   ├── public/
    │   ├── tests/
    │   └── package.json
    ├── backend/              # API and serverless functions
    │   ├── api/
    │   │   ├── routes/
    │   │   ├── services/
    │   │   └── middleware/
    │   ├── lib/
    │   ├── tests/
    │   └── package.json
    ├── database/             # Database migrations and schemas
    │   ├── migrations/
    │   ├── seeds/
    │   └── schema.sql
    ├── docs/                 # Technical documentation
    ├── scripts/              # Deployment and utility scripts
    ├── .github/
    │   └── workflows/        # GitHub Actions
    └── README.md

**Branch Strategy: GitFlow**

**Branch Types:** - `main` - Production-ready code, always deployable -
`develop` - Integration branch for features - `feature/*` - Individual
feature branches (e.g., `feature/serendipity-engine`) - `hotfix/*` -
Emergency production fixes (e.g., `hotfix/auth-bug`) - `release/*` -
Release preparation branches (e.g., `release/v1.0.0`)

**Branch Protection Rules:** - `main` branch: No direct commits,
requires PR approval, all tests must pass - `develop` branch: No direct
commits, requires PR approval - Feature branches: Can commit directly,
must rebase before merge - All PRs require CI/CD checks to pass before
merge

**Commit Message Convention (Conventional Commits):**

    <type>(<scope>): <subject>

    <body>

    <footer>

**Types:** - `feat` - New feature - `fix` - Bug fix - `docs` -
Documentation changes - `style` - Code style changes (formatting, no
logic change) - `refactor` - Code refactoring (no feature change) -
`test` - Adding or updating tests - `chore` - Build process,
dependencies, tooling

**Examples:**

    feat(voice): add bidirectional voice analysis engine

    Implements voice parameter extraction from sample text using Claude API.
    Includes confidence scoring and parameter validation.

    Closes #123

    fix(serendipity): resolve vector search timeout for large datasets

    Added pagination and query optimization to prevent timeout on 10K+ documents.

    Fixes #456

------------------------------------------------------------------------

### CI/CD Pipeline

**GitHub Actions Workflow:**

``` yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: |
          cd frontend && npm ci
          cd ../backend && npm ci
      
      - name: Run linter
        run: |
          cd frontend && npm run lint
          cd ../backend && npm run lint
      
      - name: Run type check
        run: |
          cd frontend && npm run type-check
          cd ../backend && npm run type-check
      
      - name: Run unit tests
        run: |
          cd frontend && npm run test:coverage
          cd ../backend && npm run test:coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./frontend/coverage/coverage-final.json,./backend/coverage/coverage-final.json
  
  integration-test:
    runs-on: ubuntu-latest
    needs: test
    
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Run integration tests
        run: |
          cd backend && npm ci
          npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
  
  deploy-staging:
    runs-on: ubuntu-latest
    needs: [test, integration-test]
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel Staging
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./frontend
  
  deploy-production:
    runs-on: ubuntu-latest
    needs: [test, integration-test]
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          working-directory: ./frontend
      
      - name: Run database migrations
        run: |
          npm ci
          npm run migrate:production
        env:
          DATABASE_URL: ${{ secrets.PRODUCTION_DATABASE_URL }}
      
      - name: Create GitHub Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v${{ github.run_number }}
          release_name: Release v${{ github.run_number }}
          draft: false
          prerelease: false
```

------------------------------------------------------------------------

### Database Migrations

**Migration Management:**

Using **node-pg-migrate** for database schema changes:

``` typescript
// migrations/1699900000000_initial_schema.ts
exports.up = (pgm) => {
  pgm.createTable('users', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    email: { type: 'varchar(255)', notNull: true, unique: true },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('NOW()') },
    subscription_tier: { type: 'varchar(50)', default: 'free' }
  });
  
  pgm.createTable('projects', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
    user_id: { type: 'uuid', notNull: true, references: 'users(id)' },
    title: { type: 'varchar(255)', notNull: true },
    endpoint_type: { type: 'varchar(50)' },
    created_at: { type: 'timestamp', default: pgm.func('NOW()') },
    updated_at: { type: 'timestamp', default: pgm.func('NOW()') }
  });
  
  // Additional tables...
};

exports.down = (pgm) => {
  pgm.dropTable('projects');
  pgm.dropTable('users');
};
```

**Migration Workflow:**

``` bash
# Create new migration
npm run migrate:create add_domain_repositories

# Run migrations (development)
npm run migrate:up

# Rollback migrations
npm run migrate:down

# Run migrations (production)
DATABASE_URL=$PRODUCTION_URL npm run migrate:production
```

**Migration Safety Rules:** 1. Never modify existing migrations after
they've been deployed 2. Always write reversible migrations (implement
both `up` and `down`) 3. Test migrations on staging before production 4.
Backup database before running migrations in production 5. Use
transactions for multi-step migrations

------------------------------------------------------------------------

### Environment Management

**Environment Variables:**

``` bash
# .env.example
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/mrs_robbins
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# AI Services
ANTHROPIC_API_KEY=sk-ant-xxx
OPENAI_API_KEY=sk-xxx
ELEVENLABS_API_KEY=xxx

# Payment
WC_CONSUMER_KEY=ck_xxx
WC_CONSUMER_SECRET=cs_xxx
STRIPE_SECRET_KEY=sk_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Monitoring
SENTRY_DSN=https://xxx@sentry.io/xxx

# Email
SENDGRID_API_KEY=SG.xxx

# Redis
UPSTASH_REDIS_URL=https://xxx.upstash.io
UPSTASH_REDIS_TOKEN=xxx

# App
NODE_ENV=development
API_BASE_URL=http://localhost:3000
FRONTEND_URL=http://localhost:5173
```

**Environment-Specific Configurations:**

**Development:** - Local database - Mock payment processing - Verbose
logging - Hot reload enabled

**Staging:** - Staging database (Supabase staging project) - Test
payment mode (Stripe test keys) - Moderate logging - Same infrastructure
as production

**Production:** - Production database with backups - Live payment
processing - Error-level logging only - Rate limiting enabled - CDN
enabled

------------------------------------------------------------------------

### Deployment Process

**Automated Deployment (via Vercel):**

1.  **Push to GitHub**
    - Developer commits code to feature branch
    - Creates pull request to `develop`
2.  **CI/CD Pipeline Runs**
    - Linting and type checking
    - Unit tests
    - Integration tests
    - Security scans
3.  **PR Approval & Merge**
    - Code review approval required
    - All checks must pass
    - Merge to `develop` branch
4.  **Automatic Staging Deployment**
    - Vercel automatically deploys to staging environment
    - Preview URL generated for testing
    - Database migrations run automatically
5.  **Testing on Staging**
    - Manual QA testing
    - Beta user testing
    - Performance validation
6.  **Release to Production**
    - Create release branch from `develop`
    - Merge release branch to `main`
    - Vercel automatically deploys to production
    - Production database migrations run
    - GitHub release created

**Manual Deployment Steps (if needed):**

``` bash
# 1. Build frontend
cd frontend
npm run build

# 2. Deploy to Vercel
vercel --prod

# 3. Run database migrations
npm run migrate:production

# 4. Verify deployment
curl https://app.mrs-robbins.com/api/health

# 5. Monitor logs
vercel logs --follow
```

------------------------------------------------------------------------

### Rollback Strategy

**Automated Rollback (Vercel):**

``` bash
# List recent deployments
vercel list

# Rollback to previous deployment
vercel rollback [deployment-url]
```

**Database Rollback:**

``` bash
# Rollback last migration
npm run migrate:down

# Restore from backup (if needed)
pg_restore -d mrs_robbins backup_file.dump
```

**Emergency Rollback Procedure:**

1.  **Identify Issue**
    - Check error logs in Sentry
    - Review deployment metrics
2.  **Assess Impact**
    - Critical issue affecting all users → immediate rollback
    - Minor issue affecting \<10% users → monitor and fix forward
3.  **Execute Rollback**
    - Use Vercel CLI or dashboard to rollback deployment
    - If database migration caused issue, rollback migration
    - Notify team in Slack/Discord
4.  **Post-Mortem**
    - Document what went wrong
    - Update deployment checklist
    - Add tests to prevent recurrence

------------------------------------------------------------------------

### Secrets Management

**Development:** - `.env` file (not committed to git) - Shared via
secure method (1Password, LastPass)

**Staging/Production:** - Environment variables in Vercel dashboard -
Supabase Vault for database secrets - Rotation schedule: Quarterly for
API keys

**Secret Rotation Process:**

``` bash
# 1. Generate new API key
# 2. Add new key to Vercel environment variables
# 3. Deploy new version
# 4. Verify new key works
# 5. Remove old key from Vercel
# 6. Revoke old key from service provider
```

------------------------------------------------------------------------

### Monitoring Deployment Health

**Health Check Endpoint:**

``` typescript
// api/health.ts
export default async function handler(req, res) {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    anthropic: await checkAnthropicAPI(),
    openai: await checkOpenAIAPI(),
    elevenlabs: await checkElevenLabsAPI()
  };
  
  const allHealthy = Object.values(checks).every(c => c.status === 'ok');
  
  res.status(allHealthy ? 200 : 503).json({
    status: allHealthy ? 'healthy' : 'degraded',
    checks,
    timestamp: new Date().toISOString()
  });
}

async function checkDatabase() {
  try {
    await db.query('SELECT 1');
    return { status: 'ok' };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
}
```

**Deployment Verification:**

``` bash
# After deployment, run these checks
curl https://app.mrs-robbins.com/api/health
curl https://app.mrs-robbins.com/api/version

# Check critical user flows
newman run tests/smoke-tests.json --env production
```

------------------------------------------------------------------------

### Blue-Green Deployment (Future)

**Not Implemented in Alpha, Planned for Year 2**

Blue-Green deployment strategy for zero-downtime updates:

1.  Deploy new version to "green" environment
2.  Run smoke tests on green environment
3.  Switch traffic from blue to green (via load balancer)
4.  Monitor green environment for issues
5.  Keep blue environment as fallback for 24 hours
6.  If issues detected, switch traffic back to blue
7.  After 24 hours of stability, decommission blue environment

This approach requires: - Duplicate infrastructure - Load balancer
configuration - Database migration compatibility (both versions work
with same schema) - Increased infrastructure costs (2x during
transition)

## CHUNK 20 of 29: Monitoring, Observability & Incident Response

## Section 8: Monitoring, Observability and Incident Response

### Monitoring Architecture

**Monitoring Layers:**

1.  **Infrastructure Monitoring** - Server health, resource usage
2.  **Application Monitoring** - API response times, error rates
3.  **User Experience Monitoring** - Page load times, user flows
4.  **Business Metrics Monitoring** - Conversions, engagement, revenue

------------------------------------------------------------------------

### Infrastructure Monitoring

**Metrics Tracked:**

  ------------------------------------------------------------------------
  Metric         Target         Alert Threshold                Tool
  -------------- -------------- ------------------------------ -----------
  CPU Usage      \<70% average  \>85% for 5min                 Vercel
                                                               Dashboard

  Memory Usage   \<80% average  \>90% for 5min                 Vercel
                                                               Dashboard

  Disk I/O       \<60% capacity \>80% for 10min                Supabase
                                                               Dashboard

  Network        \<80%          \>90% for 5min                 Vercel
  Throughput     bandwidth                                     Analytics

  Database       \<80           \>100 for 1min                 Supabase
  Connections    concurrent                                    Metrics
  ------------------------------------------------------------------------

**Automated Alerts:**

``` typescript
// Setup via Vercel API
const alertConfig = {
  metric: 'cpu_usage',
  threshold: 85,
  duration: 300, // 5 minutes
  channels: ['email', 'slack'],
  recipients: ['ops@mrs-robbins.com']
};
```

------------------------------------------------------------------------

### Application Performance Monitoring (APM)

**Sentry Integration:**

``` typescript
// frontend/src/main.tsx
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    new BrowserTracing(),
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  
  // Performance Monitoring
  tracesSampleRate: 1.0, // 100% in development, 10% in production
  
  // Session Replay
  replaysSessionSampleRate: 0.1, // 10% of sessions
  replaysOnErrorSampleRate: 1.0, // 100% when errors occur
  
  environment: import.meta.env.MODE,
});
```

**Custom Performance Metrics:**

``` typescript
// Track custom operations
import * as Sentry from "@sentry/react";

async function generateVoiceDirectives(avatarConfig) {
  const transaction = Sentry.startTransaction({
    op: "voice.translate",
    name: "Generate Voice Directives"
  });
  
  try {
    const directives = await getVoiceDirectives(avatarConfig);
    transaction.setStatus("ok");
    return directives;
  } catch (error) {
    transaction.setStatus("internal_error");
    Sentry.captureException(error);
    throw error;
  } finally {
    transaction.finish();
  }
}
```

**Backend Performance Tracking:**

``` typescript
// backend/api/conversation.ts
import * as Sentry from "@sentry/node";

export default async function handler(req, res) {
  const transaction = Sentry.startTransaction({
    op: "http.server",
    name: "POST /api/conversation/message"
  });
  
  const span = transaction.startChild({
    op: "claude.api.call",
    description: "Claude API Request"
  });
  
  try {
    const response = await callClaudeAPI(req.body);
    span.finish();
    transaction.finish();
    
    res.status(200).json(response);
  } catch (error) {
    span.setStatus("internal_error");
    transaction.setStatus("internal_error");
    Sentry.captureException(error);
    
    res.status(500).json({ error: error.message });
  }
}
```

------------------------------------------------------------------------

### User Experience Monitoring

**Vercel Web Vitals:**

``` typescript
// frontend/src/main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to Vercel Analytics
  const body = JSON.stringify(metric);
  const url = '/api/analytics';
  
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

**Target Web Vitals:**

  Metric                           Good     Needs Improvement   Poor
  -------------------------------- -------- ------------------- ---------
  LCP (Largest Contentful Paint)   ≤2.5s    2.5s - 4.0s         \>4.0s
  FID (First Input Delay)          ≤100ms   100ms - 300ms       \>300ms
  CLS (Cumulative Layout Shift)    ≤0.1     0.1 - 0.25          \>0.25

------------------------------------------------------------------------

### External API Monitoring

**Track Third-Party Service Health:**

``` typescript
interface APIHealthCheck {
  service: string;
  endpoint: string;
  status: 'healthy' | 'degraded' | 'down';
  latency: number;
  lastChecked: Date;
}

async function monitorExternalAPIs() {
  const checks: APIHealthCheck[] = [];
  
  // Claude API
  const claudeStart = Date.now();
  try {
    await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'ping' }]
      })
    });
    
    checks.push({
      service: 'Claude API',
      endpoint: 'https://api.anthropic.com',
      status: 'healthy',
      latency: Date.now() - claudeStart,
      lastChecked: new Date()
    });
  } catch (error) {
    checks.push({
      service: 'Claude API',
      endpoint: 'https://api.anthropic.com',
      status: 'down',
      latency: Date.now() - claudeStart,
      lastChecked: new Date()
    });
  }
  
  // Similar checks for ElevenLabs, OpenAI, Stripe...
  
  return checks;
}
```

**API Latency Tracking:**

``` typescript
interface APILatencyMetrics {
  service: string;
  p50: number;  // Median
  p95: number;  // 95th percentile
  p99: number;  // 99th percentile
  average: number;
  sampleSize: number;
}

// Store in Redis with sliding window
async function trackAPILatency(service: string, latency: number) {
  const key = `api_latency:${service}:${Date.now()}`;
  await redis.zadd('api_latencies', Date.now(), JSON.stringify({ service, latency }));
  
  // Keep only last hour
  await redis.zremrangebyscore('api_latencies', 0, Date.now() - 3600000);
}
```

------------------------------------------------------------------------

### Logging Standards

**Log Levels:**

- `DEBUG` - Detailed diagnostic info (disabled in production)
- `INFO` - General informational messages (function entry/exit, key
  events)
- `WARN` - Potentially harmful situations (fallback to browser TTS,
  cache miss)
- `ERROR` - Error events that allow application to continue (API failure
  with retry)
- `FATAL` - Severe errors causing application shutdown (database
  connection lost)

**Structured Logging Format (JSON):**

``` json
{
  "timestamp": "2025-11-14T14:30:00Z",
  "level": "ERROR",
  "service": "dialectic-engine",
  "user_id": "uuid",
  "project_id": "uuid",
  "message": "Claude API rate limit exceeded",
  "error": {
    "type": "RateLimitError",
    "code": 429,
    "details": "Requests per minute exceeded"
  },
  "context": {
    "avatar_id": "uuid",
    "conversation_length": 42
  }
}
```

**Logging Implementation:**

``` typescript
// lib/logger.ts
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: {
    paths: ['user.email', 'user.password', 'apiKey'],
    remove: true
  }
});

export default logger;

// Usage:
logger.info({ userId: 'abc123', projectId: 'xyz789' }, 'User started conversation');
logger.error({ err: error, userId: 'abc123' }, 'Failed to generate voice directives');
```

**Log Aggregation:**

- Development: Console output with pretty printing
- Production: Structured JSON to stdout → Vercel Logs → exportable to
  log aggregation service
- Long-term: Optional integration with Datadog, LogDNA, or similar (Year
  2+)

------------------------------------------------------------------------

### Alerting & Incident Response

**Alert Channels:**

1.  **Email** - All severity levels, goes to ops@mrs-robbins.com
2.  **Slack** - P0/P1 only, goes to #incidents channel
3.  **PagerDuty** (Future) - P0 only, on-call rotation for 24/7 coverage

**Alert Severity Levels:**

**P0 (Critical):** - Complete system outage - Data loss or corruption -
Security breach - Payment processing failure - **Response Time:** 15
minutes - **Resolution Time:** 2 hours

**P1 (High):** - Major feature degradation - API error rate \>10% -
Database performance degraded - Third-party service outage (Claude API
down) - **Response Time:** 1 hour - **Resolution Time:** 8 hours

**P2 (Medium):** - Minor feature issues - Elevated error rates (5-10%) -
Performance degradation affecting \<50% of users - **Response Time:** 24
hours - **Resolution Time:** 3 days

**P3 (Low):** - Cosmetic issues - Documentation updates - Non-critical
bugs - **Response Time:** Best effort - **Resolution Time:** Backlog

**Incident Response Workflow:**

    1. DETECTION
       ↓ (Alert triggered or user report)
       
    2. ACKNOWLEDGE
       ↓ (Team member takes ownership)
       
    3. ASSESS
       ↓ (Determine severity and impact)
       
    4. RESPOND
       ↓ (Fix, rollback, or mitigate)
       
    5. COMMUNICATE
       ↓ (Update status page, notify users if needed)
       
    6. RESOLVE
       ↓ (Verify fix in production)
       
    7. POST-MORTEM
       ↓ (Document incident, root cause, prevention)

**Incident Communication Template:**

``` markdown
## Incident Report: [Short Description]

**Severity:** P0/P1/P2/P3
**Status:** Investigating / Identified / Monitoring / Resolved
**Started:** [Timestamp]
**Resolved:** [Timestamp] (if applicable)

**Impact:**
- [Number] users affected
- [Features] unavailable or degraded

**Root Cause:**
[Brief description of what caused the issue]

**Resolution:**
[What was done to fix it]

**Timeline:**
- [Time]: Issue detected
- [Time]: Investigation started
- [Time]: Fix deployed
- [Time]: Verified resolved

**Prevention:**
[Steps taken to prevent recurrence]
```

------------------------------------------------------------------------

### Performance Baselines

**API Response Time Targets:**

  Endpoint                           p50       p95       p99       Max Acceptable
  ---------------------------------- --------- --------- --------- ----------------
  `POST /api/conversation/message`   \<1.5s    \<3s      \<5s      10s
  `GET /api/projects`                \<200ms   \<500ms   \<1s      2s
  `POST /api/voice/translate`        \<100ms   \<200ms   \<500ms   1s
  `POST /api/serendipity/discover`   \<300ms   \<500ms   \<1s      3s
  `POST /api/export`                 \<2s      \<5s      \<10s     30s

**Database Query Performance Targets:**

  Query Type                        p50       p95       p99
  --------------------------------- --------- --------- ---------
  Simple SELECT (by ID)             \<10ms    \<50ms    \<100ms
  Vector similarity search          \<200ms   \<500ms   \<1s
  Complex JOIN (projects + blobs)   \<100ms   \<300ms   \<500ms
  Full-text search                  \<150ms   \<400ms   \<800ms

**Monitoring Dashboard Metrics:**

``` typescript
interface SystemHealthMetrics {
  // Uptime
  uptime: number; // percentage (target: 99.9%)
  
  // Traffic
  requestsPerMinute: number;
  activeUsers: number;
  
  // Performance
  avgResponseTime: number; // milliseconds
  p95ResponseTime: number;
  
  // Errors
  errorRate: number; // percentage
  criticalErrors: number; // count in last hour
  
  // External Services
  claudeAPIHealth: 'healthy' | 'degraded' | 'down';
  elevenLabsHealth: 'healthy' | 'degraded' | 'down';
  stripeHealth: 'healthy' | 'degraded' | 'down';
  
  // Database
  dbConnectionPool: number; // current connections
  dbQueryLatency: number; // avg in ms
  
  // Storage
  storageUsed: number; // GB
  storageCapacity: number; // GB
}
```

------------------------------------------------------------------------

### Health Check Endpoint

**Implementation:**

``` typescript
// api/health.ts
export default async function handler(req, res) {
  const checks = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    checks: {
      database: await checkDatabase(),
      redis: await checkRedis(),
      claude: await checkClaudeAPI(),
      openai: await checkOpenAIAPI(),
      elevenlabs: await checkElevenLabsAPI()
    }
  };
  
  const allHealthy = Object.values(checks.checks).every(c => c.status === 'ok');
  
  res.status(allHealthy ? 200 : 503).json({
    ...checks,
    status: allHealthy ? 'healthy' : 'degraded'
  });
}

async function checkDatabase() {
  try {
    await db.query('SELECT 1');
    return { status: 'ok', latency: 0 };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
}

async function checkRedis() {
  try {
    await redis.ping();
    return { status: 'ok' };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
}
```

**Health Check Monitoring:**

- Endpoint: `GET /api/health`
- Checked every: 1 minute (by uptime monitoring service)
- Alert if: 3 consecutive failures
- Timeout: 5 seconds

------------------------------------------------------------------------

### Status Page

**Public Status Page (Future):**

- URL: status.mrs-robbins.com
- Shows: System status, API health, scheduled maintenance
- Historical uptime: Last 90 days
- Incident history: Last 30 days
- Subscribe to updates: Email, RSS, Slack webhook

**Status Page Components:**

    ┌──────────────────────────────────────┐
    │ Mrs. Robbins System Status           │
    │                                      │
    │ ● All Systems Operational            │
    │                                      │
    │ Core Services:                       │
    │ ✓ Dialectic Engine       Operational │
    │ ✓ Voice Translation      Operational │
    │ ✓ Content Filters        Operational │
    │ ✓ Export Services        Operational │
    │                                      │
    │ External Dependencies:               │
    │ ✓ Claude API             Operational │
    │ ✓ ElevenLabs             Operational │
    │ ✓ Payment Processing     Operational │
    │                                      │
    │ Uptime (Last 30 days): 99.95%       │
    └──────────────────────────────────────┘

------------------------------------------------------------------------

### Observability Best Practices

**Distributed Tracing:**

- Use Sentry Performance for request tracing
- Track request flow: Frontend → API → Database → External API
- Identify bottlenecks in multi-step operations

**Correlation IDs:**

``` typescript
// Generate unique request ID for tracing
import { v4 as uuid } from 'uuid';

function requestMiddleware(req, res, next) {
  req.id = req.headers['x-request-id'] || uuid();
  res.setHeader('x-request-id', req.id);
  
  // Add to all logs
  req.logger = logger.child({ requestId: req.id });
  
  next();
}
```

**Error Context Enrichment:**

``` typescript
try {
  await processConversation(projectId, userInput);
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      component: 'dialectic-engine',
      projectId,
      userId
    },
    extra: {
      avatarConfig,
      conversationLength,
      inputLength: userInput.length
    }
  });
}
```

**Custom Metrics:**

``` typescript
// Track business metrics
const metrics = {
  conversationsStarted: 0,
  documentsExported: 0,
  voiceAvatarsCreated: 0,
  serendipityQueriesRun: 0
};

function trackConversationStarted() {
  metrics.conversationsStarted++;
  // Send to analytics
}
```

## CHUNK 21 of 29: Security, Privacy & Compliance

## Section 9: Security, Privacy and Compliance

### Security Architecture

**Defense in Depth Strategy:**

1.  **Network Layer** - HTTPS/TLS encryption, DDoS protection (Vercel)
2.  **Application Layer** - Input validation, CORS, CSRF protection
3.  **Authentication Layer** - Supabase Auth with JWT tokens
4.  **Authorization Layer** - Row-Level Security (RLS) in PostgreSQL
5.  **Data Layer** - Encryption at rest, encrypted backups

------------------------------------------------------------------------

### Authentication & Authorization

**Authentication Flow:**

``` typescript
// Supabase Auth handles:
// 1. Email + password sign-up/sign-in
// 2. OAuth providers (Google, GitHub)
// 3. Magic link (passwordless)
// 4. JWT token generation and validation

// Frontend login
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securePassword123'
});

// Backend auth middleware
async function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
}
```

**Row-Level Security (RLS):**

``` sql
-- Enable RLS on all user-specific tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE voice_avatars ENABLE ROW LEVEL SECURITY;
ALTER TABLE thought_blobs ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY "Users can view own projects"
ON projects FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own projects"
ON projects FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects"
ON projects FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own projects"
ON projects FOR DELETE
USING (auth.uid() = user_id);

-- Similar policies for other tables...
```

**Session Management:**

- JWT tokens expire after 1 hour
- Refresh tokens valid for 30 days
- Automatic token refresh on API calls
- Logout clears tokens from client and invalidates on server
- "Remember me" extends refresh token to 90 days

------------------------------------------------------------------------

### Input Validation & Sanitization

**Validation Rules:**

``` typescript
import { z } from 'zod';

// Project creation validation
const createProjectSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().max(1000).optional(),
  endpointType: z.enum(['writer', 'entrepreneur', 'consultant', 'researcher'])
});

// Conversation message validation
const conversationMessageSchema = z.object({
  projectId: z.string().uuid(),
  userInput: z.string().min(1).max(50000),
  avatarId: z.string().uuid()
});

// API handler with validation
export default async function handler(req, res) {
  try {
    const validated = createProjectSchema.parse(req.body);
    // Process validated data...
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors
      });
    }
  }
}
```

**Sanitization:**

``` typescript
import DOMPurify from 'isomorphic-dompurify';

// Sanitize HTML content before rendering
function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href']
  });
}

// Escape SQL inputs (use parameterized queries)
// NEVER do this:
// const query = `SELECT * FROM users WHERE email = '${userInput}'`;

// ALWAYS do this:
const query = 'SELECT * FROM users WHERE email = $1';
const result = await db.query(query, [userInput]);
```

------------------------------------------------------------------------

### API Security

**Rate Limiting:**

``` typescript
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import redis from './redis';

// General API rate limit
const apiLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:api:'
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many requests from this IP, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict limits for expensive operations
const conversationLimiter = rateLimit({
  store: new RedisStore({ client: redis, prefix: 'rl:conversation:' }),
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 messages per minute
  message: 'Conversation rate limit exceeded'
});

// Apply to routes
app.use('/api/', apiLimiter);
app.use('/api/conversation/message', conversationLimiter);
```

**CORS Configuration:**

``` typescript
import cors from 'cors';

const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? ['https://app.mrs-robbins.com', 'https://mrs-robbins.com']
    : ['http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

**CSRF Protection:**

``` typescript
// Use SameSite cookies for CSRF protection
res.cookie('sessionId', session.id, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 3600000 // 1 hour
});

// Double-submit cookie pattern for state-changing operations
function validateCSRFToken(req, res, next) {
  const tokenFromBody = req.body.csrfToken;
  const tokenFromCookie = req.cookies.csrfToken;
  
  if (tokenFromBody !== tokenFromCookie) {
    return res.status(403).json({ error: 'CSRF token mismatch' });
  }
  
  next();
}
```

------------------------------------------------------------------------

### Data Security

**Encryption at Rest:**

- Database: Supabase provides automatic encryption at rest using AES-256
- File storage: Supabase Storage encrypts files automatically
- Backups: Encrypted using same encryption as primary storage

**Encryption in Transit:**

- All API communication: HTTPS with TLS 1.3
- Database connections: SSL/TLS enforced
- WebSocket connections: WSS (secure WebSocket)

**Sensitive Data Handling:**

``` typescript
// Environment variables (never commit to git)
// .env file structure:
DATABASE_URL=postgresql://...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
ANTHROPIC_API_KEY=sk-ant-...
STRIPE_SECRET_KEY=sk_live_...

// Secrets management in production
// - Stored in Vercel environment variables
// - Rotated quarterly
// - Never logged or exposed to frontend
```

**PII (Personally Identifiable Information) Protection:**

``` typescript
// Redact PII from logs
const logger = pino({
  redact: {
    paths: [
      'user.email',
      'user.password',
      'user.name',
      'apiKey',
      'token',
      'creditCard'
    ],
    remove: true
  }
});

// Log example:
logger.info({ user: { email: 'user@example.com', name: 'John' } }, 'User logged in');
// Actual log output: {"user":{},"msg":"User logged in"}
```

------------------------------------------------------------------------

### Security Headers

**HTTP Security Headers:**

``` typescript
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.vercel-insights.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://api.anthropic.com", "https://api.elevenlabs.io"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameSrc: ["'none'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  frameguard: {
    action: 'deny'
  },
  noSniff: true,
  xssFilter: true
}));
```

**Custom Security Headers:**

``` typescript
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  next();
});
```

------------------------------------------------------------------------

### Vulnerability Management

**Dependency Scanning:**

``` bash
# Run npm audit regularly
npm audit

# Fix vulnerabilities automatically (review changes)
npm audit fix

# CI/CD integration
npm audit --audit-level=moderate
```

**Automated Security Scanning:**

``` yaml
# .github/workflows/security.yml
name: Security Scan

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Run npm audit
        run: npm audit --audit-level=moderate
      
      - name: Run Snyk test
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
      
      - name: Run OWASP ZAP baseline scan
        uses: zaproxy/action-baseline@v0.7.0
        with:
          target: 'https://staging.mrs-robbins.com'
```

**Penetration Testing:**

- Automated: OWASP ZAP scan weekly on staging
- Manual: Annual third-party penetration test (Year 2+)
- Bug bounty program: Considered for Year 2+ after stable launch

------------------------------------------------------------------------

### Compliance Framework

### GDPR (General Data Protection Regulation)

**Applicability:** Required for EU users

**Key Requirements:**

**1. Right to Access:**

``` typescript
// GET /api/user/data-export
export default async function handler(req, res) {
  const userId = req.user.id;
  
  const userData = {
    profile: await getUserProfile(userId),
    projects: await getUserProjects(userId),
    conversations: await getUserConversations(userId),
    documents: await getUserDocuments(userId),
    voiceAvatars: await getUserVoiceAvatars(userId)
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="user-data.json"');
  res.status(200).json(userData);
}
```

**2. Right to Deletion:**

``` typescript
// DELETE /api/user/account
export default async function handler(req, res) {
  const userId = req.user.id;
  
  // Soft delete with 30-day grace period
  await db.query(`
    UPDATE users
    SET status = 'deleted',
        deleted_at = NOW(),
        deletion_scheduled = NOW() + INTERVAL '30 days'
    WHERE id = $1
  `, [userId]);
  
  // Schedule permanent deletion job
  await scheduleDataDeletion(userId, 30); // days
  
  res.status(200).json({ message: 'Account deletion scheduled' });
}
```

**3. Right to Rectification:**

``` typescript
// PUT /api/user/profile
export default async function handler(req, res) {
  const userId = req.user.id;
  const { email, name } = req.body;
  
  await db.query(`
    UPDATE users
    SET email = $1, name = $2, updated_at = NOW()
    WHERE id = $3
  `, [email, name, userId]);
  
  res.status(200).json({ message: 'Profile updated' });
}
```

**4. Consent Management:**

``` typescript
interface UserConsent {
  analytics: boolean;
  marketing: boolean;
  thirdPartySharing: boolean;
  acceptedAt: Date;
}

// Store consent
await db.query(`
  INSERT INTO user_consents (user_id, analytics, marketing, third_party_sharing)
  VALUES ($1, $2, $3, $4)
`, [userId, consents.analytics, consents.marketing, consents.thirdPartySharing]);
```

**5. Data Portability:** - JSON export of all user data -
Machine-readable format - Includes all projects, conversations,
documents, avatars

**6. Privacy Policy:** - Clear disclosure of data collection - Purpose
of data processing - Third-party data sharing (Claude, ElevenLabs,
Stripe) - Data retention periods - User rights and how to exercise them

------------------------------------------------------------------------

### CCPA (California Consumer Privacy Act)

**Applicability:** Required for California residents

**Key Requirements:**

**1. Data Disclosure:** - Privacy policy lists all data collected: -
Identifiers (email, user ID) - Content (conversations, documents,
thought blobs) - Usage data (login times, feature usage) - Payment
information (handled by Stripe, not stored)

**2. Opt-Out Mechanism:**

``` html
<!-- "Do Not Sell My Information" link in footer -->
<a href="/ccpa/do-not-sell">Do Not Sell My Information</a>
```

Note: Mrs. Robbins does not sell user data, but link is required for
compliance.

**3. Third-Party Disclosure:** Privacy policy explicitly lists: -
Anthropic (Claude API) - conversation processing - OpenAI - embedding
generation - ElevenLabs - text-to-speech - Stripe - payment processing -
Supabase - data hosting

------------------------------------------------------------------------

### COPPA (Children's Online Privacy Protection Act)

**Policy:** No users under 13 allowed

**Implementation:**

``` typescript
// Sign-up form
const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  ageConfirmation: z.literal(true), // Must be true
  birthYear: z.number().max(new Date().getFullYear() - 13) // Must be 13+
});

// Block registration if under 13
if (calculateAge(birthYear) < 13) {
  return res.status(403).json({
    error: 'You must be at least 13 years old to use Mrs. Robbins'
  });
}
```

------------------------------------------------------------------------

### Data Retention Policy

**Active Users:** - Profile data: Retained indefinitely while account
active - Projects & documents: Retained indefinitely while account
active - Conversations: Retained indefinitely while account active -
Logs: 90 days (hot), 1 year (archived)

**Deleted Accounts:** - Grace period: 30 days (user can restore) - After
grace period: Permanent deletion of all user data - Audit logs: Retained
7 years (compliance requirement) - Anonymized analytics: Retained
indefinitely

**Backup Retention:** - Daily backups: 7 days - Weekly backups: 30
days - Monthly backups: 1 year

------------------------------------------------------------------------

### Security Incident Response Plan

**Incident Classification:**

**Level 1 - Critical:** - Data breach affecting PII - Unauthorized
access to production database - Payment system compromise - Ransomware
attack

**Level 2 - High:** - Successful unauthorized access to user account -
DDoS attack causing service disruption - Third-party API credentials
leaked

**Level 3 - Medium:** - Attempted unauthorized access (blocked) -
Malformed requests indicating probing - Minor security vulnerability
discovered

**Response Procedure:**

    1. DETECTION
       ↓
    2. CONTAINMENT
       - Isolate affected systems
       - Revoke compromised credentials
       - Block malicious IPs
       ↓
    3. INVESTIGATION
       - Review logs
       - Identify scope of breach
       - Determine root cause
       ↓
    4. ERADICATION
       - Remove threat
       - Patch vulnerabilities
       - Reset credentials
       ↓
    5. RECOVERY
       - Restore from clean backups
       - Verify system integrity
       - Monitor for recurrence
       ↓
    6. NOTIFICATION
       - Notify affected users (within 72 hours if PII)
       - Report to authorities if required
       - Update security advisory
       ↓
    7. POST-MORTEM
       - Document incident
       - Improve security measures
       - Update incident response plan

**Breach Notification:**

``` typescript
// Template for user notification
const breachNotificationEmail = {
  subject: 'Important Security Notice',
  body: `
    Dear [User],
    
    We are writing to inform you of a security incident that may have affected your account.
    
    What happened:
    [Brief description of incident]
    
    What information was involved:
    [List of data types affected]
    
    What we're doing:
    [Steps taken to address the issue]
    
    What you should do:
    [Recommended actions for users]
    
    Contact:
    security@mrs-robbins.com
    
    We sincerely apologize for this incident.
  `
};
```

------------------------------------------------------------------------

### Security Checklist

**Pre-Launch:** - \[ \] All environment variables secured in Vercel - \[
\] HTTPS enforced on all endpoints - \[ \] RLS policies enabled on all
tables - \[ \] API rate limiting configured - \[ \] Input validation on
all endpoints - \[ \] Security headers configured - \[ \] Dependency
audit clean (no high/critical vulns) - \[ \] Privacy policy published -
\[ \] Terms of service published - \[ \] Cookie consent banner
implemented

**Ongoing:** - \[ \] Weekly: Review security logs - \[ \] Monthly:
Update dependencies - \[ \] Quarterly: Rotate API keys - \[ \]
Quarterly: Review RLS policies - \[ \] Quarterly: Security audit
(internal) - \[ \] Annually: Third-party penetration test - \[ \]
Annually: Privacy policy review

## CHUNK 22 of 29: Additional Feature Specifications

## Section 4 (Continued): Additional Feature Specifications

### FEATURE 37: Document Creation from Organized Blobs (CARD B9)

**Status:** ❌ Not Designed - Critical Missing Handoff

**User Story:** As a user who has organized my scattered thoughts into
clusters, I want to transform those clusters into a new document with
initial structure, so I can move from exploration to actual writing.

**Acceptance Criteria:** - User selects a cluster of related thought
blobs - System creates new document object in database - System
populates initial context from selected blobs - System suggests document
structure based on blob connections - Document opens in Dialectical
Editor ready for conversation - User can accept, modify, or reject
suggested structure

**Technical Implementation:**

``` typescript
interface DocumentCreationService {
  async createFromBlobs(
    userId: string,
    blobCluster: {
      clusterId: string;
      blobIds: string[];
      suggestedTheme: string;
    }
  ): Promise<Document> {
    // 1. Analyze blob relationships
    const connections = await this.analyzeBlobConnections(blobCluster.blobIds);
    
    // 2. Generate suggested structure via Claude
    const structure = await this.generateStructure(connections, blobCluster.suggestedTheme);
    
    // 3. Create document record
    const documentId = uuid();
    const projectId = await this.createProject(userId, blobCluster.suggestedTheme);
    
    await db.query(`
      INSERT INTO documents (id, project_id, user_id, title, structure, status)
      VALUES ($1, $2, $3, $4, $5, 'draft')
    `, [documentId, projectId, userId, blobCluster.suggestedTheme, JSON.stringify(structure)]);
    
    // 4. Link blobs to document
    for (const blobId of blobCluster.blobIds) {
      await db.query(`
        INSERT INTO document_blobs (document_id, blob_id)
        VALUES ($1, $2)
      `, [documentId, blobId]);
    }
    
    // 5. Create initial conversation context
    await this.initializeConversation(projectId, structure, blobCluster.blobIds);
    
    return await this.getDocument(documentId);
  }
  
  async generateStructure(connections: BlobConnection[], theme: string): Promise<DocumentStructure> {
    const prompt = `Based on these connected ideas, suggest a document structure:

Theme: ${theme}

Connections:
${connections.map(c => `- "${c.blob1}" relates to "${c.blob2}" because: ${c.relationship}`).join('\n')}

Suggest:
1. Document outline (sections/chapters)
2. Where each idea fits in the outline
3. Narrative arc or logical flow

Return JSON structure.`;

    const response = await callClaudeAPI(prompt);
    return JSON.parse(response);
  }
}
```

**Database Schema:**

``` sql
CREATE TABLE document_blobs (
  id UUID PRIMARY KEY,
  document_id UUID REFERENCES documents(id),
  blob_id UUID REFERENCES thought_blobs(id),
  section_assignment VARCHAR(255), -- Which section this blob belongs to
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE documents
ADD COLUMN structure JSONB, -- Suggested outline/sections
ADD COLUMN source_cluster_id UUID; -- Track which cluster created this
```

**API Contract:**

``` typescript
POST /api/documents/create-from-blobs
Request: {
  userId: string;
  clusterId: string;
  blobIds: string[];
  suggestedTheme: string;
}
Response: {
  documentId: string;
  projectId: string;
  structure: DocumentStructure;
}
```

**Integration Points:** - Thought Blob Organization View (B6) provides
blob clusters - Creates project record and document - Opens Dialectical
Editor (B1) with initialized context - Serendipity Engine (A3) used for
connection analysis

**Error Handling:** - No connections found: Create simple sequential
structure - Claude API failure: Fall back to basic outline - Too many
blobs (\>100): Warn user, suggest splitting cluster

------------------------------------------------------------------------

### FEATURE 38: Project/Document Navigation Dashboard (CARD B10)

**Status:** ❌ Not Designed - Fundamental Navigation Missing

**User Story:** As a user with multiple projects, I need a dashboard to
see all my work, open documents, and switch between projects easily.

**Acceptance Criteria:** - View all projects in list or grid format -
See project metadata (title, word count, last edited, status) - Filter
projects by endpoint type or status - Search projects by title or
content - "Continue where you left off" quick access - Create new
project button prominently placed - Drill down into project to see
documents and thought blobs

**Technical Implementation:**

``` typescript
interface DashboardService {
  async getDashboard(userId: string): Promise<DashboardData> {
    // Get recent activity
    const recentProjects = await db.query(`
      SELECT p.*, COUNT(tb.id) as blob_count, SUM(tb.word_count) as total_words
      FROM projects p
      LEFT JOIN thought_blobs tb ON p.id = tb.project_id
      WHERE p.user_id = $1 AND p.status != 'archived'
      GROUP BY p.id
      ORDER BY p.updated_at DESC
      LIMIT 5
    `, [userId]);
    
    // Get overall stats
    const stats = await db.query(`
      SELECT 
        COUNT(DISTINCT p.id) as total_projects,
        COUNT(DISTINCT d.id) as total_documents,
        COUNT(DISTINCT tb.id) as total_blobs,
        SUM(d.word_count) as total_words
      FROM projects p
      LEFT JOIN documents d ON p.id = d.project_id
      LEFT JOIN thought_blobs tb ON p.id = tb.project_id
      WHERE p.user_id = $1
    `, [userId]);
    
    return {
      recentProjects: recentProjects.rows,
      stats: stats.rows[0],
      quickActions: [
        { label: 'New Project', action: 'create-project' },
        { label: 'Capture Thought', action: 'voice-memo' },
        { label: 'Browse Clusters', action: 'serendipity' }
      ]
    };
  }
  
  async getProjectDetail(projectId: string, userId: string): Promise<ProjectDetail> {
    const project = await db.query(`
      SELECT * FROM projects WHERE id = $1 AND user_id = $2
    `, [projectId, userId]);
    
    if (project.rows.length === 0) {
      throw new Error('Project not found');
    }
    
    const documents = await db.query(`
      SELECT * FROM documents WHERE project_id = $1 ORDER BY updated_at DESC
    `, [projectId]);
    
    const blobs = await db.query(`
      SELECT * FROM thought_blobs WHERE project_id = $1 ORDER BY created_at DESC
    `, [projectId]);
    
    const conversations = await db.query(`
      SELECT * FROM conversations WHERE project_id = $1 ORDER BY updated_at DESC LIMIT 1
    `, [projectId]);
    
    return {
      project: project.rows[0],
      documents: documents.rows,
      thoughtBlobs: blobs.rows,
      lastConversation: conversations.rows[0] || null
    };
  }
}
```

**UI Components:**

``` typescript
interface DashboardLayout {
  header: {
    greeting: string; // "Welcome back, [Name]"
    searchBar: boolean;
    createButton: boolean;
  };
  
  statsBar: {
    totalProjects: number;
    totalWords: number;
    activeProjects: number;
  };
  
  recentActivity: {
    projects: ProjectCard[];
    limit: number; // 5 most recent
  };
  
  quickActions: QuickAction[];
}

interface ProjectCard {
  id: string;
  title: string;
  endpointType: 'writer' | 'entrepreneur' | 'consultant' | 'researcher';
  wordCount: number;
  blobCount: number;
  lastEdited: Date;
  status: 'active' | 'paused' | 'completed';
  thumbnail?: string; // Future: preview image
}
```

**Database Schema:**

``` sql
-- Project status tracking
ALTER TABLE projects
ADD COLUMN last_accessed TIMESTAMP,
ADD COLUMN access_count INTEGER DEFAULT 0;

-- Update on access
CREATE OR REPLACE FUNCTION update_project_access()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE projects
  SET last_accessed = NOW(), access_count = access_count + 1
  WHERE id = NEW.project_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER project_access_trigger
AFTER INSERT ON conversations
FOR EACH ROW
EXECUTE FUNCTION update_project_access();
```

**API Contract:**

``` typescript
GET /api/dashboard
Response: DashboardData

GET /api/projects/:projectId/detail
Response: ProjectDetail

PUT /api/projects/:projectId/status
Request: { status: 'active' | 'paused' | 'completed' | 'archived' }
Response: { success: boolean }
```

**Integration Points:** - Entry point for application after login -
Links to all major features (Dialectical Editor, Thought Blob Browser,
Serendipity Engine) - Search functionality queries all user content

------------------------------------------------------------------------

### FEATURE 39: WordPress Publishing Integration (CARD D6)

**Status:** ⚠️ Future Feature, Not Prioritized

**User Story:** As a blogger, I want to publish finished documents
directly to my WordPress site, so I don't have to copy/paste.

**Acceptance Criteria:** - Connect WordPress site via OAuth - Select
document to publish - Map to WordPress category - Set publish status
(draft, published, scheduled) - Handle featured images - Preserve
formatting (markdown → WordPress blocks)

**Technical Implementation:**

``` typescript
interface WordPressIntegration {
  async connectWordPressSite(
    userId: string,
    siteUrl: string,
    credentials: { username: string; applicationPassword: string }
  ): Promise<WordPressConnection> {
    // Verify connection
    const response = await fetch(`${siteUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        'Authorization': `Basic ${btoa(`${credentials.username}:${credentials.applicationPassword}`)}`
      }
    });
    
    if (!response.ok) {
      throw new Error('WordPress connection failed');
    }
    
    // Store connection
    const connectionId = uuid();
    await db.query(`
      INSERT INTO wordpress_connections (id, user_id, site_url, credentials_encrypted)
      VALUES ($1, $2, $3, $4)
    `, [connectionId, userId, siteUrl, encrypt(JSON.stringify(credentials))]);
    
    return { connectionId, siteUrl, connected: true };
  }
  
  async publishToWordPress(
    documentId: string,
    connectionId: string,
    options: {
      category: string;
      status: 'draft' | 'publish' | 'future';
      scheduledDate?: Date;
    }
  ): Promise<{ postId: number; url: string }> {
    const document = await getDocument(documentId);
    const connection = await getWordPressConnection(connectionId);
    
    // Convert markdown to WordPress blocks
    const blocks = markdownToWordPressBlocks(document.content);
    
    const response = await fetch(`${connection.siteUrl}/wp-json/wp/v2/posts`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${connection.username}:${connection.password}`)}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: document.title,
        content: blocks,
        status: options.status,
        categories: [options.category],
        date: options.scheduledDate?.toISOString()
      })
    });
    
    const post = await response.json();
    
    return {
      postId: post.id,
      url: post.link
    };
  }
}
```

**Dependencies:** - WordPress REST API - OAuth or Application Password
authentication - Markdown to WordPress Gutenberg block converter

------------------------------------------------------------------------

### FEATURE 40: Mobile App (CARD D8)

**Status:** ⚠️ Future Platform, Not Designed

**User Story:** As a mobile user, I want a native app optimized for
voice capture on the go.

**Acceptance Criteria:** - Native iOS and Android apps - Optimized for
voice capture while driving/walking - Offline voice recording with
background sync - Push notifications for collaboration (future) -
Mobile-optimized UI for reviewing/editing

**Technical Approach:**

- **Framework:** React Native for cross-platform development
- **Voice Capture:** Native speech recognition APIs
- **Offline Storage:** SQLite for local data
- **Sync:** Background queue for uploading when online
- **Authentication:** OAuth flow with deep linking

**Not Planned for Year 1**

------------------------------------------------------------------------

### FEATURE 41: Mood/Theme Customization (CARD D9)

**Status:** ⚠️ Polish Feature, Low Priority

**User Story:** As a user, I want to customize the UI appearance to
match my preferences and working environment.

**Acceptance Criteria:** - Light/dark mode toggle - Multiple color
themes (Forest, Ocean, Sunset, Monochrome) - Font size adjustment -
Contrast settings for accessibility - Preferences saved per user

**Technical Implementation:**

``` typescript
interface ThemePreferences {
  mode: 'light' | 'dark' | 'auto'; // Auto follows system
  colorTheme: 'default' | 'forest' | 'ocean' | 'sunset' | 'monochrome';
  fontSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high';
}

// CSS variables for theming
const themes = {
  forest: {
    primary: '#2C7A7B',
    background: '#F5F5F3',
    surface: '#FFFFFF',
    textPrimary: '#2B2B2B'
  },
  ocean: {
    primary: '#2563EB',
    background: '#F0F9FF',
    surface: '#FFFFFF',
    textPrimary: '#1E293B'
  }
};
```

------------------------------------------------------------------------

### FEATURE 42: Gamification / Progress Tracking (CARD D10)

**Status:** ⚠️ Experimental, Not Core to Product

**User Story:** As a user, I want to see my writing progress and
achievements to stay motivated.

**Acceptance Criteria:** - Writing streak tracking (consecutive days) -
Word count milestones (1K, 10K, 100K words) - Achievement badges -
Monthly/yearly summary reports - Optional: Public profile showing
achievements

**Technical Implementation:**

``` typescript
interface ProgressTracking {
  streaks: {
    currentStreak: number; // days
    longestStreak: number;
    lastWritingDate: Date;
  };
  
  milestones: {
    totalWords: number;
    documentsCompleted: number;
    projectsStarted: number;
  };
  
  achievements: Achievement[];
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  progress?: number; // 0-100%
}

const achievements = [
  {
    id: 'first_project',
    name: 'Getting Started',
    description: 'Created your first project',
    icon: '🚀'
  },
  {
    id: 'week_streak',
    name: 'Committed',
    description: 'Wrote for 7 consecutive days',
    icon: '🔥'
  },
  {
    id: '10k_words',
    name: 'Wordsmith',
    description: 'Wrote 10,000 words total',
    icon: '✍️'
  }
];
```

------------------------------------------------------------------------

### FEATURE 43: Opportunity Mining Module (CARD D11)

**Status:** ⚠️ Post-MVP Strategic Expansion

**User Story:** As an entrepreneur, I want the system to automatically
discover business opportunities by analyzing market signals, so I can
focus on validated ideas rather than speculation.

**Acceptance Criteria:** - Automated web scraping of forums, Reddit,
industry blogs - Pattern discovery using Serendipity Engine - Business
plan generation using Harvard template - Rookery 9-axis scoring for
opportunities - Ranked opportunity pipeline - Market validation signals
(search volume, discussion frequency)

**Technical Implementation:**

``` typescript
interface OpportunityMiningService {
  async scrapeMarketSignals(sources: string[]): Promise<MarketSignal[]> {
    const signals = [];
    
    for (const source of sources) {
      const content = await this.scrapeSource(source);
      const categorized = await catalogingEngine.categorize(content);
      
      signals.push({
        source,
        content,
        categories: categorized.primaryCategories,
        sentiment: await this.analyzeSentiment(content),
        frequency: await this.calculateDiscussionFrequency(content)
      });
    }
    
    return signals;
  }
  
  async discoverOpportunities(signals: MarketSignal[]): Promise<Opportunity[]> {
    // Use Serendipity Engine to find patterns
    const patterns = await serendipityEngine.findPatterns(signals);
    
    const opportunities = [];
    
    for (const pattern of patterns) {
      // Generate business plan for each pattern
      const businessPlan = await this.generateBusinessPlan(pattern);
      
      // Score using Rookery framework
      const score = await this.scoreOpportunity(businessPlan);
      
      opportunities.push({
        pattern,
        businessPlan,
        score,
        marketSignals: pattern.sourceSignals
      });
    }
    
    // Rank by score
    return opportunities.sort((a, b) => b.score.overall - a.score.overall);
  }
  
  async generateBusinessPlan(pattern: Pattern): Promise<BusinessPlan> {
    const prompt = `Based on this market pattern, generate a business plan:

Pattern: ${pattern.description}
Supporting signals: ${pattern.sourceSignals.map(s => s.content).join('\n')}

Generate a business plan following Harvard Business School template:
1. Executive Summary
2. Market Analysis
3. Competitive Landscape
4. Product/Service Description
5. Business Model
6. Financial Projections
7. Execution Plan

Return structured JSON.`;

    const response = await callClaudeAPI(prompt);
    return JSON.parse(response);
  }
}
```

**Revenue Potential:**

- B2B market: Sell opportunity pipeline service to VCs, accelerators,
  consultancies
- Validated by Corbis spending \$2M/year on manual creative research
- Changes exit multiple from 2-3x (niche tool) to 8-10x (platform with
  multiple revenue streams)

------------------------------------------------------------------------

### FEATURE 44: Automated Content Ingestion Pipeline (CARD D12)

**Status:** ⚠️ Post-MVP, Extends Content Ingestion System (B2)

**User Story:** As a user conducting ongoing research, I want the system
to automatically ingest content from my subscribed sources, so I have a
continuous feed of relevant material.

**Acceptance Criteria:** - Subscribe to RSS feeds, Reddit subreddits,
Twitter lists - Scheduled scraping (daily/weekly) - Content extraction
and cleaning - Auto-categorization via controlled vocabulary -
Deduplication to avoid redundant content - Rate limiting and politeness
(respect robots.txt)

**Technical Implementation:**

``` typescript
interface AutomatedIngestionService {
  async subscribeToSource(
    userId: string,
    source: {
      type: 'rss' | 'reddit' | 'twitter' | 'web';
      url: string;
      frequency: 'daily' | 'weekly';
      filters?: {
        keywords?: string[];
        excludeKeywords?: string[];
      };
    }
  ): Promise<Subscription> {
    const subscriptionId = uuid();
    
    await db.query(`
      INSERT INTO content_subscriptions (id, user_id, type, url, frequency, filters)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [subscriptionId, userId, source.type, source.url, source.frequency, JSON.stringify(source.filters)]);
    
    // Schedule first ingestion
    await this.scheduleIngestion(subscriptionId);
    
    return { subscriptionId, status: 'active' };
  }
  
  async ingestContent(subscriptionId: string): Promise<IngestedContent[]> {
    const subscription = await this.getSubscription(subscriptionId);
    
    let content = [];
    
    switch (subscription.type) {
      case 'rss':
        content = await this.fetchRSS(subscription.url);
        break;
      case 'reddit':
        content = await this.fetchReddit(subscription.url);
        break;
      case 'web':
        content = await this.scrapeWebsite(subscription.url);
        break;
    }
    
    // Filter by keywords
    if (subscription.filters?.keywords) {
      content = content.filter(c => 
        subscription.filters.keywords.some(kw => c.text.includes(kw))
      );
    }
    
    // Deduplicate
    content = await this.deduplicateContent(content);
    
    // Categorize and store
    for (const item of content) {
      const blobId = await this.createThoughtBlob({
        userId: subscription.userId,
        content: item.text,
        source: subscription.url,
        contentType: 'import'
      });
      
      await catalogingEngine.categorize(item.text, blobId);
      await embeddingService.embedContent(item.text, blobId);
    }
    
    return content;
  }
}
```

**Supported Sources:**

- RSS/Atom feeds
- Reddit (via API)
- Web scraping (with robots.txt respect)
- Future: Twitter/X, newsletters, academic journals

**Dependencies:** - Web scraper (Puppeteer or similar) - RSS parser -
Reddit API client - Rate limiting infrastructure

## CHUNK 23 of 29: Strategic Insights & Business Intelligence

## Section 10: Strategic Insights

This section documents strategic insights that inform product decisions,
positioning, and business model. These are not features to build but
principles that guide what gets built and how it's marketed.

------------------------------------------------------------------------

### INSIGHT E1: Competition Is Scattered Thinking, Not Grammarly

**What it is:** Positioning insight - Mrs. Robbins isn't a writing tool
competing with Grammarly, it's cognition-to-execution infrastructure
competing with scattered thinking that never becomes documented output.

**Why it matters:** Fundamentally changes how we message, who we target,
and what features matter most.

**Evidence:** - Users don't struggle with grammar - they struggle
organizing thoughts into coherent writing - People think at 150 words
per minute (speaking) but type at 40 WPM - The bottleneck isn't
refinement, it's the mechanical translation from thought to text -
Neurodivergent users especially feel this friction: thinking fast,
executing slow

**Implications for Product:** - Voice capture is foundational, not an
add-on - Dialectic collaboration (organizing thoughts) more valuable
than grammar checking - Marketing focuses on "think at the speed of
thought" not "fix your grammar" - Success metric: Time from idea to
documented output, not grammatical correctness

**Implications for Positioning:** - Primary competitor: Blank page
paralysis, not Grammarly - Value proposition: Remove the bottleneck
between thinking and writing - Target users: Anyone who "thinks by
talking" - not just writers

**Related Features:** - Voice Capture (B3) - Dialectical Editor (B1) -
Content Collection Engine (foundational)

------------------------------------------------------------------------

### INSIGHT E2: Texas Instruments Calculator Moment

**What it is:** Mrs. Robbins removes the mechanical bottleneck like
programmable calculators did for mathematics - enables entirely new
participants who were structurally excluded.

**Why it matters:** Massive addressable market expansion beyond
traditional "writers" market.

**Evidence:** - Before calculators: Only people who could do complex
math by hand participated - After calculators: Anyone could solve
complex problems regardless of manual calculation speed - Same pattern:
Before Mrs. Robbins, only people who type fast can write prolifically -
After Mrs. Robbins: Anyone who thinks can write, regardless of typing
speed

**Enabled Populations:** - Dyslexics (think clearly but struggle with
mechanical writing) - ADHD users (rapid thinking, struggle with linear
documentation) - Non-native speakers (fluent thinking in concepts, slow
in written English) - Executives/consultants (think verbally, delegate
typing) - Anyone who thinks faster than they type (which is everyone)

**Market Size Implication:** - Traditional "writing tools" market: \~50M
users globally - "Anyone who thinks but struggles to document" market:
\~500M+ users - 10x market expansion by removing structural barrier

**Emotional Positioning:** - Not "we'll help you write better" -
Instead: "You already think brilliantly - we remove the barrier between
your thoughts and the page" - Empowerment narrative, not improvement
narrative

**Related Features:** - Voice Translation Engine (A1) - preserves
authentic thinking - Voice Capture (B3) - bypasses typing entirely -
Dialectical Editor (B1) - organizes thoughts without forcing linear
typing

------------------------------------------------------------------------

### INSIGHT E3: Velocity Arbitrage (BPR Economics)

**What it is:** Mrs. Robbins enables 4-5x faster output than traditional
writing methods, creating economic arbitrage opportunity.

**Why it matters:** Justifies premium pricing and positions product as
ROI-positive investment, not expense.

**Evidence:** - Traditional essay: 8-12 hours from idea to polished
draft - With Mrs. Robbins: 2-3 hours from idea to polished draft (4x
faster) - Consultant billing at \$400/hr saves \$2,400-\$3,600 per
deliverable - Monthly subscription (\$30-50) pays for itself in \<1
deliverable per month

**BPR (Benefit-Price Ratio) Math:**

    Traditional Method:
    - Time investment: 10 hours
    - Opportunity cost: 10 hours × $50/hr = $500
    - Tool cost: $0 (blank document)
    - Total cost: $500

    Mrs. Robbins Method:
    - Time investment: 2.5 hours
    - Opportunity cost: 2.5 hours × $50/hr = $125
    - Tool cost: $30/month
    - Total cost: $155

    Savings: $345 per document
    BPR: $345 / $30 = 11.5:1

    If user writes 2 documents/month: 23:1 BPR
    If user writes 1 document/quarter: 3.8:1 BPR (still positive)

**Pricing Implications:** - Can charge premium (\$30-100/month) and
still deliver positive ROI - Professional tier (\$100/month) justifiable
for consultants billing \$200-500/hr - Enterprise tier (\$500/month per
seat) for strategic consulting firms

**Marketing Message:** - "Save 30 hours per month" - "Your time is worth
more than \$30/month" - ROI calculator on pricing page

**Related Features:** - Time Tracking (C4) - prove the velocity gain -
Delta Analytics (C7) - measure productivity improvement over time

------------------------------------------------------------------------

### INSIGHT E4: Serendipity Is the Moat

**What it is:** Cross-domain discovery (K2/Boeing moments) is the
defensible differentiator that competitors can't easily replicate.

**Why it matters:** Cataloging + serendipity infrastructure creates
compounding value and high switching costs.

**Evidence:** - PhotoNest research: Proper taxonomy took 18 months to
build at Getty/Corbis - Same problem solved for images applies to text -
Network effects: More content cataloged = better discovery = more
value - Switching cost: Rebuilding catalog in competitor tool = massive
friction

**K2/Boeing Story:** Two engineers in a bar discover that ski dampening
technology applies to wing cavitation physics. This cross-domain insight
worth \$450/hr consulting fee came from controlled vocabulary mapping
"dampening" across unrelated domains.

**Architectural Investment:** - Heavy investment in cataloging
architecture (A2) pays dividends - Controlled vocabulary is the
intellectual property - Domain expertise repositories amplify value
(DSM-5, HBR case studies)

**Competitive Moat:** - ChatGPT: Forgets everything between sessions, no
catalog - Grammarly: No project memory or cross-project discovery -
Notion/Obsidian: User must manually create links - Mrs. Robbins:
Automatic discovery + persistent catalog

**Related Features:** - Cataloging Engine (A2) - Serendipity Engine
(A3) - Domain Expertise Repositories - Vector Embeddings (A5)

------------------------------------------------------------------------

### INSIGHT E5: Voice Preservation = Core Value, Not Feature

**What it is:** Maintaining user's authentic voice isn't a nice-to-have
feature, it's the fundamental value proposition that justifies
existence.

**Why it matters:** If output sounds generic or "AI-written," product
has no value over ChatGPT.

**Evidence:** - Generic AI writing is free (ChatGPT) - Users pay for
authentic voice preservation - "Sounds like me" is #1 success criterion
in user testing - Voice avatars with measurable differences = validated
core mechanic

**Statistical Validation Required:** - \>80% distinguishability between
extreme avatar settings - Users can recognize their own voice in blind
testing - Voice consistency across long-form projects (50K+ words)

**Differentiation:** - ChatGPT/Claude: Generic voice, can't preserve
user authenticity - Grammarly: Actively flattens voice toward
"correctness" - Mrs. Robbins: Preserves and amplifies user's authentic
voice

**Related Features:** - Voice Translation Engine (A1) - Bidirectional
Voice Analysis (A10) - Voice Avatar Persistence (A6) - Batch Voice
Evaluator (C4)

------------------------------------------------------------------------

### INSIGHT E6: Multiple Revenue Streams, Same Infrastructure

**What it is:** Personal platform (writers), Opportunity Mining
(entrepreneurs), Creative Intelligence (consultants) - three business
models, one tech stack.

**Why it matters:** Diversifies revenue, shares development costs,
increases exit valuation multiple.

**Evidence:** - Corbis creative research validated \$2M/year market for
pattern discovery - Opportunity mining addresses novel market (business
intelligence) - Same cataloging + serendipity engines serve all use
cases

**Revenue Models:**

**1. Personal Subscription (Writers/Creators):** - Free tier: 5
projects, 3 avatars, basic export - Pro tier (\$30/month): Unlimited
projects, unlimited avatars, all filters - Enterprise tier
(\$100/month): API access, priority support, custom domains

**2. Opportunity Mining (B2B/Entrepreneurs):** - Platform fee:
\$500-2000/month per user - Delivers validated business opportunity
pipeline - Target: VCs, accelerators, consultancies - Revenue per
customer: \$6K-24K annually

**3. Creative Intelligence (Consulting Firms):** - Custom deployment:
\$50K-200K setup - Per-seat licensing: \$200-500/month - Domain
expertise repository curation - Target: McKinsey, BCG, Bain, boutique
strategy firms - Revenue per customer: \$100K-500K annually

**TAM Expansion:** - Personal: 10M writers globally = \$3.6B TAM at
\$30/month - Opportunity Mining: 100K entrepreneurs/VCs = \$1.2B TAM at
\$1K/month - Creative Intelligence: 10K consulting firms = \$600M TAM at
\$5K/month/firm - Combined TAM: \$5.4B

**Exit Valuation Impact:** - Single-product SaaS: 2-3x revenue
multiple - Multi-product platform: 8-10x revenue multiple - Strategic
acquirer (Microsoft, Google): 12-15x revenue multiple

------------------------------------------------------------------------

### INSIGHT E7: Production Rhythm - Version 1 Must Be Concrete

**What it is:** Can't execute both PhotoNest and Mrs. Robbins in
parallel until Version 1 scope is clearly defined for each.

**Why it matters:** Prevents thrashing between projects, enables focused
execution.

**Evidence:** - PhotoNest nearly concrete (5-7 weeks to launch) -
Mrs. Robbins needs serendipity engine architecture work - Attempting
parallel work before concrete scope = neither ships

**Execution Strategy:**

**Phase 1 (Weeks 1-8): PhotoNest V1 Launch** - Focus 100% on PhotoNest -
Get to revenue (\$85K/year target) - Validate business model and
infrastructure

**Phase 2 (Weeks 9-12): Mrs. Robbins Architecture Definition** -
Document serendipity engine architecture - Finalize V1 scope (which
features are P0 vs P1) - Create detailed implementation plan

**Phase 3 (Weeks 13-20): Mrs. Robbins V1 Development** - Focus 100% on
Mrs. Robbins - Build core features (A-series cards) - Alpha launch with
100 users

**Phase 4 (Month 6+): Parallel Maintenance + V2** - PhotoNest:
Maintenance + V2 features - Mrs. Robbins: Beta scaling + revenue -
Shared infrastructure improvements benefit both

**Key Insight:** Ideation ≠ Implementation. Need concrete scope before
building.

------------------------------------------------------------------------

### INSIGHT E8: Market = Anyone Who "Thinks By Talking"

**What it is:** Addressable market far beyond neurodivergent users -
anyone who thinks verbally.

**Why it matters:** 10x larger market than original "disability
accommodation" positioning.

**Evidence:** - Founders verbally strategizing with co-founders -
Academics "thinking out loud" to develop theories - Executives dictating
memos to assistants - Sales professionals talking through pitch
strategy - Writers who "talk through" stories before writing

**Repositioning:** - From: "Helps people with writing disabilities" -
To: "Removes the mechanical bottleneck between thinking and
documentation"

**Messaging Shift:** - Not: "Accommodation for those who struggle" -
Instead: "Acceleration for those who think fast"

**Market Segments:**

1.  **Neurodivergent Users (Initial Target):**
    - 15-20% of population (dyslexia, ADHD, autism)
    - Acute pain point, high willingness to pay
    - Strong word-of-mouth within community
2.  **Verbal Thinkers (Expansion Market):**
    - Consultants, executives, strategists
    - Think verbally, delegate typing
    - High income, low price sensitivity
3.  **Non-Native Writers (International Market):**
    - Think fluently in concepts
    - Struggle with written English
    - Massive global market (1B+ English learners)
4.  **Content Creators (Volume Users):**
    - Bloggers, YouTubers, podcasters
    - Need to produce high-volume written content
    - Monetizable user base

**Go-to-Market Sequencing:** 1. Launch: Neurodivergent users
(word-of-mouth growth) 2. Expand: Verbal thinkers via LinkedIn targeting
3. International: Non-native speakers via localized marketing 4. Content
creators: Partner with platforms (Medium, Substack)

------------------------------------------------------------------------

### INSIGHT E9: Five-Year Exit Strategy

**What it is:** Build for acquisition by Microsoft, Google, or similar
within 5 years.

**Why it matters:** Shapes architecture decisions, partnership strategy,
IP protection, and documentation standards.

**Evidence:** - Founder's background (Getty/Corbis acquisition by
Microsoft, Microsoft employment) provides acquisition insight -
Strategic acquirers value: Clean code, scalable architecture,
comprehensive documentation - Platform with multiple revenue streams
worth 3-5x more than single-product tool

**Building for Acquisition:**

**1. Technical Excellence:** - Professional-grade code with 70%+ test
coverage - Comprehensive documentation (this spec is part of it) -
Scalable architecture (cellular microservices) - Clean separation of
concerns - No technical debt that would fail due diligence

**2. IP Protection:** - Controlled vocabulary taxonomy as intellectual
property - Voice translation algorithms documented and defensible -
Patents filed for unique innovations (Year 2+) - Trademark protection
for brand

**3. Business Metrics:** - \$5M+ ARR minimum for strategic acquisition
interest - 100K+ active users (consumer) OR 100+ enterprise customers -
90%+ retention rate - Net Revenue Retention \>100% (expansion revenue)

**4. Strategic Positioning:** - Positioned as "cognition infrastructure"
not "writing tool" - Applicable to Microsoft 365, Google Workspace
integration - Enterprise-ready security and compliance (SOC 2)

**Potential Acquirers:**

**Microsoft (Most Likely):** - Integration with Word, Teams,
PowerPoint - Copilot platform synergy - Enterprise productivity focus -
Historical relationship (founder background)

**Google:** - Google Docs integration - Workspace productivity suite -
Voice-first strategy (Assistant)

**Anthropic/OpenAI:** - Claude API integration advantage - Voice
preservation differentiator - Strategic positioning

**Exit Valuation Scenarios (Year 5):**

    Conservative (Single Product):
    - $3M ARR × 3x = $9M exit

    Moderate (Platform, Multiple Revenue Streams):
    - $8M ARR × 8x = $64M exit

    Optimistic (Strategic Value, Enterprise):
    - $15M ARR × 12x = $180M exit

**Timeline:** - Year 1: Product-market fit, \$500K ARR - Year 2: Scale
to \$2M ARR, 10K users - Year 3: Enterprise tier, \$5M ARR - Year 4:
International expansion, \$10M ARR - Year 5: Acquisition conversations,
\$15M+ ARR

------------------------------------------------------------------------

### INSIGHT E10: Cataloging Architecture = PhotoNest Lessons Applied

**What it is:** PhotoNest taxonomy research directly applicable to
Mrs. Robbins cataloging engine.

**Why it matters:** Avoid reinventing the wheel, leverage 18 months of
taxonomy design work.

**Evidence:** - Getty/Corbis spent 18 months building hierarchical
controlled vocabulary - Same principles apply to text as to images -
Controlled vocabulary enables cross-domain discovery - Taxonomy is the
moat (hard to replicate, compounds in value)

**Shared Learnings:**

**1. Hierarchical Structure:**

    Photography
    ├── Portraiture
    │   ├── Lighting Techniques
    │   ├── Posing
    │   └── Composition
    ├── Landscape
    │   ├── Natural
    │   └── Urban
    └── Abstract

Applies to:

    Business Strategy
    ├── Market Analysis
    │   ├── Competitive Landscape
    │   ├── Customer Segmentation
    │   └── Market Sizing
    ├── Financial Planning
    └── Operations

**2. Controlled Vocabulary Benefits:** - Consistency in categorization -
Enables accurate search and discovery - Cross-domain mapping (ski
dampening = wing cavitation) - Scalable without manual re-tagging

**3. Implementation Insights:** - Start with broad categories, refine
over time - User feedback improves taxonomy (crowdsourced
intelligence) - Domain-specific vocabularies as plugins (DSM-5, HBR,
etc.)

**Architectural Reuse:** - PhotoNest cataloging engine becomes
blueprint - Database schema patterns transfer - UI patterns for
browsing/filtering transfer - Search algorithms optimized in PhotoNest
apply to Mrs. Robbins

**Investment Justification:** - Don't treat cataloging as
"nice-to-have" - It's foundational infrastructure - Quality of catalog
determines quality of serendipity - Invest 20-30% of development time in
taxonomy design

------------------------------------------------------------------------

### Strategic Insight Summary

**Core Strategic Principles:**

1.  **Compete on organizing thinking, not on grammar** (E1)
2.  **Remove structural barriers to enable new users** (E2)
3.  **Deliver measurable ROI through velocity** (E3)
4.  **Build defensible moat through cataloging** (E4, E10)
5.  **Preserve authentic voice as core value** (E5)
6.  **Diversify revenue across use cases** (E6)
7.  **Execute sequentially with concrete scope** (E7)
8.  **Target verbal thinkers, not just writers** (E8)
9.  **Build for strategic acquisition** (E9)

**Decision Framework:**

When evaluating feature priority, product direction, or resource
allocation, ask:

- Does this help users organize thinking? (E1)
- Does this remove barriers vs. adding complexity? (E2)
- Does this increase velocity measurably? (E3)
- Does this strengthen the cataloging moat? (E4)
- Does this preserve or enhance authentic voice? (E5)
- Does this enable new revenue streams? (E6)
- Is scope concrete enough to execute? (E7)
- Does this serve verbal thinkers broadly? (E8)
- Does this increase acquisition value? (E9)

Features that score high on multiple dimensions are highest priority.
Features that score low on all dimensions should be cut.

## CHUNK 24 of 29: Roadmap, Milestones & Success Metrics

## Section 11: Roadmap and Milestones

### 12-Month Development Roadmap

------------------------------------------------------------------------

### **Weeks 1-8: Alpha Development**

**Objective:** Build minimum viable product with core architecture
functional

**Core Features (Must Have):**

✅ **A1: Voice Translation Engine** - Status: Already built and
validated - 10 parametric variables functional - Statistical validation
complete (\>80% distinguishability)

⚠️ **A2: Cataloging Engine** - Implement controlled vocabulary
database - Build semantic tagging via Claude API - Integrate with
thought blob storage - Deliverable: Content automatically categorized on
capture

⚠️ **A3: Serendipity Engine** - Vector similarity search
implementation - Cross-project discovery - Controlled vocabulary
mapping - Deliverable: "Related content" sidebar functional

⚠️ **A4: Hot/Warm/Cold Context Architecture** - Implement context
management system - Vector search for cold context retrieval - Test with
50K word document - Deliverable: System remembers full document context

✅ **A7: Database Schema** - Status: Already deployed to Supabase - All
tables created with RLS policies - pgvector extension enabled

✅ **A8: Authentication** - Status: Configured via Supabase Auth -
Email + OAuth working - Need: Production testing

⚠️ **B1: Dialectical Editor** - Two-space UI (conversation + document) -
Conversation history persistence - Voice avatar integration -
Deliverable: Core dialectic interaction working

⚠️ **B3: Voice Capture** - Browser speech-to-text (Web Speech API) -
Whisper API fallback - Voice activity detection - Deliverable: Users can
dictate thoughts

⚠️ **B5: Project Management** - Create/read/update/delete projects -
Project dashboard - Basic navigation - Deliverable: Users can manage
multiple projects

**Supporting Features:**

⚠️ **A6: Voice Avatar Persistence** - Save/load avatar configurations -
Preset avatar library - Mid-conversation avatar switching

⚠️ **C2: Export Formats** - Markdown export - Basic DOCX export - Plain
text export

**Week-by-Week Breakdown:**

**Week 1-2:** Cataloging Engine + Serendipity Engine architecture -
Build controlled vocabulary database - Implement vector similarity
search - Integration testing

**Week 3-4:** Dialectical Editor + Voice Capture - Build two-space UI -
Integrate Web Speech API - Conversation persistence

**Week 5-6:** Context Management + Export - Hot/Warm/Cold context
implementation - Export functionality - End-to-end testing

**Week 7-8:** Polish + Alpha Testing - Bug fixes from internal testing -
Performance optimization - Documentation for alpha testers - Deploy to
production

**Success Criteria:** - All A-series (core architecture) features
functional - Can complete full workflow: Capture → Organize → Write →
Export - Alpha testers can use product without crashing - \<5 P0 bugs in
production

------------------------------------------------------------------------

### **Weeks 9-12: Beta Launch**

**Objective:** Launch to 100 beta users, activate payment tier, collect
feedback

**New Features:**

⚠️ **E11: Payment & Subscription Integration** - WooCommerce + Stripe
setup - Free tier: 5 projects, 3 avatars - Pro tier (\$30/month):
Unlimited projects/avatars - Webhook sync for subscription status

⚠️ **B6: Thought Blob Browser** - View all thought blobs by project -
Filter by category, date, word count - Search within blob content

⚠️ **C1: Filter Configuration UI** - Select active content filters -
Adjust sensitivity sliders - Preview filter results

⚠️ **B4: TTS Playback** - ElevenLabs integration - Audio playback
controls - Caching to reduce API costs

**Improvements:**

- Onboarding flow for new users
- Help documentation and tooltips
- Performance optimization (target \<2s response time p95)
- Bug fixes from alpha feedback

**Beta User Recruitment:**

- Target: 100 users
- Channels: Reddit (r/dyslexia, r/ADHD), Twitter, LinkedIn
- Offer: Free Pro tier for 3 months in exchange for feedback
- Requirements: Weekly usage, monthly feedback survey

**Success Criteria:** - 100 beta users onboarded - Payment processing
functional (test mode) - \>70% weekly active users - \>8/10 average
satisfaction score - \<10 P1 bugs reported per week - \$0 MRR (free beta
tier)

------------------------------------------------------------------------

### **Months 4-6: V1.0 Production Launch**

**Objective:** Public launch, revenue activation, scale to 500+ users

**New Features:**

⚠️ **C7: Content Filters (3 types)** - Decorative Metaphor Detection -
Place Anchoring Analysis - Contextual Integrity Check - Filter
validation dashboard

⚠️ **A10: Bidirectional Voice Analysis** - Paste text → extract voice
parameters - "Apply to Avatar" button - Confidence scoring per parameter

⚠️ **C3: Search & Discovery** - Full-text search across all content -
Semantic search via embeddings - Advanced filters (date, category,
project)

⚠️ **C6: Backup & Recovery** - Automated daily backups - Manual backup
on demand - Export all user data as JSON

**Product Improvements:**

- Mobile-responsive UI (browser-based, not native app)
- Performance optimization (target 1.5s response time p95)
- Advanced onboarding with interactive tutorial
- In-app help system

**Go-to-Market:**

- Public launch announcement (Product Hunt, Hacker News)
- Content marketing (blog posts, case studies)
- Influencer partnerships (neurodivergent content creators)
- Paid ads (Google, Reddit)

**Pricing Strategy:**

- Free tier: 5 projects, 3 avatars, basic export, 100 API calls/month
- Pro tier: \$30/month - Unlimited projects/avatars, all filters,
  priority support
- Annual discount: \$300/year (save \$60, 17% discount)

**Revenue Targets:**

- Month 4: \$1,500 MRR (50 paid users)
- Month 5: \$4,500 MRR (150 paid users)
- Month 6: \$9,000 MRR (300 paid users)

**Success Criteria:** - 500+ total users (200+ paid) - \$9K MRR (\$108K
ARR run rate) - \>80% monthly retention - Net Promoter Score \>40 - \<5
P0/P1 bugs in production

------------------------------------------------------------------------

### **Months 7-9: V2.0 Expansion**

**Objective:** Advanced features, increase engagement, improve retention

**New Features:**

⚠️ **C4: Time Tracking** - Automatic time tracking per project - Manual
timer controls - Time reports (daily, weekly, monthly) - Export time
data for billing

⚠️ **C7: Delta Analytics** - Vocabulary diversity tracking - Writing
improvement metrics - Growth reports (monthly, quarterly) -
Visualizations with charts

⚠️ **C8: Content Import** - Import DOCX, TXT, MD files - Batch import
multiple files - Assign to project - Auto-categorization

⚠️ **A11: Configurable Endpoint System** - Writer endpoint (narrative
prose) - Entrepreneur endpoint (scored business plan with Rookery
framework) - Consultant endpoint (strategic memo) - Researcher endpoint
(structured paper)

**Product Improvements:**

- Version control UI enhancements
- Collaboration features (view-only sharing)
- API rate limit increases for paid tiers
- Advanced voice avatar presets

**Marketing Expansion:**

- Case studies from successful users
- Webinars and demos
- Partner with writing coaches
- Educational institution pilots

**Revenue Targets:**

- Month 7: \$15K MRR (500 paid users)
- Month 8: \$22K MRR (750 paid users)
- Month 9: \$30K MRR (1,000 paid users)

**Success Criteria:** - 1,500+ total users (1,000+ paid) - \$30K MRR
(\$360K ARR run rate) - \>85% monthly retention - NPS \>50 - Feature
adoption: \>60% of users using content filters

------------------------------------------------------------------------

### **Months 10-12: Revenue Push & Enterprise Prep**

**Objective:** Hit \$85K net income target, prepare for enterprise tier

**New Features:**

⚠️ **E12: Admin Dashboard** - User management - System metrics -
Subscription analytics - Manual overrides

⚠️ **D1: OCR Capture** - Upload photos of handwritten notes - OCR
extraction via Tesseract/Google Vision - Manual correction interface

⚠️ **B9: Document Creation from Organized Blobs** - Select blob
cluster - Generate document structure - Initialize conversation with
context

⚠️ **C5: Collaboration (Basic)** - Share projects read-only - Comment on
sections - Activity feed

**Enterprise Readiness:**

- SOC 2 compliance preparation (audit Year 2)
- Single Sign-On (SSO) support
- Custom domain hosting
- Service Level Agreement (SLA) documentation
- Dedicated account management

**Pricing Updates:**

- Free tier: 3 projects (reduced from 5), 2 avatars, basic export
- Pro tier: \$30/month (unchanged)
- **Enterprise tier: \$100/month** - API access, priority support, SSO,
  custom domain
- Volume discounts for 10+ seats

**Revenue Targets:**

- Month 10: \$45K MRR (1,400 paid users + 50 enterprise)
- Month 11: \$60K MRR (1,800 paid users + 100 enterprise)
- Month 12: \$85K MRR (2,500 paid users + 150 enterprise)

**Net Income Calculation (Month 12):**

    Revenue: $85,000 MRR
    Costs:
    - Infrastructure (Vercel, Supabase, APIs): $8,000
    - Payment processing (Stripe 2.9%): $2,465
    - Marketing: $10,000
    - Contractor support: $5,000
    Total Costs: $25,465

    Net Income: $59,535/month ($714K annually)

**Success Criteria:** - \$85K+ MRR (\$1M+ ARR) - 3,000+ total users
(2,500+ paid) - \>85% monthly retention - NPS \>60 - **Target achieved:
\$85K net income**

------------------------------------------------------------------------

### Feature Priority Matrix

**P0 (Must Have for Alpha):** - A1: Voice Translation Engine ✅ - A2:
Cataloging Engine - A3: Serendipity Engine - A4: Hot/Warm/Cold Context -
A7: Database Schema ✅ - A8: Authentication ✅ - B1: Dialectical
Editor - B3: Voice Capture - B5: Project Management

**P1 (Required for Beta/V1.0):** - A6: Voice Avatar Persistence - A10:
Bidirectional Voice Analysis - B4: TTS Playback - B6: Thought Blob
Browser - C1-C3: Content Filters (3 types) - C2: Export Formats - C3:
Search & Discovery - E11: Payment Integration

**P2 (Nice-to-Have for V2.0):** - A11: Configurable Endpoints - B9:
Document Creation from Blobs - C4: Time Tracking - C7: Delta Analytics -
C8: Content Import - C5: Collaboration (Basic) - E12: Admin Dashboard

**P3 (Future/Experimental):** - D1: OCR Capture - D6: WordPress
Integration - D8: Mobile App - D9: Mood/Theme Customization - D10:
Gamification - D11: Opportunity Mining - D12: Automated Content
Ingestion

------------------------------------------------------------------------

### Success Metrics Dashboard

**User Acquisition:** - New signups per week - Activation rate (% who
complete onboarding) - Conversion rate (free → paid)

**Engagement:** - Weekly Active Users (WAU) - Monthly Active Users
(MAU) - Average sessions per user per week - Average conversation
length - Documents exported per user per month

**Retention:** - Day 1, Day 7, Day 30 retention - Monthly churn rate
(target: \<15%) - Cohort retention curves

**Revenue:** - Monthly Recurring Revenue (MRR) - Annual Recurring
Revenue (ARR) - Average Revenue Per User (ARPU) - Customer Acquisition
Cost (CAC) - Lifetime Value (LTV) - LTV:CAC ratio (target: \>3:1)

**Product Quality:** - Net Promoter Score (NPS) - target \>50 - Customer
Satisfaction (CSAT) - target \>8/10 - Bug count by severity
(P0/P1/P2/P3) - API response time (p50, p95, p99) - Error rate (target:
\<1%)

**Feature Adoption:** - % users using voice capture - % users using
content filters - % users switching voice avatars - % users using
serendipity discovery - % users exporting documents

------------------------------------------------------------------------

### Risk Mitigation Timeline

**Technical Risks:**

**Month 1-3:** - Risk: Voice translation doesn't produce measurably
different output - Mitigation: Already validated through Avatar Tuner
testing ✅ - Status: Mitigated

**Month 4-6:** - Risk: Serendipity Engine produces too many false
positives - Mitigation: Tune similarity thresholds, user feedback loop,
dismissal tracking - Status: Test extensively in beta

**Month 7-9:** - Risk: Context window management breaks with very long
documents - Mitigation: Load testing with 100K word documents,
auto-pruning strategy - Status: Architecture supports, needs validation

**Business Risks:**

**Month 1-6:** - Risk: Can't reach 100 beta users - Mitigation: Multiple
recruitment channels (Reddit, Twitter, LinkedIn, referrals) -
Contingency: Lower beta target to 50 users, deeper engagement

**Month 7-12:** - Risk: Conversion rate too low (free → paid) -
Mitigation: Optimize onboarding, demonstrate value early, offer annual
discount - Contingency: Lower price point (\$20/month) or introduce
mid-tier (\$50/month)

**Month 10-12:** - Risk: Enterprise tier adoption slower than
projected - Mitigation: Direct sales outreach, partnerships with
consultancies, educational pilots - Contingency: Focus on Pro tier
volume, delay enterprise features

------------------------------------------------------------------------

### Long-Term Vision (Years 2-5)

**Year 2: Platform Expansion** - Opportunity Mining module (B2B revenue
stream) - API access for third-party developers - Mobile app
(iOS/Android) - International expansion (non-English languages) -
Revenue target: \$2M ARR

**Year 3: Enterprise Focus** - SOC 2 Type II certification - Custom
deployments for large enterprises - Domain expertise marketplace (users
upload custom knowledge bases) - Strategic partnerships (Microsoft,
Google, Anthropic) - Revenue target: \$5M ARR

**Year 4: Market Leadership** - AI-powered insight recommendations -
Real-time collaboration features - Voice avatar marketplace (users sell
custom avatars) - Acquisition by strategic buyer discussions begin -
Revenue target: \$10M ARR

**Year 5: Exit** - Acquisition by Microsoft, Google, or Anthropic - Exit
valuation: \$64M - \$180M (8-12x ARR) - OR: Continue as independent
company targeting \$20M+ ARR

**Strategic Positioning for Exit:** - Position as "cognition
infrastructure" not "writing tool" - Demonstrate platform extensibility
(multiple use cases) - Show enterprise adoption and retention - Prove
technical excellence through documentation and test coverage - Build
relationships with potential acquirers early (Year 2-3)

## CHUNK 25 of 29: Appendices & Reference Documentation

## Appendix A: Glossary of Terms

**Avatar:** A saved voice configuration defining how AI-generated text
sounds. Contains parametric settings (formality, metaphor density, etc.)
and optional exemplar text.

**Bidirectional Voice Analysis:** The ability to analyze existing text
to extract voice parameters, not just translate parameters into text.

**Blob:** Short for "thought blob" - a captured piece of unstructured
content (voice memo, typed notes, imported text) stored for later
organization.

**BPR (Benefit-Price Ratio):** Economic metric measuring value delivered
versus cost. Mrs. Robbins targets \>3:1 BPR through velocity gains.

**Cataloging Engine:** System component that automatically categorizes
and tags content using controlled vocabulary and semantic analysis.

**Cellular Architecture:** Design pattern where major system components
are self-contained with clear API boundaries, allowing independent
scaling.

**Cold Context:** Full document content and historical conversation
turns retrieved on-demand via vector search when needed.

**Content Filter:** Analysis module that checks text quality (e.g.,
decorative metaphor detection, place anchoring). Runs at commit-time,
not during conversation.

**Controlled Vocabulary:** Hierarchical taxonomy of terms used for
consistent categorization. Enables cross-domain discovery (e.g.,
"dampening" appears in both ski and aviation contexts).

**Dialectical Editing:** Conversation-based writing process using thesis
→ antithesis → synthesis loops, not one-way AI generation.

**Endpoint:** Output format template (Writer, Entrepreneur, Consultant,
Researcher). Same dialectic process produces different deliverable
types.

**Hot Context:** Currently active content always loaded in conversation
(current section + last 5 exchanges + avatar config).

**K2/Boeing Moment:** Reference to cross-domain insight where ski
dampening technology applied to wing cavitation. Represents value of
serendipity engine.

**Opportunity Mining:** B2B use case where system discovers business
opportunities by analyzing market signals through serendipity patterns.

**Place Anchoring:** Literary technique of consistently grounding
narrative in physical location. Content filter checks for this.

**RAG (Retrieval-Augmented Generation):** Pattern where LLM queries
external knowledge (vector database) rather than relying solely on
training data.

**RLS (Row-Level Security):** PostgreSQL security feature ensuring users
only access their own data, enforced at database level.

**Rookery Framework:** 9-axis business plan scoring system used for
Entrepreneur endpoint.

**Serendipity Engine:** System component that discovers non-obvious
connections across disparate content using vector similarity and
controlled vocabulary.

**Thought Blob:** See "Blob"

**Two-Space System:** UI pattern with separate conversation space (messy
dialectic) and document space (clean canonical output).

**Vector Embedding:** Numerical representation of text enabling semantic
similarity search. Mrs. Robbins uses OpenAI's 1536-dimensional
embeddings.

**Voice Translation Engine:** Core component converting avatar slider
settings into Claude API prompt directives.

**Warm Context:** Document structure and project metadata always
available (outline, goals, audience, tone).

------------------------------------------------------------------------

## Appendix B: API Reference

### Base URL

    Production: https://api.mrs-robbins.com
    Staging: https://api-staging.mrs-robbins.com

### Authentication

All API requests require Bearer token authentication:

    Authorization: Bearer <jwt_token>

Obtain token via login:

``` bash
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}

Response:
{
  "access_token": "eyJhbGc...",
  "refresh_token": "eyJhbGc...",
  "expires_in": 3600
}
```

### Core Endpoints

#### Projects

**Create Project:**

``` bash
POST /api/projects
Content-Type: application/json

{
  "title": "My Novel",
  "description": "A science fiction story",
  "endpoint_type": "writer"
}

Response:
{
  "project_id": "uuid",
  "title": "My Novel",
  "endpoint_type": "writer",
  "created_at": "2025-11-14T12:00:00Z"
}
```

**List Projects:**

``` bash
GET /api/projects?status=active&endpoint=writer

Response:
{
  "projects": [
    {
      "project_id": "uuid",
      "title": "My Novel",
      "endpoint_type": "writer",
      "word_count": 5420,
      "last_edited": "2025-11-14T12:00:00Z"
    }
  ],
  "total": 5
}
```

#### Conversations

**Send Message:**

``` bash
POST /api/conversation/message
Content-Type: application/json

{
  "project_id": "uuid",
  "user_input": "I want to write about AI ethics",
  "avatar_id": "uuid"
}

Response:
{
  "conversation_id": "uuid",
  "assistant_response": "I hear you're interested in AI ethics...",
  "timestamp": "2025-11-14T12:00:00Z"
}
```

**Get Conversation History:**

``` bash
GET /api/conversation/{project_id}

Response:
{
  "messages": [
    {
      "role": "user",
      "content": "I want to write about AI ethics",
      "timestamp": "2025-11-14T12:00:00Z"
    },
    {
      "role": "assistant",
      "content": "I hear you're interested in AI ethics...",
      "timestamp": "2025-11-14T12:00:05Z"
    }
  ],
  "total_turns": 12
}
```

#### Voice Avatars

**Save Avatar:**

``` bash
POST /api/avatars
Content-Type: application/json

{
  "name": "Songwriter",
  "config": {
    "formality": 2,
    "complexity": 5,
    "metaphor_density": 9,
    "sentence_length": 4,
    "emotional_tone": 9,
    "directness": 6,
    "technical_depth": 3,
    "humor": 7,
    "contraction_use": 9,
    "passive_voice": 2
  }
}

Response:
{
  "avatar_id": "uuid",
  "name": "Songwriter",
  "created_at": "2025-11-14T12:00:00Z"
}
```

**Load Avatar:**

``` bash
GET /api/avatars/{avatar_id}

Response:
{
  "avatar_id": "uuid",
  "name": "Songwriter",
  "config": { ... },
  "is_default": false
}
```

#### Serendipity

**Discover Connections:**

``` bash
POST /api/serendipity/discover
Content-Type: application/json

{
  "source_content_id": "uuid",
  "filters": {
    "min_similarity": 0.7,
    "exclude_current_project": true,
    "limit": 10
  }
}

Response:
{
  "connections": [
    {
      "content_id": "uuid",
      "snippet": "Text snippet...",
      "similarity": 0.85,
      "explanation": "Both discuss creative resistance patterns",
      "metadata": {
        "project_title": "Other Project",
        "created_at": "2025-10-01T12:00:00Z"
      }
    }
  ]
}
```

#### Export

**Export Document:**

``` bash
POST /api/export
Content-Type: application/json

{
  "document_id": "uuid",
  "format": "docx"
}

Response:
{
  "download_url": "https://storage.mrs-robbins.com/exports/document.docx",
  "expires_at": "2025-11-14T13:00:00Z"
}
```

### Rate Limits

  Tier         Requests/Minute   Conversation Messages/Minute
  ------------ ----------------- ------------------------------
  Free         60                5
  Pro          120               10
  Enterprise   300               30

### Error Codes

  Code   Meaning                 Example
  ------ ----------------------- ------------------------------------------
  400    Bad Request             Invalid JSON or missing required field
  401    Unauthorized            Missing or invalid auth token
  403    Forbidden               Attempting to access another user's data
  404    Not Found               Resource doesn't exist
  429    Too Many Requests       Rate limit exceeded
  500    Internal Server Error   Server-side error
  503    Service Unavailable     Temporary outage or maintenance

------------------------------------------------------------------------

## Appendix C: Database Schema Reference

### Complete Entity-Relationship Diagram

    ┌─────────────┐
    │   users     │
    ├─────────────┤
    │ id          │──┐
    │ email       │  │
    │ created_at  │  │
    │ sub_tier    │  │
    └─────────────┘  │
                      │
                      │ 1:N
                      │
    ┌─────────────────▼──┐
    │    projects        │
    ├────────────────────┤
    │ id                 │──┐
    │ user_id (FK)       │  │
    │ title              │  │
    │ endpoint_type      │  │
    │ created_at         │  │
    └────────────────────┘  │
                             │ 1:N
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ▼                ▼                ▼
    ┌─────────────┐  ┌──────────────┐  ┌─────────────┐
    │ thought_    │  │ conversations│  │  documents  │
    │   blobs     │  ├──────────────┤  ├─────────────┤
    ├─────────────┤  │ id           │  │ id          │
    │ id          │  │ project_id   │  │ project_id  │
    │ project_id  │  │ messages     │  │ title       │
    │ content     │  │ updated_at   │  │ content     │
    │ word_count  │  └──────────────┘  │ version     │
    │ created_at  │                    └─────────────┘
    └─────────────┘
          │
          │ 1:1
          ▼
    ┌─────────────────┐
    │ content_metadata│
    ├─────────────────┤
    │ id              │
    │ content_id (FK) │
    │ categories      │
    │ tags            │
    │ entities        │
    └─────────────────┘
          │
          │ 1:N
          ▼
    ┌─────────────┐
    │ embeddings  │
    ├─────────────┤
    │ id          │
    │ content_id  │
    │ chunk_text  │
    │ embedding   │ (vector)
    │ created_at  │
    └─────────────┘

### Table Sizes (Estimated Year 1)

  Table              Rows (Year 1)   Row Size   Total Size
  ------------------ --------------- ---------- --------------
  users              3,000           1 KB       3 MB
  projects           15,000          2 KB       30 MB
  thought_blobs      150,000         5 KB       750 MB
  content_metadata   150,000         2 KB       300 MB
  embeddings         500,000         7 KB       3.5 GB
  conversations      15,000          100 KB     1.5 GB
  documents          30,000          50 KB      1.5 GB
  voice_avatars      15,000          1 KB       15 MB
  **Total**                                     **\~7.6 GB**

**Storage Costs (Supabase):** - 8 GB included in Pro plan (\$25/month) -
Year 1 well within included storage

------------------------------------------------------------------------

## Appendix D: Environment Variables

### Required Environment Variables

``` bash
# Database
DATABASE_URL=postgresql://user:password@host:5432/mrs_robbins
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# AI Services
ANTHROPIC_API_KEY=sk-ant-api03-...
OPENAI_API_KEY=sk-...
ELEVENLABS_API_KEY=...

# Payment Processing
WC_CONSUMER_KEY=ck_...
WC_CONSUMER_SECRET=cs_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Monitoring
SENTRY_DSN=https://...@sentry.io/...

# Email
SENDGRID_API_KEY=SG....

# Redis (Rate Limiting)
UPSTASH_REDIS_URL=https://....upstash.io
UPSTASH_REDIS_TOKEN=...

# Application
NODE_ENV=production
API_BASE_URL=https://api.mrs-robbins.com
FRONTEND_URL=https://app.mrs-robbins.com
```

### Optional Environment Variables

``` bash
# Feature Flags
FEATURE_COLLABORATION=false
FEATURE_MOBILE_APP=false
FEATURE_OCR=false

# Rate Limiting
RATE_LIMIT_WINDOW=60000  # 1 minute in ms
RATE_LIMIT_MAX_REQUESTS=100

# API Timeouts
CLAUDE_API_TIMEOUT=30000  # 30 seconds
ELEVENLABS_TIMEOUT=10000  # 10 seconds

# Logging
LOG_LEVEL=info  # debug, info, warn, error
```

------------------------------------------------------------------------

## Appendix E: Testing Checklist

### Pre-Launch Testing Checklist

**Authentication & Authorization:** - \[ \] Sign up with email - \[ \]
Sign up with Google OAuth - \[ \] Sign up with GitHub OAuth - \[ \]
Login with email - \[ \] Login with OAuth - \[ \] Password reset flow -
\[ \] Token refresh - \[ \] Logout clears session - \[ \] RLS policies
prevent cross-user data access

**Project Management:** - \[ \] Create project - \[ \] List projects -
\[ \] Update project title - \[ \] Delete project - \[ \] Archive
project - \[ \] Switch between projects - \[ \] Projects persist across
sessions

**Voice Avatars:** - \[ \] Create custom avatar - \[ \] Save avatar
configuration - \[ \] Load saved avatar - \[ \] Switch avatar
mid-conversation - \[ \] Different avatars produce different output - \[
\] Preset avatars available - \[ \] Export avatar as JSON - \[ \] Import
avatar from JSON

**Dialectical Conversation:** - \[ \] Send text message - \[ \] Send
voice message (Web Speech API) - \[ \] Receive AI response - \[ \]
Conversation history persists - \[ \] Context maintained across turns -
\[ \] Hot/warm/cold context loading - \[ \] Voice directives applied
correctly - \[ \] Response time \<3s (p95)

**Content Capture:** - \[ \] Voice recording starts/stops - \[ \] Voice
transcription accurate (\>95%) - \[ \] Text input works - \[ \] Import
DOCX file - \[ \] Import TXT file - \[ \] Import MD file - \[ \] Thought
blobs created and stored

**Cataloging & Serendipity:** - \[ \] Content automatically
categorized - \[ \] Categories appear in metadata - \[ \] Vector
embeddings generated - \[ \] Similarity search returns relevant
results - \[ \] Cross-project discovery works - \[ \] Serendipity
explanations make sense - \[ \] Related blobs sidebar updates

**Content Filters:** - \[ \] Decorative metaphor filter runs - \[ \]
Place anchoring filter runs - \[ \] Contextual integrity filter runs -
\[ \] Filter results display in UI - \[ \] User can dismiss findings -
\[ \] Filter sensitivity adjustable

**Export:** - \[ \] Export as Markdown - \[ \] Export as DOCX - \[ \]
Export as PDF - \[ \] Export as plain text - \[ \] TTS audio
generation - \[ \] Download links work - \[ \] Formatting preserved

**Payment Processing:** - \[ \] Free tier limits enforced - \[ \]
Upgrade to Pro tier - \[ \] Stripe checkout flow - \[ \] Webhook
processes subscription - \[ \] User tier updated in database - \[ \]
Downgrade from Pro to Free - \[ \] Subscription cancellation - \[ \]
Payment failure handling

**Performance:** - \[ \] Page load \<1.5s - \[ \] API response \<3s
(p95) - \[ \] Database queries \<100ms - \[ \] Vector search \<500ms -
\[ \] No memory leaks over 1-hour session - \[ \] Handles 50K word
document

**Security:** - \[ \] HTTPS enforced - \[ \] Security headers present -
\[ \] CORS configured correctly - \[ \] Rate limiting works - \[ \] SQL
injection prevented - \[ \] XSS attacks prevented - \[ \] CSRF
protection active - \[ \] Passwords hashed (not stored plain text) - \[
\] API keys not exposed to frontend

**Browser Compatibility:** - \[ \] Chrome (latest) - \[ \] Firefox
(latest) - \[ \] Safari (latest) - \[ \] Edge (latest) - \[ \] Mobile
Safari (iOS) - \[ \] Mobile Chrome (Android)

**Error Handling:** - \[ \] Network errors display user-friendly
message - \[ \] API errors logged to Sentry - \[ \] Invalid inputs
rejected with clear errors - \[ \] Retry logic for transient failures -
\[ \] Graceful degradation when services down

------------------------------------------------------------------------

## Appendix F: Deployment Checklist

### Pre-Deployment

- [ ] All tests passing (unit, integration)
- [ ] Code review completed
- [ ] Changelog updated
- [ ] Environment variables configured in Vercel
- [ ] Database migrations ready
- [ ] Security scan passed (npm audit, Snyk)
- [ ] Performance testing completed

### Deployment

- [ ] Merge PR to main branch
- [ ] Vercel automatic deployment triggered
- [ ] Build succeeds
- [ ] Database migrations run successfully
- [ ] Health check passes (/api/health returns 200)

### Post-Deployment

- [ ] Smoke tests pass (critical user flows)
- [ ] No new errors in Sentry
- [ ] Vercel Analytics shows normal traffic
- [ ] Monitor for 1 hour post-deployment
- [ ] Team notified in Slack
- [ ] Status page updated (if maintenance occurred)

### Rollback Criteria

- [ ] Error rate \>5%
- [ ] Health check failing \>2 minutes
- [ ] Critical bug reported by \>3 users within 10 minutes
- [ ] Data corruption detected

------------------------------------------------------------------------

## Appendix G: Support & Resources

### Documentation

- **Technical Specification:** This document
- **User Guide:** https://docs.mrs-robbins.com/user-guide
- **API Reference:** https://docs.mrs-robbins.com/api
- **Video Tutorials:** https://www.youtube.com/mrs-robbins

### Community

- **Discord:** https://discord.gg/mrs-robbins
- **Reddit:** r/MrsRobbins
- **Twitter:** @MrsRobbinsAI

### Support Channels

- **Email:** support@mrs-robbins.com
- **Priority Support (Pro/Enterprise):** priority@mrs-robbins.com
- **Response Time:** \<24 hours (Free), \<8 hours (Pro), \<2 hours
  (Enterprise)

### Development Resources

- **GitHub Repository:** https://github.com/mrs-robbins/mrs-robbins
  (private)
- **Issue Tracker:** https://github.com/mrs-robbins/mrs-robbins/issues
- **Project Management:** Linear workspace

### External Services

- **Vercel Dashboard:** https://vercel.com/mrs-robbins
- **Supabase Dashboard:** https://supabase.com/dashboard/project/xxx
- **Sentry Dashboard:** https://sentry.io/organizations/mrs-robbins
- **Stripe Dashboard:** https://dashboard.stripe.com/mrs-robbins

### Key Contacts

- **Founder/CTO:** Stafford (stafford@mrs-robbins.com)
- **Support Lead:** TBD (post-launch hire)
- **DevOps:** Managed by Vercel/Supabase

## CHUNK 26 of 29: File Structure, Code Organization & Development Workflows

## Appendix H: File Structure & Code Organization

### Repository Structure

    mrs-robbins/
    ├── frontend/                    # React application
    │   ├── public/
    │   │   ├── index.html
    │   │   ├── favicon.ico
    │   │   └── robots.txt
    │   ├── src/
    │   │   ├── components/          # Reusable UI components
    │   │   │   ├── ui/              # Base UI components (buttons, inputs)
    │   │   │   ├── dialogs/         # Modal dialogs
    │   │   │   ├── forms/           # Form components
    │   │   │   └── layout/          # Layout components (header, sidebar)
    │   │   ├── features/            # Feature-specific components
    │   │   │   ├── conversation/    # Dialectical editor
    │   │   │   ├── voice-avatars/   # Avatar configuration
    │   │   │   ├── projects/        # Project management
    │   │   │   ├── serendipity/     # Discovery interface
    │   │   │   └── export/          # Export functionality
    │   │   ├── lib/                 # Utilities and services
    │   │   │   ├── api/             # API client functions
    │   │   │   ├── voice/           # Voice translation engine
    │   │   │   ├── storage/         # Local storage utilities
    │   │   │   ├── validators/      # Input validation schemas
    │   │   │   └── utils/           # General utilities
    │   │   ├── hooks/               # Custom React hooks
    │   │   │   ├── useAuth.ts
    │   │   │   ├── useProject.ts
    │   │   │   ├── useConversation.ts
    │   │   │   └── useVoiceAvatar.ts
    │   │   ├── pages/               # Page components
    │   │   │   ├── Dashboard.tsx
    │   │   │   ├── Project.tsx
    │   │   │   ├── Settings.tsx
    │   │   │   └── Login.tsx
    │   │   ├── styles/              # Global styles
    │   │   │   ├── globals.css
    │   │   │   └── themes.css
    │   │   ├── types/               # TypeScript type definitions
    │   │   │   ├── models.ts
    │   │   │   ├── api.ts
    │   │   │   └── components.ts
    │   │   ├── App.tsx              # Root component
    │   │   ├── main.tsx             # Entry point
    │   │   └── routes.tsx           # Route configuration
    │   ├── tests/                   # Frontend tests
    │   │   ├── unit/
    │   │   ├── integration/
    │   │   └── e2e/
    │   ├── .env.example
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── vite.config.ts
    │   └── README.md
    │
    ├── backend/                     # API and serverless functions
    │   ├── api/                     # API route handlers
    │   │   ├── auth/
    │   │   │   ├── login.ts
    │   │   │   ├── signup.ts
    │   │   │   └── refresh.ts
    │   │   ├── projects/
    │   │   │   ├── create.ts
    │   │   │   ├── list.ts
    │   │   │   ├── update.ts
    │   │   │   └── delete.ts
    │   │   ├── conversation/
    │   │   │   ├── message.ts
    │   │   │   └── history.ts
    │   │   ├── avatars/
    │   │   │   ├── save.ts
    │   │   │   ├── load.ts
    │   │   │   └── list.ts
    │   │   ├── serendipity/
    │   │   │   └── discover.ts
    │   │   └── export/
    │   │       ├── markdown.ts
    │   │       ├── docx.ts
    │   │       └── pdf.ts
    │   ├── lib/                     # Backend libraries
    │   │   ├── db/                  # Database utilities
    │   │   │   ├── client.ts
    │   │   │   ├── queries.ts
    │   │   │   └── migrations/
    │   │   ├── services/            # Business logic services
    │   │   │   ├── cataloging.ts
    │   │   │   ├── serendipity.ts
    │   │   │   ├── embedding.ts
    │   │   │   ├── voice-translation.ts
    │   │   │   └── content-filters.ts
    │   │   ├── integrations/        # Third-party integrations
    │   │   │   ├── claude.ts
    │   │   │   ├── openai.ts
    │   │   │   ├── elevenlabs.ts
    │   │   │   └── stripe.ts
    │   │   ├── middleware/          # Express middleware
    │   │   │   ├── auth.ts
    │   │   │   ├── rate-limit.ts
    │   │   │   └── error-handler.ts
    │   │   └── utils/               # Utilities
    │   │       ├── logger.ts
    │   │       ├── validators.ts
    │   │       └── helpers.ts
    │   ├── tests/                   # Backend tests
    │   │   ├── unit/
    │   │   ├── integration/
    │   │   └── fixtures/
    │   ├── .env.example
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── README.md
    │
    ├── database/                    # Database migrations and seeds
    │   ├── migrations/
    │   │   ├── 001_initial_schema.sql
    │   │   ├── 002_add_domain_repos.sql
    │   │   └── 003_add_discovery_history.sql
    │   ├── seeds/
    │   │   ├── preset_avatars.sql
    │   │   └── controlled_vocabulary.sql
    │   └── schema.sql               # Complete schema reference
    │
    ├── docs/                        # Documentation
    │   ├── technical-spec.md        # This document
    │   ├── api-reference.md
    │   ├── user-guide.md
    │   └── architecture/
    │       ├── diagrams/
    │       └── decisions/           # ADRs (Architecture Decision Records)
    │
    ├── scripts/                     # Deployment and utility scripts
    │   ├── deploy.sh
    │   ├── backup-db.sh
    │   ├── seed-data.sh
    │   └── generate-types.sh
    │
    ├── .github/
    │   ├── workflows/               # GitHub Actions
    │   │   ├── ci.yml
    │   │   ├── deploy.yml
    │   │   └── security.yml
    │   └── PULL_REQUEST_TEMPLATE.md
    │
    ├── .gitignore
    ├── .env.example
    ├── package.json                 # Root package.json (for scripts)
    ├── README.md
    └── LICENSE

------------------------------------------------------------------------

## Appendix I: Code Style Guide

### TypeScript/JavaScript Standards

**Naming Conventions:**

``` typescript
// PascalCase for types, interfaces, classes, components
type VoiceAvatarConfig = { ... };
interface ConversationMessage { ... };
class CatalogingEngine { ... };
const DialogueEditor: React.FC = () => { ... };

// camelCase for variables, functions, methods
const userId = 'abc123';
function generateVoiceDirectives(config: VoiceAvatarConfig) { ... }

// UPPER_SNAKE_CASE for constants
const MAX_CONVERSATION_LENGTH = 50000;
const API_BASE_URL = process.env.API_BASE_URL;

// kebab-case for file names
// voice-translation-engine.ts
// conversation-message.tsx
```

**Function Structure:**

``` typescript
/**
 * Generates voice directives from avatar configuration
 * 
 * @param config - Voice avatar configuration with parametric settings
 * @returns Formatted prompt directives for Claude API
 * @throws Error if config validation fails
 */
function generateVoiceDirectives(config: VoiceAvatarConfig): string {
  // 1. Validate input
  if (!config || !config.formality) {
    throw new Error('Invalid avatar configuration');
  }
  
  // 2. Business logic
  const directives: string[] = [];
  
  if (config.formality <= 3) {
    directives.push('Write conversationally...');
  }
  
  // 3. Return result
  return directives.join('\n');
}
```

**Error Handling:**

``` typescript
// Use try-catch for async operations
async function fetchConversation(projectId: string): Promise<Conversation> {
  try {
    const response = await api.get(`/conversation/${projectId}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError('Conversation not found');
    }
    
    logger.error({ error, projectId }, 'Failed to fetch conversation');
    throw new Error('Failed to fetch conversation');
  }
}

// Custom error classes
class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}
```

**Imports:**

``` typescript
// Group imports: external, internal, types
import React, { useState, useEffect } from 'react';
import { z } from 'zod';

import { api } from '@/lib/api';
import { logger } from '@/lib/logger';
import { ConversationMessage } from '@/features/conversation';

import type { VoiceAvatarConfig } from '@/types/models';
import type { ApiResponse } from '@/types/api';
```

### React Component Standards

**Component Structure:**

``` typescript
// features/conversation/ConversationMessage.tsx
import React from 'react';
import type { ConversationMessage as Message } from '@/types/models';

interface ConversationMessageProps {
  message: Message;
  onEdit?: (messageId: string) => void;
}

export const ConversationMessage: React.FC<ConversationMessageProps> = ({
  message,
  onEdit
}) => {
  // 1. Hooks
  const [isEditing, setIsEditing] = useState(false);
  
  // 2. Event handlers
  const handleEdit = () => {
    setIsEditing(true);
    onEdit?.(message.id);
  };
  
  // 3. Render logic
  return (
    <div className="conversation-message">
      <div className={`message-${message.role}`}>
        {message.content}
      </div>
      {onEdit && (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};
```

**Hooks:**

``` typescript
// hooks/useConversation.ts
import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import type { Conversation } from '@/types/models';

export function useConversation(projectId: string) {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    async function fetchConversation() {
      try {
        const data = await api.get(`/conversation/${projectId}`);
        setConversation(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchConversation();
  }, [projectId]);
  
  return { conversation, isLoading, error };
}
```

### CSS/Styling Standards

**Tailwind CSS Conventions:**

``` tsx
// Use Tailwind utility classes for styling
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-900">Project Title</h2>
  <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
    Open
  </button>
</div>

// For complex or repeated patterns, create component classes
// styles/components.css
.card {
  @apply bg-white rounded-lg shadow-md p-6;
}

.btn-primary {
  @apply px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700;
}
```

------------------------------------------------------------------------

## Appendix J: Development Workflows

### Local Development Setup

**Initial Setup:**

``` bash
# 1. Clone repository
git clone https://github.com/mrs-robbins/mrs-robbins.git
cd mrs-robbins

# 2. Install dependencies
cd frontend && npm install
cd ../backend && npm install

# 3. Configure environment variables
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
# Edit .env files with your credentials

# 4. Setup database
cd database
psql -h localhost -U postgres -f schema.sql
psql -h localhost -U postgres -f seeds/preset_avatars.sql

# 5. Start development servers
# Terminal 1: Frontend
cd frontend && npm run dev

# Terminal 2: Backend
cd backend && npm run dev
```

**Daily Development Workflow:**

``` bash
# 1. Pull latest changes
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/serendipity-engine

# 3. Make changes, commit frequently
git add .
git commit -m "feat(serendipity): implement vector similarity search"

# 4. Push to remote
git push origin feature/serendipity-engine

# 5. Create pull request on GitHub
# 6. Request code review
# 7. Merge after approval
```

### Code Review Process

**Pull Request Checklist:**

- [ ] Code follows style guide
- [ ] All tests passing
- [ ] No new linter warnings
- [ ] Documentation updated if needed
- [ ] Breaking changes noted in PR description
- [ ] Screenshots for UI changes

**Review Criteria:**

1.  **Functionality:** Does code do what it's supposed to?
2.  **Tests:** Are there adequate tests?
3.  **Readability:** Is code clear and well-commented?
4.  **Performance:** Any performance concerns?
5.  **Security:** Any security vulnerabilities?
6.  **Architecture:** Does it fit overall system design?

### Testing Workflow

**Unit Tests:**

``` bash
# Run all unit tests
npm run test

# Run with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch

# Run specific test file
npm run test src/lib/voice/voice-translation.test.ts
```

**Integration Tests:**

``` bash
# Run integration tests (requires database)
npm run test:integration

# Run with Docker Compose (isolated environment)
docker-compose up -d postgres redis
npm run test:integration
docker-compose down
```

**E2E Tests (Future):**

``` bash
# Run Playwright tests
npm run test:e2e

# Run in headed mode (see browser)
npm run test:e2e:headed

# Run specific spec
npm run test:e2e tests/e2e/conversation.spec.ts
```

### Database Migrations

**Creating a Migration:**

``` bash
# Generate migration file
npm run migrate:create add_domain_repositories

# This creates: database/migrations/004_add_domain_repositories.sql
```

**Migration Structure:**

``` sql
-- database/migrations/004_add_domain_repositories.sql

-- UP Migration
CREATE TABLE domain_repositories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- DOWN Migration (for rollback)
-- DROP TABLE domain_repositories;
```

**Running Migrations:**

``` bash
# Run all pending migrations
npm run migrate:up

# Rollback last migration
npm run migrate:down

# Check migration status
npm run migrate:status
```

### Deployment Workflow

**Staging Deployment:**

``` bash
# 1. Merge feature to develop
git checkout develop
git merge feature/serendipity-engine
git push origin develop

# 2. Vercel automatically deploys to staging
# Monitor: https://vercel.com/mrs-robbins/deployments

# 3. Run smoke tests on staging
npm run test:smoke -- --env=staging

# 4. Manual QA testing on staging URL
```

**Production Deployment:**

``` bash
# 1. Create release branch
git checkout develop
git checkout -b release/v1.0.0

# 2. Update version number
npm version minor  # or major, or patch

# 3. Update changelog
# Edit CHANGELOG.md with release notes

# 4. Merge to main
git checkout main
git merge release/v1.0.0
git push origin main

# 5. Vercel automatically deploys to production

# 6. Tag release
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# 7. Monitor production
# Check Sentry, Vercel logs, status page

# 8. Delete release branch
git branch -d release/v1.0.0
```

### Hotfix Workflow

**Emergency Bug Fix:**

``` bash
# 1. Create hotfix branch from main
git checkout main
git checkout -b hotfix/auth-bug

# 2. Fix bug
# Edit files...
git commit -m "fix(auth): resolve token expiration issue"

# 3. Merge to main (production)
git checkout main
git merge hotfix/auth-bug
git push origin main

# 4. Also merge to develop
git checkout develop
git merge hotfix/auth-bug
git push origin develop

# 5. Tag hotfix
git tag -a v1.0.1 -m "Hotfix v1.0.1: Auth bug"
git push origin v1.0.1

# 6. Delete hotfix branch
git branch -d hotfix/auth-bug
```

------------------------------------------------------------------------

## Appendix K: Troubleshooting Guide

### Common Development Issues

**Issue: "Cannot find module" error**

``` bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Database connection fails**

``` bash
# Check DATABASE_URL in .env
echo $DATABASE_URL

# Test connection manually
psql $DATABASE_URL -c "SELECT 1"

# Verify Supabase project is active
# Check: https://supabase.com/dashboard
```

**Issue: API calls return 401 Unauthorized**

``` bash
# Solution: Refresh auth token
# In browser console:
localStorage.clear()
# Then login again
```

**Issue: Vercel build fails**

``` bash
# Check build logs in Vercel dashboard
# Common causes:
# 1. Missing environment variables
# 2. TypeScript errors
# 3. Failed tests

# Run build locally to debug
npm run build
```

**Issue: Vector search returns no results**

``` bash
# Check if embeddings exist
psql $DATABASE_URL -c "SELECT COUNT(*) FROM embeddings"

# Check if pgvector extension is enabled
psql $DATABASE_URL -c "SELECT * FROM pg_extension WHERE extname = 'vector'"

# Re-generate embeddings if needed
npm run scripts/regenerate-embeddings.ts
```

**Issue: Claude API rate limit exceeded**

``` bash
# Check current usage
# Anthropic Console: https://console.anthropic.com/usage

# Solution: Implement request queuing
# Or: Upgrade Anthropic plan
# Or: Add caching layer
```

### Production Issues

**Issue: High error rate in Sentry**

    1. Check Sentry dashboard for error patterns
    2. Identify which endpoint is failing
    3. Review recent deployments (possible regression?)
    4. Check third-party service status (Claude, Supabase, Stripe)
    5. Rollback if critical (>10% error rate)

**Issue: Slow API response times**

    1. Check Vercel Analytics for slow endpoints
    2. Review database query performance
       psql> EXPLAIN ANALYZE <query>
    3. Check third-party API latency (Claude, OpenAI)
    4. Add database indexes if needed
    5. Implement caching for expensive operations

**Issue: Database running out of connections**

    1. Check connection pool usage in Supabase dashboard
    2. Identify queries not closing connections
    3. Reduce connection pool size in app
    4. Upgrade Supabase plan if consistently hitting limits

**Issue: Payment webhooks not processing**

    1. Check Stripe webhook logs
    2. Verify webhook secret matches .env
    3. Check backend logs for webhook handler errors
    4. Retry failed webhooks manually from Stripe dashboard

## CHUNK 27 of 29: Implementation Priorities & Technical Debt Management

## Appendix L: Implementation Priorities

### Feature Build Sequence

**Phase 1: Foundation (Weeks 1-2)**

Build order based on dependency graph:

    1. A7: Database Schema ✅ (Already complete)
       └─> Enables all other features

    2. A8: Authentication ✅ (Already configured)
       └─> Required before any user-specific features

    3. A1: Voice Translation Engine ✅ (Already built)
       └─> Core differentiator, already validated

    4. A5: Vector Embedding Storage
       └─> Foundation for A2, A3, A4
       └─> Enables semantic search and discovery

**Phase 2: Content Management (Weeks 3-4)**

    5. B5: Project Management
       └─> Required before B1 (editor needs projects)
       └─> Simple CRUD operations

    6. A2: Cataloging Engine
       └─> Depends on: A5 (embeddings)
       └─> Required for: A3 (serendipity)

    7. B3: Voice Capture
       └─> Parallel with B1 (independent functionality)
       └─> Critical for voice-first workflow

    8. B1: Dialectical Editor
       └─> Depends on: A1 (voice engine), B5 (projects), A8 (auth)
       └─> Core user experience

**Phase 3: Intelligence Layer (Weeks 5-6)**

    9. A3: Serendipity Engine
       └─> Depends on: A2 (cataloging), A5 (embeddings)
       └─> Differentiator feature

    10. A4: Hot/Warm/Cold Context
        └─> Depends on: A5 (embeddings), B1 (editor)
        └─> Enables long-form work

    11. A6: Voice Avatar Persistence
        └─> Depends on: A1 (voice engine)
        └─> Enhances voice workflow

**Phase 4: Quality & Export (Weeks 7-8)**

    12. A9: Content Filter System Infrastructure
        └─> Foundation for filters

    13. Content Filters (3 types)
        └─> Depends on: A9 (infrastructure)
        └─> Decorative Metaphor, Place Anchoring, Contextual Integrity

    14. C2: Export Formats
        └─> Depends on: B1 (editor - needs content to export)
        └─> Markdown, DOCX, TXT

    15. B6: Thought Blob Browser
        └─> Depends on: A2 (cataloging)
        └─> Navigation and discovery UI

### Critical Path Analysis

**Longest Dependency Chain (Critical Path):**

    A7 (Database) → A8 (Auth) → B5 (Projects) → A1 (Voice) → B1 (Editor) → C2 (Export)
    Estimated: 6 weeks on critical path

**Parallel Work Opportunities:**

- B3 (Voice Capture) can be built in parallel with B1
- A2 (Cataloging) can be built in parallel with B1
- Content Filters can be built in parallel with Export

**Bottleneck Identification:**

- **A5 (Vector Embeddings):** Required by A2, A3, A4 - prioritize early
- **B1 (Dialectical Editor):** Central to user experience - allocate
  most time
- **A3 (Serendipity):** Complex algorithm - high risk of scope creep

------------------------------------------------------------------------

## Appendix M: Technical Debt Management

### Technical Debt Categories

**Deliberate Debt (Acceptable):**

These are conscious shortcuts taken to ship faster, with plans to
refactor later.

**Type 1: Simplified Implementations**

``` typescript
// MVP: Simple in-memory cache
const cache = new Map<string, any>();

// Future: Redis-backed cache with TTL
// Reason: Ship faster, Redis adds complexity
// Payoff timeline: Month 4-6 when cache hits matter
// Estimated refactor: 1 week
```

**Type 2: Manual Processes**

    // MVP: Manual avatar preset creation
    // INSERT INTO voice_avatars (name, config) VALUES (...)

    // Future: Admin UI for creating presets
    // Reason: Ship faster, only need 5-10 presets initially
    // Payoff timeline: Month 7-9 when scaling presets
    // Estimated refactor: 2 weeks

**Type 3: Basic Error Handling**

``` typescript
// MVP: Generic error messages
catch (error) {
  return res.status(500).json({ error: 'Something went wrong' });
}

// Future: Specific error codes and messages
// Reason: Ship faster, improve UX later
// Payoff timeline: Month 3-4 based on user feedback
// Estimated refactor: 1 week
```

**Inadvertent Debt (Minimize):**

These are unintended quality issues that should be fixed ASAP.

**Red Flags:** - Copy-pasted code in 3+ places → Extract to shared
function - Functions \>100 lines → Break into smaller functions - No
tests for critical path → Add tests before shipping - Hardcoded values →
Move to config - SQL injection vulnerabilities → Use parameterized
queries - Memory leaks → Fix immediately

**Debt Tracking:**

``` markdown
# DEBT.md (in repository)

## Deliberate Debt

### D1: Simple in-memory cache
- **Location:** `backend/lib/cache.ts`
- **Reason:** Ship faster, Redis adds complexity
- **Impact:** Performance degradation at >1000 users
- **Payoff:** Month 4-6
- **Effort:** 1 week
- **Priority:** P2

### D2: Manual avatar presets
- **Location:** `database/seeds/preset_avatars.sql`
- **Reason:** Only need 5-10 presets for MVP
- **Impact:** Can't scale preset library
- **Payoff:** Month 7-9
- **Effort:** 2 weeks
- **Priority:** P3
```

### Refactoring Strategy

**When to Refactor:**

✅ **Refactor Now:** - Security vulnerabilities - Performance issues
affecting \>10% of users - Code preventing new features from being
built - Bugs caused by technical debt

❌ **Defer Refactoring:** - "Nice to have" code cleanup - Premature
optimization - Refactoring for theoretical future needs - Aesthetic
improvements with no functional impact

**Refactoring Budget:**

- **Week 1-8 (Alpha):** 5% of time on refactoring
- **Week 9-12 (Beta):** 10% of time on refactoring
- **Month 4-6 (V1.0):** 15% of time on refactoring
- **Month 7+ (V2.0):** 20% of time on refactoring

**Refactoring Process:**

    1. Identify debt item from DEBT.md
    2. Assess current impact (users affected, severity)
    3. Estimate refactor effort (hours/days)
    4. Calculate ROI (impact reduction / effort)
    5. Prioritize by ROI
    6. Schedule in sprint
    7. Refactor with tests
    8. Deploy incrementally
    9. Monitor for regressions
    10. Remove from DEBT.md

------------------------------------------------------------------------

## Appendix N: Performance Optimization Strategy

### Performance Budgets

**Page Load Time:**

  Page             Target   Budget
  ---------------- -------- ----------
  Dashboard        \<1.5s   1.8s max
  Project Editor   \<2.0s   2.5s max
  Export           \<3.0s   5.0s max

**API Response Time:**

  Endpoint                     p50       p95       p99
  ---------------------------- --------- --------- ------
  GET /projects                \<200ms   \<500ms   \<1s
  POST /conversation/message   \<1.5s    \<3s      \<5s
  POST /serendipity/discover   \<300ms   \<500ms   \<1s

**Database Query Time:**

  Query Type            Target    Max
  --------------------- --------- -------
  Simple SELECT by ID   \<10ms    50ms
  Vector similarity     \<200ms   500ms
  Complex JOIN          \<100ms   300ms

### Optimization Techniques

**Frontend Optimization:**

**1. Code Splitting:**

``` typescript
// Lazy load heavy components
import { lazy, Suspense } from 'react';

const AvatarEditor = lazy(() => import('@/features/voice-avatars/AvatarEditor'));
const SerendipityEngine = lazy(() => import('@/features/serendipity/SerendipityEngine'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AvatarEditor />
    </Suspense>
  );
}
```

**2. Image Optimization:**

``` typescript
// Use Next.js Image component or similar
import Image from 'next/image';

<Image
  src="/avatar.png"
  width={100}
  height={100}
  loading="lazy"
  placeholder="blur"
/>
```

**3. Memoization:**

``` typescript
// Memoize expensive computations
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Memoize components
import { memo } from 'react';

const ConversationMessage = memo(({ message }) => {
  return <div>{message.content}</div>;
});
```

**Backend Optimization:**

**1. Database Indexing:**

``` sql
-- Index frequently queried columns
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_thought_blobs_project_id ON thought_blobs(project_id);
CREATE INDEX idx_embeddings_content_id ON embeddings(content_id);

-- Composite index for common query patterns
CREATE INDEX idx_projects_user_status ON projects(user_id, status);

-- Vector index for similarity search (using pgvector)
CREATE INDEX idx_embeddings_vector ON embeddings 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
```

**2. Query Optimization:**

``` typescript
// BAD: N+1 query problem
const projects = await db.query('SELECT * FROM projects WHERE user_id = $1', [userId]);
for (const project of projects.rows) {
  const blobs = await db.query('SELECT * FROM thought_blobs WHERE project_id = $1', [project.id]);
}

// GOOD: Single query with JOIN
const result = await db.query(`
  SELECT 
    p.*,
    json_agg(tb.*) as blobs
  FROM projects p
  LEFT JOIN thought_blobs tb ON p.id = tb.project_id
  WHERE p.user_id = $1
  GROUP BY p.id
`, [userId]);
```

**3. Caching Strategy:**

``` typescript
// Cache expensive operations
import { redis } from '@/lib/redis';

async function getSerendipityConnections(blobId: string) {
  const cacheKey = `serendipity:${blobId}`;
  
  // Check cache first
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Compute if not cached
  const connections = await computeConnections(blobId);
  
  // Store in cache (1 hour TTL)
  await redis.setex(cacheKey, 3600, JSON.stringify(connections));
  
  return connections;
}
```

**4. API Response Compression:**

``` typescript
import compression from 'compression';

app.use(compression({
  threshold: 1024, // Only compress responses > 1KB
  level: 6 // Compression level (1-9)
}));
```

**5. Connection Pooling:**

``` typescript
// Use connection pooling for database
import { Pool } from 'pg';

const pool = new Pool({
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Reuse connections
const client = await pool.connect();
try {
  const result = await client.query('SELECT * FROM projects');
  return result.rows;
} finally {
  client.release();
}
```

### Performance Monitoring

**Metrics to Track:**

``` typescript
interface PerformanceMetrics {
  // Frontend
  webVitals: {
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
  };
  
  // Backend
  apiResponseTime: {
    p50: number;
    p95: number;
    p99: number;
  };
  
  // Database
  dbQueryTime: {
    avg: number;
    max: number;
    slowQueries: Query[];
  };
  
  // External APIs
  externalApiLatency: {
    claude: number;
    openai: number;
    elevenlabs: number;
  };
}
```

**Performance Testing Schedule:**

- **Daily:** Automated performance tests in CI/CD
- **Weekly:** Review slow query logs
- **Monthly:** Full load testing
- **Quarterly:** Performance audit and optimization sprint

------------------------------------------------------------------------

## Appendix O: Scalability Planning

### Growth Projections

**User Growth:**

  Month   Total Users   Paid Users   MRR
  ------- ------------- ------------ --------
  1       100           0            \$0
  3       500           50           \$1.5K
  6       1,500         300          \$9K
  12      5,000         2,500        \$85K
  24      20,000        10,000       \$300K

**Infrastructure Scaling:**

**Year 1 (0-5K users):** - Single region deployment (US-West) - Vercel
Pro plan (\$20/month) - Supabase Pro plan (\$25/month) - Total infra:
\~\$100/month

**Year 2 (5K-20K users):** - Multi-region deployment (US, EU) - Vercel
Enterprise (\$500/month) - Supabase Team plan (\$599/month) - Redis
(Upstash) Pro (\$200/month) - Total infra: \~\$1,500/month

**Year 3 (20K-100K users):** - Global CDN - Dedicated database
instances - Kubernetes for microservices - Total infra: \~\$8,000/month

### Horizontal Scaling Strategy

**Database Scaling:**

**Phase 1 (0-10K users):** Single PostgreSQL instance - Supabase Pro:
8GB RAM, 2 CPUs - Sufficient for MVP

**Phase 2 (10K-50K users):** Read replicas

``` sql
-- Setup read replica for analytics queries
-- Write to primary, read from replica
const primaryDb = new Pool({ host: 'primary.supabase.co' });
const replicaDb = new Pool({ host: 'replica.supabase.co' });

// Write operations → primary
await primaryDb.query('INSERT INTO projects ...');

// Read operations → replica
await replicaDb.query('SELECT * FROM projects ...');
```

**Phase 3 (50K+ users):** Sharding by user

``` typescript
// Shard database by user_id hash
function getShardForUser(userId: string): DatabaseShard {
  const hash = crypto.createHash('md5').update(userId).digest('hex');
  const shardNumber = parseInt(hash.substring(0, 2), 16) % NUM_SHARDS;
  return shards[shardNumber];
}
```

**API Scaling:**

**Phase 1:** Vercel serverless functions (auto-scale) - Handles 0-10K
requests/minute - No manual intervention needed

**Phase 2:** Dedicated API servers (Kubernetes)

``` yaml
# kubernetes/api-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mrs-robbins-api
spec:
  replicas: 5  # Start with 5 pods
  selector:
    matchLabels:
      app: mrs-robbins-api
  template:
    metadata:
      labels:
        app: mrs-robbins-api
    spec:
      containers:
      - name: api
        image: mrs-robbins/api:latest
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: mrs-robbins-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: mrs-robbins-api
  minReplicas: 5
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

**Vector Search Scaling:**

**Phase 1:** pgvector in PostgreSQL - Handles 0-100K embeddings -
\<500ms search time

**Phase 2:** Pinecone or Weaviate

``` typescript
// Migrate to dedicated vector database
import { PineconeClient } from '@pinecone-database/pinecone';

const pinecone = new PineconeClient();
await pinecone.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: 'us-west1-gcp'
});

const index = pinecone.Index('mrs-robbins-embeddings');

// Query
const results = await index.query({
  vector: embedding,
  topK: 10,
  includeMetadata: true
});
```

### Cost Management

**Cost Per User (Target):**

  Tier                       Infrastructure Cost/User/Month   Target Margin
  -------------------------- -------------------------------- ---------------
  Free                       \$2                              Loss leader
  Pro (\$30/month)           \$5                              83% margin
  Enterprise (\$100/month)   \$15                             85% margin

**Cost Reduction Strategies:**

1.  **Caching:** Reduce API calls to Claude/OpenAI by 40%
2.  **Compression:** Reduce bandwidth costs by 30%
3.  **Right-sizing:** Monitor resource usage, scale down
    over-provisioned services
4.  **Reserved instances:** Commit to 1-year contracts for 30% discount
    (Year 2+)
5.  **Batch processing:** Group embeddings generation to reduce API
    calls

**Budget Allocation (Year 1):**

    Total Budget: $300K

    Development: $120K (40%)
    - Contractor/freelancer support
    - AI pair programming tools

    Infrastructure: $36K (12%)
    - Vercel, Supabase, APIs
    - Monitoring, logging

    Marketing: $90K (30%)
    - Paid ads
    - Content creation
    - Influencer partnerships

    Operations: $54K (18%)
    - Support tools
    - Admin overhead
    - Legal/accounting

## CHUNK 28 of 29: Analytics Strategy & Growth Metrics

## Appendix P: Analytics & Business Intelligence

### Analytics Architecture

**Data Collection Layers:**

    ┌─────────────────────────────────────────┐
    │         User Interactions               │
    │  (clicks, inputs, navigation, time)     │
    └──────────────────┬──────────────────────┘
                       │
                       ▼
    ┌─────────────────────────────────────────┐
    │      Frontend Analytics                 │
    │  (Vercel Analytics + Custom Events)     │
    └──────────────────┬──────────────────────┘
                       │
                       ▼
    ┌─────────────────────────────────────────┐
    │      Backend Analytics                  │
    │  (API calls, processing time, errors)   │
    └──────────────────┬──────────────────────┘
                       │
                       ▼
    ┌─────────────────────────────────────────┐
    │      Database Analytics                 │
    │  (User behavior, feature usage, churn)  │
    └──────────────────┬──────────────────────┘
                       │
                       ▼
    ┌─────────────────────────────────────────┐
    │      Business Intelligence              │
    │  (Dashboard, reports, insights)         │
    └─────────────────────────────────────────┘

### Event Tracking

**Custom Event Schema:**

``` typescript
interface AnalyticsEvent {
  // Required fields
  event_name: string;
  user_id: string;
  timestamp: Date;
  
  // Optional metadata
  properties?: {
    project_id?: string;
    feature?: string;
    value?: number;
    metadata?: Record<string, any>;
  };
  
  // Automatically captured
  session_id: string;
  device_type: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
}
```

**Key Events to Track:**

**User Lifecycle:**

``` typescript
// Sign up
trackEvent('user_signup', { method: 'email' | 'google' | 'github' });

// Activation (completed onboarding)
trackEvent('user_activated', { days_to_activate: 0 });

// Conversion (free → paid)
trackEvent('user_converted', { plan: 'pro' | 'enterprise', price: 30 });

// Churn (subscription cancelled)
trackEvent('user_churned', { reason: 'too_expensive' | 'missing_features' | 'other' });
```

**Feature Usage:**

``` typescript
// Voice capture
trackEvent('voice_capture_started');
trackEvent('voice_capture_completed', { duration_seconds: 45, word_count: 120 });

// Conversation
trackEvent('conversation_message_sent', { project_id, message_length: 250 });
trackEvent('conversation_response_received', { response_time_ms: 1500 });

// Voice avatar
trackEvent('avatar_created', { name: 'Songwriter' });
trackEvent('avatar_switched', { from_avatar_id, to_avatar_id });

// Serendipity
trackEvent('serendipity_discovery', { connections_found: 5 });
trackEvent('serendipity_connection_clicked', { similarity_score: 0.85 });

// Export
trackEvent('document_exported', { format: 'docx', word_count: 5000 });

// Content filters
trackEvent('filter_run', { filter_type: 'decorative_metaphor', findings_count: 3 });
trackEvent('filter_finding_dismissed', { filter_type, finding_id });
```

**Business Metrics:**

``` typescript
// Subscription
trackEvent('subscription_started', { plan, billing_cycle: 'monthly' | 'annual' });
trackEvent('subscription_upgraded', { from_plan, to_plan });
trackEvent('subscription_cancelled', { reason });

// Revenue
trackEvent('payment_succeeded', { amount: 30, plan });
trackEvent('payment_failed', { reason });
```

### Funnel Analysis

**Onboarding Funnel:**

    Sign Up → Email Verification → Create Project → First Conversation → First Export
    100%      80%                   60%              40%                   20%

    Drop-off Analysis:
    - 20% abandon at email verification → Implement magic link option
    - 25% abandon after project creation → Improve onboarding tutorial
    - 33% never export → Add export prompt after conversation

**Conversion Funnel (Free → Paid):**

    Free User → Hit Limit → See Paywall → Start Checkout → Complete Payment
    100%        40%          30%            20%              15%

    Optimization:
    - 75% don't hit limits in first month → Lower free tier limits OR increase value perception
    - 25% bounce at paywall → A/B test messaging
    - 33% abandon checkout → Reduce friction (saved payment methods)

### Cohort Analysis

**Retention Cohorts:**

``` typescript
interface RetentionCohort {
  cohort_month: string; // "2025-01"
  users_count: number;
  retention: {
    day_1: number;   // % who returned day 1
    day_7: number;   // % who returned week 1
    day_30: number;  // % who returned month 1
    day_90: number;  // % who returned quarter 1
  };
}

// Example cohort data
{
  cohort_month: "2025-01",
  users_count: 500,
  retention: {
    day_1: 0.65,   // 65% returned next day
    day_7: 0.45,   // 45% returned after 1 week
    day_30: 0.30,  // 30% returned after 1 month (GOOD)
    day_90: 0.25   // 25% still active after 3 months (EXCELLENT)
  }
}
```

**Target Retention Rates:**

  Period   Good   Great   World-Class
  -------- ------ ------- -------------
  Day 1    40%    60%     80%
  Day 7    20%    40%     60%
  Day 30   15%    30%     45%
  Day 90   10%    25%     40%

**Revenue Cohorts:**

``` typescript
interface RevenueCohort {
  cohort_month: string;
  customers_count: number;
  mrr: {
    month_0: number;  // Initial MRR
    month_1: number;  // MRR after 1 month
    month_3: number;  // MRR after 3 months
    month_6: number;  // MRR after 6 months
    month_12: number; // MRR after 12 months
  };
  nrr: number; // Net Revenue Retention (goal: >100%)
}

// Net Revenue Retention calculation
// NRR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR
// >100% = healthy growth from existing customers
```

### A/B Testing Framework

**Testing Infrastructure:**

``` typescript
// A/B test configuration
interface ABTest {
  test_id: string;
  name: string;
  variants: {
    control: Variant;
    treatment: Variant;
  };
  traffic_split: number; // 0.5 = 50/50 split
  start_date: Date;
  end_date?: Date;
  metrics: Metric[];
}

interface Variant {
  id: string;
  name: string;
  description: string;
  config: Record<string, any>;
}

// Example: Testing onboarding flow
const onboardingTest: ABTest = {
  test_id: 'onboarding_v2',
  name: 'Interactive Tutorial vs. Video Tutorial',
  variants: {
    control: {
      id: 'video',
      name: 'Video Tutorial',
      description: '3-minute product tour video',
      config: { tutorial_type: 'video' }
    },
    treatment: {
      id: 'interactive',
      name: 'Interactive Tutorial',
      description: 'Step-by-step guided tour',
      config: { tutorial_type: 'interactive' }
    }
  },
  traffic_split: 0.5,
  start_date: new Date('2025-02-01'),
  metrics: ['activation_rate', 'time_to_first_export', 'day_7_retention']
};
```

**Test Prioritization (ICE Framework):**

    ICE Score = (Impact × Confidence × Ease) / 3

    Example Tests:

    1. Pricing page redesign
       Impact: 9 (could 2x conversions)
       Confidence: 7 (similar tests worked for competitors)
       Ease: 5 (requires design + dev)
       ICE Score: 7.0 → HIGH PRIORITY

    2. Onboarding tutorial type
       Impact: 7 (affects activation)
       Confidence: 6 (hypothesis based on user feedback)
       Ease: 8 (quick to implement)
       ICE Score: 7.0 → HIGH PRIORITY

    3. Button color change
       Impact: 2 (minimal impact expected)
       Confidence: 8 (easy to measure)
       Ease: 10 (trivial change)
       ICE Score: 6.7 → LOW PRIORITY

### Key Performance Indicators (KPIs)

**North Star Metric:**

**"Documents Exported Per Active User Per Month"**

Why this metric: - Directly measures value delivered (output created) -
Correlates with user satisfaction - Leading indicator of retention and
referrals - Aligns with core value proposition (remove thinking → output
bottleneck)

Target: \>2 documents per active user per month

**Supporting Metrics:**

**Acquisition:** - New signups per week: Target 100 (Month 6) - Signup
conversion rate: Target \>40% (landing page → account) - Cost per
acquisition (CPA): Target \<\$20

**Activation:** - % users who complete onboarding: Target \>70% - %
users who create first project: Target \>80% - % users who export first
document: Target \>50% - Time to first value (export): Target \<3 days

**Engagement:** - Daily Active Users (DAU): Track growth - Weekly Active
Users (WAU): Track growth - DAU/MAU ratio: Target \>20% (indicates
stickiness) - Average session length: Target \>15 minutes -
Conversations per user per week: Target \>5

**Retention:** - Day 1 retention: Target \>60% - Day 7 retention: Target
\>40% - Day 30 retention: Target \>30% - Monthly churn rate: Target
\<15%

**Revenue:** - Monthly Recurring Revenue (MRR): Track growth - Average
Revenue Per User (ARPU): Target \$17 (blended free+paid) - Customer
Acquisition Cost (CAC): Target \<\$30 - Lifetime Value (LTV): Target
\>\$200 - LTV:CAC ratio: Target \>3:1 - Gross margin: Target \>75%

**Product Quality:** - Net Promoter Score (NPS): Target \>50 - Customer
Satisfaction (CSAT): Target \>8/10 - Feature adoption rate: Target \>60%
for core features - API error rate: Target \<1% - p95 response time:
Target \<3s

### User Research Methodology

**Continuous User Feedback:**

**1. In-App Surveys:**

``` typescript
// Triggered after key actions
const surveys = {
  post_export: {
    trigger: 'document_exported',
    questions: [
      {
        type: 'rating',
        text: 'How satisfied are you with the exported document?',
        scale: '1-5'
      },
      {
        type: 'text',
        text: 'What could we improve about the export feature?'
      }
    ]
  },
  
  post_conversation: {
    trigger: 'conversation_ended',
    sample_rate: 0.1, // Only 10% of users
    questions: [
      {
        type: 'rating',
        text: 'Did the AI help organize your thoughts?',
        scale: '1-5'
      }
    ]
  },
  
  churn_survey: {
    trigger: 'subscription_cancelled',
    questions: [
      {
        type: 'multiple_choice',
        text: 'Why are you cancelling?',
        options: [
          'Too expensive',
          'Missing features I need',
          'Not using it enough',
          'Found alternative solution',
          'Other'
        ]
      },
      {
        type: 'text',
        text: 'What would make you reconsider?'
      }
    ]
  }
};
```

**2. User Interviews:**

**Schedule:** - Alpha (Month 1-2): 10 interviews with early users - Beta
(Month 3): 20 interviews with diverse user segments - Monthly (Month
4+): 5-10 interviews per month

**Interview Script Template:**

``` markdown
# User Interview Script

## Introduction (5 min)
- Thank you for your time
- This conversation helps us improve the product
- No right or wrong answers
- Recording for notes (with permission)

## Discovery (15 min)
- Tell me about your writing workflow before Mrs. Robbins
- What problems were you trying to solve?
- What other tools did you try?
- What made you try Mrs. Robbins?

## Usage (20 min)
- Walk me through your last session using Mrs. Robbins
- What worked well?
- What was frustrating?
- Which features do you use most?
- Which features do you never use?

## Value Perception (10 min)
- How has Mrs. Robbins changed your workflow?
- Can you quantify the time saved?
- Would you recommend it to others? Why/why not?
- What would make this a "must-have" tool for you?

## Pricing (5 min)
- What do you think is a fair price for this tool?
- What would be too expensive?
- What features would justify a higher price?

## Closing (5 min)
- Any other feedback?
- Can we follow up with you in the future?
- Thank you + incentive (if applicable)
```

**3. Usability Testing:**

**Test Scenarios:**

``` markdown
## Scenario 1: First-Time User Onboarding
**Goal:** Complete onboarding and create first project
**Success Criteria:**
- User completes without help in <5 minutes
- User understands core value proposition
- User feels confident to continue

**Observation Points:**
- Where do they get stuck?
- What do they try to click that doesn't work?
- What questions do they ask?

## Scenario 2: Voice Avatar Configuration
**Goal:** Create custom voice avatar
**Success Criteria:**
- User understands what each slider does
- User can save and apply avatar
- User notices difference in output

## Scenario 3: Serendipity Discovery
**Goal:** Discover connections between content
**Success Criteria:**
- User understands what serendipity does
- User finds value in connections shown
- User acts on at least one connection
```

### Market Validation

**Validation Checkpoints:**

**Month 1 (Alpha Launch):** - \[ \] 100 beta users signed up - \[ \]
\>70% activation rate - \[ \] \>60% report "useful" or "very useful" -
\[ \] At least 3 unsolicited testimonials - **Pass/Fail:** If \<50 users
or \<40% find useful → PIVOT

**Month 3 (Beta Launch):** - \[ \] 500 total users - \[ \] 50 paying
customers - \[ \] \>30% Day 30 retention - \[ \] \<20% churn rate - \[
\] NPS \>30 - **Pass/Fail:** If \<200 users or \<10 paying → REASSESS
PRICING/POSITIONING

**Month 6 (V1.0 Launch):** - \[ \] 1,500 total users - \[ \] 300 paying
customers - \[ \] \$9K MRR - \[ \] \>85% gross margin - \[ \] NPS \>40 -
**Pass/Fail:** If \<\$5K MRR → REASSESS BUSINESS MODEL

**Month 12 (Year 1 Target):** - \[ \] 5,000 total users - \[ \] 2,500
paying customers - \[ \] \$85K MRR (\$1M ARR) - \[ \] \>85% monthly
retention - \[ \] NPS \>50 - **Pass/Fail:** If \<\$50K MRR → REASSESS
SCALE STRATEGY

### Competitive Intelligence

**Competitor Monitoring:**

``` markdown
# Competitor Analysis Framework

## Primary Competitors
- Grammarly
- Notion AI
- ChatGPT/Claude (direct use)
- Jasper.ai

## Monitoring Checklist
- [ ] Feature releases (monthly)
- [ ] Pricing changes (quarterly)
- [ ] User reviews on G2/Capterra (monthly)
- [ ] Social media sentiment (weekly)
- [ ] Job postings (indicates growth)

## Differentiation Tracking
| Feature | Mrs. Robbins | Grammarly | Notion AI | ChatGPT |
|---------|--------------|-----------|-----------|---------|
| Voice preservation | ✅ | ❌ | ❌ | ❌ |
| Serendipity engine | ✅ | ❌ | ❌ | ❌ |
| Persistent memory | ✅ | ❌ | ✅ | ❌ |
| Dialectic collaboration | ✅ | ❌ | ❌ | ❌ |

## Competitive Advantage Score
Voice Preservation: STRONG (unique differentiator)
Serendipity: STRONG (unique, defensible)
Pricing: NEUTRAL (similar to competitors)
UX: WEAK (early stage, improving)
```

### Growth Experiments

**Experiment Queue:**

**Q1 2025:** 1. Landing page A/B test (headline variations) 2.
Onboarding flow optimization 3. Email nurture sequence for free users 4.
Referral program launch

**Q2 2025:** 5. Pricing page redesign 6. Feature comparison calculator
7. Case study content marketing 8. LinkedIn ad campaign

**Q3 2025:** 9. Annual subscription discount test 10. Enterprise tier
positioning 11. Educational partnership pilot 12. Influencer partnership
program

**Growth Experiment Template:**

``` markdown
# Experiment: [Name]

## Hypothesis
If we [change], then [metric] will [improve by X%] because [reason].

## Success Criteria
- Primary metric: [metric] improves by [X%]
- Secondary metrics: [metric1], [metric2]
- Statistical significance: 95% confidence
- Sample size: [N users]
- Duration: [X weeks]

## Implementation
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Results
- Primary metric: [actual result]
- Secondary metrics: [actual results]
- Winner: [control/treatment/inconclusive]
- Learning: [key insights]
- Next steps: [roll out / iterate / abandon]
```

### Data Privacy & Ethics

**Analytics Privacy Policy:**

``` markdown
## What We Track
- Feature usage (which features you use, how often)
- Performance metrics (page load times, error rates)
- Aggregate statistics (total users, average session length)

## What We Don't Track
- Content of your writing (conversations and documents)
- Voice recordings (deleted after transcription)
- Keystroke logging
- Screen recordings without explicit consent

## Data Retention
- Analytics events: 2 years
- User content: Indefinitely (or until user deletes account)
- Aggregated data: Indefinitely (anonymized)

## User Rights
- View all data we've collected about you
- Export your data as JSON
- Delete your account and all associated data
- Opt out of analytics (reduces product quality)
```

**Ethical Considerations:**

- Never use user content to train AI models without explicit opt-in
  consent
- Anonymize all data before sharing with third parties
- Transparent about what data is collected and why
- Provide easy opt-out mechanisms
- Regular security audits to protect user data

## CHUNK 29 of 29: Document Approval, Revision History & Next Steps

## Document Control

### Document Information

**Document Title:** Mrs. Robbins Technical Specification v3.0

**Document ID:** MRS-TECH-SPEC-v3.0

**Version:** 3.0

**Status:** APPROVED - Ready for Development

**Last Updated:** November 14, 2025

**Total Pages:** 29 chunks (estimated \~300 pages)

**Classification:** Internal - Confidential

------------------------------------------------------------------------

## Revision History

  ------------------------------------------------------------------------
  Version         Date       Author         Changes         Status
  --------------- ---------- -------------- --------------- --------------
  1.0             Oct 15,    Stafford +     Initial draft   DRAFT
                  2025       Claude         covering core   
                                            features        
                                            (A1-A8, B1-B5,  
                                            C1-C3)          

  2.0             Nov 4,     Stafford +     Added sections  REVIEW
                  2025       Claude         12-13           
                                            (Deployment,    
                                            Monitoring,     
                                            Testing),       
                                            expanded        
                                            feature set to  
                                            36 features     

  3.0             Nov 14,    Stafford +     Comprehensive   APPROVED
                  2025       Claude         rewrite         
                                            incorporating   
                                            Cards           
                                            framework,      
                                            Strategic       
                                            Insights        
                                            (E1-E10),       
                                            additional      
                                            features        
                                            (B9-B10,        
                                            D6-D12),        
                                            complete        
                                            appendices,     
                                            29-chunk        
                                            structure       
  ------------------------------------------------------------------------

**Changes in v3.0:**

- Integrated all Cards (A1-A11, B1-B10, C1-C9, D1-D12, E1-E13) into
  unified specification
- Added Strategic Insights section documenting business intelligence and
  positioning
- Expanded feature specifications from 36 to 44 features
- Added comprehensive appendices (A-P):
  - Glossary, API Reference, Database Schema
  - Environment Variables, Testing Checklists
  - File Structure, Code Style Guide
  - Implementation Priorities, Technical Debt Management
  - Performance Optimization, Scalability Planning
  - Analytics Strategy, Growth Metrics
- Restructured into 29 manageable chunks for easier navigation
- Clarified build sequence and dependency relationships
- Added detailed roadmap with monthly milestones

------------------------------------------------------------------------

## Document Approval

### Sign-Off

**Prepared By:** - **Name:** Claude (AI Assistant) - **Role:** Technical
Specification Author - **Date:** November 14, 2025

**Reviewed By:** - **Name:** Stafford Csavina - **Role:** Founder /
CTO - **Date:** November 14, 2025 - **Status:** ✅ APPROVED

**Notes from Reviewer:**

    This comprehensive technical specification successfully integrates:
    1. All architectural concepts from Architecture Diagrams
    2. All feature cards from Cards document
    3. Strategic insights informing product direction
    4. Practical implementation guidance

    The 29-chunk structure makes the document navigable despite its comprehensive scope.
    Build sequence and priority framework provide clear execution path.

    Approved for development execution starting Week 1, Month 1.

------------------------------------------------------------------------

## Implementation Authorization

### Go/No-Go Decision

**Decision:** ✅ GO

**Authorization Date:** November 14, 2025

**Authorized By:** Stafford Csavina, Founder/CTO

**Scope Approval:** - Alpha Development (Weeks 1-8): APPROVED - Beta
Launch (Weeks 9-12): APPROVED - V1.0 Production (Months 4-6): APPROVED -
V2.0 Expansion (Months 7-9): APPROVED - Revenue Push (Months 10-12):
APPROVED

**Budget Approval:** - Development Budget (Year 1): \$120,000 -
APPROVED - Infrastructure Budget (Year 1): \$36,000 - APPROVED -
Marketing Budget (Year 1): \$90,000 - APPROVED - Operations Budget (Year
1): \$54,000 - APPROVED - **Total Year 1 Budget:** \$300,000 - APPROVED

**Success Criteria (Month 12):** - \$85K MRR (\$1M ARR) ✓ APPROVED AS
TARGET - 5,000 total users (2,500+ paid) ✓ APPROVED AS TARGET - \>85%
monthly retention ✓ APPROVED AS TARGET - NPS \>60 ✓ APPROVED AS TARGET -
Net income: \$85K/month ✓ APPROVED AS TARGET

------------------------------------------------------------------------

## Next Steps

### Immediate Actions (Week 1)

**Day 1-2: Development Environment Setup** - \[ \] Clone repository (if
exists) or initialize new repo - \[ \] Setup local development
environment - \[ \] Configure Supabase project (production + staging) -
\[ \] Deploy base application structure to Vercel - \[ \] Verify CI/CD
pipeline working

**Day 3-5: Foundation Work** - \[ \] Review database schema (already
deployed) - \[ \] Test authentication flows (already configured) - \[ \]
Validate Voice Translation Engine (already built) - \[ \] Create project
management UI (B5) - \[ \] Implement basic navigation

**Week 2: Core Feature Development Begins** - \[ \] Begin Cataloging
Engine implementation (A2) - \[ \] Begin Vector Embedding Storage (A5) -
\[ \] Begin Dialectical Editor UI (B1) - \[ \] Begin Voice Capture
integration (B3)

### 30-Day Checkpoint

**Review Meeting (Day 30):** - Review progress against Week 1-4
roadmap - Demo functional prototype - Adjust priorities based on
blockers - Update project management board - Refine Week 5-8 scope if
needed

**Expected Deliverables:** - Working authentication - Basic project
management - Dialectical conversation (even if simple) - Voice capture
functional - At least 50% of A-series features complete

### 90-Day Checkpoint (Alpha Launch)

**Review Meeting (Day 90):** - Demo complete Alpha product - Review
against success criteria - Gather internal feedback - Plan Beta user
recruitment - Finalize Beta feature scope

**Go/No-Go for Beta:** - \[ \] All P0 features functional - \[ \] \<5 P0
bugs remaining - \[ \] Can complete full workflow: Capture → Organize →
Write → Export - \[ \] Internal team can use product daily

### Communication Plan

**Weekly Standups:** - **When:** Every Monday, 9am - **Duration:** 30
minutes - **Attendees:** Stafford (+ any contractors/support) -
**Agenda:** - Progress update (what shipped last week) - Blockers and
issues - Priorities for coming week - Risk review

**Monthly Business Review:** - **When:** First Monday of each month -
**Duration:** 2 hours - **Attendees:** Stafford (+ advisors if
applicable) - **Agenda:** - Metrics review (users, revenue, retention) -
Feature completion status - Budget review - Roadmap adjustments -
Strategic decisions

**Quarterly Strategic Review:** - **When:** End of Month 3, 6, 9, 12 -
**Duration:** Half day - **Attendees:** Stafford (+ board/advisors if
applicable) - **Agenda:** - Quarter retrospective - Market validation
assessment - Competitive landscape review - Strategic pivots or
adjustments - Next quarter planning

------------------------------------------------------------------------

## Resource Links

### Internal Documentation

**Technical Documentation:** - This Technical Specification (v3.0) -
Architecture Diagrams: `/docs/architecture/` - Cards Framework:
`/docs/Cards` - API Documentation: `/docs/api-reference.md`

**Business Documentation:** - Business Plan: Separate document -
Marketing Plan: Separate document - Financial Projections: Separate
spreadsheet

**Project Management:** - GitHub Repository:
`https://github.com/mrs-robbins/mrs-robbins` (private) - Linear
Workspace: TBD - Notion Wiki: TBD

### External Resources

**Development Tools:** - Vercel Dashboard:
`https://vercel.com/mrs-robbins` - Supabase Dashboard:
`https://supabase.com/dashboard/project/[project-id]` - GitHub Actions:
`https://github.com/mrs-robbins/mrs-robbins/actions`

**Monitoring & Analytics:** - Sentry:
`https://sentry.io/organizations/mrs-robbins` - Vercel Analytics: Built
into Vercel Dashboard - Google Analytics: TBD (if used)

**Third-Party Services:** - Anthropic Console:
`https://console.anthropic.com` - OpenAI Dashboard:
`https://platform.openai.com` - ElevenLabs Dashboard:
`https://elevenlabs.io/app` - Stripe Dashboard:
`https://dashboard.stripe.com`

### Support & Contact

**Technical Questions:** - Email: stafford@mrs-robbins.com - Emergency:
\[Phone number - internal only\]

**Business Questions:** - Email: stafford@mrs-robbins.com

**User Support:** - Email: support@mrs-robbins.com (post-launch) -
Discord: `https://discord.gg/mrs-robbins` (post-launch)

------------------------------------------------------------------------

## Acknowledgments

### Contributors

**Primary Authors:** - **Stafford Csavina** - Founder, CTO, Product
Vision - **Claude (Anthropic AI)** - Technical Specification Author,
Architecture Documentation

**Domain Expertise:** - Getty Images / Corbis - Cataloging architecture
inspiration (18 months taxonomy research) - Santa Fe Workshops -
Photography industry insights - Microsoft - Enterprise architecture
patterns

### Intellectual Foundations

**Architecture Patterns:** - Cellular microservices architecture -
Hot/Warm/Cold context management (RAG pattern) - Controlled vocabulary
cataloging (from PhotoNest/Getty research)

**Business Frameworks:** - Rookery 9-axis scoring framework - BPR
(Benefit-Price Ratio) economics - ICE prioritization (Impact ×
Confidence × Ease)

**Inspirations:** - **K2/Boeing Story:** Cross-domain serendipity value
validation - **Texas Instruments Calculator Moment:** Removing
mechanical bottlenecks enables new participants - **Getty/Corbis Content
Research:** \$2M/year market validation for pattern discovery

------------------------------------------------------------------------

## Closing Notes

### Document Purpose

This technical specification serves as:

1.  **Blueprint for Development:** Complete feature specifications with
    acceptance criteria, technical implementation, and integration
    points
2.  **Architecture Reference:** System design, technology stack, and
    scalability planning
3.  **Business Guide:** Strategic insights, roadmap, success metrics
4.  **Team Onboarding:** Comprehensive documentation for future team
    members
5.  **Investor/Acquirer Due Diligence:** Professional documentation
    demonstrating technical rigor

### Living Document Philosophy

**This specification is designed to evolve:**

- **Weekly updates** during active development (bug fixes, minor
  clarifications)
- **Monthly reviews** for feature scope adjustments
- **Quarterly major revisions** incorporating learnings and strategic
  shifts
- **Version control** maintained in Git alongside codebase

**Update Process:** 1. Identify needed changes (new features,
architecture decisions, etc.) 2. Document in
`/docs/architecture/decisions/` as ADR (Architecture Decision Record) 3.
Update relevant sections of this spec 4. Increment version number
appropriately (major.minor.patch) 5. Update revision history table 6.
Commit to Git with clear changelog

### Scope Management Reminder

**This specification intentionally over-documents:**

The 29 chunks cover features across 12-24 months of development. Not
everything documented here will be built in Year 1. The priority
framework (P0/P1/P2/P3) and roadmap sections provide clear guidance on
sequencing.

**P0 Features (Must Have for Alpha):** \~15 features **P1 Features
(Required for V1.0):** \~15 features **P2 Features (Nice-to-Have for
V2.0):** \~10 features **P3 Features (Future/Experimental):** \~8
features

Focus execution on P0, then P1. Resist scope creep. Ship often.

### Success Philosophy

**Shipping \> Perfection**

The goal is not to build every feature documented here. The goal is to:

1.  Remove the bottleneck between thinking and written output
2.  Preserve authentic user voice
3.  Create serendipitous discovery moments
4.  Reach \$85K net income within 12 months
5.  Build foundation for strategic acquisition

If those goals are achieved with 60% of documented features, that's
success.

### Final Words

**This specification represents:**

- 20+ years of imaging/content management experience (Getty, Corbis,
  Microsoft)
- 6+ months of PhotoNest taxonomy research transferring to text domain
- Deep understanding of neurodivergent cognitive patterns
- Strategic positioning for platform value vs. tool value
- Professional engineering discipline applied to AI-assisted development

**The opportunity is real:** - 500M+ people think faster than they
type - Serendipity engine creates defensible moat - Multiple revenue
streams de-risk business model - Path to \$5M+ ARR within 5 years
validates strategic acquisition

**The execution plan is sound:** - Concrete P0 scope (15 features, 8
weeks) - Proven technologies (React, Supabase, Claude API) - 4-5x
development velocity via AI-assisted workflows - Clear success metrics
at each milestone

**Now: Execute.**

------------------------------------------------------------------------

## Document End

**Total Chunks:** 29/29 ✅ COMPLETE

**Total Features Documented:** 44

**Total Pages (Estimated):** \~300

**Status:** APPROVED FOR DEVELOPMENT

**Next Review:** Week 4 (Alpha Development Progress Check)

------------------------------------------------------------------------

*"The competition is not Grammarly. The competition is scattered
thinking that never becomes organized output. We remove that
bottleneck."*

*--- Mrs. Robbins Mission Statement*

------------------------------------------------------------------------

**END OF TECHNICAL SPECIFICATION v3.0**

**Document Prepared:** November 14, 2025

**Prepared By:** Claude + Stafford Csavina

**Company:** Brookery / Mrs. Robbins Project

**Confidential - Internal Use Only**
