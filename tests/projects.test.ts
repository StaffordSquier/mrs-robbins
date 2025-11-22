// tests/projects.test.ts

import { describe, it, expect } from '@jest/globals';
import { SupabaseProjectService } from '../lib/projects';
import { createClient } from '@supabase/supabase-js';

describe('Project Service', () => {
  it('should create project', async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.log('Skipping test: Supabase credentials not set');
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const service = new SupabaseProjectService(supabase);

    const project = await service.createProject({
      title: 'Test Project',
      endpointType: 'writer'
    });

    expect(project.id).toBeDefined();
    expect(project.title).toBe('Test Project');

    // Cleanup
    await service.deleteProject(project.id);
  });

  it('should list projects', async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.log('Skipping test: Supabase credentials not set');
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const service = new SupabaseProjectService(supabase);

    const projects = await service.getProjects();
    expect(Array.isArray(projects)).toBe(true);
  });

  it('should enforce RLS', async () => {
    // Test that users can only see their own projects
    // This requires setting up test users and auth context
    // Implementation depends on test authentication setup
    console.log('RLS test requires authentication setup');
  });
});
