import fs from 'fs';
import path from 'path';

export const fetchProjectsSlugs = () =>
  fs.promises.readdir(path.join(process.cwd(), 'data/projects'));
