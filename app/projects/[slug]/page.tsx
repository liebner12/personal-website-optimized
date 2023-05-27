import { Metadata } from 'next';
import { ShortcutsBar } from 'components/shortcuts/ShortcutsBar';
import { PostHeader } from 'components/post/PostHeader';
import { Container } from 'components/containers/Container';
import { PostFooter } from 'components/post/PostFooter';
import { getFiles } from 'lib/getFiles';
import { PostBody } from 'components/post/PostBody';
import { getFileBySlugFrontmatter } from 'lib/getFileBySlugFrontmatter';
import { ProjectWithMetaData } from 'types/frontmatters';

export async function generateStaticParams() {
  return getFiles('projects').map((file) => ({
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
    'projects',
    slug
  )) as ProjectWithMetaData;

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
    'projects',
    slug
  )) as ProjectWithMetaData;

  const {
    title,
    url,
    readingTime,
    repository,
    image,
    publishedAt,
    blurDataURL,
    content,
    markdown,
    views,
    reactions,
  } = project;

  return (
    <div>
      <Container className="theme-projects !pb-0 !pt-0 md:!pt-[5%]">
        <div
          className="relative lg:grid lg:gap-x-16"
          style={{
            gridTemplateColumns: 'minmax(0, 3fr) minmax(225px, 1fr)',
          }}
        >
          <PostHeader
            slug={slug}
            title={title}
            url={url}
            readingTime={readingTime}
            repository={repository}
            publishedAt={publishedAt}
            image={image}
            blurDataURL={blurDataURL}
            views={views}
            reactions={reactions}
            href="/projects"
          />
          <ShortcutsBar
            reactions={reactions}
            content={markdown}
            slug={slug}
            type="projects"
          />
          <PostBody content={content} />
        </div>
      </Container>
      <PostFooter title={title} type="projects" />
    </div>
  );
}
