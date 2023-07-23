import { notFound } from 'next/navigation';
import { getFileBySlug } from './getFile';
import { getMDXContent } from './getMDXContent';
import { injectPostMetaData } from './injectPostMetaData';
import { ContentType } from 'types/frontmatters';

export async function getFileBySlugFrontmatter(
  type: ContentType,
  slug: string,
  shouldFillMetaData = true
) {
  let markdown;
  try {
    markdown = getFileBySlug(type, slug);
  } catch (e) {
    notFound();
  }

  const formattedFile = await getMDXContent(markdown, slug);

  if (shouldFillMetaData) {
    const injectedPost = await injectPostMetaData(formattedFile);
    return injectedPost;
  }

  return formattedFile;
}
