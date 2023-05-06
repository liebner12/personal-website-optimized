import { notFound } from 'next/navigation';
import { PostHeader } from 'components/post/PostHeader';
import { Container } from 'components/containers/Container';
import { PostFooter } from 'components/post/PostFooter';
import { ShortcutsBar } from 'components/post/Shortcuts';
import { PostProvider } from 'components/PostProvider';
import { getMarkdownFiles } from 'lib/getMarkdownFiles';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';

export async function generateStaticParams() {
  return getMarkdownFiles('projects');
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const projects = await getAllFilesFrontmatter('projects');

  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return notFound();
  }

  const {
    title,
    url,
    readingTime,
    repository,
    image,
    publishedAt,
    Content,
    blurDataURL,
  } = project;

  return (
    <div>
      <Container className="theme-projects !pb-0 !pt-0 md:!pt-[5%]">
        <div
          className="relative lg:grid lg:gap-16"
          style={{
            gridTemplateColumns: 'minmax(0, 3fr) minmax(225px, 1fr)',
          }}
        >
          <PostProvider slug={slug}>
            <PostHeader
              title={title}
              url={url}
              readingTime={readingTime}
              repository={repository}
              publishedAt={publishedAt}
              image={image}
              blurDataURL={blurDataURL}
              href="/projects"
            />
            <ShortcutsBar />
          </PostProvider>
          <div className="mdx prose prose-invert col-start-1 row-start-2 mx-auto w-full pb-16">
            <Content />
          </div>
        </div>
      </Container>
      <PostFooter title={'title'} type="projects" />
    </div>
  );
}
