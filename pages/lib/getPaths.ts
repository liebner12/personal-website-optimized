export const getPaths = (files: Array<string>) => {
  return files.map((filename) => ({
    params: {
      post: filename.replace('.mdx', ''),
    },
  }));
};
