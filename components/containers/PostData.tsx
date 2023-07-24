'use client';
import { useState } from 'react';
import { ReadTimeResults } from 'reading-time';
import { PostHeader } from 'components/post/PostHeader';
import { ShortcutsBar } from 'components/shortcuts/ShortcutsBar';
import { Heading } from 'components/shortcuts/TableOfContents';
import { ReactionsType } from 'data/constants';

type Props = {
  slug: string;
  title: string;
  url?: string;
  readingTime: ReadTimeResults;
  repository?: string;
  publishedAt: string;
  image: string;
  blurDataURL: string;
  views: number;
  reactions: ReactionsType | null;
  toc: Heading[];
  type: 'projects' | 'blog';
};

export const PostData = ({
  slug,
  title,
  url,
  readingTime,
  repository,
  publishedAt,
  image,
  blurDataURL,
  views,
  reactions,
  toc,
  type,
}: Props) => {
  const [currentReactions, setCurrentReactions] = useState(reactions);

  return (
    <>
      <PostHeader
        slug={slug}
        title={title}
        url={url}
        readingTime={readingTime}
        repository={repository}
        publishedAt={publishedAt}
        image={image}
        blurDataURL={blurDataURL}
        views={views}
        reactions={currentReactions}
        href={`/${type}`}
      />
      <ShortcutsBar
        toc={toc}
        slug={slug}
        type={type}
        reactions={currentReactions}
        setReactions={setCurrentReactions}
      />
    </>
  );
};
