'use client';
import { motion } from 'framer-motion';
import { navigationListVariants } from 'data/constants';

export const ImagesGrid = () => {
  return (
    <motion.ul
      className="images-grid relative mx-auto grid grid-cols-12 grid-rows-3 items-end gap-4"
      initial="closed"
      whileInView="open"
      viewport={{ once: true }}
      variants={navigationListVariants}
    ></motion.ul>
  );
};
