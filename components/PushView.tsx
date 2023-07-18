'use client';
import { usePushView } from 'hooks/usePushView';

export const PushView = ({ slug }: { slug: string }) => {
  usePushView(slug);
  return <></>;
};
