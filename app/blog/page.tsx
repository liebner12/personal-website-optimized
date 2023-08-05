import { Container } from 'components/containers/Container';
import { Heading } from 'components/Heading';
import { getTags } from 'lib/getTags';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';
import { PostsContainer } from 'components/post/PostsContainer';
import { BlogWithMetaData } from 'types/frontmatters';
import { sortByDate } from 'utils/sortByDate';
import { PushView } from 'components/PushView';

export const revalidate = 60;

export default async function Blogs() {
  const blogs = (await getAllFilesFrontmatter(
    'blog',
    true
  )) as BlogWithMetaData[];
  const tags = getTags(blogs);

  return (
    <>
      <PushView slug="blog" />
      <Container isGrid>
        <Heading className="fade-in col-span-1 mb-8 lg:col-span-8" size="sm">
          Embracing JavaScript: A
          <span className="text-primary-main"> Journey </span>from
          <span className="text-primary-main"> Novice</span> to
          <span className="text-primary-main"> Ninja</span>
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
