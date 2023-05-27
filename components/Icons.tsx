import {
  SiAlgolia,
  SiBootstrap,
  SiExpo,
  SiFirebase,
  SiFramer,
  SiGatsby,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import clsx from 'clsx';
import { Tooltip } from './Tooltip';

export type IconsList = keyof typeof iconsList;

export type IconsProps = {
  icons: Array<IconsList>;
  className?: string;
  technologyClassName?: string;
  size?: 'lg' | 'md' | 'sm';
  checkTagged?: (tag: string) => boolean;
} & React.ComponentPropsWithoutRef<'ul'>;

const sizeVariants = {
  lg: 'h-8 w-8',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
};

export const Icons = ({
  className,
  icons,
  technologyClassName,
  size = 'md',
  checkTagged = () => false,
}: IconsProps) => {
  return (
    <ul className={clsx('flex list-none flex-wrap gap-4 pl-0', className)}>
      {icons.map((icon) => {
        if (!iconsList[icon]) return;

        const current = iconsList[icon];
        return (
          <Tooltip content={current.name} tabIndex={-1} key={current.name}>
            <current.icon
              className={clsx(
                { 'text-primary-main': checkTagged(icon) },
                'hover:text-primary-main',
                sizeVariants[size],
                technologyClassName
              )}
              role="img"
              title={current.name}
            />
          </Tooltip>
        );
      })}
    </ul>
  );
};

const iconsList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  gatsby: {
    icon: SiGatsby,
    name: 'Gatsby',
  },
  typescript: {
    icon: SiTypescript,
    name: 'Typescript',
  },
  supabase: {
    icon: SiSupabase,
    name: 'Supabase',
  },
  styledcomponents: {
    icon: SiStyledcomponents,
    name: 'styled components',
  },
  reactrouter: {
    icon: SiReactrouter,
    name: 'React Router',
  },
  bootstrap: {
    icon: SiBootstrap,
    name: 'Bootstrap',
  },
  reactnative: {
    icon: SiReact,
    name: 'React Native',
  },
  expo: {
    icon: SiExpo,
    name: 'Expo',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux Toolkit',
  },
  framermotion: {
    icon: SiFramer,
    name: 'Framer Motion',
  },
  algolia: {
    icon: SiAlgolia,
    name: 'Algolia',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
};
