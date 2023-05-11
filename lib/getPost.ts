import { createClient } from '@supabase/supabase-js';
import { ReactionsType, ReactionsKeys } from 'data/constants';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type Reaction = { count: number; hasBeenSelected: boolean };

export type Post =
  | { reactions: Record<ReactionsKeys, number>; count: number }
  | Record<string, never>;

export const getPost = async (slug: string): Promise<Post> => {
  const { data, error } = await supabase
    .from('posts')
    .select('count, reactions')
    .match({ slug: slug })
    .single();

  if (error && error.details?.includes(`0 rows`)) {
    await supabase
      .from(`posts`)
      .insert({ slug: slug, count: 1 }, { count: `exact` })
      .single();
  }

  if (!data) {
    return {};
  }

  return data;
};

export const registerView = (slug: string) =>
  supabase.rpc('increment_views', {
    page_slug: slug,
  });

export const registerReaction = (slug: string, reactions: ReactionsType) => {
  return supabase
    .from('posts')
    .update({ reactions: reactions })
    .eq('slug', slug);
};
