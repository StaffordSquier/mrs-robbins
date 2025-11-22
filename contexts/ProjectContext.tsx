// contexts/ProjectContext.tsx

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, CreateProjectParams, UpdateProjectParams, SupabaseProjectService } from '@/lib/projects';
import { getSupabaseClient } from '@/lib/supabase';

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

  const supabase = getSupabaseClient();
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
