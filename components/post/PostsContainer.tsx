'use client';
import { Card } from 'components/Card';
import { List } from 'components/containers/List';
import { SearchContainer } from 'components/search/SerachContainer';
import { useSelectedPosts } from 'hooks/useSelectedPosts';
import { TagsType } from 'lib/getTags';
import { theme } from 'tailwind.config';
import { BlogFrontmatter, ProjectFrontmatter } from 'types/frontmatters';
import { checkTagged } from 'utils/checkTagged';

export const PostsContainer = ({
  posts,
  tags,
}: {
  posts: ProjectFrontmatter[] & BlogFrontmatter[];
  tags: TagsType;
}) => {
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(posts, 'projects');

  return (
    <>
      <SearchContainer
        toggleTag={toggleTag}
        tags={tags}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <List isEmpty={filteredPosts.length === 0} color={theme.colors.projects}>
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
            numberOfComments,
            views,
            reactions,
          }) => {
            let numberOfReactions = 0;
            Object.values(reactions || {}).forEach((val) => {
              numberOfReactions += val;
            });

            return (
              <Card endpoint="projects" slug={slug} key={slug}>
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
                  views={views}
                  numberOfComments={numberOfComments}
                  numberOfReactions={numberOfReactions}
                />
              </Card>
            );
          }
        )}
      </List>
    </>
  );
};
