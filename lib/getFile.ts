import { readFileSync } from 'fs';
import path from 'path';
import { ContentType } from 'types/frontmatters';

export const getFileByName = (type: ContentType, slug: string) =>
  readFileSync(path.join(`app/${type}/[slug]`, slug), 'utf-8');

export const getFileBySlug = (type: ContentType, slug: string) =>
  readFileSync(path.join(`app/${type}/[slug]`, slug + '.mdx'), 'utf-8');
