
'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { FirebaseProvider } from './provider';
import { initializeFirebase } from './index';
import FirebaseErrorListener from '@/components/FirebaseErrorListener';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize Firebase. On server, this returns nulls. On client, it returns initialized services.
  const services = useMemo(() => initializeFirebase(), []);

  return (
    <FirebaseProvider 
      firebaseApp={services.firebaseApp} 
      firestore={services.firestore} 
      auth={services.auth}
    >
      {mounted && <FirebaseErrorListener />}
      {children}
    </FirebaseProvider>
  );
}
