import { NextResponse } from 'next/server';
import { getPost, registerView } from 'lib/getPost';

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await registerView(params.slug);
    return NextResponse.json({ res: 'ok' });
  } catch (e) {
    return NextResponse.json({ e });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await getPost(params.slug);
    return NextResponse.json({ post });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
