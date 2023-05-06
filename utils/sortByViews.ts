import { BlogFrontmatter, ProjectFrontmatter } from 'types/frontmatters';

export const sortByViews = (
  contentA: BlogFrontmatter | ProjectFrontmatter,
  contentB: BlogFrontmatter | ProjectFrontmatter
) => (contentA?.views ?? 0) - (contentB?.views ?? 0);
