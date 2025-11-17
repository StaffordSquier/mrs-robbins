'use client';

import { useState } from 'react';
import { translateToVoice } from '@/lib/voice';

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
    <div className="min-h-screen bg-[#F5F5F3] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#2B2B2B] mb-2">Avatar Tuner</h1>
        <p className="text-[#6A6A6A] mb-8">Configure voice parameters and test output</p>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Panel - Input & Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                Baseline Text
              </label>
              <textarea
                value={baselineText}
                onChange={(e) => setBaselineText(e.target.value)}
                className="w-full h-32 min-h-[128px] p-3 border border-[#8A8A8A] rounded-md resize-y focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] text-[#2B2B2B] bg-white"
                placeholder="Enter your baseline text here..."
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-[#2B2B2B]">
                  Voice Mixer ({slots.length}/5 slots)
                </label>
                {slots.length < 5 && (
                  <button
                    onClick={addSlot}
                    className="px-3 py-1 text-sm bg-[#0D9488] text-white rounded-md hover:bg-[#0B7C73] transition-colors"
                  >
                    + Add Slot
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {slots.map((slot, index) => (
                  <div key={slot.id} className="p-4 bg-white rounded-md border border-[#8A8A8A]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[#2B2B2B]">Slot {index + 1}</span>
                      {slots.length > 1 && (
                        <button
                          onClick={() => removeSlot(slot.id)}
                          className="text-sm text-[#DC2626] hover:text-[#B91C1C]"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <select
                      value={slot.variable}
                      onChange={(e) => updateSlot(slot.id, 'variable', e.target.value)}
                      className="w-full p-2 border border-[#8A8A8A] rounded-md mb-3 text-[#2B2B2B] font-medium bg-white focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488]"
                    >
                      <option value="formality">Formality</option>
                      <option value="complexity">Complexity</option>
                      <option value="emotionality">Emotionality</option>
                      <option value="directness">Directness</option>
                      <option value="energy">Energy</option>
                    </select>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#4A4A4A]">Value</span>
                        <span className="text-sm font-medium text-[#2B2B2B]">{slot.value}/10</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={slot.value}
                        onChange={(e) => updateSlot(slot.id, 'value', parseInt(e.target.value))}
                        className="w-full h-2 bg-[#8A8A8A] rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                      />
                      <p className="text-xs text-[#6A6A6A] mt-2">
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
              className="w-full py-3 bg-[#0D9488] text-white font-medium rounded-md hover:bg-[#0B7C73] disabled:bg-[#8A8A8A] disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Testing Voice...' : 'Test Voice'}
            </button>
          </div>

          {/* Right Panel - Output */}
          <div>
            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
              Tuned Output
            </label>
            <div className="h-[600px] p-4 bg-white border border-[#8A8A8A] rounded-md overflow-y-auto resize-y">
              {tunedOutput ? (
                <div className="prose prose-sm max-w-none">
                  <p className="text-[#2B2B2B] whitespace-pre-wrap">{tunedOutput}</p>
                </div>
              ) : (
                <p className="text-[#6A6A6A] italic">Output will appear here after testing</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}