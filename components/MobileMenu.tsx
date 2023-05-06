'use client';
import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import { SiGithub } from 'react-icons/si';
import { NavbarLink } from './NavbarLink';
import { Button } from './Button';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { theme } from 'tailwind.config';
import { navigationItemVariants, navigationListVariants } from 'data/constants';

const backgroundFill: Variants = {
  open: {
    clipPath: `circle(2000px at calc(100% - 52px) 52px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(0px at calc(100% - 52px) 52px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery(1024);

  useEffect(() => {
    if (!isLargeScreen) return;
    setIsOpen(false);
    document.querySelector(':root')?.classList.remove('disable-scrolling');
  }, [isLargeScreen]);

  const toggleSetIsOpen = () => {
    document.querySelector(':root')?.classList.toggle('disable-scrolling'),
      setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="flex w-full px-8 py-8"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div
        className="absolute top-0 left-0 z-40 h-[100dvh] w-full bg-backgroundOpacity backdrop-blur-sm"
        variants={backgroundFill}
      />
      <motion.button
        aria-label="nav-toggle"
        whileFocus="focused"
        animate={isOpen ? 'open' : 'closed'}
        className="z-50 ml-auto grid place-items-center rounded-lg focus:outline-none"
        onClick={toggleSetIsOpen}
      >
        <div className="flex h-8 w-8 flex-col items-end justify-center gap-[7px]">
          <motion.span
            variants={{
              open: {
                rotate: -45,
                width: '100%',
                translateY: '14px',
              },
              closed: {
                rotate: 0,
                width: 23,
              },
              focused: {
                backgroundColor: theme.colors.primary.main,
              },
            }}
            className="h-[3px] w-full flex-shrink-0 rounded-full bg-grey-200"
          />
          <motion.span
            variants={{
              open: { opacity: 0, translateX: '5%' },
              closed: {
                opacity: 1,
                translateX: '0',
              },
              focused: {
                backgroundColor: theme.colors.primary.main,
              },
            }}
            transition={{ duration: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="h-[3px] w-full flex-shrink-0 rounded-full bg-grey-200"
          />
          <motion.span
            variants={{
              open: {
                rotate: 45,
                width: '100%',
                translateY: '-5px',
              },
              closed: {
                rotate: 0,
                width: 16,
              },
              focused: {
                backgroundColor: theme.colors.primary.main,
              },
            }}
            className="h-[3px] w-full flex-shrink-0 rounded-full bg-grey-200"
          />
        </div>
      </motion.button>
      <motion.div
        className={clsx(
          'grid-rows-auto-fr fixed left-0 top-0 z-40 h-screen w-full transition-all'
        )}
        variants={{
          open: { display: 'grid', transition: { duration: 0 } },
          closed: { display: 'none', transition: { delay: 0.8, duration: 0 } },
        }}
      >
        <div className="pb-20" />
        <motion.ul
          className="my-auto flex w-full flex-col items-center justify-around gap-10 font-semibold"
          variants={navigationListVariants}
        >
          <NavbarLink path="/" text="Home" isExact onClick={toggleSetIsOpen} />
          <NavbarLink path="/about" text="About" onClick={toggleSetIsOpen} />
          <NavbarLink
            path="/projects"
            text="Projects"
            onClick={toggleSetIsOpen}
          />
          <NavbarLink path="/blog" text="Blog" onClick={toggleSetIsOpen} />
          <NavbarLink
            path="/contact"
            text="Contact"
            onClick={toggleSetIsOpen}
          />
          <motion.li
            variants={navigationItemVariants}
            className="mx-auto pt-10 pb-10"
          >
            <Button
              StartIcon={SiGithub}
              href="https://github.com/liebner12"
              target="_blank"
              onClick={toggleSetIsOpen}
            />
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};
