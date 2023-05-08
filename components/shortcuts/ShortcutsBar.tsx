import { TableOfContents } from './TableOfContents';
import { SocialButtons } from './SocialButtons';
import { ContentType } from 'types/frontmatters';

export function ShortcutsBar({
  content,
  slug,
  type,
}: {
  content: string;
  slug: string;
  type: ContentType;
}) {
  return (
    <>
      <div className="sticky top-16 z-40 col-start-2 row-span-2 hidden h-screen pb-16 lg:block">
        <div className="col-start-2 hidden h-full lg:block">
          <TableOfContents content={content} />
          <SocialButtons slug={slug} type={type} />
        </div>
      </div>
    </>
  );
}
