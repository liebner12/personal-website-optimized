'use client';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { ViewCount } from 'lib/getAllPosts';
import { BlogWithMeta } from 'types/blogs';
import { BlogFrontmatter, ProjectFrontmatter } from 'types/frontmatters';
import { ProjectWithMeta } from 'types/projects';

export function useInjectContent(
  frontmatter: Array<BlogFrontmatter & ProjectFrontmatter>
) {
  const { data } = useSWR<Array<ViewCount>>('/api/posts');
  const [populatedContent, setPopulatedContent] =
    useState<Array<BlogWithMeta & ProjectWithMeta>>(frontmatter);

  useEffect(() => {
    if (data) {
      const mapped = frontmatter.map((fm) => {
        const views = data.find(({ slug }) => slug === fm.slug)?.count;

        return { ...fm, views };
      });

      setPopulatedContent(mapped);
    }
  }, [data, frontmatter]);

  return populatedContent;
}
