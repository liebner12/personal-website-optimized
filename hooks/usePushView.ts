'use client';
import { useEffect } from 'react';

export const usePushView = (name: string) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    fetch(`/api/views/${name}`, {
      method: 'POST',
    });
  }, [name]);
};
