'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  endpoint_type: string | null;
  created_at: string;
  updated_at: string;
}

interface VoiceRecording {
  id: string;
  audio_url: string;
  transcript: string;
  duration_seconds: number;
  created_at: string;
  transcription_method: string;
}

interface ThoughtBlob {
  id: string;
  content: string;
  content_type: string;
  word_count: number;
  created_at: string;
}

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;

  const [project, setProject] = useState<Project | null>(null);
  const [voiceRecordings, setVoiceRecordings] = useState<VoiceRecording[]>([]);
  const [thoughtBlobs, setThoughtBlobs] = useState<ThoughtBlob[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchProjectDetails();
  }, [projectId]);

  const fetchProjectDetails = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch(`/api/projects/${projectId}`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to fetch project details');
      }

      const data = await response.json();
      setProject(data.project);
      setVoiceRecordings(data.voiceRecordings || []);
      setThoughtBlobs(data.thoughtBlobs || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load project');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', paddingTop: '4rem' }}>
          <p style={{ color: '#4A5568', fontSize: '1.125rem' }}>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button
            onClick={() => router.push('/projects')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#E2E8F0',
              color: '#2B2B2B',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '2rem',
            }}
          >
            ← Back to Projects
          </button>
          <div style={{
            padding: '2rem',
            backgroundColor: '#FED7D7',
            border: '1px solid #FC8181',
            borderRadius: '6px',
            color: '#C53030',
          }}>
            {error || 'Project not found'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => router.push('/projects')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#E2E8F0',
            color: '#2B2B2B',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '2rem',
          }}
        >
          ← Back to Projects
        </button>

        {/* Project Header */}
        <div style={{
          padding: '2rem',
          backgroundColor: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          marginBottom: '2rem',
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2B2B2B', marginBottom: '1rem' }}>
            {project.title}
          </h1>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', color: '#4A5568' }}>
            <span>
              <strong>Type:</strong> {project.endpoint_type || 'Unspecified'}
            </span>
            <span>
              <strong>Created:</strong> {formatDate(project.created_at)}
            </span>
            <span>
              <strong>Updated:</strong> {formatDate(project.updated_at)}
            </span>
          </div>
        </div>

        {/* Voice Recordings Section */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          marginBottom: '2rem',
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1.5rem' }}>
            Voice Recordings ({voiceRecordings.length})
          </h2>

          {voiceRecordings.length === 0 ? (
            <p style={{ color: '#718096', textAlign: 'center', padding: '2rem' }}>
              No voice memos yet
            </p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {voiceRecordings.map((recording) => (
                <div
                  key={recording.id}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#F7FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.5rem' }}>
                        <strong>Duration:</strong> {formatDuration(recording.duration_seconds)} • {formatDate(recording.created_at)}
                      </div>
                      {recording.transcript && (
                        <div style={{
                          fontSize: '0.875rem',
                          color: '#2B2B2B',
                          marginBottom: '1rem',
                          lineHeight: '1.5',
                        }}>
                          {truncateText(recording.transcript, 150)}
                        </div>
                      )}
                    </div>
                  </div>
                  <audio
                    controls
                    src={recording.audio_url}
                    style={{ width: '100%', height: '40px' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Thought Blobs Section */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1.5rem' }}>
            Thought Blobs ({thoughtBlobs.length})
          </h2>

          {thoughtBlobs.length === 0 ? (
            <p style={{ color: '#718096', textAlign: 'center', padding: '2rem' }}>
              No content yet
            </p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {thoughtBlobs.map((blob) => (
                <div
                  key={blob.id}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#F7FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                  }}
                >
                  <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#4A5568' }}>
                    <span style={{ marginRight: '1rem' }}>
                      <strong>Words:</strong> {blob.word_count}
                    </span>
                    <span style={{ marginRight: '1rem' }}>
                      <strong>Type:</strong> {blob.content_type}
                    </span>
                    <span>
                      <strong>Created:</strong> {formatDate(blob.created_at)}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    color: '#2B2B2B',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {truncateText(blob.content, 300)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
