'use client';
import { useEffect, useState } from 'react';
import { BLOG_SORT_LIST } from 'data/constants';
import { ContentType, PickPostWithMetaData } from 'types/frontmatters';
import { sortByDate } from 'utils/sortByDate';

const sortPosts = <T extends ContentType>(
  sortBy: string,
  results: Array<PickPostWithMetaData<T>>
) => {
  switch (sortBy) {
    case 'views':
      return results.sort((a, b) => (b?.views ?? 0) - (a?.views ?? 0));
    default:
      return results.sort(sortByDate);
  }
};

export const useSelectedPosts = <T extends ContentType>(
  posts: Array<PickPostWithMetaData<T>>,
  type: T
) => {
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState(BLOG_SORT_LIST[0]);
  const [filteredPosts, setFilteredPosts] =
    useState<Array<PickPostWithMetaData<T>>>(posts);

  useEffect(() => {
    const results = posts.filter((post) => {
      const formattedSearch = search.toLowerCase();
      return (
        post.title.toLowerCase().includes(formattedSearch) ||
        ('desc' in post && post.desc.toLowerCase().includes(formattedSearch)) ||
        formattedSearch
          .split(' ')
          .every((tag) =>
            'icons' in post
              ? post.icons.join(' ').toLowerCase().includes(tag.toLowerCase())
              : post.tags.join(' ').toLowerCase().includes(tag.toLowerCase())
          )
      );
    });

    const sortedPosts = sortPosts(sortBy, results);

    setFilteredPosts(sortedPosts);
  }, [search, sortBy, posts, type]);

  const toggleTag = (tag: string) => {
    if (search.includes(tag)) {
      setSearch((search) =>
        search
          .split(' ')
          .filter((word) => word !== tag)
          ?.join(' ')
      );

      return;
    }

    setSearch((search) => (search !== '' ? `${search.trim()} ${tag}` : tag));
  };

  return { search, setSearch, filteredPosts, sortBy, setSortBy, toggleTag };
};
