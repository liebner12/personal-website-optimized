import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { SiTwitter } from 'react-icons/si';
import { Button, ButtonProps } from './Button';

type ShareTweetButtonProps = Omit<ButtonProps, 'children' | 'href'>;

export function ShareTweetButton({
  className,
  ...rest
}: ShareTweetButtonProps) {
  const { asPath } = useRouter();

  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `https://michal-liebner.vercel.app${asPath}`
  )}%0A%0A`;

  return (
    <Button
      {...rest}
      href={intentUrl}
      className={clsx('bg-[#1d9bf0] font-bold text-white', className)}
      variant="transparent"
      target="_blank"
      StartIcon={SiTwitter}
    >
      Tweet this article
    </Button>
  );
}
