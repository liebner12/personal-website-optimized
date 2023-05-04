import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type ViewCount = { slug: string; count: number };

export const getAllPosts = async (): Promise<Array<ViewCount>> => {
  const { data: views } = await supabase.from('posts').select('slug,count');

  if (!views) {
    return [];
  }

  return views;
};
