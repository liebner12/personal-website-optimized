import { IconsList } from 'components/Icons';
import { BlogWithMetaData, ProjectWithMetaData } from 'types/frontmatters';

export type TagsType = Array<IconsList>;

export function getTags(post: Array<BlogWithMetaData | ProjectWithMetaData>) {
  const allTags = post.flatMap((post) => {
    return 'tags' in post ? post?.tags : post?.icons;
  });

  return allTags.filter((item, index, self) => self.indexOf(item) == index);
}
