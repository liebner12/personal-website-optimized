import React, { ReactNode } from 'react';
import {
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
} from 'react-icons/bs';
import clsx from 'clsx';
import { StyledLink } from './StyledLink';

type ArrowDirections = 'down' | 'up' | 'left' | 'right';

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

              <circle
                className="animate-circle text-primary-main"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                r="22"
                cx="24"
                cy="24"
                style={{
                  strokeDasharray: `${pathLength} ${pathLength}`,
                  rotate: '-90px',
                }}
              />
            </svg>
          </div>
        )}
        <span
          className={`animate-arrow animate-arrow-${direction} m-auto inline-block`}
        >
          <ArrowIcon direction={direction} className="h-6 w-6" />
        </span>
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
            'animate-circle-wrapper inline-flex items-center font-semibold focus:outline-none',
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
            'animate-circle-wrapper inline-flex items-center font-semibold focus:outline-none',
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
