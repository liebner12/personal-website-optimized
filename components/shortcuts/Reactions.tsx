import Image from 'next/image';
import clsx from 'clsx';
import {
  ReactionsKeys,
  REACTIONS_LIST,
  REACTIONS_PRIORITIES,
} from 'data/constants';
import { Tooltip } from 'components/Tooltip';
import { Button } from 'components/Button';
import { getPost } from 'lib/getPost';

const HOVER_LARGE_SCALE = {
  whileHover: { scale: 1.25 },
  whileTap: { scale: 0.96 },
  whileFocus: { scale: 1.25 },
};

export const Reactions = async ({ slug }: { slug: string }) => {
  const { reactions } = await getPost(slug);

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
              wrapperProps={HOVER_LARGE_SCALE}
              className={clsx(
                'w-12 pb-1 pt-1 hover:bg-grey-800 focus:bg-grey-800',
                {
                  'bg-grey-800': reactions?.[key],
                }
              )}
            >
              <div className="flex flex-shrink-0 flex-col justify-center gap-0.5">
                <div className="flex-shrink-0">
                  <Image src={icon} alt={key} width={64} height={64} />
                </div>
                <span
                  className={clsx(
                    'text-base',
                    {
                      'font-bold text-primary-main': reactions?.[key],
                    },
                    { 'text-slate-200': !reactions?.[key] }
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
