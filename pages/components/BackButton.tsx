import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLink } from './ArrowLink';
import { FADE_IN_FIRST } from 'data';

export const BackButton = ({
  text = 'Back to overview',
  href,
}: {
  text?: string;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <motion.div className="mb-8 lg:col-span-12" {...FADE_IN_FIRST}>
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
    </motion.div>
  );
};
