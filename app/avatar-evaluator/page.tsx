'use client';

import { useState } from 'react';
import { VOICE_VARIABLES } from '@/lib/evaluation';

interface EvaluationResult {
  variable: string;
  delta: number;
  effectiveness: 'High' | 'Medium' | 'Low';
  results: Array<{
    setting: number;
    score: number;
    evidence: string;
  }>;
}

export default function AvatarEvaluator() {
  const [baselineText, setBaselineText] = useState('');
  const [selectedVariable, setSelectedVariable] = useState('formality');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<EvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runEvaluation = async () => {
    if (!baselineText.trim()) {
      setError('Please enter baseline text');
      return;
    }

    setIsRunning(true);
    setError(null);
    setProgress(0);

    const settings = [1, 3, 5, 7, 10];
    const outputs: Array<{ setting: number; text: string }> = [];

    try {
      // Generate outputs for each setting
      for (let i = 0; i < settings.length; i++) {
        const setting = settings[i];
        
        const response = await fetch('/api/test-voice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: baselineText,
            variables: { [selectedVariable]: setting }
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to generate output for setting ${setting}`);
        }

        const data = await response.json();
        outputs.push({ setting, text: data.output });
        setProgress(((i + 1) / settings.length) * 50);
      }

      // Score all outputs
      const scoredResults = [];
      for (let i = 0; i < outputs.length; i++) {
        const output = outputs[i];
        
        const scoreResponse = await fetch('/api/evaluate-voice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            original: baselineText,
            output: output.text,
            variable: selectedVariable,
            setting: output.setting
          })
        });

        if (!scoreResponse.ok) {
          throw new Error(`Failed to score output for setting ${output.setting}`);
        }

        const scoreData = await scoreResponse.json();
        scoredResults.push({
          setting: output.setting,
          score: scoreData.score,
          evidence: scoreData.evidence
        });
        
        setProgress(50 + ((i + 1) / outputs.length) * 50);
      }

      // Calculate delta and effectiveness
      const scores = scoredResults.map(r => r.score);
      const delta = Math.max(...scores) - Math.min(...scores);
      const effectiveness = delta >= 6.0 ? 'High' : delta >= 3.0 ? 'Medium' : 'Low';

      setResults({
        variable: VOICE_VARIABLES.find(v => v.id === selectedVariable)?.name || selectedVariable,
        delta: Math.round(delta * 10) / 10,
        effectiveness,
        results: scoredResults
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Evaluation failed');
    } finally {
      setIsRunning(false);
    }
  };

  const exportToCSV = () => {
    if (!results) return;

    const rows = [
      ['Variable', 'Setting', 'Score', 'Evidence'],
      ...results.results.map(r => [
        results.variable,
        r.setting.toString(),
        r.score.toString(),
        `"${r.evidence.replace(/"/g, '""')}"`
      ])
    ];

    const csv = rows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${results.variable.toLowerCase().replace(/\s+/g, '-')}-evaluation.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2B2B2B', marginBottom: '0.5rem' }}>
          Avatar Evaluator
        </h1>
        <p style={{ color: '#4A5568', marginBottom: '2rem', fontSize: '1rem' }}>
          Test voice variables systematically across 5 settings (1, 3, 5, 7, 10)
        </p>

        {/* Input Section */}
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #E2E8F0' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '0.5rem' }}>
            Baseline Text
          </label>
          <textarea
            value={baselineText}
            onChange={(e) => setBaselineText(e.target.value)}
            placeholder="Enter text to test..."
            rows={6}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #E2E8F0',
              borderRadius: '6px',
              fontSize: '1rem',
              color: '#2B2B2B',
              resize: 'vertical'
            }}
          />

          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'end' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '0.5rem' }}>
                Variable to Test
              </label>
              <select
                value={selectedVariable}
                onChange={(e) => setSelectedVariable(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  color: '#2B2B2B'
                }}
              >
                {VOICE_VARIABLES.map(v => (
                  <option key={v.id} value={v.id}>{v.name}</option>
                ))}
              </select>
            </div>

            <button
              onClick={runEvaluation}
              disabled={isRunning || !baselineText.trim()}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: isRunning ? '#8A8A8A' : '#0D9488',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: isRunning ? 'not-allowed' : 'pointer'
              }}
            >
              {isRunning ? 'Running...' : 'Run Evaluation'}
            </button>
          </div>

          {isRunning && (
            <div style={{ marginTop: '1rem' }}>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${progress}%`,
                    height: '100%',
                    backgroundColor: '#0D9488',
                    transition: 'width 0.3s'
                  }}
                />
              </div>
              <p style={{ fontSize: '0.875rem', color: '#4A5568', marginTop: '0.5rem' }}>
                Progress: {Math.round(progress)}%
              </p>
            </div>
          )}

          {error && (
            <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#FEE2E2', border: '1px solid #EF4444', borderRadius: '6px' }}>
              <p style={{ color: '#991B1B', fontSize: '0.875rem' }}>{error}</p>
            </div>
          )}
        </div>

        {/* Results Section */}
        {results && (
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '0.5rem' }}>
                  Results: {results.variable}
                </h2>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div>
                    <span style={{ fontSize: '0.875rem', color: '#4A5568' }}>Delta: </span>
                    <span style={{ fontSize: '1rem', fontWeight: '600', color: '#2B2B2B' }}>
                      {results.delta} points
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.875rem', color: '#4A5568' }}>Effectiveness: </span>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: results.effectiveness === 'High' ? '#10B981' : results.effectiveness === 'Medium' ? '#F59E0B' : '#EF4444'
                    }}>
                      {results.effectiveness}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={exportToCSV}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#0D9488',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Export to CSV
                </button>
                <button
                  onClick={() => setResults(null)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#E2E8F0',
                    color: '#2B2B2B',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Run Another Test
                </button>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#EDF2F7' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B', fontSize: '0.875rem' }}>
                    Setting
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B', fontSize: '0.875rem' }}>
                    Score
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B', fontSize: '0.875rem' }}>
                    Evidence
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.results.map((result, idx) => (
                  <tr key={idx} style={{ borderTop: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '0.75rem', color: '#2B2B2B', fontSize: '1rem' }}>
                      {result.setting}
                    </td>
                    <td style={{ padding: '0.75rem', color: '#2B2B2B', fontSize: '1rem', fontWeight: '600' }}>
                      {result.score}
                    </td>
                    <td style={{ padding: '0.75rem', color: '#4A5568', fontSize: '0.875rem' }}>
                      {result.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}