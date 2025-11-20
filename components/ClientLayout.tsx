'use client';

import Navigation from '@/components/Navigation';
import { AuthProvider } from '@/components/AuthProvider';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Navigation />
      {children}
    </AuthProvider>
  );
}
