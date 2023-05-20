'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { StyledLink } from './StyledLink';

type Props = {
  path: string;
  text: string;
  isExact?: boolean;
  icon?: ReactNode;
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
        color="text-white"
        className="z-20 flex h-6 items-center gap-3 text-xl font-bold"
        onClick={onClick}
      >
        {icon} <p className="link-text tracking-wide">{text}</p>
      </StyledLink>
    </li>
  );
};
