import { BlogWithMetaData, ProjectWithMetaData } from 'types/frontmatters';

export const sortByViews = (
  contentA: BlogWithMetaData | ProjectWithMetaData,
  contentB: BlogWithMetaData | ProjectWithMetaData
) => (contentA?.views ?? 0) - (contentB?.views ?? 0);
