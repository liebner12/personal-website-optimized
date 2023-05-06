'use client';
import clsx from 'clsx';
const { CldImage } = require('next-cloudinary');

type Props = {
  width: string;
  height: string;
  src: string;
  className: string;
  alt: string;
} & React.ComponentPropsWithoutRef<'figure'>;

export const CloudinaryImage = ({
  width,
  height,
  src,
  className,
  alt,
  style,
  ...rest
}: Props) => {
  return (
    <figure
      className={clsx(
        'mx-auto flex w-full overflow-hidden rounded-lg',
        {
          'mx-auto w-full': Number(width) <= 800,
        },
        className
      )}
      style={{
        ...(Number(width) <= 800 && { maxWidth: `${width}px` }),
        ...style,
      }}
      {...rest}
    >
      <CldImage
        width={width}
        height={height}
        src={src}
        className={clsx('rounded-lg', className)}
        alt={alt}
      />
    </figure>
  );
};
