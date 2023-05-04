import clsx from 'clsx';
import { ReactNode } from 'react';

export const GridCols = ({
  children,
  numberOfCols = 3,
}: {
  children: ReactNode;
  numberOfCols: 2 | 3;
}) => {
  return (
    <div
      className={clsx(
        'grid-cols-figure-reset mx-auto grid max-w-2xl gap-8',
        { 'md:grid-cols-2': numberOfCols === 2 },
        { 'md:grid-cols-3': numberOfCols === 3 }
      )}
    >
      {children}
    </div>
  );
};
