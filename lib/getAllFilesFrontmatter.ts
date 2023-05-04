import { serialize } from 'next-mdx-remote/serialize';
import { getPlaiceholder } from 'plaiceholder';
import readingTime from 'reading-time';
import { getFileByName } from './getFile';
import { getFiles } from './getFiles';
import { ContentType, PickFrontmatter } from 'types/frontmatters';

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = getFiles(type);
  const formatFiles = files.map(async (filename) => {
    const markdown = getFileByName(type, filename);

    const { frontmatter, compiledSource } = await serialize(markdown, {
      parseFrontmatter: true,
    });

    const { base64 } = await getPlaiceholder((frontmatter as any).image, {
      size: 10,
    });

    return {
      ...(frontmatter as unknown as PickFrontmatter<T>),
      slug: filename.replace('.mdx', ''),
      readingTime: readingTime(compiledSource),
      blurDataURL: base64,
    };
  });

  const formattedFiles = await Promise.all(formatFiles);

  return formattedFiles;
}
