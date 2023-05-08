'use client';
import clsx from 'clsx';
import { useContext } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { PostContext } from './PostProvider';

export const PostViews = () => {
  const { views, isLoading } = useContext(PostContext);

  return (
    <div
      className={clsx(
        'absolute right-2 top-2 flex h-8 items-center gap-2 rounded-full bg-blured px-4 py-1.5 font-semibold text-white backdrop-blur md:right-4 md:top-4',
        { 'animate-pulse': isLoading }
      )}
    >
      {views && (
        <>
          <MdRemoveRedEye className="text-primary-main" /> {views} views
        </>
      )}
    </div>
  );
};