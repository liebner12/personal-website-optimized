export const THEMES = {
  about: 'theme-about',
  blog: 'theme-blog',
  contact: 'theme-contact',
  projects: 'theme-projects',
  home: 'theme-home',
  error: 'theme-error',
};

export const BLOG_SORT_LIST = ['date', 'views'];

export const MAX_WIDTH = 1536;

export const FADE_IN_FIRST = {
  initial: { y: 100, opacity: 0.01 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0.01 },
  transition: {
    duration: 0.5,
  },
};

export const FADE_IN_SECOND = {
  initial: { y: 100, opacity: 0.01 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0.01 },
  transition: {
    duration: 0.3,
    delay: 0.25,
  },
};

export const FADE_IN_X = {
  initial: { x: 20, opacity: 0.01 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0.01 },
  transition: {
    duration: 0.25,
    delay: 0.4,
  },
};

export const FADE_IN_X_REVERSE = {
  initial: { x: -200, opacity: 0.01 },
  animate: { x: 0, opacity: 1 },
  transition: {
    delay: 0.25,
    duration: 0.3,
  },
};

export const HOVER_SCALE = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.96 },
  whileFocus: { scale: 1.03 },
};

export const FADE_IN_VIEW = {
  initial: { y: '40px', opacity: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
};

export const navigationItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export const navigationListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const REACTIONS_LIST_SM = {
  like: 'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Heart_h6gbn0.webp',
  cool: 'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Fire_zlazxh.webp',
  'exploding head':
    'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Exploding_xtvmud.webp',
  'to the moon':
    'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Rocket_xwtjgh.webp',
  interesting:
    'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Thinking_calccw.webp',
};

export const REACTIONS_LIST = {
  like: 'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Heart_h6gbn0.webp',
  cool: 'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Fire_zlazxh.webp',
  'exploding head':
    'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Exploding_xtvmud.webp',
  'to the moon':
    'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Rocket_xwtjgh.webp',
  interesting:
    'https://res.cloudinary.com/dtce87smh/image/upload/w_48/v1683203871/Thinking_calccw.webp',
};

export const REACTIONS_PRIORITIES = {
  like: 1,
  cool: 2,
  'exploding head': 3,
  'to the moon': 4,
  interesting: 5,
};

export type ReactionsKeys = keyof typeof REACTIONS_LIST;

export type ReactionsType = Record<ReactionsKeys, number>;
