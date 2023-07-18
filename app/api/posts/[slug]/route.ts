import { NextResponse } from 'next/server';
import { getPost, registerReaction } from 'lib/getPost';

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const res = await request.json();
  try {
    await registerReaction(params.slug, res);
    return NextResponse.json({ res });
  } catch (e) {
    return NextResponse.json({ e });
  }
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
