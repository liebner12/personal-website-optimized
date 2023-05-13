'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentTheme } from 'utils/getCurrentTheme';

export const Background = () => {
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();
  const { theme } = getCurrentTheme(pathname || '');
  useEffect(() => {
    setTimeout(() => {
      setCurrentPath(pathname);
    }, 500);
  }, [pathname]);
  return (
    <div className="absolute right-0 top-0 -z-10 h-full w-full overflow-hidden">
      <div
        className={clsx('h-3/5 overflow-hidden lg:h-full', theme, {
          'fade-in-x': currentPath !== pathname,
        })}
      >
        <div className="background-gradient h-full" />
      </div>
    </div>
  );
};
