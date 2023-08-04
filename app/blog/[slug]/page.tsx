import { Metadata } from 'next';
import { Container } from 'components/containers/Container';
import { PostFooter } from 'components/post/PostFooter';
import { PostBody } from 'components/post/PostBody';
import { getFileBySlugFrontmatter } from 'lib/getFileBySlugFrontmatter';
import { BlogWithMetaData } from 'types/frontmatters';
import { getFiles } from 'lib/getFiles';
import { PushView } from 'components/PushView';
import { PostData } from 'components/containers/PostData';
import { getHeadingsFromMdx } from 'lib/getHeadingsFromMdx';

export const revalidate = 0;

export async function generateStaticParams() {
  return getFiles('blog').map((file) => ({
    slug: file.split('.').slice(0, -1).join(''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = (await getFileBySlugFrontmatter(
    'blog',
    slug
  )) as BlogWithMetaData;

  const { title, desc, image, publishedAt } = project;
  return {
    title: { default: title, template: '%s | Michał Liebner' },
    description: desc,
    colorScheme: 'dark',
    applicationName: 'michal-liebner',
    creator: 'Michał Liebner',
    authors: [{ name: 'Michał Liebner' }],
    openGraph: {
      title: { default: title, template: '%s | Michał Liebner' },
      description: desc,
      url: `https://michal-liebner.vercel.app/projects/${slug}`,
      siteName: 'michal-liebner.vercel.app',
      images: [
        {
          url: image,
          width: 900,
          height: 506,
        },
      ],
      locale: 'en-US',
      type: 'article',
      publishedTime: publishedAt,
      authors: ['Michał Liebner'],
    },
  };
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = (await getFileBySlugFrontmatter(
    'blog',
    slug
  )) as BlogWithMetaData;

  const {
    title,
    readingTime,
    image,
    publishedAt,
    blurDataURL,
    content,
    views,
    reactions,
    markdown,
  } = project;

  const toc = getHeadingsFromMdx(markdown);

  return (
    <div>
      <PushView slug={slug} />
      <Container className="theme-blog !pb-0 !pt-0 md:!pt-[5%]">
        <div
          className="relative lg:grid lg:gap-x-16"
          style={{
            gridTemplateColumns: 'minmax(0, 3fr) minmax(225px, 1fr)',
          }}
        >
          <PostData
            slug={slug}
            title={title}
            readingTime={readingTime}
            publishedAt={publishedAt}
            image={image}
            blurDataURL={blurDataURL}
            views={views}
            reactions={reactions}
            toc={toc}
            type="blog"
          />
          <PostBody content={content} />
        </div>
      </Container>
      <PostFooter title={title} type="blog" />
    </div>
  );
}
