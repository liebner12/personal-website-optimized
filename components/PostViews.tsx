import clsx from 'clsx';
import { MdRemoveRedEye } from 'react-icons/md';

export const PostViews = ({ views }: { views: number }) => {
  return (
    <div
      className={clsx(
        'absolute right-2 top-2 flex h-8 items-center gap-2 rounded-full bg-blured px-4 py-1.5 font-semibold text-white backdrop-blur md:right-4 md:top-4'
      )}
    >
      <MdRemoveRedEye className="text-primary-main" /> {views} views
    </div>
  );
};
