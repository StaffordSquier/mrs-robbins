// src/app/testbed/page.tsx
'use client';

import { useState } from 'react';
import { 
  VOICE_VARIABLE_LIBRARY, 
  getParametricVariables, 
  getExemplarVariables,
  type VoiceConfig,
  type MixerSlot 
} from '@/lib/voice';

export default function VoiceTuningTestbed() {
  const [baselineText, setBaselineText] = useState('');
  const [mixerSlots, setMixerSlots] = useState<MixerSlot[]>([
    { variableId: 'formality', value: 5, exemplarText: '' }
  ]);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const parametricVars = getParametricVariables();
  const exemplarVars = getExemplarVariables();

  const addSlot = () => {
    if (mixerSlots.length < 5) {
      setMixerSlots([...mixerSlots, { variableId: 'formality', value: 5, exemplarText: '' }]);
    }
  };

  const removeSlot = (index: number) => {
    setMixerSlots(mixerSlots.filter((_, i) => i !== index));
  };

  const updateSlot = (index: number, updates: Partial<MixerSlot>) => {
    const newSlots = [...mixerSlots];
    newSlots[index] = { ...newSlots[index], ...updates };
    setMixerSlots(newSlots);
  };

  const handleTest = async () => {
    if (!baselineText.trim()) {
      setError('Please enter baseline text');
      return;
    }

    setLoading(true);
    setError('');
    setOutput('');

    try {
      const response = await fetch('/api/test-voice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          baselineText,
          config: { slots: mixerSlots }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate output');
      }

      setOutput(data.output);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Mrs. Robbins Voice Tuning Testbed</h1>
        <p className="text-sm text-gray-600 mt-1">Configure voice parameters and test output</p>
      </div>

      {/* Split Screen Layout */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Panel - Input & Controls */}
        <div className="w-1/2 border-r border-gray-200 overflow-y-auto">
          <div className="p-6 space-y-6">
            
            {/* Baseline Text Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Baseline Text
              </label>
              <textarea
                value={baselineText}
                onChange={(e) => setBaselineText(e.target.value)}
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Enter your raw text here..."
              />
            </div>

            {/* Mixer Board */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900">Voice Mixer ({mixerSlots.length}/5 slots)</h2>
                {mixerSlots.length < 5 && (
                  <button
                    onClick={addSlot}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    + Add Slot
                  </button>
                )}
              </div>

              {/* Mixer Slots */}
              <div className="space-y-4">
                {mixerSlots.map((slot, index) => {
                  const variable = VOICE_VARIABLE_LIBRARY.find(v => v.id === slot.variableId);
                  const isExemplar = variable?.type === 'exemplar';

                  return (
                    <div key={index} className="bg-white border border-gray-300 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Slot {index + 1}
                          </label>
                          <select
                            value={slot.variableId}
                            onChange={(e) => updateSlot(index, { 
                              variableId: e.target.value,
                              exemplarText: '' 
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                          >
                            <optgroup label="Parametric Variables">
                              {parametricVars.map(v => (
                                <option key={v.id} value={v.id}>{v.name}</option>
                              ))}
                            </optgroup>
                            <optgroup label="Exemplar Variables">
                              {exemplarVars.map(v => (
                                <option key={v.id} value={v.id}>{v.name}</option>
                              ))}
                            </optgroup>
                          </select>
                        </div>
                        <button
                          onClick={() => removeSlot(index)}
                          className="ml-2 text-red-600 hover:text-red-800 text-sm"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Slider */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-sm text-gray-600">
                            {isExemplar ? 'Intensity' : 'Value'}
                          </label>
                          <span className="text-sm font-medium text-gray-900">{slot.value}/10</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          step="1"
                          value={slot.value}
                          onChange={(e) => updateSlot(index, { value: parseInt(e.target.value) })}
                          className="w-full"
                        />
                      </div>

                      {/* Exemplar Text Area (only for exemplar variables) */}
                      {isExemplar && (
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">
                            Exemplar Text
                          </label>
                          <textarea
                            value={slot.exemplarText || ''}
                            onChange={(e) => updateSlot(index, { exemplarText: e.target.value })}
                            className="w-full h-24 px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 resize-none"
                            placeholder="Paste a text sample to match its style..."
                          />
                        </div>
                      )}

                      {/* Variable Description */}
                      {variable && (
                        <p className="text-xs text-gray-500 mt-2">{variable.description}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Test Button */}
            <button
              onClick={handleTest}
              disabled={loading || !baselineText.trim()}
              className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Test Voice'}
            </button>

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Output */}
        <div className="w-1/2 bg-white overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tuned Output</h2>
            
            {output ? (
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {output}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">Output will appear here after testing</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}