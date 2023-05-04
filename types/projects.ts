import { InjectedViews, ProjectFrontmatter } from './frontmatters';
import { IconsList } from 'components';

export type Project = {
  title: string;
  image: string;
  desc: string;
  tags: Array<IconsList>;
  publishedAt: string;
  lastUpdated?: string;
  repository: string;
  url?: string;
};

export type ProjectWithMeta = ProjectFrontmatter & InjectedViews;
