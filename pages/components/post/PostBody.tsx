import { motion } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FADE_IN_SECOND } from 'data';
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
    <motion.section {...FADE_IN_SECOND}>
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
    </motion.section>
  );
}
