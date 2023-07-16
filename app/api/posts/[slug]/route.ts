import { NextResponse } from 'next/server';
import { getPost, registerReaction, registerView } from 'lib/getPost';

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

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await registerView(params.slug);
    return NextResponse.json({ res: 'ok' });
  } catch (e) {
    console.log('aaa', e);
    return NextResponse.json({ e });
  }
}
