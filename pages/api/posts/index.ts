import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts, ViewCount } from 'lib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ViewCount>>
): Promise<void> {
  const posts = await getAllPosts();
  return res.status(200).json(posts);
}
