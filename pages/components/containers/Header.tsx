import { motion } from 'framer-motion';
import { FADE_IN_FIRST } from 'data';

type Props = {
  title: string;
  desc?: string;
};

export const Header = ({ title, desc }: Props) => {
  return (
    <motion.header {...FADE_IN_FIRST} className="col-span-1 lg:col-span-8">
      <div className="prose prose-invert my-4">
        <h1 className="mb-0 text-primary-main">{title}</h1>
        {desc && <p className="mt-4 text-lg">{desc}</p>}
      </div>
    </motion.header>
  );
};
