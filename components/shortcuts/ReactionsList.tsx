'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Tooltip } from '../Tooltip';
import {
  ReactionsKeys,
  REACTIONS_LIST_SM,
  REACTIONS_PRIORITIES,
  ReactionsType,
} from 'data/constants';
import supabase from 'lib/supabase';

export const ReactionsList = async ({
  reactions,
}: {
  reactions: ReactionsType;
}) => {
  const [clientReactions, setClientReactions] = useState(reactions);

  useEffect(() => {
    const channel = supabase
      .channel('*')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'posts' },
        (payload) => setClientReactions(payload.new.reactions)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [clientReactions]);

  if (!reactions) {
    return null;
  }

  return (
    <ul className="mt-4 flex flex-wrap gap-6d lg:gap-8">
      {(Object.entries(clientReactions) as [ReactionsKeys, number][])
        .filter(([, count]) => count)
        .sort(([a], [b]) => REACTIONS_PRIORITIES[a] - REACTIONS_PRIORITIES[b])
        .map(([key, value]) => (
          <Tooltip content={key} key={key} size="sm" tabIndex={-1}>
            <div className="flex cursor-default items-center gap-0.5 text-2xld">
              <Image
                src={REACTIONS_LIST_SM[key]}
                alt={key}
                width={32}
                height={32}
                fetchPriority="high"
              />
              <span className="text-lg text-white">{value}</span>
            </div>
          </Tooltip>
        ))}
    </ul>
  );
};
