import clsx from 'clsx';
import { SiTwitter } from 'react-icons/si';
import { Button, ButtonProps } from './Button';

type ShareTweetButtonProps = Omit<ButtonProps, 'children' | 'href'>;

export function ShareTweetButton({ className }: ShareTweetButtonProps) {
  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `https://michal-liebner.vercel.app`
  )}%0A%0A`;

  return (
    <Button
      href={intentUrl}
      className={clsx('bg-[#1d9bf0] font-bold ', className)}
      variant="transparent"
      color="text-[#14171A]"
      target="_blank"
      StartIcon={SiTwitter}
    >
      Tweet this article
    </Button>
  );
}
