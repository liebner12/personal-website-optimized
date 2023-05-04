import { Project } from 'types';
import { Blog } from 'types/blogs';

export const sortByDate = (
  contentA: Blog | Project,
  contentB: Blog | Project
) =>
  new Date(contentB.lastUpdated ?? contentB.publishedAt).valueOf() -
  new Date(contentA.lastUpdated ?? contentA.publishedAt).valueOf();
