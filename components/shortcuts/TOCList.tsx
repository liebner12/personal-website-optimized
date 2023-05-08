'use client';
import { StyledLink } from '../StyledLink';
import { Heading } from './TableOfContents';
import { useScrollSpy } from 'hooks/useScrollspy';

export const TOCList = ({ toc }: { toc: Heading[] }) => {
  const activeSection = useScrollSpy();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  return (
    <ul className="flex flex-col gap-3 text-sm text-grey-300">
      {toc?.map(({ id, level, text }) => (
        <li key={id}>
          <StyledLink
            href={`#${id}`}
            style={{ marginLeft: (level - minLevel) * 16 }}
            isActive={activeSection === id}
          >
            {text}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};
