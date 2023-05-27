import { getFileBySlug } from './getFile';
import { getMDXContent } from './getMDXContent';
import { injectPostMetaData } from './injectPostMetaData';
import { ContentType } from 'types/frontmatters';

export async function getFileBySlugFrontmatter(
  type: ContentType,
  slug: string,
  shouldFillMetaData = true
) {
  const markdown = getFileBySlug(type, slug);
  const formattedFile = await getMDXContent(markdown, slug);

  if (shouldFillMetaData) {
    const injectedPost = await injectPostMetaData(formattedFile);
    return injectedPost;
  }

  return formattedFile;
}
