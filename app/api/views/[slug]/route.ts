import { NextResponse } from 'next/server';
import { registerView } from 'lib/getPost';

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
