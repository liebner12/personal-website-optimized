'use client';
import { Card } from 'components/Card';
import { List } from 'components/containers/List';
import { SearchContainer } from 'components/search/SerachContainer';
import { useSelectedPosts } from 'hooks/useSelectedPosts';
import { TagsType } from 'lib/getTags';
import { theme } from 'tailwind.config';
import { ContentType, Post, PostWithMeta } from 'types/frontmatters';
import { checkTagged } from 'utils/checkTagged';

export function PostsContainer<T extends PostWithMeta>({
  posts,
  tags,
  type,
}: {
  posts: Post<T>[];
  tags: TagsType | string[];
  type: ContentType;
}) {
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(posts, type);

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
      <List
        isEmpty={filteredPosts.length === 0}
        color={type === 'projects' ? theme.colors.projects : theme.colors.blog}
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
            numberOfComments,
            views,
            reactions,
            ...other
          }) => {
            let numberOfReactions = 0;
            Object.values(reactions || {}).forEach((val) => {
              numberOfReactions += val;
            });

            return (
              <Card endpoint={type} slug={slug} key={slug}>
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
                  tags={'tags' in other ? other.tags : undefined}
                  icons={'icons' in other ? other.icons : undefined}
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
}
