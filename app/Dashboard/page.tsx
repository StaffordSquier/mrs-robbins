export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F7FAFC', 
      padding: '3rem' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#2B2B2B', 
          marginBottom: '2rem' 
        }}>
          Mrs. Robbins Tools
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a 
            href="/batch-evaluator"
            style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#2B2B2B'
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Batch Evaluator
            </h2>
            <p style={{ color: '#4A5568', fontSize: '0.875rem' }}>
              Test voice variables across multiple baselines
            </p>
          </a>

          <a 
            href="/avatar-tuner"
            style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#2B2B2B'
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Avatar Tuner
            </h2>
            <p style={{ color: '#4A5568', fontSize: '0.875rem' }}>
              Configure voice parameters
            </p>
          </a>

          <a 
            href="/avatar-evaluator"
            style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#2B2B2B'
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Avatar Evaluator
            </h2>
            <p style={{ color: '#4A5568', fontSize: '0.875rem' }}>
              Evaluate avatar configurations
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}