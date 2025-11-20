export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '600px',
        backgroundColor: 'white',
        border: '1px solid #E2E8F0',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#0D9488',
          marginBottom: '1rem',
        }}>
          404
        </h2>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#2B2B2B',
          marginBottom: '1rem',
        }}>
          Page Not Found
        </h3>
        <p style={{
          color: '#4A5568',
          marginBottom: '1.5rem',
        }}>
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0D9488',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '500',
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
