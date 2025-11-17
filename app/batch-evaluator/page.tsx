'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { calculateSpearman, calculateRSquared } from '@/lib/statistics';

interface Variable {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

interface Baseline {
  id: string;
  name: string;
  text: string;
  enabled: boolean;
}

interface TestResult {
  variableId: string;
  variableName: string;
  baselineId: string;
  baselineName: string;
  outputs: Array<{
    setting: number;
    text: string;
    delta: number;
    effectiveness: number;
  }>;
  spearmanCorrelation: number;
  rSquared: number;
}

const DEFAULT_VARIABLES: Variable[] = [
  { id: 'formality', name: 'Formality', description: 'Control casual vs formal tone', enabled: true },
  { id: 'complexity', name: 'Complexity', description: 'Sentence structure sophistication', enabled: true },
  { id: 'emotionality', name: 'Emotionality', description: 'Emotional intensity', enabled: true },
  { id: 'directness', name: 'Directness', description: 'Direct vs nuanced communication', enabled: true },
  { id: 'energy', name: 'Energy', description: 'Calm vs high-energy tone', enabled: true },
  { id: 'abstraction', name: 'Abstraction', description: 'Concrete vs abstract concepts', enabled: true },
  { id: 'metaphor', name: 'Metaphor Density', description: 'Literal vs metaphorical language', enabled: true },
  { id: 'paragraph_length', name: 'Paragraph Length', description: 'Short vs long paragraphs', enabled: true },
  { id: 'technical', name: 'Technical Depth', description: 'Accessibility vs technical detail', enabled: true },
];

const DEFAULT_BASELINES: Baseline[] = [
  {
    id: 'corporate',
    name: 'Corporate',
    text: 'Our Q4 results demonstrate strong performance across all key metrics. Revenue increased 23% year-over-year, driven primarily by expansion in our enterprise segment. Customer retention rates remain above industry benchmarks at 94%, while our net promoter score improved to 67. Looking ahead, we are well-positioned to capitalize on emerging market opportunities while maintaining operational excellence and shareholder value.',
    enabled: true,
  },
  {
    id: 'personal',
    name: 'Personal Narrative',
    text: 'I remember the exact moment everything changed. It was a Tuesday morning, and I was sitting in my usual coffee shop, staring at my laptop screen. The cursor blinked mockingly at me, as it had for the past three weeks. I had all these ideas swirling in my head, brilliant and complex, but the moment I tried to pin them down in words, they scattered like startled birds.',
    enabled: true,
  },
  {
    id: 'technical',
    name: 'Technical',
    text: 'The authentication middleware implements a token-based verification system using JWT standards. Each request passes through three validation layers: signature verification, expiration checking, and permission scoping. The middleware maintains a 50ms p95 latency target while handling concurrent requests through an optimized caching strategy that reduces database queries by approximately 73%.',
    enabled: true,
  },
];

export default function BatchEvaluator() {
  const [activeTab, setActiveTab] = useState<'variables' | 'baselines' | 'run'>('variables');
  const [variables, setVariables] = useState<Variable[]>(DEFAULT_VARIABLES);
  const [baselines, setBaselines] = useState<Baseline[]>(DEFAULT_BASELINES);
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [showVariableModal, setShowVariableModal] = useState(false);
  const [showBaselineModal, setShowBaselineModal] = useState(false);
  const [editingVariable, setEditingVariable] = useState<Variable | null>(null);
  const [editingBaseline, setEditingBaseline] = useState<Baseline | null>(null);
  const [selectedResult, setSelectedResult] = useState<TestResult | null>(null);

  const toggleVariable = (id: string) => {
    setVariables(vars => vars.map(v => v.id === id ? { ...v, enabled: !v.enabled } : v));
  };

  const toggleBaseline = (id: string) => {
    setBaselines(bases => bases.map(b => b.id === id ? { ...b, enabled: !b.enabled } : b));
  };

  const addOrUpdateVariable = (variable: Variable) => {
    if (editingVariable) {
      setVariables(vars => vars.map(v => v.id === editingVariable.id ? variable : v));
    } else {
      setVariables(vars => [...vars, variable]);
    }
    setShowVariableModal(false);
    setEditingVariable(null);
  };

  const addOrUpdateBaseline = (baseline: Baseline) => {
    if (editingBaseline) {
      setBaselines(bases => bases.map(b => b.id === editingBaseline.id ? baseline : b));
    } else {
      setBaselines(bases => [...bases, baseline]);
    }
    setShowBaselineModal(false);
    setEditingBaseline(null);
  };

  const runBatchEvaluation = async () => {
    const enabledVars = variables.filter(v => v.enabled);
    const enabledBases = baselines.filter(b => b.enabled);
    const totalTests = enabledVars.length * enabledBases.length;

    setIsRunning(true);
    setProgress({ current: 0, total: totalTests });
    setResults([]);

    const newResults: TestResult[] = [];

    for (const variable of enabledVars) {
      for (const baseline of enabledBases) {
        try {
          // Generate outputs for settings 1-10
          const outputs = [];
          for (let setting = 1; setting <= 10; setting++) {
            const response = await fetch('/api/test-voice', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                baselineText: baseline.text,
                config: {
                  slots: [{ variableId: variable.id, value: setting }],
                },
              }),
            });

            if (!response.ok) {
              throw new Error(`Failed to generate output for ${variable.name} at setting ${setting}`);
            }

            const data = await response.json();
            outputs.push({
              setting,
              text: data.output,
              delta: 0,
              effectiveness: 0,
            });
          }

          // Score all outputs
          for (const output of outputs) {
            const scoreResponse = await fetch('/api/evaluate-voice', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                outputText: output.text,
                variable: variable.id,
              }),
            });

            if (!scoreResponse.ok) {
              throw new Error(`Failed to score output for ${variable.name}`);
            }

            const scoreData = await scoreResponse.json();
            output.delta = scoreData.delta;
            output.effectiveness = scoreData.effectiveness;
          }

          // Calculate statistics
          const deltas = outputs.map(o => o.delta);
          const settings = outputs.map(o => o.setting);
          
          const spearmanCorrelation = calculateSpearman(settings, deltas);
          const rSquared = calculateRSquared(settings, deltas);

          newResults.push({
            variableId: variable.id,
            variableName: variable.name,
            baselineId: baseline.id,
            baselineName: baseline.name,
            outputs,
            spearmanCorrelation,
            rSquared,
          });

          setProgress(prev => ({ ...prev, current: prev.current + 1 }));
          setResults([...newResults]);
        } catch (error) {
          console.error('Test failed:', error);
        }
      }
    }

    setIsRunning(false);
  };

  const Sparkline = ({ data }: { data: number[] }) => (
    <svg width="60" height="24" style={{ display: 'block' }}>
      <polyline
        points={data.map((val, idx) => `${(idx / (data.length - 1)) * 60},${24 - (val / Math.max(...data)) * 24}`).join(' ')}
        fill="none"
        stroke="#2C7A7B"
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2B2B2B', marginBottom: '2rem' }}>
          Batch Voice Evaluator
        </h1>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '1rem', borderBottom: '2px solid #E2E8F0', marginBottom: '2rem' }}>
          {(['variables', 'baselines', 'run'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #2C7A7B' : '3px solid transparent',
                color: activeTab === tab ? '#2C7A7B' : '#2B2B2B',
                fontWeight: activeTab === tab ? '600' : 'normal',
                cursor: 'pointer',
                textTransform: 'capitalize',
                fontSize: '1rem',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Variables Tab */}
        {activeTab === 'variables' && (
          <div style={{ marginTop: '1.5rem', maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B' }}>Voice Variables</h2>
              <button
                onClick={() => {
                  setEditingVariable(null);
                  setShowVariableModal(true);
                }}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#2C7A7B',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Add Variable
              </button>
            </div>

            <div style={{ display: 'grid', gap: '4px' }}>
              {variables.map(variable => (
                <div
                  key={variable.id}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    backgroundColor: variable.enabled ? '#F0FFF4' : 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#2B2B2B', marginBottom: '4px' }}>
                      {variable.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#4A5568' }}>
                      {variable.description}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      onClick={() => toggleVariable(variable.id)}
                      style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: variable.enabled ? '#10B981' : '#6B7280',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                      }}
                    >
                      {variable.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                    <button
                      onClick={() => {
                        setEditingVariable(variable);
                        setShowVariableModal(true);
                      }}
                      style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: '#2C7A7B',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Baselines Tab */}
        {activeTab === 'baselines' && (
          <div style={{ marginTop: '1.5rem', maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B' }}>Baseline Texts</h2>
              <button
                onClick={() => {
                  setEditingBaseline(null);
                  setShowBaselineModal(true);
                }}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#2C7A7B',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Add Baseline
              </button>
            </div>

            <div style={{ display: 'grid', gap: '4px' }}>
              {baselines.map(baseline => (
                <div
                  key={baseline.id}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    backgroundColor: baseline.enabled ? '#F0FFF4' : 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ flex: 1, marginRight: '16px' }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#2B2B2B', marginBottom: '4px' }}>
                      {baseline.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#4A5568', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {baseline.text.substring(0, 100)}...
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      onClick={() => toggleBaseline(baseline.id)}
                      style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: baseline.enabled ? '#10B981' : '#6B7280',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                      }}
                    >
                      {baseline.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                    <button
                      onClick={() => {
                        setEditingBaseline(baseline);
                        setShowBaselineModal(true);
                      }}
                      style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: '#2C7A7B',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Run Tab */}
        {activeTab === 'run' && (
          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1rem' }}>
              Run Batch Evaluation
            </h2>

            <div style={{ padding: '1.5rem', backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1rem', color: '#2B2B2B' }}>
                <strong>Variables:</strong> {variables.filter(v => v.enabled).length} enabled
              </div>
              <div style={{ marginBottom: '1rem', color: '#2B2B2B' }}>
                <strong>Baselines:</strong> {baselines.filter(b => b.enabled).length} enabled
              </div>
              <div style={{ marginBottom: '1.5rem', color: '#2B2B2B' }}>
                <strong>Total Tests:</strong> {variables.filter(v => v.enabled).length * baselines.filter(b => b.enabled).length} tests
                ({variables.filter(v => v.enabled).length * baselines.filter(b => b.enabled).length * 10} API calls)
              </div>

              {!isRunning ? (
                <button
                  onClick={runBatchEvaluation}
                  disabled={variables.filter(v => v.enabled).length === 0 || baselines.filter(b => b.enabled).length === 0}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#2C7A7B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                  }}
                >
                  Run Batch Evaluation
                </button>
              ) : (
                <div>
                  <div style={{ marginBottom: '0.5rem', color: '#2B2B2B' }}>
                    Running: {progress.current} / {progress.total} tests complete
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${(progress.current / progress.total) * 100}%`,
                        height: '100%',
                        backgroundColor: '#2C7A7B',
                        transition: 'width 0.3s',
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1rem' }}>
                  Results
                </h3>
                <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#EDF2F7' }}>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Variable</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Baseline</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Avg Delta</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Avg Effectiveness</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Spearman ρ</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>R²</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Trend</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, idx) => {
                        const avgDelta = result.outputs.reduce((sum, o) => sum + o.delta, 0) / result.outputs.length;
                        const avgEffectiveness = result.outputs.reduce((sum, o) => sum + o.effectiveness, 0) / result.outputs.length;
                        return (
                          <tr key={idx} style={{ borderTop: '1px solid #E2E8F0' }}>
                            <td style={{ padding: '0.75rem', color: '#2B2B2B' }}>{result.variableName}</td>
                            <td style={{ padding: '0.75rem', color: '#2B2B2B' }}>{result.baselineName}</td>
                            <td style={{ padding: '0.75rem', color: '#2B2B2B' }}>{avgDelta.toFixed(2)}</td>
                            <td style={{ padding: '0.75rem', color: '#2B2B2B' }}>{avgEffectiveness.toFixed(2)}</td>
                            <td style={{ padding: '0.75rem', color: '#2B2B2B' }}>{result.spearmanCorrelation.toFixed(3)}</td>
                            <td style={{ padding: '0.75rem', color: '#2B2B2B' }}>{result.rSquared.toFixed(3)}</td>
                            <td style={{ padding: '0.75rem' }}>
                              <Sparkline data={result.outputs.map(o => o.delta)} />
                            </td>
                            <td style={{ padding: '0.75rem' }}>
                              <button
                                onClick={() => setSelectedResult(result)}
                                style={{
                                  padding: '0.375rem 0.75rem',
                                  backgroundColor: '#2C7A7B',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                  fontSize: '0.875rem',
                                }}
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Variable Modal */}
        {showVariableModal && (
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
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1rem' }}>
                {editingVariable ? 'Edit Variable' : 'Add Variable'}
              </h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                addOrUpdateVariable({
                  id: editingVariable?.id || formData.get('id') as string,
                  name: formData.get('name') as string,
                  description: formData.get('description') as string,
                  enabled: editingVariable?.enabled ?? true,
                });
              }}>
                {!editingVariable && (
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                      ID
                    </label>
                    <input
                      type="text"
                      name="id"
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #E2E8F0',
                        borderRadius: '4px',
                        color: '#2B2B2B',
                      }}
                    />
                  </div>
                )}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingVariable?.name}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      color: '#2B2B2B',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={editingVariable?.description}
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      color: '#2B2B2B',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowVariableModal(false);
                      setEditingVariable(null);
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#E2E8F0',
                      color: '#2B2B2B',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#2C7A7B',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    {editingVariable ? 'Update' : 'Add'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Baseline Modal */}
        {showBaselineModal && (
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
              maxWidth: '600px',
              width: '100%',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1rem' }}>
                {editingBaseline ? 'Edit Baseline' : 'Add Baseline'}
              </h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                addOrUpdateBaseline({
                  id: editingBaseline?.id || formData.get('id') as string,
                  name: formData.get('name') as string,
                  text: formData.get('text') as string,
                  enabled: editingBaseline?.enabled ?? true,
                });
              }}>
                {!editingBaseline && (
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                      ID
                    </label>
                    <input
                      type="text"
                      name="id"
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #E2E8F0',
                        borderRadius: '4px',
                        color: '#2B2B2B',
                      }}
                    />
                  </div>
                )}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingBaseline?.name}
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      color: '#2B2B2B',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2B2B2B' }}>
                    Text
                  </label>
                  <textarea
                    name="text"
                    defaultValue={editingBaseline?.text}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      color: '#2B2B2B',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowBaselineModal(false);
                      setEditingBaseline(null);
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#E2E8F0',
                      color: '#2B2B2B',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#2C7A7B',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    {editingBaseline ? 'Update' : 'Add'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {selectedResult && (
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
              maxWidth: '900px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '1rem' }}>
                {selectedResult.variableName} - {selectedResult.baselineName}
              </h3>

              {/* Chart */}
              <div style={{ marginBottom: '2rem', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={selectedResult.outputs.map(o => ({ setting: o.setting, delta: o.delta, effectiveness: o.effectiveness }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="setting" label={{ value: 'Setting', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Score', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="delta" stroke="#2C7A7B" strokeWidth={2} name="Delta" />
                    <Line type="monotone" dataKey="effectiveness" stroke="#10B981" strokeWidth={2} name="Effectiveness" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Statistics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#F7FAFC', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.25rem' }}>Avg Delta</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B' }}>
                    {(selectedResult.outputs.reduce((sum, o) => sum + o.delta, 0) / selectedResult.outputs.length).toFixed(2)}
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#F7FAFC', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.25rem' }}>Avg Effectiveness</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B' }}>
                    {(selectedResult.outputs.reduce((sum, o) => sum + o.effectiveness, 0) / selectedResult.outputs.length).toFixed(2)}
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#F7FAFC', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.25rem' }}>Spearman ρ</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B' }}>
                    {selectedResult.spearmanCorrelation.toFixed(3)}
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#F7FAFC', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.875rem', color: '#4A5568', marginBottom: '0.25rem' }}>R²</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2B2B2B' }}>
                    {selectedResult.rSquared.toFixed(3)}
                  </div>
                </div>
              </div>

              {/* Outputs Table */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#2B2B2B', marginBottom: '0.75rem' }}>
                  All Outputs
                </h4>
                <div style={{ border: '1px solid #E2E8F0', borderRadius: '6px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#EDF2F7' }}>
                        <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Setting</th>
                        <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Delta</th>
                        <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Effectiveness</th>
                        <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: '600', color: '#2B2B2B' }}>Output Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedResult.outputs.map((output, idx) => (
                        <tr key={idx} style={{ borderTop: '1px solid #E2E8F0' }}>
                          <td style={{ padding: '0.5rem', color: '#2B2B2B' }}>{output.setting}</td>
                          <td style={{ padding: '0.5rem', color: '#2B2B2B' }}>{output.delta.toFixed(2)}</td>
                          <td style={{ padding: '0.5rem', color: '#2B2B2B' }}>{output.effectiveness.toFixed(2)}</td>
                          <td style={{ padding: '0.5rem', fontSize: '0.875rem', color: '#2B2B2B' }}>
                            {output.text.substring(0, 80)}...
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                onClick={() => setSelectedResult(null)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#E2E8F0',
                  color: '#2B2B2B',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}