// components/projects/ProjectList.tsx

'use client';

import { useState } from 'react';
import { useProjects } from '@/contexts/ProjectContext';
import { Project } from '@/lib/projects';

export function ProjectList() {
  const { projects, currentProject, selectProject, createProject, loading, error } = useProjects();
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState<Project['endpointType']>('writer');

  async function handleCreate() {
    if (!newTitle.trim()) return;

    await createProject({ title: newTitle, endpointType: newType });
    setIsCreating(false);
    setNewTitle('');
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="text-gray-600">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="text-red-600">Error loading projects: {error.message}</div>
      </div>
    );
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
