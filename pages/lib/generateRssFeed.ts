import fs from 'fs';
import { Feed } from 'feed';
import { getAllFilesFrontmatter } from './getAllFilesFrontmatter';
import { meta } from 'data';

export async function generateRssFeed() {
  const blogs = await getAllFilesFrontmatter('blog');
  const siteURL = 'https://michal-liebner.vercel.app';
  const date = new Date();
  const author = {
    name: 'Michał Liebner',
    email: 'liebner.michal@outlook.com',
    link: 'https://twitter.com/liebner12',
  };

  const feed = new Feed({
    ...meta,
    copyright: `All rights reserved ${date.getFullYear()}, Michał Liebner`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
    },
  });

  blogs.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.desc,
      content: post.desc,
      author: [author],
      contributor: [author],
      date: new Date(post.publishedAt),
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}
