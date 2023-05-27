import { ReadTimeResults } from 'reading-time';
import { Blog } from './blogs';
import { Project } from './projects';
import { ReactionsType } from 'data/constants';

export type ContentType = 'blog' | 'projects';

export type BlogFrontmatter = Blog & {
  slug: string;
  blurDataURL: string;
  content: string;
  markdown: string;
};

export type BlogWithMetaData = BlogFrontmatter & {
  views: number;
  numberOfComments: number;
  reactions: ReactionsType | null;
  readingTime: ReadTimeResults;
};

export type ProjectFrontmatter = Project & {
  slug: string;
  blurDataURL: string;
  content: string;
  markdown: string;
};

export type ProjectWithMetaData = ProjectFrontmatter & {
  views: number;
  numberOfComments: number;
  reactions: ReactionsType | null;
  readingTime: ReadTimeResults;
};

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter;

export type PickPostWithMetaData<T extends ContentType> = T extends 'blog'
  ? BlogWithMetaData
  : ProjectWithMetaData;

export type PostWithFrontmatter = ProjectFrontmatter | BlogFrontmatter;
export type PostFrontmatter<T> = T;

export type PostWithMeta = ProjectWithMetaData | BlogWithMetaData;

export type Post<T> = T;
