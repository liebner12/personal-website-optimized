import { getPlaiceholder } from 'plaiceholder';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import { getFileByName } from './getFile';
import { getMarkdownFiles } from './getMarkdownFiles';
import { getMdxContent } from './getMdxContent';
import { ContentType, PickFrontmatter } from 'types/frontmatters';

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = getMarkdownFiles(type);
  const formatFiles = files.map(async (filename) => {
    const markdown = getFileByName(type, filename);
    const { content, data } = matter(markdown);
    const { base64 } = await getPlaiceholder(data.image, {
      size: 10,
    });
    const mdxContent = getMdxContent(filename.replace('.mdx', ''));

    return {
      ...(data as PickFrontmatter<T>),
      slug: filename.replace('.mdx', ''),
      readingTime: readingTime(content),
      blurDataURL: base64,
      Content: mdxContent,
    };
  });

  const formattedFiles = await Promise.all(formatFiles);

  return formattedFiles;
}
