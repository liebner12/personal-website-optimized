import Image from 'next/image';
import Link from 'next/link';
import { BsSpotify } from 'react-icons/bs';
import { currentlyPlayingSong } from 'lib/spotify';

export const revalidate = 60;

export const Spotify = async () => {
  const response = await currentlyPlayingSong();

  const { item, is_playing } = await response.json();

  if (is_playing && item) {
    const title = item.name;
    const artist = item.artists
      .map((_artist: { name: string }) => _artist.name)
      .join(', ');
    const image = item.album.images[0].url;
    const url = item.external_urls.spotify;

    return (
      <>
        <div className="mb-6 text-xl font-semibold text-white">
          Currently playing:
        </div>
        <Link
          target="_blank"
          rel="noreferrer"
          href={url}
          className="mb-20 block rounded-xl border-2 border-grey-800 bg-grey-900 px-4 py-4 text-grey-400 transition-colors hover:bg-grey-800 sm:rounded-full sm:px-16 sm:py-6"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              alt={title}
              src={image}
              width={64}
              height={64}
              quality={50}
              className="rounded-lg"
            />
            <div>
              <div className="text-xl font-bold text-white">{title}</div>
              <div>{artist}</div>
            </div>
            <BsSpotify className="ml-auto h-8 w-8 shrink-0 animate-spin-slow" />
          </div>
        </Link>
      </>
    );
  }

  return (
    <div className="mb-20 flex items-center gap-3 text-grey-400">
      <BsSpotify className="h-8 w-8" />
      <span className="text-xl font-bold text-white">Not Playing</span>
      <span>—</span>
      <span>Spotify</span>
    </div>
  );
};
