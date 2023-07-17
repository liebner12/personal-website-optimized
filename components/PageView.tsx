'use client';
import { useEffect } from 'react';

export const PageView = ({ slug }: { slug: string }) => {
  useEffect(() => {
    console.log('');
  }, [slug]);
  return <div></div>;
};
