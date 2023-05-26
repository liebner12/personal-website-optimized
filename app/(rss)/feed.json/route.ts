import { generateRssFeed } from 'lib/generateRssFeed';

export async function GET() {
  const feed = await generateRssFeed();
  return new Response(feed.json1(), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
