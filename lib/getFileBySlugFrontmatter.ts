import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getPlaiceholder } from 'plaiceholder';
import { getFileBySlug } from './getFile';
import { ContentType, PickFrontmatter } from 'types/frontmatters';

export async function getFileBySlugFrontmatter<T extends ContentType>(
  type: T,
  slug: string
) {
  const markdown = getFileBySlug(type, slug);

  const mdxSource = await serialize(markdown, {
    parseFrontmatter: true,
    mdxOptions: {
      development: false,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor'],
            },
          },
        ],
      ],
    },
  });

  const { base64 } = await getPlaiceholder(
    (mdxSource.frontmatter as any).image,
    { size: 10 }
  );

  return {
    frontmatter: {
      ...mdxSource.frontmatter,
      blurDataURL: base64,
    } as unknown as PickFrontmatter<T>,
    mdxSource,
  };
}
