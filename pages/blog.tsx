import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  Seo,
  Container,
  List,
  SearchContainer,
  Card,
  Heading,
} from 'components';
import { getTags, getAllFilesFrontmatter } from 'lib';
import { useSelectedPosts, useInjectContent, usePushView } from 'hooks';
import { checkTagged, sortByDate } from 'utils';
import { theme } from 'tailwind.config';

const description = 'Thoughts on modern development and web standards';

const Blog = ({
  blogs,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const populatedPosts = useInjectContent(blogs);
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(populatedPosts, 'blog');
  usePushView('blog');

  return (
    <>
      <Seo templateTitle="Blog" description={description} />
      <Container isGrid>
        <Heading className="col-span-1 mb-8 lg:col-span-8" size="sm">
          <span className="text-primary-main">Thoughts</span> on modern
          development and web
          <span className="text-primary-main"> standards</span>
        </Heading>
        <SearchContainer
          toggleTag={toggleTag}
          tags={tags}
          sortBy={sortBy}
          setSortBy={setSortBy}
          search={search}
          setSearch={setSearch}
        />
        <List isEmpty={filteredPosts.length === 0} color={theme.colors.blog}>
          {filteredPosts.map(
            ({
              slug,
              title,
              desc,
              image,
              blurDataURL,
              publishedAt,
              readingTime,
              tags,
            }) => (
              <Card slug={slug} key={slug} layoutId={slug}>
                <Card.Image
                  title={title}
                  image={image}
                  blurDataURL={blurDataURL}
                />
                <Card.Date
                  publishedAt={publishedAt}
                  readingTime={readingTime}
                />
                <Card.Text title={title} desc={desc} />
                <Card.Footer
                  title={title}
                  slug={slug}
                  tags={tags}
                  checkTagged={(tag) => checkTagged(tags, tag, search)}
                />
              </Card>
            )
          )}
        </List>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllFilesFrontmatter('blog');

  return {
    props: {
      tags: getTags(files),
      blogs: files.sort(sortByDate),
    },
  };
};

export default Blog;
