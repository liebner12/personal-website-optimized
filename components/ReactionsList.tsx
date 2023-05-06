'use client';
import { useContext } from 'react';
import Image from 'next/image';
import { PostContext } from './PostProvider';
import { Tooltip } from './Tooltip';
import {
  ReactionsKeys,
  REACTIONS_LIST_SM,
  REACTIONS_PRIORITIES,
} from 'data/constants';
import { Reaction } from 'lib/getPost';

export const ReactionsList = () => {
  const { reactions, isLoading } = useContext(PostContext);
  return (
    <>
      {isLoading && (
        <div className="mt-4 h-6 w-80 animate-pulse rounded-full bg-grey-800" />
      )}
      {reactions && (
        <ul className="mt-4 flex flex-wrap gap-6d lg:gap-8">
          {(Object.entries(reactions) as [ReactionsKeys, Reaction][])
            .filter(([, { count }]) => count)
            .sort(
              ([a], [b]) => REACTIONS_PRIORITIES[a] - REACTIONS_PRIORITIES[b]
            )
            .map(([key, reaction]) => (
              <Tooltip content={key} key={key} size="sm" tabIndex={-1}>
                <div className="flex cursor-default items-center gap-0.5 text-2xld">
                  <Image
                    src={REACTIONS_LIST_SM[key]}
                    alt={key}
                    width={32}
                    height={32}
                  />
                  <span className="text-lg text-white">{reaction.count}</span>
                </div>
              </Tooltip>
            ))}
        </ul>
      )}
    </>
  );
};
