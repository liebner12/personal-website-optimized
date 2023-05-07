import { ReadTimeResults } from 'reading-time';
import { Blog, BlogWithMeta } from './blogs';
import { Project, ProjectWithMeta } from './projects';

export type ContentType = 'blog' | 'projects';

export type BlogFrontmatter = Blog & {
  slug: string;
  readingTime: ReadTimeResults;
  views?: number;
  blurDataURL: string;
  content?: string;
};

export type ProjectFrontmatter = Project & {
  slug: string;
  readingTime: ReadTimeResults;
  views?: number;
  blurDataURL: string;
  content?: string;
};

export type InjectedViews = { views?: number };

export type PostMeta = ProjectWithMeta | BlogWithMeta;

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter;

export type PickFrontmatterWithMeta<T extends ContentType> = T extends 'blog'
  ? BlogWithMeta
  : ProjectWithMeta;
