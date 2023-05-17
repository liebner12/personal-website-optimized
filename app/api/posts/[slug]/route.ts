import { NextResponse } from 'next/server';
import { getPost, registerReaction } from 'lib/getPost';

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const res = await request.json();
  await registerReaction(params.slug, res);
  return NextResponse.json({ res });
}

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const response = await getPost(params.slug);
  if (response) {
    return NextResponse.json({ response });
  }

  return NextResponse.json({ error: 'error' });
}
