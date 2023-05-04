import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FADE_IN_X } from 'data';

export const Background = () => {
  return (
    <div className="absolute top-0 right-0 -z-10 h-full w-full overflow-hidden">
      <div className="h-3/5 lg:h-full">
        <motion.div
          className={clsx('background-gradient h-full')}
          {...FADE_IN_X}
        />
      </div>
    </div>
  );
};
