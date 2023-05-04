import { FaGithub, FaRegComments } from 'react-icons/fa';
import { MdCalendarToday, MdRemoveRedEye, MdTimer } from 'react-icons/md';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';
import { format } from 'date-fns';
import Image from 'next/image';
import clsx from 'clsx';
import { useContext } from 'react';
import {
  FADE_IN_FIRST,
  FADE_IN_SECOND,
  FADE_IN_X,
  ReactionsKeys,
  REACTIONS_LIST_SM,
  REACTIONS_PRIORITIES,
} from 'data';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';
import { Button, BackButton, PostContext } from 'components';
import { Tooltip } from 'components/Tooltip';
import { Reaction } from 'lib';

export type PostHeader = Partial<
  Pick<BlogFrontmatter, 'title' | 'readingTime' | 'publishedAt'> &
    Pick<ProjectFrontmatter, 'title' | 'repository' | 'url' | 'publishedAt'>
> & {
  image: string;
  blurDataURL: string;
  href: string;
};

export function PostHeader({
  title,
  publishedAt,
  repository,
  readingTime,
  url,
  blurDataURL,
  image,
  href,
}: PostHeader) {
  const { reactions, views, isLoading } = useContext(PostContext);

  return (
    <>
      <motion.div className="mb-8" {...FADE_IN_FIRST}>
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
        {isLoading && (
          <div className="mt-4 h-6 w-80 animate-pulse rounded-full bg-grey-800" />
        )}
        {reactions && (
          <ul className="mt-4 flex flex-wrap gap-6d lg:gap-8">
            {(Object.entries(reactions) as [ReactionsKeys, Reaction][])
              .filter(([, { count }]) => count)
              .sort(
                ([a], [b]) => REACTIONS_PRIORITIES[a] - REACTIONS_PRIORITIES[b]
              )
              .map(([key, reaction]) => (
                <Tooltip content={key} key={key} size="sm" tabIndex={-1}>
                  <div className="flex cursor-default items-center gap-0.5 text-2xld">
                    <Image
                      src={REACTIONS_LIST_SM[key]}
                      alt={key}
                      width={32}
                      height={32}
                    />
                    <span className="text-lg text-white">{reaction.count}</span>
                  </div>
                </Tooltip>
              ))}
          </ul>
        )}
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
      </motion.div>
      <motion.div {...FADE_IN_SECOND} className="relative">
        <motion.div
          {...FADE_IN_X}
          className={clsx(
            'absolute top-2 right-2 flex h-8 items-center gap-2 rounded-full bg-blured py-1.5 px-4 font-semibold text-white backdrop-blur md:top-4 md:right-4',
            { 'animate-pulse': isLoading }
          )}
        >
          {views && (
            <>
              <MdRemoveRedEye className="text-primary-main" /> {views} views
            </>
          )}
        </motion.div>
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
      </motion.div>
    </>
  );
}
