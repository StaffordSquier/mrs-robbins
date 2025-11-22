'use client';

import { useState, useRef, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
}

export default function VoiceCapture() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [isUploading, _setIsUploading] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcript, setTranscript] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Project creation modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectType, setNewProjectType] = useState('book');
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects || []);
      }
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

  const createProject = async () => {
    if (!newProjectName.trim()) {
      setError('Project name is required');
      return;
    }

    setIsCreatingProject(true);
    setError('');

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newProjectName.trim(),
          type: newProjectType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to create project');
      }

      const data = await response.json();
      const newProject = data.project;

      // Update projects list and select the new project
      setProjects(prev => [...prev, newProject]);
      setSelectedProjectId(newProject.id);

      // Close modal and reset form
      setShowCreateModal(false);
      setNewProjectName('');
      setNewProjectType('book');
      setStatus(`Project "${newProject.title}" created successfully!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create project');
    } finally {
      setIsCreatingProject(false);
    }
  };

  const startRecording = async () => {
    try {
      setError('');
      setStatus('Requesting microphone access...');

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setStatus('Recording saved. Ready to upload.');

        // Stop all tracks
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }
      };

      mediaRecorder.start(1000); // Collect data every second
      setIsRecording(true);
      setRecordingTime(0);
      setStatus('Recording...');

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (err) {
      setError(`Failed to start recording: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setStatus('');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const uploadAndTranscribe = async () => {
    if (!audioBlob) {
      setError('No recording to upload');
      return;
    }

    if (!selectedProjectId) {
      setError('Please select a project');
      return;
    }

    setIsTranscribing(true);
    setError('');
    setStatus('Uploading and transcribing...');

    try {
      // Send audio directly to transcribe endpoint
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      formData.append('projectId', selectedProjectId);
      formData.append('durationSeconds', recordingTime.toString());

      console.log('Sending FormData:', formData);
      console.log('FormData entries:', Array.from(formData.entries()));

      const response = await fetch('/api/voice/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Transcription failed');
      }

      const data = await response.json();
      setTranscript(data.transcript);
      setStatus('Transcription complete! Content cataloged.');

      // Reset for new recording
      setAudioBlob(null);
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
      }
      setRecordingTime(0);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Operation failed');
      setStatus('');
    } finally {
      setIsTranscribing(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetRecording = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioBlob(null);
    setAudioUrl(null);
    setRecordingTime(0);
    setTranscript('');
    setStatus('');
    setError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F7FAFC',
      padding: '1rem',
      boxSizing: 'border-box',
      width: '100%',
      overflowX: 'hidden'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          fontWeight: 'bold',
          color: '#2B2B2B',
          marginBottom: '1.5rem',
          wordBreak: 'break-word'
        }}>
          Voice Capture
        </h1>

        {/* Project Selection */}
        <div style={{
          padding: 'clamp(1rem, 3vw, 1.5rem)',
          backgroundColor: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          boxSizing: 'border-box',
          width: '100%'
        }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#2B2B2B' }}>
            Assign to Project
          </label>

          {projects.length === 0 ? (
            <div>
              <p style={{ color: '#718096', marginBottom: '1rem', fontSize: '0.875rem' }}>
                No projects available. Create your first project to start recording.
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                disabled={isRecording || isUploading || isTranscribing}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#0D9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: (isRecording || isUploading || isTranscribing) ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              >
                + Create Project
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <select
                value={selectedProjectId}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'create-new') {
                    setShowCreateModal(true);
                    e.target.value = selectedProjectId;
                  } else {
                    setSelectedProjectId(value);
                  }
                }}
                disabled={isRecording || isUploading || isTranscribing}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  color: '#2B2B2B',
                  backgroundColor: 'white',
                  fontSize: '1rem',
                }}
              >
                <option value="">Select a project...</option>
                <option value="create-new" style={{ fontWeight: '600', color: '#0D9488' }}>
                  + Create New Project
                </option>
                <option disabled>──────────</option>
                {projects.map(project => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Recording Controls */}
        <div style={{
          padding: 'clamp(1rem, 4vw, 2rem)',
          backgroundColor: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          textAlign: 'center',
          boxSizing: 'border-box',
          width: '100%'
        }}>
          {/* Recording Timer */}
          <div style={{
            fontSize: 'clamp(2rem, 8vw, 3rem)',
            fontWeight: '600',
            color: isRecording ? '#0D9488' : '#2B2B2B',
            marginBottom: '1.5rem',
            fontFamily: 'monospace',
          }}>
            {formatTime(recordingTime)}
          </div>

          {/* Recording Status Indicator */}
          {isRecording && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#0D9488',
                animation: 'pulse 1.5s infinite',
              }} />
              <span style={{ color: '#0D9488', fontWeight: '500' }}>Recording</span>
            </div>
          )}

          {/* Main Recording Button */}
          {!isRecording ? (
            <button
              onClick={startRecording}
              disabled={isUploading || isTranscribing || !!audioBlob}
              style={{
                padding: '1rem clamp(1rem, 4vw, 2rem)',
                backgroundColor: audioBlob ? '#A0AEC0' : '#0D9488',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: audioBlob ? 'not-allowed' : 'pointer',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                fontWeight: '600',
                minWidth: 'min(200px, 90%)',
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
            >
              {audioBlob ? 'Recording Ready' : 'Record Voice Memo'}
            </button>
          ) : (
            <button
              onClick={stopRecording}
              style={{
                padding: '1rem clamp(1rem, 4vw, 2rem)',
                backgroundColor: '#0D9488',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                fontWeight: '600',
                minWidth: 'min(200px, 90%)',
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
            >
              Stop & Save
            </button>
          )}
        </div>

        {/* Audio Preview */}
        {audioUrl && (
          <div style={{
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            backgroundColor: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            boxSizing: 'border-box',
            width: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1rem' }}>
              Recording Preview
            </h3>
            <audio
              controls
              src={audioUrl}
              style={{ width: '100%', marginBottom: '1rem' }}
            />
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={uploadAndTranscribe}
                disabled={isUploading || isTranscribing || !selectedProjectId}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: (!selectedProjectId || isUploading || isTranscribing) ? '#A0AEC0' : '#0D9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: (!selectedProjectId || isUploading || isTranscribing) ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {(isUploading || isTranscribing) && (
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }}
                  />
                )}
                {isUploading ? 'Uploading...' : isTranscribing ? 'Transcribing...' : 'Upload & Transcribe'}
              </button>
              <button
                onClick={resetRecording}
                disabled={isUploading || isTranscribing}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#E2E8F0',
                  color: '#2B2B2B',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: (isUploading || isTranscribing) ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              >
                Discard
              </button>
            </div>
          </div>
        )}

        {/* Status Messages */}
        {status && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#EBF8FF',
            border: '1px solid #90CDF4',
            borderRadius: '6px',
            marginBottom: '1rem',
            color: '#2B6CB0',
            boxSizing: 'border-box',
            width: '100%',
            wordBreak: 'break-word',
          }}>
            {status}
          </div>
        )}

        {error && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#FED7D7',
            border: '1px solid #FC8181',
            borderRadius: '6px',
            marginBottom: '1rem',
            color: '#C53030',
            boxSizing: 'border-box',
            width: '100%',
            wordBreak: 'break-word',
          }}>
            {error}
          </div>
        )}

        {/* Transcript Display */}
        {transcript && (
          <div style={{
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            backgroundColor: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            boxSizing: 'border-box',
            width: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1rem' }}>
              Transcript
            </h3>
            <div style={{
              padding: '1rem',
              backgroundColor: '#F7FAFC',
              borderRadius: '6px',
              color: '#2B2B2B',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
            }}>
              {transcript}
            </div>
          </div>
        )}
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
          onClick={() => !isCreatingProject && setShowCreateModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: 'clamp(1rem, 4vw, 2rem)',
              maxWidth: '500px',
              width: '100%',
              boxSizing: 'border-box',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1.5rem' }}>
              Create New Project
            </h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B', fontSize: '0.875rem' }}>
                Project Name
              </label>
              <input
                type="text"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isCreatingProject) {
                    createProject();
                  }
                }}
                placeholder="My Awesome Project"
                disabled={isCreatingProject}
                autoFocus
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  color: '#2B2B2B',
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B', fontSize: '0.875rem' }}>
                Project Type
              </label>
              <select
                value={newProjectType}
                onChange={(e) => setNewProjectType(e.target.value)}
                disabled={isCreatingProject}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  color: '#2B2B2B',
                  backgroundColor: 'white',
                }}
              >
                <option value="book">Book</option>
                <option value="article">Article</option>
                <option value="essay">Essay</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setNewProjectName('');
                  setNewProjectType('book');
                }}
                disabled={isCreatingProject}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#E2E8F0',
                  color: '#2B2B2B',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: isCreatingProject ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              >
                Cancel
              </button>
              <button
                onClick={createProject}
                disabled={isCreatingProject || !newProjectName.trim()}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: (isCreatingProject || !newProjectName.trim()) ? '#A0AEC0' : '#0D9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: (isCreatingProject || !newProjectName.trim()) ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              >
                {isCreatingProject ? 'Creating...' : 'Create Project'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
