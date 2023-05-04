'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BLOGS, navigationItemVariants, navigationListVariants } from 'data';

export const ImagesGrid = () => {
  const images = Object.values(BLOGS).map(({ image, title }) => ({
    image,
    alt: title,
  }));

  return (
    <motion.ul
      className="images-grid relative mx-auto grid grid-cols-12 grid-rows-3 items-end gap-4"
      initial="closed"
      whileInView="open"
      viewport={{ once: true }}
      variants={navigationListVariants}
    >
      {images.slice(0, 6).map(({ image, alt }) => (
        <motion.li key={alt} variants={navigationItemVariants}>
          <Image
            quality={30}
            key={alt}
            src={image}
            alt={alt}
            className="rounded-lg"
            width={300}
            height={200}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
