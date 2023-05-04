import { BlogFrontmatter, ProjectFrontmatter } from 'types';

export const sortByViews = (
  contentA: BlogFrontmatter | ProjectFrontmatter,
  contentB: BlogFrontmatter | ProjectFrontmatter
) => (contentA?.views ?? 0) - (contentB?.views ?? 0);
