import { generateRssFeed } from 'lib/generateRssFeed';

export async function GET() {
  const feed = await generateRssFeed();
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
