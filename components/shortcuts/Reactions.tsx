import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ReactionsKeys,
  REACTIONS_LIST,
  REACTIONS_PRIORITIES,
  ReactionsType,
} from 'data/constants';
import { Tooltip } from 'components/Tooltip';
import { Button } from 'components/Button';

export const Reactions = ({
  reactions,
  setReactions,
  slug,
}: {
  reactions: ReactionsType;
  setReactions: (reactions: ReactionsType) => void;
  slug: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reactionSelection, setReactionSelection] = useState(
    Object.keys(REACTIONS_PRIORITIES).reduce(
      (prev, key) => ({ ...prev, [key]: false }),
      {}
    ) as Record<ReactionsKeys, boolean>
  );

  useEffect(() => {
    const reactionsSelections = localStorage.getItem(slug);

    if (reactionsSelections) {
      const parsedSelections = JSON.parse(reactionsSelections) || {};

      setReactionSelection(parsedSelections);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  }, [slug]);

  const handleClick = (key: ReactionsKeys) => {
    const updatedReactionsSelection = {
      ...reactionSelection,
      [key]: !reactionSelection[key],
    };

    const updatedReactions = {
      ...reactions,
      [key]: reactionSelection[key] ? reactions[key] - 1 : reactions[key] + 1,
    };
    setReactionSelection(updatedReactionsSelection);
    setReactions(updatedReactions);

    localStorage.setItem(slug, JSON.stringify(updatedReactionsSelection));
    fetch(
      `${
        process.env.NODE_ENV === 'production'
          ? 'https://personal-website-optimized.vercel.app/'
          : 'http://localhost:3000'
      }/api/posts/${slug}`,
      {
        method: 'POST',
        body: JSON.stringify(updatedReactions),
      }
    );
  };

  return (
    <ul className="relative flex flex-wrap items-center gap-2 sm:flex-nowrap">
      {(Object.entries(REACTIONS_LIST) as [ReactionsKeys, string][])
        .sort(([a], [b]) => REACTIONS_PRIORITIES[a] - REACTIONS_PRIORITIES[b])
        .map(([key, icon]) => (
          <Tooltip key={key} content={key} size="sm" tabIndex={-1}>
            <Button
              as="button"
              variant="transparent"
              size="xs"
              color="text-white"
              className={clsx(
                'pb-1 pt-1 transition-transform hover:scale-110 hover:bg-grey-800 focus:bg-grey-800 lg:w-12',
                {
                  'bg-grey-800': reactionSelection[key],
                }
              )}
              disabled={isLoading}
              onClick={() => handleClick(key)}
            >
              <div className="flex flex-shrink-0 flex-col justify-center gap-0.5">
                <div className="flex-shrink-0">
                  <Image src={icon} alt={key} width={36} height={36} />
                </div>
                <span
                  className={clsx(
                    'text-base',
                    {
                      'font-bold text-primary-main': reactionSelection[key],
                    },
                    { 'text-slate-200': !reactionSelection[key] }
                  )}
                >
                  {reactions?.[key] || 0}
                </span>
              </div>
            </Button>
          </Tooltip>
        ))}
    </ul>
  );
};
