'use client';
import Giscus from '@giscus/react';

export const Comments = ({
  title,
  type,
}: {
  title: string;
  type: 'projects' | 'blog';
}) => {
  return (
    <Giscus
      id="comments"
      repo="liebner12/personal-website"
      repoId="R_kgDOG77VHA"
      category="General"
      categoryId="DIC_kwDOG77VHM4CUJds"
      mapping="specific"
      term={title}
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme={
        type === 'blog'
          ? 'https://michal-liebner.vercel.app/styles/comments-blog.css'
          : 'https://michal-liebner.vercel.app/styles/comments-projects.css'
      }
      lang="en"
      loading="lazy"
    />
  );
};
