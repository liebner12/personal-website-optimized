import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { getPost, Post, registerReaction, registerView } from 'lib/getPost';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = await getPost(params.slug);
  return NextResponse.json(post);
}
