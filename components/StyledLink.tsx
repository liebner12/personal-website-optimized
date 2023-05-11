import { ReactNode, forwardRef, CSSProperties } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { IconType } from 'react-icons/lib';

export type StyledLink = {
  className?: string;
  children?: ReactNode | string;
  StartIcon?: IconType;
  EndIcon?: IconType;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onBlur?: () => void;
  href?: string;
  isActive?: boolean;
  color?: string;
  ariaLabel?: string;
  disabled?: boolean;
  target?: '_blank' | undefined;
  focusState?: 'focus-state-bottom' | 'focus-state' | '';
  size?: 'xl' | 'lg' | 'md' | 'sm';
  style?: CSSProperties;
  as?: 'button' | 'link';
  type?: 'submit';
  formAction?: string | undefined;
};

const sizeVariants = {
  xl: 'h-10 w-10',
  lg: 'h-8 w-8',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
};

export const StyledLink = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  StyledLink
>(
  (
    {
      target,
      children,
      StartIcon,
      EndIcon,
      onClick,
      href = '',
      className,
      isActive,
      color,
      ariaLabel,
      focusState = 'focus-state-bottom',
      size = 'md',
      style,
      disabled,
      as = 'Link',
      type,
      onBlur,
      formAction,
    },
    ref
  ) => {
    const startIcon = StartIcon && <StartIcon className={sizeVariants[size]} />;
    const endIcon = EndIcon && <EndIcon className={sizeVariants[size]} />;

    if (as === 'button') {
      return (
        <button
          onBlur={onBlur}
          ref={ref}
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={clsx(
            {
              'font-bold text-primary-main': isActive,
              [color || 'text-grey-300']: !isActive,
            },
            focusState,
            className,
            { 'opacity-60': disabled },
            { 'flex items-center gap-2': StartIcon || EndIcon },
            { 'inline-block': !StartIcon && !EndIcon }
          )}
          style={style}
          aria-label={ariaLabel}
          formAction={formAction}
        >
          {startIcon}
          {children}
          {endIcon}
        </button>
      );
    }

    return (
      <Link
        ref={ref}
        rel={target && 'noreferrer'}
        target={target}
        onClick={onClick}
        href={href}
        className={clsx(
          {
            'font-bold text-primary-main': isActive,
            [color || 'text-grey-300']: !isActive,
          },
          focusState,
          className,
          { 'flex items-center gap-2': StartIcon || EndIcon },
          { 'inline-block': !StartIcon && !EndIcon }
        )}
        style={style}
        aria-label={ariaLabel}
      >
        {startIcon}
        {children}
        {endIcon}
      </Link>
    );
  }
);

StyledLink.displayName = 'StyledLink';
