import { readdirSync } from 'fs';
import { join } from 'path';
import { ContentType } from 'types/frontmatters';

export const getFiles = (type: ContentType) => {
  return readdirSync(join(process.cwd(), 'data', type));
};
