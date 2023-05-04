import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import readingTime from 'reading-time';
import { getFileBySlugFrontmatter, getFiles, getPaths } from 'lib';
import {
  PostHeader,
  PostBody,
  Seo,
  Container,
  PostFooter,
  PostProvider,
  ShortcutsBar,
} from 'components';
import { StaticParams } from 'types';
import { usePushView } from 'hooks';

const Blog = ({
  frontmatter: { title, desc, image, blurDataURL, publishedAt },
  slug,
  mdxSource,
  readingTime,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  usePushView(slug);

  return (
    <>
      <Seo templateTitle={title} description={desc} image={image} />
      <div>
        <PostProvider slug={slug}>
          <Container className="!pb-0 !pt-0 md:!pt-[5%]">
            <div
              className="relative w-full lg:grid lg:gap-16"
              style={{
                gridTemplateColumns: 'minmax(0, 3fr) minmax(225px, 1fr)',
              }}
            >
              <ShortcutsBar />
              <div className="col-start-1 row-start-1">
                <PostHeader
                  title={title}
                  readingTime={readingTime}
                  publishedAt={publishedAt}
                  image={image}
                  blurDataURL={blurDataURL}
                  href="/blog"
                />
                <PostBody mdxSource={mdxSource} />
              </div>
            </div>
          </Container>
          <PostFooter title={title} type="blog" />
        </PostProvider>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFiles('blog');
  const paths = getPaths(files);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { post } = context.params as StaticParams;
  const { frontmatter, mdxSource } = await getFileBySlugFrontmatter(
    'blog',
    post
  );

  return {
    props: {
      frontmatter,
      slug: post,
      mdxSource,
      readingTime: readingTime(mdxSource.compiledSource),
    },
  };
};

export default Blog;
