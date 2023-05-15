'use client';
import { usePathname } from 'next/navigation';
import { getCurrentTheme } from 'utils/getCurrentTheme';
export const Dot = () => {
  const pathname = usePathname();
  const { theme } = getCurrentTheme(pathname || '');
  return (
    <span className={`relative grid h-3 w-3 place-items-center ${theme}`}>
      <span className="absolute left-0 top-0 inline-flex h-full w-full animate-ping rounded-full bg-primary-main opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-main"></span>
    </span>
  );
};
