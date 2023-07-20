import { Spotify } from 'components/Spotify';
import { Dot } from 'components/Dot';
import { FooterListContainer } from 'components/FooterListContainer';

export const Footer = async () => {
  const request = await fetch(
    `${
      process.env.NODE_ENV === 'production'
        ? 'https://personal-website-optimized.vercel.app/'
        : 'http://localhost:3000'
    }/api/posts/total`,
    { next: { revalidate: 60 } }
  );
  const post = await request.json();

  return (
    <footer className="w-full px-8 pb-8 pt-24 md:px-12 lg:pb-16">
      {/* @ts-expect-error Server Component */}
      <Spotify />
      <FooterListContainer />
      <div className="mt-20 flex w-full flex-col items-center gap-6 sm:mt-32 sm:flex-row sm:items-center sm:gap-10">
        {post?.response?.count && (
          <div className="flex items-center gap-3 rounded-full border-2 border-grey-800 bg-grey-900 px-5 py-2 text-grey-400">
            <Dot />
            {post?.response?.count} total views count
          </div>
        )}
        <div className="text-grey-300 sm:ml-auto">
          All rights reserved © Michał Liebner 2023
        </div>
      </div>
    </footer>
  );
};
