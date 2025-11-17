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
  const [isUploading, setIsUploading] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcript, setTranscript] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');

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

    setIsUploading(true);
    setError('');
    setStatus('Uploading audio...');

    try {
      // Upload audio
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      formData.append('projectId', selectedProjectId);
      formData.append('durationSeconds', recordingTime.toString());

      const uploadResponse = await fetch('/api/voice/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json().catch(() => ({}));
        throw new Error(errorData.error || 'Upload failed');
      }

      const uploadData = await uploadResponse.json();
      setStatus('Audio uploaded. Transcribing...');
      setIsUploading(false);
      setIsTranscribing(true);

      // Transcribe audio
      const transcribeResponse = await fetch('/api/voice/transcribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recordingId: uploadData.recordingId,
          audioUrl: uploadData.audioUrl,
        }),
      });

      if (!transcribeResponse.ok) {
        const errorData = await transcribeResponse.json().catch(() => ({}));
        throw new Error(errorData.error || 'Transcription failed');
      }

      const transcribeData = await transcribeResponse.json();
      setTranscript(transcribeData.transcript);
      setStatus('Transcription complete!');

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
      setIsUploading(false);
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
    <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2B2B2B', marginBottom: '2rem' }}>
          Voice Capture
        </h1>

        {/* Project Selection */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          marginBottom: '1.5rem'
        }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#2B2B2B' }}>
            Assign to Project
          </label>
          <select
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            disabled={isRecording || isUploading || isTranscribing}
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
            <option value="">Select a project...</option>
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </div>

        {/* Recording Controls */}
        <div style={{
          padding: '2rem',
          backgroundColor: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          {/* Recording Timer */}
          <div style={{
            fontSize: '3rem',
            fontWeight: '600',
            color: isRecording ? '#E53E3E' : '#2B2B2B',
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
                backgroundColor: '#E53E3E',
                animation: 'pulse 1.5s infinite',
              }} />
              <span style={{ color: '#E53E3E', fontWeight: '500' }}>Recording</span>
            </div>
          )}

          {/* Main Recording Button */}
          {!isRecording ? (
            <button
              onClick={startRecording}
              disabled={isUploading || isTranscribing || !!audioBlob}
              style={{
                padding: '1rem 2rem',
                backgroundColor: audioBlob ? '#A0AEC0' : '#E53E3E',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: audioBlob ? 'not-allowed' : 'pointer',
                fontSize: '1.125rem',
                fontWeight: '600',
                minWidth: '200px',
              }}
            >
              {audioBlob ? 'Recording Ready' : 'Record Voice Memo'}
            </button>
          ) : (
            <button
              onClick={stopRecording}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#2C7A7B',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.125rem',
                fontWeight: '600',
                minWidth: '200px',
              }}
            >
              Stop & Save
            </button>
          )}
        </div>

        {/* Audio Preview */}
        {audioUrl && (
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            marginBottom: '1.5rem'
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
                  backgroundColor: (!selectedProjectId || isUploading || isTranscribing) ? '#A0AEC0' : '#2C7A7B',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: (!selectedProjectId || isUploading || isTranscribing) ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              >
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
          }}>
            {error}
          </div>
        )}

        {/* Transcript Display */}
        {transcript && (
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
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

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
