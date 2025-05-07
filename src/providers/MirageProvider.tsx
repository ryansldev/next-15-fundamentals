'use client';

import { makeServer } from '@/lib/mirage/server';

export function MirageProvider({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'development') {
    makeServer();
  }

  return <>{children}</>;
}
