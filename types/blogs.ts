import { StaticImageData } from 'next/image';
import { BlogFrontmatter, InjectedViews } from './frontmatters';

export type Blog = {
  slug: string;
  title: string;
  desc: string;
  image: string | StaticImageData;
  tags: Array<string>;
  publishedAt: string;
  lastUpdated?: string;
};

export type BlogWithMeta = BlogFrontmatter & InjectedViews;
