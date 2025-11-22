# Mrs. Robbins - Phase 1 Foundation Build Specification

**Version:** 1.0  
**Date:** November 22, 2025  
**Status:** READY FOR IMPLEMENTATION  
**Source:** Extracted from Mrs. Robbins Technical Specification v3.1

---

## Purpose

This document provides focused specifications for Phase 1 Foundation features. It extracts ONLY the information needed to build the foundation properly, without overwhelming Claude Code with 300+ pages of documentation.

**Phase 1 Scope:** Build the infrastructure components that all other features depend on. These are the "plumbing" that enables Phase 2 content management features.

---

## Phase 1 Features Overview

### Already Complete ✅
1. **Database Schema (A7)** - Schema designed and deployed to Supabase
2. **Authentication (A8)** - Configured in Supabase, needs production testing
3. **Voice Translation Engine (A1)** - Built and validated with batch evaluator

### To Be Built 🔨
4. **Vector Embedding Storage (A5)** - Foundation for semantic search and serendipity
5. **Project Management (B5)** - CRUD operations for user projects

---

## Build Order & Dependencies

```
✅ A7 (Database Schema) 
   └─> ✅ A8 (Authentication)
       └─> ✅ A1 (Voice Engine)
           └─> 🔨 A5 (Vector Embeddings)
           └─> 🔨 B5 (Project Management)
```

**Critical Path:** A7 → A8 → B5 → (enables Phase 2 features)

**Parallel Work:** A5 can be built in parallel with B5

---

## FEATURE: Vector Embedding Storage & Search (A5)

**Status:** ⚠️ Not Implemented

**User Story:** As a system, I need to store and search vector embeddings of content, so users can discover semantic connections across their work.

### Acceptance Criteria

- [ ] Generate embeddings for thought_blobs using OpenAI API
- [ ] Store embeddings in PostgreSQL with pgvector extension
- [ ] Support cosine similarity search
- [ ] Handle chunking for long content (>1000 words)
- [ ] Cache embeddings to avoid redundant API calls
- [ ] Performance: <500ms for similarity queries
- [ ] Support batch embedding generation

### Database Schema

The `embeddings` table already exists in Supabase:

```sql
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

-- Create index for similarity search
CREATE INDEX ON embeddings USING ivfflat (embedding vector_cosine_ops);
```

**Verify pgvector is enabled:**
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

### Technical Implementation

#### 1. Embedding Generation Service

```typescript
// lib/embeddings.ts

interface EmbeddingService {
  generateEmbedding(text: string): Promise<number[]>;
  generateEmbeddings(texts: string[]): Promise<number[][]>;
  chunkText(text: string, maxTokens?: number): string[];
}

class OpenAIEmbeddingService implements EmbeddingService {
  private openai: OpenAI;
  private model = 'text-embedding-3-small';
  private maxTokens = 8000; // Safe limit for embedding model
  
  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey });
  }
  
  async generateEmbedding(text: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: this.model,
      input: text,
      encoding_format: 'float'
    });
    
    return response.data[0].embedding;
  }
  
  async generateEmbeddings(texts: string[]): Promise<number[][]> {
    const response = await this.openai.embeddings.create({
      model: this.model,
      input: texts,
      encoding_format: 'float'
    });
    
    return response.data.map(d => d.embedding);
  }
  
  chunkText(text: string, maxTokens = 1000): string[] {
    // Simple word-based chunking (rough token approximation: 1 token ≈ 4 chars)
    const maxChars = maxTokens * 4;
    const chunks: string[] = [];
    
    let currentChunk = '';
    const sentences = text.split(/[.!?]+\s+/);
    
    for (const sentence of sentences) {
      if ((currentChunk + sentence).length > maxChars && currentChunk.length > 0) {
        chunks.push(currentChunk.trim());
        currentChunk = sentence;
      } else {
        currentChunk += (currentChunk ? ' ' : '') + sentence;
      }
    }
    
    if (currentChunk) {
      chunks.push(currentChunk.trim());
    }
    
    return chunks;
  }
}
```

#### 2. Embedding Storage Service

```typescript
// lib/embedding-storage.ts

interface EmbeddingStorage {
  storeEmbedding(params: StoreEmbeddingParams): Promise<void>;
  searchSimilar(params: SearchSimilarParams): Promise<SimilarContent[]>;
  deleteEmbeddingsForContent(contentId: string): Promise<void>;
}

interface StoreEmbeddingParams {
  contentId: string;
  chunks: Array<{
    text: string;
    embedding: number[];
    startPosition: number;
    endPosition: number;
  }>;
}

interface SearchSimilarParams {
  embedding: number[];
  threshold?: number; // 0-1, default 0.7
  limit?: number; // default 10
  excludeContentIds?: string[];
}

interface SimilarContent {
  contentId: string;
  chunkText: string;
  similarity: number;
  startPosition: number;
  endPosition: number;
}

class SupabaseEmbeddingStorage implements EmbeddingStorage {
  constructor(private supabase: SupabaseClient) {}
  
  async storeEmbedding(params: StoreEmbeddingParams): Promise<void> {
    const records = params.chunks.map((chunk, index) => ({
      content_id: params.contentId,
      chunk_id: `${params.contentId}_${index}`,
      chunk_text: chunk.text,
      embedding: chunk.embedding,
      start_position: chunk.startPosition,
      end_position: chunk.endPosition
    }));
    
    const { error } = await this.supabase
      .from('embeddings')
      .insert(records);
    
    if (error) throw error;
  }
  
  async searchSimilar(params: SearchSimilarParams): Promise<SimilarContent[]> {
    const threshold = params.threshold ?? 0.7;
    const limit = params.limit ?? 10;
    
    // pgvector cosine similarity search
    let query = this.supabase.rpc('match_embeddings', {
      query_embedding: params.embedding,
      match_threshold: threshold,
      match_count: limit
    });
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    return data.map((row: any) => ({
      contentId: row.content_id,
      chunkText: row.chunk_text,
      similarity: row.similarity,
      startPosition: row.start_position,
      endPosition: row.end_position
    }));
  }
  
  async deleteEmbeddingsForContent(contentId: string): Promise<void> {
    const { error } = await this.supabase
      .from('embeddings')
      .delete()
      .eq('content_id', contentId);
    
    if (error) throw error;
  }
}
```

#### 3. Database Function for Similarity Search

This RPC function must be created in Supabase:

```sql
-- Create similarity search function
CREATE OR REPLACE FUNCTION match_embeddings (
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 10
)
RETURNS TABLE (
  content_id uuid,
  chunk_text text,
  similarity float,
  start_position integer,
  end_position integer
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    embeddings.content_id,
    embeddings.chunk_text,
    1 - (embeddings.embedding <=> query_embedding) as similarity,
    embeddings.start_position,
    embeddings.end_position
  FROM embeddings
  WHERE 1 - (embeddings.embedding <=> query_embedding) > match_threshold
  ORDER BY embeddings.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
```

#### 4. Content Processing Pipeline

```typescript
// lib/content-processor.ts

interface ContentProcessor {
  processContent(contentId: string, text: string): Promise<void>;
  reprocessContent(contentId: string): Promise<void>;
}

class DefaultContentProcessor implements ContentProcessor {
  constructor(
    private embeddingService: EmbeddingService,
    private embeddingStorage: EmbeddingStorage,
    private supabase: SupabaseClient
  ) {}
  
  async processContent(contentId: string, text: string): Promise<void> {
    // 1. Chunk the text
    const chunks = this.embeddingService.chunkText(text);
    
    // 2. Generate embeddings for all chunks
    const embeddings = await this.embeddingService.generateEmbeddings(chunks);
    
    // 3. Calculate positions
    let position = 0;
    const chunksWithPositions = chunks.map((chunkText, i) => {
      const startPosition = position;
      const endPosition = position + chunkText.length;
      position = endPosition;
      
      return {
        text: chunkText,
        embedding: embeddings[i],
        startPosition,
        endPosition
      };
    });
    
    // 4. Store in database
    await this.embeddingStorage.storeEmbedding({
      contentId,
      chunks: chunksWithPositions
    });
  }
  
  async reprocessContent(contentId: string): Promise<void> {
    // Get content from database
    const { data, error } = await this.supabase
      .from('thought_blobs')
      .select('content')
      .eq('id', contentId)
      .single();
    
    if (error) throw error;
    
    // Delete old embeddings
    await this.embeddingStorage.deleteEmbeddingsForContent(contentId);
    
    // Reprocess
    await this.processContent(contentId, data.content);
  }
}
```

### Integration Points

- **Triggered by:** Thought blob creation, document creation
- **Used by:** Serendipity Engine (Phase 3), Hot/Warm/Cold Context (Phase 3)
- **Dependencies:** OpenAI API, Supabase/pgvector

### Error Handling

- **OpenAI API rate limits:** Implement exponential backoff and retry
- **Embedding generation failure:** Log error, queue for retry
- **Database insertion failure:** Rollback transaction, log error
- **pgvector query timeout:** Set 5-second timeout, return empty results with error flag

### Testing Requirements

```typescript
// tests/embeddings.test.ts

describe('Embedding Service', () => {
  it('should generate embedding for text', async () => {
    const service = new OpenAIEmbeddingService(process.env.OPENAI_API_KEY!);
    const embedding = await service.generateEmbedding('test text');
    expect(embedding).toHaveLength(1536);
  });
  
  it('should chunk long text', () => {
    const service = new OpenAIEmbeddingService('fake-key');
    const longText = 'word '.repeat(5000);
    const chunks = service.chunkText(longText, 1000);
    expect(chunks.length).toBeGreaterThan(1);
  });
  
  it('should store and retrieve embeddings', async () => {
    // Test with actual Supabase connection
    const storage = new SupabaseEmbeddingStorage(supabase);
    await storage.storeEmbedding({ /* ... */ });
    const results = await storage.searchSimilar({ /* ... */ });
    expect(results).toBeDefined();
  });
});
```

---

## FEATURE: Project Management (B5)

**Status:** ⚠️ Database Schema Defined, UI Not Built

**User Story:** As a user, I want to create and organize multiple projects, so I can keep different writing efforts separate.

### Acceptance Criteria

- [ ] Create new project with title and endpoint type
- [ ] List all projects for logged-in user
- [ ] Update project title/settings
- [ ] Delete project (and cascade delete related content)
- [ ] Select active project for current session
- [ ] Filter projects by endpoint type
- [ ] Performance: <200ms for project list query

### Database Schema

The `projects` table already exists:

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  endpoint_type VARCHAR(50), -- 'writer', 'entrepreneur', 'consultant', 'researcher', 'documentation'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Row-level security policies
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

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
```

### Technical Implementation

#### 1. Project Service (Backend)

```typescript
// lib/projects.ts

interface Project {
  id: string;
  userId: string;
  title: string;
  endpointType: 'writer' | 'entrepreneur' | 'consultant' | 'researcher' | 'documentation';
  createdAt: Date;
  updatedAt: Date;
}

interface CreateProjectParams {
  title: string;
  endpointType: Project['endpointType'];
}

interface UpdateProjectParams {
  title?: string;
  endpointType?: Project['endpointType'];
}

interface ProjectService {
  createProject(params: CreateProjectParams): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | null>;
  updateProject(id: string, params: UpdateProjectParams): Promise<Project>;
  deleteProject(id: string): Promise<void>;
}

class SupabaseProjectService implements ProjectService {
  constructor(private supabase: SupabaseClient) {}
  
  async createProject(params: CreateProjectParams): Promise<Project> {
    const { data, error } = await this.supabase
      .from('projects')
      .insert({
        title: params.title,
        endpoint_type: params.endpointType,
        user_id: (await this.supabase.auth.getUser()).data.user?.id
      })
      .select()
      .single();
    
    if (error) throw error;
    
    return this.mapToProject(data);
  }
  
  async getProjects(): Promise<Project[]> {
    const { data, error } = await this.supabase
      .from('projects')
      .select('*')
      .order('updated_at', { ascending: false });
    
    if (error) throw error;
    
    return data.map(this.mapToProject);
  }
  
  async getProject(id: string): Promise<Project | null> {
    const { data, error } = await this.supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }
    
    return this.mapToProject(data);
  }
  
  async updateProject(id: string, params: UpdateProjectParams): Promise<Project> {
    const updates: any = { updated_at: new Date().toISOString() };
    if (params.title) updates.title = params.title;
    if (params.endpointType) updates.endpoint_type = params.endpointType;
    
    const { data, error } = await this.supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return this.mapToProject(data);
  }
  
  async deleteProject(id: string): Promise<void> {
    const { error } = await this.supabase
      .from('projects')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
  
  private mapToProject(data: any): Project {
    return {
      id: data.id,
      userId: data.user_id,
      title: data.title,
      endpointType: data.endpoint_type,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }
}
```

#### 2. Project Context (Frontend)

```typescript
// contexts/ProjectContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProjectContextType {
  projects: Project[];
  currentProject: Project | null;
  loading: boolean;
  error: Error | null;
  createProject: (params: CreateProjectParams) => Promise<Project>;
  selectProject: (projectId: string) => void;
  updateProject: (id: string, params: UpdateProjectParams) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  refreshProjects: () => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const projectService = new SupabaseProjectService(supabase);
  
  useEffect(() => {
    loadProjects();
  }, []);
  
  async function loadProjects() {
    try {
      setLoading(true);
      const data = await projectService.getProjects();
      setProjects(data);
      
      // Load last selected project from localStorage
      const lastProjectId = localStorage.getItem('currentProjectId');
      if (lastProjectId) {
        const project = data.find(p => p.id === lastProjectId);
        if (project) setCurrentProject(project);
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }
  
  async function createProject(params: CreateProjectParams): Promise<Project> {
    const project = await projectService.createProject(params);
    setProjects(prev => [project, ...prev]);
    setCurrentProject(project);
    localStorage.setItem('currentProjectId', project.id);
    return project;
  }
  
  function selectProject(projectId: string) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      localStorage.setItem('currentProjectId', project.id);
    }
  }
  
  async function updateProject(id: string, params: UpdateProjectParams) {
    const updated = await projectService.updateProject(id, params);
    setProjects(prev => prev.map(p => p.id === id ? updated : p));
    if (currentProject?.id === id) {
      setCurrentProject(updated);
    }
  }
  
  async function deleteProject(id: string) {
    await projectService.deleteProject(id);
    setProjects(prev => prev.filter(p => p.id !== id));
    if (currentProject?.id === id) {
      setCurrentProject(null);
      localStorage.removeItem('currentProjectId');
    }
  }
  
  return (
    <ProjectContext.Provider value={{
      projects,
      currentProject,
      loading,
      error,
      createProject,
      selectProject,
      updateProject,
      deleteProject,
      refreshProjects: loadProjects
    }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within ProjectProvider');
  }
  return context;
}
```

#### 3. Project UI Components

```typescript
// components/projects/ProjectList.tsx

export function ProjectList() {
  const { projects, currentProject, selectProject, createProject } = useProjects();
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState<Project['endpointType']>('writer');
  
  async function handleCreate() {
    if (!newTitle.trim()) return;
    
    await createProject({ title: newTitle, endpointType: newType });
    setIsCreating(false);
    setNewTitle('');
  }
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Project
        </button>
      </div>
      
      {isCreating && (
        <div className="border rounded p-4 space-y-2">
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="Project title"
            className="w-full px-3 py-2 border rounded"
          />
          <select
            value={newType}
            onChange={e => setNewType(e.target.value as Project['endpointType'])}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="writer">Writer</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="consultant">Consultant</option>
            <option value="researcher">Researcher</option>
            <option value="documentation">Documentation</option>
          </select>
          <div className="flex gap-2">
            <button onClick={handleCreate} className="px-4 py-2 bg-green-600 text-white rounded">
              Create
            </button>
            <button onClick={() => setIsCreating(false)} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
      
      <div className="space-y-2">
        {projects.map(project => (
          <div
            key={project.id}
            onClick={() => selectProject(project.id)}
            className={`p-4 border rounded cursor-pointer ${
              currentProject?.id === project.id ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
            }`}
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.endpointType}</p>
            <p className="text-xs text-gray-400">
              Updated {new Date(project.updatedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Integration Points

- **Used by:** All Phase 2+ features (editor, voice capture, etc.)
- **Depends on:** Authentication (must be logged in)
- **Provides:** Active project context for all user actions

### Error Handling

- **No projects found:** Show welcome screen with "Create your first project"
- **Project creation failure:** Display error message, don't clear form
- **Project deletion:** Show confirmation modal, handle cascade deletes gracefully
- **Network failure:** Show retry button, cache projects locally

### Testing Requirements

```typescript
// tests/projects.test.ts

describe('Project Service', () => {
  it('should create project', async () => {
    const service = new SupabaseProjectService(supabase);
    const project = await service.createProject({
      title: 'Test Project',
      endpointType: 'writer'
    });
    expect(project.id).toBeDefined();
    expect(project.title).toBe('Test Project');
  });
  
  it('should list projects', async () => {
    const service = new SupabaseProjectService(supabase);
    const projects = await service.getProjects();
    expect(Array.isArray(projects)).toBe(true);
  });
  
  it('should enforce RLS', async () => {
    // Test that users can only see their own projects
    // This requires setting up test users and auth context
  });
});
```

---

## Integration Checklist

### Environment Variables

Ensure these are set in Vercel and `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### Database Setup

1. ✅ Verify `embeddings` table exists
2. ✅ Verify `projects` table exists
3. ✅ Verify pgvector extension enabled: `CREATE EXTENSION IF NOT EXISTS vector;`
4. ✅ Create `match_embeddings` RPC function
5. ✅ Verify RLS policies on `projects` table
6. ✅ Create indexes:
   ```sql
   CREATE INDEX ON embeddings USING ivfflat (embedding vector_cosine_ops);
   CREATE INDEX ON projects (user_id, updated_at DESC);
   ```

### File Structure

```
lib/
  embeddings.ts           # Embedding generation service
  embedding-storage.ts    # Embedding storage service
  content-processor.ts    # Content processing pipeline
  projects.ts             # Project service

contexts/
  ProjectContext.tsx      # Project state management

components/
  projects/
    ProjectList.tsx       # Project list UI
    ProjectCard.tsx       # Individual project card
    CreateProjectModal.tsx # Project creation form

tests/
  embeddings.test.ts      # Embedding service tests
  projects.test.ts        # Project service tests
```

---

## Success Criteria

Phase 1 is complete when:

- [ ] User can create/read/update/delete projects
- [ ] User can select active project (persists in localStorage)
- [ ] Content embeddings generate automatically for thought_blobs
- [ ] Vector similarity search returns relevant results
- [ ] All tests pass
- [ ] RLS policies verified working
- [ ] Performance targets met (<200ms projects, <500ms embeddings)
- [ ] No P0 bugs
- [ ] Documentation complete

---

## What Phase 1 Does NOT Include

- Voice capture UI (Phase 2)
- Dialectical editor (Phase 2)
- Cataloging engine (Phase 2)
- Serendipity engine (Phase 3)
- Content filters (Phase 4)
- Export formats (Phase 4)

---

## Next Steps After Phase 1

1. Create `PHASE_2_CONTENT_MANAGEMENT_BUILD_SPEC.md`
2. Implement cataloging engine, voice capture, dialectical editor
3. Update CI/CD checks for Phase 2 features

---

**END OF PHASE 1 FOUNDATION BUILD SPEC**
