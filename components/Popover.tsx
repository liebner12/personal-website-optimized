'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { IconType } from 'react-icons/lib';
import { Button, ButtonProps } from './Button';

export const DesktopPopover = ({
  children,
  isHovered,
  setIsHovered,
  button,
}: {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  children: ReactNode;
  button: ReactNode;
}) => {
  const timeoutRef = useRef<number | null>(null);

  const handleHover = (value: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value) {
      setIsHovered(true);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  return (
    <motion.div
      className="relative"
      onHoverStart={() => handleHover(true)}
      onFocus={() => handleHover(true)}
      onBlur={() => handleHover(false)}
      onHoverEnd={() => handleHover(false)}
    >
      {button}
      <AnimatePresence>
        {isHovered && (
          <motion.div className="absolute right-[120%] bottom-1/2 -z-50 translate-y-1/2">
            <motion.div
              className="rounded-full border-2 border-grey-800 bg-grey-900 py-3 px-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{
                duration: 0.2,
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PopoverButton = ({
  variant = 'secondary',
  StartIcon,
  ariaLabel,
  className,
}: Pick<ButtonProps, 'variant' | 'StartIcon' | 'className' | 'ariaLabel'>) => {
  return (
    <Button
      as="button"
      variant={variant}
      StartIcon={StartIcon}
      size="circle"
      ariaLabel={ariaLabel}
      color="text-white"
      className={clsx(
        'transition-colors hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main',
        className
      )}
    />
  );
};

DesktopPopover.Button = PopoverButton;

export const MobilePopover = ({
  isNavbarHidden,
  children,
  ButtonIcon,
}: {
  isNavbarHidden: boolean;
  children: ReactNode;
  ButtonIcon: IconType;
}) => {
  return (
    <li>
      <Popover>
        <Popover.Panel>
          <div
            className={clsx(
              'absolute bottom-[120%] left-1/2 z-20 flex w-full -translate-x-1/2 justify-center px-4 transition-transform',
              {
                'translate-y-[calc(100%+6rem)]': isNavbarHidden,
              }
            )}
          >
            <div className="flex justify-center rounded-2xl border-2 border-grey-800 bg-grey-900 px-4d py-1 shadow-lg">
              {children}
            </div>
          </div>
        </Popover.Panel>
        <Popover.Button
          aria-label="Add reactions"
          className="focus-state rounded-full p-2 text-white hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main sm:p-3"
        >
          <ButtonIcon className="h-6 w-6" />
        </Popover.Button>
      </Popover>
    </li>
  );
};
