// lib/projects.ts

import { SupabaseClient } from '@supabase/supabase-js';

export interface Project {
  id: string;
  userId: string;
  title: string;
  endpointType: 'writer' | 'entrepreneur' | 'consultant' | 'researcher' | 'documentation';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProjectParams {
  title: string;
  endpointType: Project['endpointType'];
}

export interface UpdateProjectParams {
  title?: string;
  endpointType?: Project['endpointType'];
}

export interface ProjectService {
  createProject(params: CreateProjectParams): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | null>;
  updateProject(id: string, params: UpdateProjectParams): Promise<Project>;
  deleteProject(id: string): Promise<void>;
}

export class SupabaseProjectService implements ProjectService {
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
