import { Comments } from 'components/Comments';
import { ShareTweetButton } from 'components/ShareTweetButton';

export const PostFooter = ({
  title,
  type,
}: {
  title: string;
  type: 'blog' | 'projects';
}) => {
  return (
    <div
      className="px-4 pb-24 md:px-12 lg:ml-32 lg:px-12 lg:pl-4 lg:pr-20 xl:ml-44"
      id="comments-github"
    >
      <div
        className="relative lg:grid lg:gap-12"
        style={{
          gridTemplateColumns: 'minmax(0, 3fr) minmax(250px, 1fr)',
        }}
      >
        <div>
          <div className="mb-12 flex justify-end">
            <ShareTweetButton />
          </div>
          <Comments title={title} type={type} />
        </div>
      </div>
    </div>
  );
};
