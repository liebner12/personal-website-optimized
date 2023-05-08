import { notFound } from 'next/navigation';
import { ShortcutsBar } from 'components/shortcuts/ShortcutsBar';
import { PostHeader } from 'components/post/PostHeader';
import { Container } from 'components/containers/Container';
import { PostFooter } from 'components/post/PostFooter';
import { getFiles } from 'lib/getFiles';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';
import { PostBody } from 'components/post/PostBody';

export async function generateStaticParams() {
  return getFiles('projects').map((file) => ({
    slug: file.split('.').slice(0, -1).join(''),
  }));
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
    blurDataURL,
    content,
    markdown,
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
          <PostHeader
            slug={slug}
            title={title}
            url={url}
            readingTime={readingTime}
            repository={repository}
            publishedAt={publishedAt}
            image={image}
            blurDataURL={blurDataURL}
            href="/projects"
          />
          <ShortcutsBar content={markdown} slug={slug} type="projects" />
          <PostBody content={content} />
        </div>
      </Container>
      <PostFooter title={title} type="projects" />
    </div>
  );
}
