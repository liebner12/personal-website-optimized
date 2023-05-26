import { ReadTimeResults } from 'reading-time';
import { Blog } from './blogs';
import { Project } from './projects';
import { ReactionsType } from 'data/constants';

export type ContentType = 'blog' | 'projects';

export type BlogFrontmatter = Blog & {
  slug: string;
  readingTime: ReadTimeResults;
  views: number;
  blurDataURL: string;
  content?: string;
  numberOfComments: number;
  reactions?: ReactionsType;
};

export type ProjectFrontmatter = Project & {
  slug: string;
  readingTime: ReadTimeResults;
  views: number;
  blurDataURL: string;
  content?: string;
  numberOfComments: number;
  reactions?: ReactionsType;
};

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter;
