import { getFileByName } from './getFile';
import { getFiles } from './getFiles';
import { getMDXContent } from './getMDXContent';
import { injectPostMetaData } from './injectPostMetaData';
import { ContentType } from 'types/frontmatters';

export async function getAllFilesFrontmatter<T extends ContentType>(
  type: T,
  shouldFillMetaData = false
) {
  const files = getFiles(type);
  const formatFiles = files.map(async (filename) => {
    const markdown = getFileByName(type, filename);

    return getMDXContent(markdown, filename.split('.').slice(0, -1).join());
  });

  const formattedFiles = await Promise.all(formatFiles);

  if (shouldFillMetaData) {
    return await injectPostMetaData(formattedFiles);
  }

  return formattedFiles;
}
