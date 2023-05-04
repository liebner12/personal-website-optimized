import type { NextApiRequest, NextApiResponse } from 'next';
import { getPost, Post, registerReaction, registerView } from 'lib/getPost';

interface Data {
  message?: string;
  status?: number;
  post?: Post;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const slug = req.query.slug?.toString();

  if (!slug) {
    return res.status(400).json({ message: `invalid slug` });
  }

  if (req.method == 'POST') {
    await registerView(slug);
  }

  if (req.method == 'PUT') {
    await registerReaction(slug, req.body);
  }

  const post = await getPost(slug);
  return res.status(200).json({ post });
}
