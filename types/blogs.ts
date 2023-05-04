import { BlogFrontmatter, InjectedViews } from './frontmatters';

export type Blog = {
  title: string;
  desc: string;
  image: string;
  tags: Array<string>;
  publishedAt: string;
  lastUpdated?: string;
};

export type BlogWithMeta = BlogFrontmatter & InjectedViews;
