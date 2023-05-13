'use client';
import NextProgress from 'next-progress';
import { usePathname } from 'next/navigation';
import { getCurrentTheme } from 'utils/getCurrentTheme';

export const Loader = () => {
  const pathname = usePathname();
  const { color } = getCurrentTheme(pathname || '');

  return <NextProgress color={color} />;
};
