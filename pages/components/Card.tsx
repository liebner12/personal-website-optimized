import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import useSWR from 'swr';
import { HiClock } from 'react-icons/hi';
import clsx from 'clsx';
import { MdFavorite } from 'react-icons/md';
import { FaCommentDots } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { Icons, IconsList } from './Icons';
import { BlogFrontmatter, ProjectFrontmatter } from 'types/frontmatters';
import { FADE_IN_VIEW, HOVER_SCALE } from 'data';
import { MappedDiscussion } from 'pages/api/github/discussions';
import { Post } from 'lib';

type Card = Pick<ProjectFrontmatter & BlogFrontmatter, 'slug'> & {
  children: JSX.Element[] | JSX.Element;
  endpoint?: 'projects' | 'blog';
  layoutId?: string;
};

const MotionLink = motion(Link);

export const Card = ({ slug, children, endpoint = 'blog', layoutId }: Card) => {
  return (
    <motion.li layoutId={layoutId} {...FADE_IN_VIEW} className="h-full">
      <MotionLink
        {...HOVER_SCALE}
        href={`/${endpoint}/${slug}`}
        className="focus-state focus-state-clean relative flex h-full flex-col rounded-xl bg-grey-900 pb-5"
      >
        {children}
      </MotionLink>
    </motion.li>
  );
};

export type CardImage = Pick<
  ProjectFrontmatter & BlogFrontmatter,
  'blurDataURL' | 'image' | 'title'
> & {
  overlay?: JSX.Element[] | JSX.Element;
};

const CardImage = ({ image, title, blurDataURL, overlay }: CardImage) => {
  return (
    <div className="relative">
      <Image
        placeholder="blur"
        blurDataURL={blurDataURL}
        src={image}
        alt={title}
        width={560}
        height={315}
        className="rounded-t-xl"
      />
      {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}
    </div>
  );
};

export type CardDate = Pick<
  ProjectFrontmatter & BlogFrontmatter,
  'publishedAt' | 'readingTime'
>;

const CardDate = ({ publishedAt, readingTime }: CardDate) => {
  return (
    <div className="mx-4 mt-4 mb-1 flex items-center gap-2 text-sm font-semibold text-slate-200">
      <span>{format(new Date(publishedAt), 'dd MMM yyyy')}</span>-
      <div className="flex items-center gap-1">
        <HiClock className="h-4 w-4" />
        <span>{readingTime.text}</span>
      </div>
    </div>
  );
};

export type CardText = Pick<BlogFrontmatter, 'title' | 'desc'>;

const CardText = ({ title, desc }: CardText) => {
  return (
    <>
      <h2 className="mx-4 mb-3 text-xl font-bold">{title}</h2>
      {desc && <p className="mx-4 mb-4 text-grey-300">{desc}</p>}
    </>
  );
};

export type CardFooter = Pick<
  ProjectFrontmatter & BlogFrontmatter,
  'slug' | 'title'
> & {
  checkTagged?: (tag: string) => boolean;
  icons?: Array<IconsList>;
  tags?: Array<string>;
};

const CardFooter = ({ icons, tags, slug, title, checkTagged }: CardFooter) => {
  const posts = useSWR<Record<string, Post>>(`/api/posts/${slug}`);
  const discussions = useSWR<MappedDiscussion[]>('/api/github/discussions');
  const isLoading = posts.isLoading || discussions.isLoading;
  const summedReactions = useMemo(() => {
    if (isLoading || !posts?.data?.post.reactions) return 0;
    let sum = 0;
    Object.values(posts.data.post.reactions).forEach((val) => {
      sum += val;
    });

    return sum;
  }, [isLoading, posts?.data?.post?.reactions]);

  return (
    <div className="mx-4 mt-auto">
      {icons && <Icons icons={icons} checkTagged={checkTagged} />}
      {tags && (
        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className={clsx(
                'rounded-full border-2 border-grey-800 px-3 py-1 text-sm',
                {
                  'border-primary-main text-primary-main': checkTagged?.(tag),
                }
              )}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <ul
        className={clsx(
          'mt-6 flex h-8 items-center justify-center gap-4 rounded-lg px-4 py-1.5 font-mono text-sm text-grey-300',
          {
            'animate-pulse bg-grey-800': isLoading || !posts?.data,
          },
          { 'bg-primary-dark': !isLoading || posts?.data }
        )}
      >
        {!isLoading && posts?.data && (
          <>
            <li className="flex items-center gap-1">
              <AiFillEye className="h-4 w-4" />
              {posts.data.post.count}
            </li>
            <li className="flex items-center gap-1">
              <FaCommentDots className="h-4 w-4" />
              {discussions.data?.find((discussion) => {
                return discussion.title === title;
              })?.numberOfComments || 0}
            </li>
            <li className="flex items-center gap-1">
              <MdFavorite className="h-4 w-4" /> {summedReactions}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

Card.Text = CardText;
Card.Date = CardDate;
Card.Image = CardImage;
Card.Footer = CardFooter;
