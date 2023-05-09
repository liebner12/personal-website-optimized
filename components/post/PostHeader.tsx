import { FaGithub, FaRegComments } from 'react-icons/fa';
import { MdCalendarToday, MdTimer } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import { format } from 'date-fns';
import Image from 'next/image';
import { Suspense } from 'react';
import { ProjectFrontmatter, BlogFrontmatter } from 'types/frontmatters';
import { Tooltip } from 'components/Tooltip';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ReactionsList } from 'components/shortcuts/ReactionsList';
import { PostViews } from 'components/PostViews';

export type PostHeader = Partial<
  Pick<BlogFrontmatter, 'title' | 'publishedAt' | 'readingTime'> &
    Pick<ProjectFrontmatter, 'title' | 'repository' | 'url' | 'publishedAt'>
> & {
  image: string;
  href: string;
  blurDataURL?: string;
  slug: string;
};

export function PostHeader({
  title,
  publishedAt,
  repository,
  url,
  image,
  readingTime,
  blurDataURL,
  href,
  slug,
}: PostHeader) {
  return (
    <div className="col-start-1 row-start-1">
      <div className=" mb-8">
        <BackButton href={href} />
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-base font-semibold text-slate-200">
          {readingTime && (
            <>
              <div className="flex items-center gap-1.5">
                <MdTimer />
                <span>{readingTime.text}</span>
              </div>
            </>
          )}
          {publishedAt && (
            <>
              -
              <div className="flex items-center gap-1.5">
                <MdCalendarToday />
                <p>{format(new Date(publishedAt), 'dd MMMM yyyy')}</p>
              </div>
            </>
          )}
        </div>
        <Suspense fallback={<div>...Loading</div>}>
          {/* @ts-expect-error Server Component */}
          <ReactionsList slug={slug} />
        </Suspense>
        {(url || repository) && (
          <ul className="mt-6 flex items-center gap-4">
            {url && (
              <Tooltip content="Link to the page">
                <Button
                  href={url}
                  target="_blank"
                  StartIcon={BiLink}
                  ariaLabel="Link to the page"
                />
              </Tooltip>
            )}
            {repository && (
              <Tooltip content="Repository">
                <Button
                  ariaLabel="Github"
                  variant="filled"
                  StartIcon={FaGithub}
                  href={repository}
                  target="_blank"
                />
              </Tooltip>
            )}
            <Tooltip content="Comments">
              <Button
                StartIcon={FaRegComments}
                href="#comments-github"
                ariaLabel="Comments"
              />
            </Tooltip>
          </ul>
        )}
      </div>
      <div className="relative">
        {/* @ts-expect-error Server Component */}
        <PostViews slug={slug} />
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          src={image}
          alt="prop"
          width={900}
          height={506}
          className="max-w-full rounded-lg"
          loading="eager"
        />
      </div>
    </div>
  );
}
