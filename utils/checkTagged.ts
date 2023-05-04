export const checkTagged = (
  tags: Array<string>,
  tag: string,
  search: string
) => {
  return (
    tags.includes(tag) &&
    search.toLowerCase().split(' ').includes(tag.toLowerCase())
  );
};
