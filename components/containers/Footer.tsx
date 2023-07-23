import { Spotify } from 'components/Spotify';
import { Dot } from 'components/Dot';
import { FooterListContainer } from 'components/FooterListContainer';
import { getPost } from 'lib/getPost';

export const Footer = async () => {
  const data = await getPost('total');

  return (
    <footer className="w-full px-8 pb-8 pt-24 md:px-12 lg:pb-16">
      {/* @ts-expect-error Server Component */}
      <Spotify />
      <FooterListContainer />
      <div className="mt-20 flex w-full flex-col items-center gap-6 sm:mt-32 sm:flex-row sm:items-center sm:gap-10">
        {data?.count && (
          <div className="flex items-center gap-3 rounded-full border-2 border-grey-800 bg-grey-900 px-5 py-2 text-grey-400">
            <Dot />
            {data?.count} total views count
          </div>
        )}
        <div className="text-grey-300 sm:ml-auto">
          All rights reserved © Michał Liebner 2023
        </div>
      </div>
    </footer>
  );
};
