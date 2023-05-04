import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  CustomCode,
  CustomImage,
  GridCols,
  Icons,
  CloudinaryImage,
} from 'components';

export function PostBody({
  mdxSource,
}: {
  mdxSource: MDXRemoteSerializeResult;
}) {
  return (
    <section>
      <article className="mdx prose prose-invert mx-auto w-full pb-16">
        <MDXRemote
          {...mdxSource}
          components={{
            CustomImage,
            CloudinaryImage,
            Icons,
            code: (props) => <CustomCode {...props} />,
            GridCols,
          }}
        />
      </article>
    </section>
  );
}
