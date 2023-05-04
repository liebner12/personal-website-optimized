'use client';
import { motion } from 'framer-motion';
import { HOVER_SCALE } from 'data';
export const SkipToContent = ({
  children,
  id,
}: {
  children: JSX.Element[] | JSX.Element;
  id: string;
}) => {
  return (
    <>
      <motion.a
        {...HOVER_SCALE}
        href={`#${id}`}
        style={{ translateX: '-50%' }}
        className="focus-state fixed top-4 left-1/2 -z-10 h-0 w-0 rounded-full bg-primary-main font-bold text-grey-900 opacity-0 focus-within:z-40 focus:block focus:h-auto focus:w-auto focus:-translate-x-1/2 focus:overflow-auto focus:px-6 focus:py-2 focus:opacity-100"
      >
        {id}
      </motion.a>
      {children}
      <div id={id} className="hidden" />
    </>
  );
};
