import { StaticImageData } from 'next/image';
import { InjectedViews, ProjectFrontmatter } from './frontmatters';
import { IconsList } from 'components';

export type Project = {
  slug: string;
  title: string;
  image: string | StaticImageData;
  desc: string;
  tags: Array<IconsList>;
  publishedAt: string;
  lastUpdated?: string;
  repository: string;
  url?: string;
};

export type ProjectWithMeta = ProjectFrontmatter & InjectedViews;
