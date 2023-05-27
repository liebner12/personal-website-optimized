'use client';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { HiClock } from 'react-icons/hi';
import clsx from 'clsx';
import { FaCommentDots } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { Icons, IconsList } from './Icons';
import {
  BlogFrontmatter,
  BlogWithMetaData,
  ProjectFrontmatter,
  ProjectWithMetaData,
} from 'types/frontmatters';

type Card = Pick<ProjectFrontmatter & BlogFrontmatter, 'slug'> & {
  children: JSX.Element[] | JSX.Element;
  endpoint?: 'projects' | 'blog';
};

export const Card = ({ slug, children, endpoint = 'blog' }: Card) => {
  return (
    <li className="h-full">
      <Link
        href={`/${endpoint}/${slug}`}
        className="focus-state focus-state-clean relative flex h-full flex-col rounded-xl bg-grey-900 pb-5"
      >
        {children}
      </Link>
    </li>
  );
};

export type CardImage = Pick<
  ProjectFrontmatter & BlogFrontmatter,
  'image' | 'title'
> & {
  overlay?: JSX.Element[] | JSX.Element;
  blurDataURL: string;
};

const CardImage = ({ image, title, overlay, blurDataURL }: CardImage) => {
  return (
    <div className="relative">
      <Image
        placeholder="blur"
        src={image}
        alt={title}
        width={560}
        height={315}
        className="rounded-t-xl"
        blurDataURL={blurDataURL}
      />
      {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}
    </div>
  );
};

export type CardDate = Pick<
  ProjectWithMetaData & BlogWithMetaData,
  'publishedAt' | 'readingTime'
>;

const CardDate = ({ publishedAt, readingTime }: CardDate) => {
  return (
    <div className="mx-4 mb-1 mt-4 flex items-center gap-2 text-sm font-semibold text-slate-200">
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
  ProjectWithMetaData & BlogWithMetaData,
  'slug' | 'title' | 'numberOfComments' | 'views'
> & {
  checkTagged?: (tag: string) => boolean;
  icons?: Array<IconsList>;
  tags?: Array<string>;
  numberOfComments?: number;
  numberOfReactions?: number;
};

const CardFooter = ({
  icons,
  tags,
  checkTagged,
  views,
  numberOfReactions,
  numberOfComments,
}: CardFooter) => {
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
          'mt-6 flex h-8 items-center justify-center gap-4 rounded-lg bg-primary-dark px-4 py-1.5 font-mono text-sm text-grey-300'
        )}
      >
        <li className="flex items-center gap-1">
          <AiFillEye className="h-4 w-4" />
          {views}
        </li>
        <li className="flex items-center gap-1">
          <FaCommentDots className="h-4 w-4" />
          {numberOfComments}
        </li>
        <li className="flex items-center gap-1">
          <MdFavorite className="h-4 w-4" /> {numberOfReactions}
        </li>
      </ul>
    </div>
  );
};

Card.Text = CardText;
Card.Date = CardDate;
Card.Image = CardImage;
Card.Footer = CardFooter;
