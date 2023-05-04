'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variant } from 'framer-motion';
import {
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
} from 'react-icons/bs';
import clsx from 'clsx';
import { StyledLink } from './StyledLink';

type ArrowDirections = 'down' | 'up' | 'left' | 'right';
type ElementState = 'tap' | 'hover' | 'initial';
type ArrowVariants = Record<ArrowDirections, Record<ElementState, Variant>>;

const arrowVariants: ArrowVariants = {
  down: {
    initial: { y: 0 },
    hover: { y: 2 },
    tap: { y: 6 },
  },
  up: {
    initial: { y: 0 },
    hover: { y: -2 },
    tap: { y: -6 },
  },
  left: {
    initial: { x: 0 },
    hover: { x: -2 },
    tap: { x: -6 },
  },
  right: {
    initial: { x: 0 },
    hover: { x: 2 },
    tap: { x: 6 },
  },
};

type Props = {
  direction?: ArrowDirections;
  className?: string;
  isCircle?: boolean;
  as?: 'link' | 'button';
  disabled?: boolean;
};

const ArrowIcon = ({ direction, className }: Props) => {
  switch (direction) {
    case 'down':
      return <BsArrowDown className={className} />;
    case 'up':
      return <BsArrowUp className={className} />;
    case 'left':
      return <BsArrowLeft className={className} />;
    default:
      return <BsArrowRight className={className} />;
  }
};

const ArrowBody = ({
  children,
  direction = 'right',
  isCircle = true,
}: { children: ReactNode } & Props) => {
  const pathLength = 22 * 2 * Math.PI;
  return (
    <>
      {(direction === 'right' || direction === 'up') && children}
      <div
        className={clsx(
          'relative inline-flex flex-none items-center justify-center',
          { 'h-14 w-14 p-1': isCircle }
        )}
      >
        {isCircle && (
          <div className="absolute text-grey-800">
            <svg width="48" height="48">
              <circle
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                r="22"
                cx="24"
                cy="24"
              />

              <motion.circle
                className="text-primary-main"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                r="22"
                cx="24"
                cy="24"
                style={{
                  strokeDasharray: `${pathLength} ${pathLength}`,
                  rotate: -90,
                }}
                variants={{
                  initial: { strokeDashoffset: pathLength },
                  hover: { strokeDashoffset: 0 },
                  tap: { strokeDashoffset: 0 },
                  focus: { strokeDashoffset: 0 },
                }}
                transition={{
                  damping: 0,
                }}
              />
            </svg>
          </div>
        )}
        <motion.span
          variants={arrowVariants[direction]}
          className="m-auto inline-block"
        >
          <ArrowIcon direction={direction} className="h-6 w-6" />
        </motion.span>
      </div>
      {(direction === 'left' || direction === 'down') && children}
    </>
  );
};

export const ArrowLink = ({
  children,
  direction = 'right',
  isCircle = true,
  as = 'link',
  disabled = false,
  className,
  ...props
}: StyledLink & Props) => {
  return (
    <>
      {as === 'button' ? (
        <button
          className={clsx(
            'inline-flex items-center font-semibold focus:outline-none',
            { 'gap-6 text-xl': isCircle },
            { 'gap-4 text-lg': !isCircle },
            className
          )}
          disabled={disabled}
          {...props}
        >
          <ArrowBody isCircle={isCircle} direction={direction}>
            {children}
          </ArrowBody>
        </button>
      ) : (
        <StyledLink
          focusState=""
          className={clsx(
            'inline-flex items-center font-semibold focus:outline-none',
            { 'gap-6 text-xl': isCircle },
            { 'gap-4 text-lg': !isCircle },
            className
          )}
          {...props}
        >
          <ArrowBody isCircle={isCircle} direction={direction}>
            {children}
          </ArrowBody>
        </StyledLink>
      )}
    </>
  );
};
