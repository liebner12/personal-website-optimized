import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
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
    <motion.li
      onHoverStart={() => setVisibility(true)}
      onHoverEnd={() => setVisibility(false)}
      onFocus={() => setVisibility(true)}
      onBlur={() => setVisibility(false)}
      className="relative flex justify-center focus:outline-0"
      tabIndex={tabIndex}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: '10px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '10px', opacity: 0 }}
            className={clsx(
              { 'mb-3 py-0.5 px-4': size == 'md' },
              { 'mb-2 py-0.5 px-2 text-base': size == 'sm' },
              'absolute bottom-full whitespace-nowrap rounded-lg bg-[#eeeeee] capitalize text-grey-900'
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </motion.li>
  );
};
