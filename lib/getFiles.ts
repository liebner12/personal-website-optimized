import { readdirSync } from 'fs';
import { join } from 'path';
import { ContentType } from 'types/frontmatters';

export const getFiles = (type: ContentType) => {
  return readdirSync(join('data', type));
};
