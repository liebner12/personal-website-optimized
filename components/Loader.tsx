'use client';
import NextNProgress from 'nextjs-progressbar';
import { usePathname } from 'next/navigation';
import { getCurrentTheme } from 'utils/getCurrentTheme';

export const Loader = () => {
  const pathname = usePathname();
  const { color } = getCurrentTheme(pathname || '');

  return <NextNProgress color={color} />;
};
