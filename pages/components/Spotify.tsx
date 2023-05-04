import Image from 'next/image';
import Link from 'next/link';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { FADE_IN_VIEW } from 'data';

const MotionLink = motion(Link);

export const Spotify = () => {
  const { data } = useSWR(`/api/spotify`);

  if (data?.isPlaying) {
    return (
      <>
        <motion.div
          className="mb-6 text-xl font-semibold text-white"
          {...FADE_IN_VIEW}
        >
          Currently playing:
        </motion.div>
        <MotionLink
          target="_blank"
          rel="noreferrer"
          {...FADE_IN_VIEW}
          href={data.url}
          className="mb-20 block rounded-xl border-2 border-grey-800 bg-grey-900 py-4 px-4 text-grey-400 transition-colors hover:bg-grey-800 sm:rounded-full sm:py-6 sm:px-16"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              alt={data.title}
              src={data.image}
              width={64}
              height={64}
              quality={50}
              className="rounded-lg"
            />
            <div>
              <div className="text-xl font-bold text-white">{data.title}</div>
              <div>{data.artist}</div>
            </div>
            <BsSpotify className="ml-auto h-8 w-8 shrink-0 animate-spin-slow" />
          </div>
        </MotionLink>
      </>
    );
  }

  return (
    <motion.div
      className="mb-20 flex items-center gap-3 text-grey-400"
      {...FADE_IN_VIEW}
    >
      <BsSpotify className="h-8 w-8" />
      <span className="text-xl font-bold text-white">Not Playing</span>
      <span>—</span>
      <span>Spotify</span>
    </motion.div>
  );
};
