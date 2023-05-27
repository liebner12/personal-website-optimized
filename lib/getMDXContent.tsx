import { compileMDX } from 'next-mdx-remote/rsc';
import { getPlaiceholder } from 'plaiceholder';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { GridCols } from 'components/post/GridCols';
import { CustomImage } from 'components/post/CustomImage';
import { CloudinaryImage } from 'components/post/CloudinaryImage';
import { Icons } from 'components/Icons';
import { PostFrontmatter, PostWithFrontmatter } from 'types/frontmatters';
import { CustomCode } from 'components/post/CustomCode';

export async function getMDXContent<T extends PostWithFrontmatter>(
  markdown: string,
  slug: string
): Promise<PostFrontmatter<T>> {
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
    (frontmatter as unknown as PostFrontmatter<T>).image,
    { size: 10 }
  );

  return {
    ...(frontmatter as unknown as PostFrontmatter<T>),
    slug,
    blurDataURL: base64,
    content,
    markdown,
  };
}
