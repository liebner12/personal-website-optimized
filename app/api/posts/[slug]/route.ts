import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { registerReaction } from 'lib/getPost';

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const res = await request.json();
  try {
    await registerReaction(params.slug, res);
    revalidatePath(`/projects/${params.slug}`);
    return NextResponse.json({ res });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
