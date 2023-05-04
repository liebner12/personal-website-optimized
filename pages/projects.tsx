import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  Container,
  List,
  SearchContainer,
  Card,
  Seo,
  Heading,
} from 'components';
import { getAllFilesFrontmatter, getTags } from 'lib';
import { checkTagged, sortByDate } from 'utils';
import { useInjectContent, usePushView, useSelectedPosts } from 'hooks';
import { theme } from 'tailwind.config';

const description = 'My personal journey as a frontend developer.';

const Projects = ({
  projects,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const populatedPosts = useInjectContent(projects);
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(populatedPosts, 'projects');
  usePushView('projects');

  return (
    <>
      <Seo templateTitle="Projects" description={description} />
      <Container isGrid>
        <Heading className="col-span-1 mb-8 lg:col-span-8" size="sm">
          My personal<span className="text-primary-main"> journey</span> as a
          <span className="text-primary-main"> frontend</span> developer
        </Heading>
        <SearchContainer
          toggleTag={toggleTag}
          tags={tags}
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <List
          isEmpty={filteredPosts.length === 0}
          color={theme.colors.projects}
        >
          {filteredPosts.map(
            ({
              slug,
              title,
              image,
              blurDataURL,
              publishedAt,
              readingTime,
              desc,
              tags,
            }) => (
              <Card endpoint="projects" slug={slug} key={slug} layoutId={slug}>
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
                  slug={slug}
                  icons={tags}
                  title={title}
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
  const files = await getAllFilesFrontmatter('projects');

  return {
    props: {
      tags: getTags(files),
      projects: files.sort(sortByDate),
    },
  };
};

export default Projects;
