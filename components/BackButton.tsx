'use client';
import { useRouter } from 'next/navigation';
import { ArrowLink } from './ArrowLink';

export const BackButton = ({
  text = 'Back to overview',
  href,
}: {
  text?: string;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <div className="mb-8 lg:col-span-12">
      <ArrowLink
        direction="left"
        isCircle={false}
        onClick={() => (href ? {} : router.back())}
        href={href}
        color="text-white"
        as={href ? 'link' : 'button'}
      >
        {text}
      </ArrowLink>
    </div>
  );
};
