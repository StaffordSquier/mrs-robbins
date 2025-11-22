'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/voice-capture');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Redirecting to Voice Capture...</p>
    </div>
  );
}
