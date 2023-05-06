'use client';
import { IconType } from 'react-icons/lib';
import { usePathname } from 'next/navigation';
import { StyledLink } from './StyledLink';

type Props = {
  path: string;
  text: string;
  isExact?: boolean;
  icon?: IconType;
  onClick?: () => void;
};

export const NavbarLink = ({ path, text, isExact, icon, onClick }: Props) => {
  const pathname = usePathname();

  const isActive = isExact
    ? pathname === path
    : new RegExp(`${path}*`).test(pathname || '');

  return (
    <li className="flex h-10 items-center">
      <StyledLink
        href={path}
        ariaLabel={text}
        isActive={isActive}
        StartIcon={icon}
        color="text-white"
        className="z-20 h-6 gap-3 text-xl font-bold"
        onClick={onClick}
      >
        <p className="link-text tracking-wide">{text}</p>
      </StyledLink>
    </li>
  );
};
