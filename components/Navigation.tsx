'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/projects', label: 'Projects' },
  { href: '/voice-capture', label: 'Voice Capture' },
  { href: '/avatar-tuner', label: 'Avatar Tuner' },
  { href: '/avatar-evaluator', label: 'Avatar Evaluator' },
  { href: '/batch-evaluator', label: 'Batch Evaluator' },
  { href: '/error-logs', label: 'Error Logs' },
  { href: '/login', label: 'Login' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      suppressHydrationWarning
      style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #E2E8F0',
        padding: '1rem 1rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: '700', fontSize: '1.25rem', color: '#2B2B2B' }}>
            Mrs. Robbins
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '1.5rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? '#2C7A7B' : '#4A5568',
                    fontWeight: isActive ? '600' : '500',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                    borderBottom: isActive ? '2px solid #2C7A7B' : '2px solid transparent',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-button"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              width: '24px',
              height: '3px',
              backgroundColor: '#2C7A7B',
              transition: 'all 0.3s',
              transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }} />
            <span style={{
              width: '24px',
              height: '3px',
              backgroundColor: '#2C7A7B',
              transition: 'all 0.3s',
              opacity: mobileMenuOpen ? 0 : 1,
            }} />
            <span style={{
              width: '24px',
              height: '3px',
              backgroundColor: '#2C7A7B',
              transition: 'all 0.3s',
              transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '0.5rem',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid #E2E8F0',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: isActive ? '#2C7A7B' : '#4A5568',
                    fontWeight: isActive ? '600' : '500',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    padding: '0.75rem 0.5rem',
                    borderLeft: isActive ? '3px solid #2C7A7B' : '3px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}