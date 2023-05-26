export type Blog = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  tags: Array<string>;
  publishedAt: string;
  lastUpdated?: string;
};
