'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/projects', label: 'Projects' },
  { href: '/voice-capture', label: 'Voice Capture' },
  { href: '/avatar-tuner', label: 'Avatar Tuner' },
  { href: '/avatar-evaluator', label: 'Avatar Evaluator' },
  { href: '/batch-evaluator', label: 'Batch Evaluator' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #E2E8F0',
        padding: '1rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ fontWeight: '700', fontSize: '1.25rem', color: '#2B2B2B', marginRight: '1rem' }}>
            Mrs. Robbins
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? '#0D9488' : '#4A5568',
                    fontWeight: isActive ? '600' : '500',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                    borderBottom: isActive ? '2px solid #0D9488' : '2px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
