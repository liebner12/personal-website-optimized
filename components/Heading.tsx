import { ReactNode } from 'react';
import clsx from 'clsx';

export const Heading = ({
  children,
  className = 'mb-12',
  size = 'md',
}: {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}) => {
  return (
    <h1
      className={clsx(
        'font-extrabold xl:max-w-3xl ',
        { 'text-5xl sm:text-6xl lg:text-5xl xl:text-6xl': size === 'md' },
        { 'text-3xl sm:text-4xl lg:text-3xl xl:text-4xl': size === 'sm' },
        className
      )}
    >
      {children}
    </h1>
  );
};
