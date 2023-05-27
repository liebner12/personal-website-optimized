'use client';
import clsx from 'clsx';
import { ReactNode, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  content: string;
  tabIndex?: number;
  size?: 'sm' | 'md';
};

export const Tooltip = ({
  children,
  content,
  size = 'md',
  tabIndex = 0,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const setVisibility = (value: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(value);
    }, 200);
  };

  return (
    <li
      onTouchStart={() => setVisibility(true)}
      onTouchEnd={() => setVisibility(false)}
      onMouseOver={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      onFocus={() => setVisibility(true)}
      onBlur={() => setVisibility(false)}
      className="relative flex justify-center focus:outline-0"
      tabIndex={tabIndex}
    >
      {isVisible && (
        <div
          className={clsx(
            { 'mb-3 px-4 py-0.5': size == 'md' },
            { 'mb-2 px-2 py-0.5 text-base': size == 'sm' },
            'fade-in-tooltip absolute bottom-full whitespace-nowrap rounded-lg bg-[#eeeeee] capitalize text-grey-900'
          )}
        >
          {content}
        </div>
      )}
      {children}
    </li>
  );
};
