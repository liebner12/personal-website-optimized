import clsx from 'clsx';
import { Button, ButtonProps } from './Button';

export const PopoverButton = ({
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
