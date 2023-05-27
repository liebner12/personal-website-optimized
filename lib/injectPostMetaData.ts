import readingTime from 'reading-time';
import { getAllPosts } from './getAllPosts';
import { getDiscussions } from './getDiscussions';
import {
  BlogFrontmatter,
  Post,
  PostWithMeta,
  ProjectFrontmatter,
} from 'types/frontmatters';

export async function injectPostMetaData<
  T extends BlogFrontmatter | ProjectFrontmatter
>(posts: Post<T | T[]>) {
  const postsMetaData = await getAllPosts();
  const discussions = await getDiscussions();
  const injectData = (fm: Post<T>): Post<PostWithMeta> => {
    const post = postsMetaData.find(({ slug }) => slug === fm.slug);
    const numberOfComments =
      discussions?.find((discussion) => {
        return discussion.title === fm.title;
      })?.numberOfComments || 0;

    if (post) {
      return {
        ...fm,
        readingTime: readingTime(fm.markdown),
        views: post.count,
        reactions: post.reactions,
        numberOfComments,
      };
    }

    return {
      ...fm,
      views: 0,
      reactions: null,
      numberOfComments: 0,
      readingTime: readingTime(fm.markdown),
    };
  };

  if (posts instanceof Array<Post<T>>) {
    return posts.map((fm) => injectData(fm));
  }

  return injectData(posts);
}
