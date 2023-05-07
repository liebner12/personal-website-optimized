import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  width: number;
  height: number;
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
      <Image
        width={width}
        height={height}
        src={src}
        className={clsx('rounded-lg', className)}
        alt={alt}
      />
    </figure>
  );
};
