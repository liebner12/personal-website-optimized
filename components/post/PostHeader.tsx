import { FaGithub, FaRegComments } from 'react-icons/fa';
import { MdCalendarToday, MdTimer } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import { format } from 'date-fns';
import Image from 'next/image';
import { ProjectFrontmatter, BlogFrontmatter } from 'types/frontmatters';
import { Tooltip } from 'components/Tooltip';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ReactionsList } from 'components/shortcuts/ReactionsList';
import { PostViews } from 'components/PostViews';
import { FALLBACK_REACTIONS_LIST } from 'data/constants';

export type PostHeader = Partial<BlogFrontmatter & ProjectFrontmatter> & {
  image: string;
  href: string;
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
  views,
  reactions,
}: PostHeader) {
  return (
    <div className="fade-in col-start-1 row-start-1">
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
        <ReactionsList reactions={reactions || FALLBACK_REACTIONS_LIST} />
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
        <PostViews views={views || 0} />
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          src={image}
          alt="prop"
          width={900}
          height={506}
          className="max-w-full rounded-lg"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
