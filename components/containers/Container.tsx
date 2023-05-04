import { ReactNode, useCallback } from 'react';
import { clsx } from 'clsx';

export const Container = ({
  children,
  isGrid,
  className,
}: {
  children: ReactNode;
  isGrid?: boolean;
  className?: string;
}): JSX.Element => {
  const withGrid = useCallback((children: ReactNode) => {
    return (
      <div className="mb-auto grid h-full gap-6 lg:grid-cols-12 lg:grid-rows-[auto_minmax(auto,_1fr)] lg:gap-10 lg:gap-x-14 xl:gap-y-6">
        {children}
      </div>
    );
  }, []);

  return (
    <main
      className={clsx(
        'flex flex-1 flex-col px-8d pt-[5%] pb-24 md:px-12 lg:mt-6 lg:ml-32 lg:pl-4 lg:pr-16 xl:ml-44 xl:px-12 xl:pl-4 xl:pr-20',
        className
      )}
    >
      {isGrid ? withGrid(children) : children}
    </main>
  );
};
