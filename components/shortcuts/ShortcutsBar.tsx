import { RiHeartAddFill } from 'react-icons/ri';
import { Heading, TableOfContents } from './TableOfContents';
import { SocialButtons } from './SocialButtons';
import { MobileShortcutsBar } from './MobileShortcutsBar';
import { Reactions } from './Reactions';
import { ContentType } from 'types/frontmatters';
import { DesktopPopover } from 'components/Popover';
import { PopoverButton } from 'components/PopoverButton';
import { FALLBACK_REACTIONS_LIST, ReactionsType } from 'data/constants';

export function ShortcutsBar({
  toc,
  slug,
  type,
  reactions,
  setReactions,
}: {
  toc: Heading[];
  slug: string;
  type: ContentType;
  setReactions: (reactions: ReactionsType) => void;
  reactions: ReactionsType | null;
}) {
  return (
    <>
      <div className="sticky top-16 z-40 col-start-2 row-span-2 hidden h-screen pb-16 lg:block">
        <div className="fade-in-x col-start-2 hidden h-full lg:block">
          <TableOfContents toc={toc} />
          <ul className="mt-6 flex gap-6">
            <DesktopPopover
              button={
                <PopoverButton
                  variant="filled"
                  StartIcon={RiHeartAddFill}
                  ariaLabel="Add reaction"
                />
              }
            >
              <Reactions
                setReactions={setReactions}
                reactions={reactions || FALLBACK_REACTIONS_LIST}
                slug={slug}
              />
            </DesktopPopover>
            <SocialButtons slug={slug} type={type} />
          </ul>
        </div>
      </div>
      <MobileShortcutsBar
        reactions={
          <Reactions
            setReactions={setReactions}
            reactions={reactions || FALLBACK_REACTIONS_LIST}
            slug={slug}
          />
        }
      >
        <SocialButtons variant="transparent" slug={slug} type={type} />
      </MobileShortcutsBar>
    </>
  );
}
