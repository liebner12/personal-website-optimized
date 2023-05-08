'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { getCurrentTheme } from 'utils/getCurrentTheme';

export const Background = () => {
  const pathname = usePathname();
  const { theme } = getCurrentTheme(pathname || '');
  return (
    <div className="absolute right-0 top-0 -z-10 h-full w-full overflow-hidden">
      <div className={clsx('h-3/5 lg:h-full ', theme)}>
        <div className="background-gradient h-full" />
      </div>
    </div>
  );
};
