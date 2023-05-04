import { Tag } from './Tag';
import { SkipToContent } from 'components';
import { TagsType } from 'lib';

export const TagsList = ({
  tags,
  onClick,
  checkTagged,
}: {
  tags: TagsType;
  onClick: (item: string) => void;
  checkTagged: (tag: string) => boolean;
}) => {
  return (
    <SkipToContent id="Skip tags">
      <ul className="relative flex flex-wrap gap-4 gap-y-4">
        {tags.map((item) => (
          <Tag
            key={item}
            name={item}
            onClick={() => onClick(item)}
            checkTagged={checkTagged}
          />
        ))}
      </ul>
    </SkipToContent>
  );
};
