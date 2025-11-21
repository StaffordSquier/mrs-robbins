'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  endpoint_type: string | null;
  created_at: string;
  updated_at: string;
}

const PROJECT_TYPES = [
  { value: 'song', label: 'Song' },
  { value: 'essay', label: 'Essay' },
  { value: 'blog', label: 'Blog Post' },
  { value: 'story', label: 'Story' },
  { value: 'script', label: 'Script' },
  { value: 'poem', label: 'Poem' },
  { value: 'other', label: 'Other' },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectType, setNewProjectType] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('/api/projects');

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to fetch projects');
      }

      const data = await response.json();
      setProjects(data.projects || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load projects');
    } finally {
      setIsLoading(false);
    }
  };

  const createProject = async () => {
    if (!newProjectTitle.trim()) {
      return;
    }

    setIsCreating(true);
    setError('');

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newProjectTitle.trim(),
          endpointType: newProjectType || null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to create project');
      }

      const data = await response.json();
      setProjects(prev => [data.project, ...prev]);
      setShowCreateModal(false);
      setNewProjectTitle('');
      setNewProjectType('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create project');
    } finally {
      setIsCreating(false);
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getProjectTypeLabel = (type: string | null): string => {
    if (!type) return 'Unspecified';
    const found = PROJECT_TYPES.find(t => t.value === type);
    return found ? found.label : type;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2B2B2B' }}>
            Projects
          </h1>
          <button
            onClick={() => setShowCreateModal(true)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0D9488',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
            }}
          >
            Create New Project
          </button>
        </div>

        {error && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#FED7D7',
            border: '1px solid #FC8181',
            borderRadius: '6px',
            marginBottom: '1.5rem',
            color: '#C53030',
          }}>
            {error}
          </div>
        )}

        {isLoading ? (
          <div style={{
            padding: '2rem',
            textAlign: 'center',
            color: '#4A5568',
          }}>
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div style={{
            padding: '3rem',
            textAlign: 'center',
            backgroundColor: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
          }}>
            <div style={{ fontSize: '1.25rem', color: '#4A5568', marginBottom: '1rem' }}>
              No projects yet
            </div>
            <div style={{ color: '#718096', marginBottom: '1.5rem' }}>
              Create your first project to start capturing voice memos and ideas.
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0D9488',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
              }}
            >
              Create Your First Project
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {projects.map(project => (
              <div
                key={project.id}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '0.5rem' }}>
                    {project.title}
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: '#4A5568' }}>
                    <span>
                      <strong>Type:</strong> {getProjectTypeLabel(project.endpoint_type)}
                    </span>
                    <span>
                      <strong>Created:</strong> {formatDate(project.created_at)}
                    </span>
                    <span>
                      <strong>Updated:</strong> {formatDate(project.updated_at)}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#EDF2F7',
                      color: '#2B2B2B',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#0D9488',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                    }}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create Project Modal */}
        {showCreateModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '100%',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1.5rem' }}>
                Create New Project
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                  Project Title
                </label>
                <input
                  type="text"
                  value={newProjectTitle}
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                  placeholder="Enter project title..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    color: '#2B2B2B',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                  Project Type
                </label>
                <select
                  value={newProjectType}
                  onChange={(e) => setNewProjectType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    color: '#2B2B2B',
                    backgroundColor: 'white',
                    fontSize: '1rem',
                  }}
                >
                  <option value="">Select type (optional)</option>
                  {PROJECT_TYPES.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setNewProjectTitle('');
                    setNewProjectType('');
                  }}
                  disabled={isCreating}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#E2E8F0',
                    color: '#2B2B2B',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: isCreating ? 'not-allowed' : 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={createProject}
                  disabled={!newProjectTitle.trim() || isCreating}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: (!newProjectTitle.trim() || isCreating) ? '#A0AEC0' : '#0D9488',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: (!newProjectTitle.trim() || isCreating) ? 'not-allowed' : 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                  }}
                >
                  {isCreating ? 'Creating...' : 'Create Project'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
