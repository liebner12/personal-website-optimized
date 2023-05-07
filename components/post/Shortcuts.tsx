'use client';
import { MdComment, MdShare } from 'react-icons/md';
import { RiHeartAddFill } from 'react-icons/ri';
import { useContext, useEffect, useState } from 'react';
import { BiLink } from 'react-icons/bi';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/dist/client/image';
import { TableOfContents } from './TableOfContents';
import { Button, ButtonProps } from 'components/Button';
import { DesktopPopover, MobilePopover } from 'components/Popover';
import { Dialog } from 'components/Dialog';
import { PostContext } from 'components/PostProvider';
import {
  ReactionsKeys,
  REACTIONS_LIST,
  REACTIONS_PRIORITIES,
} from 'data/constants';
import { Tooltip } from 'components/Tooltip';

const HOVER_LARGE_SCALE = {
  whileHover: { scale: 1.25 },
  whileTap: { scale: 0.96 },
  whileFocus: { scale: 1.25 },
};

const SocialButtons = ({
  variant = 'filled',
}: Pick<ButtonProps, 'variant'>) => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  return (
    <>
      <Tooltip content="Comments" tabIndex={-1} size="sm">
        <Button
          variant={variant}
          StartIcon={MdComment}
          size="circle"
          ariaLabel="Comments"
          href="#comments-github"
          color="text-white"
          className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
        />
      </Tooltip>
      <Tooltip content="Share" tabIndex={-1} size="sm">
        <Button
          variant={variant}
          StartIcon={MdShare}
          size="circle"
          as="button"
          ariaLabel="Copy to clipboard"
          onClick={() => {
            setIsToggleActive(true);
            navigator.clipboard.writeText(window.location.href);
          }}
          color="text-white"
          className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
        />
      </Tooltip>
      <Dialog isVisible={isToggleActive} setIsVisible={setIsToggleActive}>
        Copied to clipboard <BiLink className="h-6 w-6" />
      </Dialog>
    </>
  );
};

const Reactions = () => {
  const { setReactions, reactions, isLoading } = useContext(PostContext);
  const handleClick = (reaction: ReactionsKeys) => {
    if (!reactions) {
      return;
    }

    const { hasBeenSelected } = reactions[reaction];
    setReactions?.({
      ...reactions,
      [reaction]: {
        count: hasBeenSelected
          ? reactions[reaction].count - 1
          : reactions[reaction].count + 1,
        hasBeenSelected: !hasBeenSelected,
      },
    });
  };
  return (
    <ul className="relative flex flex-wrap items-center gap-2 sm:flex-nowrap">
      {(
        Object.entries(REACTIONS_LIST) as unknown as [
          ReactionsKeys,
          StaticImageData
        ][]
      )
        .sort(([a], [b]) => REACTIONS_PRIORITIES[a] - REACTIONS_PRIORITIES[b])
        .map(([key, icon]) => (
          <Tooltip key={key} content={key} size="sm" tabIndex={-1}>
            <Button
              as="button"
              variant="transparent"
              size="xs"
              color="text-white"
              disabled={isLoading}
              wrapperProps={HOVER_LARGE_SCALE}
              className={clsx(
                'w-12 pt-1 pb-1 hover:bg-grey-800 focus:bg-grey-800',
                {
                  'bg-grey-800': reactions?.[key]?.hasBeenSelected,
                }
              )}
              onClick={() => handleClick(key)}
            >
              <div className="flex flex-shrink-0 flex-col justify-center gap-0.5">
                <div className="flex-shrink-0">
                  <Image src={icon} alt={key} width={64} height={64} />
                </div>
                <span
                  className={clsx(
                    'text-base',
                    {
                      'w-8 animate-pulse rounded-full bg-grey-700 text-transparent':
                        isLoading,
                    },
                    {
                      'font-bold text-primary-main':
                        reactions?.[key]?.hasBeenSelected,
                    },
                    { 'text-slate-200': !reactions?.[key]?.hasBeenSelected }
                  )}
                >
                  {reactions?.[key].count || 0}
                </span>
              </div>
            </Button>
          </Tooltip>
        ))}
    </ul>
  );
};

const MobileShortcuts = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > scrollPos;

      setIsNavbarHidden(scrollingDown);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <div
      className={clsx(
        'fixed bottom-6 right-0 z-20 flex w-full transition-transform sm:max-w-sm lg:hidden',
        {
          'translate-y-[calc(100%+1.5rem)]': isNavbarHidden,
        }
      )}
    >
      <div className="mx-4 flex-1 rounded-full border-2 border-grey-800 bg-grey-900 py-1.5 shadow-lg sm:mx-8d">
        <ul className="mx-4 flex justify-around">
          <MobilePopover
            ButtonIcon={RiHeartAddFill}
            isNavbarHidden={isNavbarHidden}
          >
            <Reactions />
          </MobilePopover>
          <SocialButtons variant="transparent" />
        </ul>
      </div>
    </div>
  );
};

const Shortcuts = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ul className="mt-6 flex gap-6">
      <DesktopPopover
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        button={
          <DesktopPopover.Button
            variant="filled"
            StartIcon={RiHeartAddFill}
            ariaLabel="Add reaction"
          />
        }
      >
        <Reactions />
      </DesktopPopover>
      <SocialButtons />
    </ul>
  );
};

export function ShortcutsBar({ content }: { content: string }) {
  return (
    <>
      <div className="sticky top-16 z-40 col-start-2 row-span-2 hidden h-screen pb-16 lg:block">
        <div className="col-start-2 hidden h-full lg:block">
          <TableOfContents content={content} />
          <Shortcuts />
        </div>
      </div>
      <MobileShortcuts />
    </>
  );
}
