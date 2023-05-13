import { RiHeartAddFill } from 'react-icons/ri';
import { TableOfContents } from './TableOfContents';
import { SocialButtons } from './SocialButtons';
import { MobileShortcutsBar } from './MobileShortcutsBar';
import { Reactions } from './Reactions';
import { ContentType } from 'types/frontmatters';
import { getPost } from 'lib/getPost';
import { DesktopPopover } from 'components/Popover';
import { PopoverButton } from 'components/PopoverButton';

export async function ShortcutsBar({
  content,
  slug,
  type,
}: {
  content: string;
  slug: string;
  type: ContentType;
}) {
  const { reactions } = await getPost(slug);

  return (
    <>
      <div className="sticky top-16 z-40 col-start-2 row-span-2 hidden h-screen pb-16 lg:block">
        <div className="fade-in-x col-start-2 hidden h-full lg:block">
          <TableOfContents content={content} />
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
              <Reactions reactions={reactions} slug={slug} />
            </DesktopPopover>
            <SocialButtons slug={slug} type={type} />
          </ul>
        </div>
      </div>
      <MobileShortcutsBar
        reactions={<Reactions reactions={reactions} slug={slug} />}
      >
        <SocialButtons variant="transparent" slug={slug} type={type} />
      </MobileShortcutsBar>
    </>
  );
}
