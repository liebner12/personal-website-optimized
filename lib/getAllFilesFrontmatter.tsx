import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getPlaiceholder } from 'plaiceholder';
import readingTime from 'reading-time';
import { getFileByName } from './getFile';
import { getFiles } from './getFiles';
import { ContentType, PickFrontmatter } from 'types/frontmatters';
import { CustomImage } from 'components/post/CustomImage';
import { CloudinaryImage } from 'components/post/CloudinaryImage';
import { Icons } from 'components/Icons';
import { GridCols } from 'components/post/GridCols';
import { CustomCode } from 'components/post/CustomCode';

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = getFiles(type);
  const formatFiles = files.map(async (filename) => {
    const markdown = getFileByName(type, filename);

    const { frontmatter, content } = await compileMDX({
      source: markdown,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            rehypePrism,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ['hash-anchor'],
                  ariaHidden: true,
                },
              },
            ],
          ],
        },
      },
      components: {
        CustomImage: CustomImage,
        CloudinaryImage: CloudinaryImage,
        Icons: Icons,
        GridCols: GridCols,
        code: (props) => <CustomCode {...props} />,
      },
    });

    const { base64 } = await getPlaiceholder(
      (frontmatter as unknown as PickFrontmatter<T>).image,
      { size: 10 }
    );

    return {
      ...(frontmatter as unknown as PickFrontmatter<T>),
      slug: filename.replace('.mdx', ''),
      readingTime: readingTime(markdown),
      blurDataURL: base64,
      content,
      markdown,
    };
  });

  const formattedFiles = await Promise.all(formatFiles);

  return formattedFiles;
}
