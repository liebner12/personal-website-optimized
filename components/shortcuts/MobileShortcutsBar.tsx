'use client';
import clsx from 'clsx';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import { RiHeartAddFill } from 'react-icons/ri';
import { MobilePopover } from 'components/Popover';

export const MobileShortcutsBar = ({
  children,
  reactions,
}: {
  reactions: ReactNode;
  children: ReactNode;
}) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > scrollPos;

      setIsNavbarHidden(scrollingDown);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <div
      className={clsx(
        'fade-in fixed bottom-6 right-0 z-20 flex w-full transition-transform sm:max-w-sm lg:hidden',
        {
          'translate-y-[calc(100%+1.5rem)]': isNavbarHidden,
        }
      )}
    >
      <div className="mx-4 flex-1 rounded-full border-2 border-grey-800 bg-grey-900 py-1 shadow-lg sm:mx-8d">
        <ul className="mx-4 flex justify-around">
          <MobilePopover
            ButtonIcon={RiHeartAddFill}
            isNavbarHidden={isNavbarHidden}
          >
            <Suspense fallback={<div>...Loading</div>}>{reactions}</Suspense>
          </MobilePopover>
          {children}
        </ul>
      </div>
    </div>
  );
};
