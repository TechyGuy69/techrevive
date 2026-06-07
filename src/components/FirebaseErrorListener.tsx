
'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';

export default function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handlePermissionError = (error: any) => {
      // In development, this will bubble up to the Next.js error overlay
      // if it's an uncaught exception. For now, we show a toast.
      toast({
        variant: "destructive",
        title: "Permission Denied",
        description: `You don't have permission to perform this action.`,
      });
      
      // If we want it to trigger the Next.js error overlay:
      // throw error; 
    };

    errorEmitter.on('permission-error', handlePermissionError);
    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, [toast]);

  return null;
}
