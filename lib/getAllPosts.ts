import { createClient } from '@supabase/supabase-js';
import { ReactionsType } from 'data/constants';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type PostsMetaData = Array<{
  slug: string;
  count: number;
  reactions: ReactionsType;
}>;

export const getAllPosts = async (): Promise<PostsMetaData> => {
  const { data: views } = await supabase
    .from('posts')
    .select('slug,count,reactions');

  if (!views) {
    return [];
  }

  return views;
};
