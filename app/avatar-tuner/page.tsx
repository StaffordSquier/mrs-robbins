'use client';

import { useState } from 'react';

interface VoiceSlot {
  id: string;
  variable: string;
  value: number;
}

export default function AvatarTuner() {
  const [baselineText, setBaselineText] = useState('');
  const [slots, setSlots] = useState<VoiceSlot[]>([
    { id: '1', variable: 'formality', value: 5 },
    { id: '2', variable: 'complexity', value: 5 },
    { id: '3', variable: 'emotionality', value: 5 },
  ]);
  const [tunedOutput, setTunedOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addSlot = () => {
    if (slots.length < 5) {
      setSlots([...slots, { id: Date.now().toString(), variable: 'formality', value: 5 }]);
    }
  };

  const removeSlot = (id: string) => {
    if (slots.length > 1) {
      setSlots(slots.filter(slot => slot.id !== id));
    }
  };

  const updateSlot = (id: string, field: 'variable' | 'value', value: string | number) => {
    setSlots(slots.map(slot => 
      slot.id === id ? { ...slot, [field]: value } : slot
    ));
  };

  const testVoice = async () => {
    if (!baselineText.trim()) return;

    setIsLoading(true);
    try {
      const voiceSlots = slots.map(slot => ({
        variableId: slot.variable,
        value: slot.value,
      }));

      const config = { slots: voiceSlots };

      const response = await fetch('/api/test-voice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          baselineText,
          config 
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        setTunedOutput(`Error: ${data.error}`);
      } else {
        setTunedOutput(data.output);
      }
    } catch (error) {
      console.error('Error testing voice:', error);
      setTunedOutput('Error: Could not generate output');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F5F3', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '30px', fontWeight: '600', color: '#2B2B2B', marginBottom: '8px' }}>
          Avatar Tuner
        </h1>
        <p style={{ color: '#6A6A6A', marginBottom: '32px' }}>
          Configure voice parameters and test output
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Left Panel - Input & Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2B2B2B', marginBottom: '8px' }}>
                Baseline Text
              </label>
              <textarea
                value={baselineText}
                onChange={(e) => setBaselineText(e.target.value)}
                style={{
                  width: '100%',
                  height: '128px',
                  padding: '12px',
                  border: '1px solid #8A8A8A',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: '#2B2B2B',
                  backgroundColor: 'white',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                placeholder="Enter your baseline text here..."
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#2B2B2B' }}>
                  Voice Mixer ({slots.length}/5 slots)
                </label>
                {slots.length < 5 && (
                  <button
                    onClick={addSlot}
                    style={{
                      padding: '4px 12px',
                      fontSize: '14px',
                      backgroundColor: '#2C7A7B',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    + Add Slot
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {slots.map((slot, index) => (
                  <div key={slot.id} style={{ padding: '16px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #8A8A8A' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#2B2B2B' }}>
                        Slot {index + 1}
                      </span>
                      {slots.length > 1 && (
                        <button
                          onClick={() => removeSlot(slot.id)}
                          style={{
                            fontSize: '14px',
                            color: '#DC2626',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <select
                      value={slot.variable}
                      onChange={(e) => updateSlot(slot.id, 'variable', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #8A8A8A',
                        borderRadius: '6px',
                        marginBottom: '12px',
                        color: '#2B2B2B',
                        fontWeight: '500',
                        backgroundColor: 'white',
                        fontSize: '14px'
                      }}
                    >
                      <option value="formality">Formality</option>
                      <option value="complexity">Complexity</option>
                      <option value="emotionality">Emotionality</option>
                      <option value="directness">Directness</option>
                      <option value="energy">Energy</option>
                    </select>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '14px', color: '#4A4A4A' }}>Value</span>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: '#2B2B2B' }}>
                          {slot.value}/10
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={slot.value}
                        onChange={(e) => updateSlot(slot.id, 'value', parseInt(e.target.value))}
                        style={{
                          width: '100%',
                          height: '8px',
                          cursor: 'pointer',
                          accentColor: '#2C7A7B'
                        }}
                      />
                      <p style={{ fontSize: '12px', color: '#6A6A6A', marginTop: '8px' }}>
                        Controls casual vs. formal language style
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={testVoice}
              disabled={!baselineText.trim() || isLoading}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: (!baselineText.trim() || isLoading) ? '#8A8A8A' : '#2C7A7B',
                color: 'white',
                fontWeight: '500',
                border: 'none',
                borderRadius: '6px',
                cursor: (!baselineText.trim() || isLoading) ? 'not-allowed' : 'pointer',
                fontSize: '16px'
              }}
            >
              {isLoading ? 'Testing Voice...' : 'Test Voice'}
            </button>
          </div>

          {/* Right Panel - Output */}
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#2B2B2B', marginBottom: '8px' }}>
              Tuned Output
            </label>
            <div style={{
              height: '600px',
              padding: '16px',
              backgroundColor: 'white',
              border: '1px solid #8A8A8A',
              borderRadius: '6px',
              overflowY: 'auto'
            }}>
              {tunedOutput ? (
                <p style={{ color: '#2B2B2B', whiteSpace: 'pre-wrap', lineHeight: '1.6', margin: 0 }}>
                  {tunedOutput}
                </p>
              ) : (
                <p style={{ color: '#6A6A6A', fontStyle: 'italic', margin: 0 }}>
                  Output will appear here after testing
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}