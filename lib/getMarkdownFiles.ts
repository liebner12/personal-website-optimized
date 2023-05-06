import { readdirSync } from 'fs';
import path from 'path';
import { ContentType } from 'types/frontmatters';

export const getMarkdownFiles = (type: ContentType) => {
  const files = readdirSync(`app/${type}/[slug]`);

  return files.filter((file) => path.extname(file) === '.mdx');
};
