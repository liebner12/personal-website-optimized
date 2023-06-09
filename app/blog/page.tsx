import { Container } from 'components/containers/Container';
import { Heading } from 'components/Heading';
import { getTags } from 'lib/getTags';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';
import { PostsContainer } from 'components/post/PostsContainer';
import { ProjectWithMetaData } from 'types/frontmatters';
import { sortByDate } from 'utils/sortByDate';

export const revalidate = 3600;

export default async function Blogs() {
  const blogs = (await getAllFilesFrontmatter(
    'blog',
    true
  )) as ProjectWithMetaData[];
  const tags = getTags(blogs);

  return (
    <>
      <Container isGrid>
        <Heading className="col-span-1 mb-8 lg:col-span-8" size="sm">
          My personal<span className="text-primary-main"> journey</span> as a
          <span className="text-primary-main"> frontend</span> developer
        </Heading>
        <PostsContainer
          posts={blogs.sort(sortByDate)}
          tags={tags}
          type="blog"
        />
      </Container>
    </>
  );
}
