import Image from 'next/image';
import { Tooltip } from '../Tooltip';
import {
  ReactionsKeys,
  REACTIONS_LIST,
  REACTIONS_PRIORITIES,
} from 'data/constants';
import { getPost } from 'lib/getPost';

export const ReactionsList = async ({ slug }: { slug: string }) => {
  const { reactions } = await getPost(slug);

  return (
    <ul className="mt-4 flex flex-wrap gap-6d lg:gap-8">
      {(Object.entries(reactions) as [ReactionsKeys, number][])
        .filter(([, count]) => count)
        .sort(([a], [b]) => REACTIONS_PRIORITIES[a] - REACTIONS_PRIORITIES[b])
        .map(([key, value]) => (
          <Tooltip content={key} key={key} size="sm" tabIndex={-1}>
            <div className="flex cursor-default items-center gap-0.5 text-2xld">
              <Image
                src={REACTIONS_LIST[key]}
                alt={key}
                width={32}
                height={32}
              />
              <span className="text-lg text-white">{value}</span>
            </div>
          </Tooltip>
        ))}
    </ul>
  );
};
