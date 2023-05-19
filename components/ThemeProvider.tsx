'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { getCurrentTheme } from 'utils/getCurrentTheme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const { theme } = getCurrentTheme(pathname || '');
  return <div className={theme}>{children}</div>;
};
