import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';
import { BlogFrontmatter, ProjectFrontmatter } from 'types/frontmatters';

const URL = 'https://localhost:3000';

export default async function sitemap() {
  const posts = (
    (await getAllFilesFrontmatter('blog')) as BlogFrontmatter[]
  ).map(({ slug, publishedAt }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: publishedAt,
  }));

  const projects = (
    (await getAllFilesFrontmatter('projects')) as ProjectFrontmatter[]
  ).map(({ slug, publishedAt }) => ({
    url: `${URL}/projects/${slug}`,
    lastModified: publishedAt,
  }));

  const routes = [
    '',
    '/projects',
    '/blog',
    '/contanct',
    '/about',
    '/privacy',
    '/newsletter',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...projects];
}
