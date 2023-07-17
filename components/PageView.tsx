'use client';
import { useEffect } from 'react';
import { putView } from 'lib/putView';

export const PageView = ({ slug }: { slug: string }) => {
  useEffect(() => {
    putView(slug);
  }, [slug]);
  return <div></div>;
};
