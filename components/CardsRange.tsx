'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from './Card';
import { ProjectWithMetaData } from 'types/frontmatters';
import { FADE_IN_VIEW } from 'data/constants';

export const CardsRange = ({
  posts,
}: {
  posts: Array<ProjectWithMetaData>;
}) => {
  const [currentPosts, setCurrentPosts] = useState(
    posts.sort((a, b) => (b?.views ?? 0) - (a?.views ?? 0)).slice(0, 3)
  );
  // Sory for code quality :sadge:
  return (
    <div className="flex w-full max-w-full md:block md:w-auto">
      <motion.div className="mx-auto flex flex-1 md:block" {...FADE_IN_VIEW}>
        <div className="theme-projects mx-auto flex h-[28rem] max-w-full flex-1 md:block md:w-80">
          <ul className="cards-range relative mx-auto flex h-full flex-1 justify-center md:w-80">
            {currentPosts.map(
              (
                {
                  slug,
                  title,
                  image,
                  blurDataURL,
                  icons,
                  publishedAt,
                  numberOfComments,
                  readingTime,
                  desc,
                  views,
                  reactions,
                },
                index
              ) => {
                let numberOfReactions = 0;
                Object.values(reactions || {}).forEach((val) => {
                  numberOfReactions += val;
                });
                return (
                  <motion.li
                    key={slug}
                    onClick={() => {
                      if (index === 2) {
                        setCurrentPosts((prev) => [prev[2], prev[0], prev[1]]);
                      }
                      if (index === 1) {
                        setCurrentPosts((prev) => [prev[1], prev[2], prev[0]]);
                      }
                    }}
                    drag="x"
                    dragSnapToOrigin
                    dragConstraints={{ left: 0, right: 0 }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
                    whileDrag={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                      if (
                        index === 0 &&
                        info.offset.x > 50 &&
                        Math.abs(info.offset.x) > 50
                      ) {
                        setCurrentPosts((prev) => [prev[2], prev[0], prev[1]]);
                      }
                      if (
                        index === 0 &&
                        info.offset.x < 50 &&
                        Math.abs(info.offset.x) > 50
                      ) {
                        setCurrentPosts((prev) => [prev[1], prev[2], prev[0]]);
                      }
                    }}
                    tabIndex={-1}
                    className="h-full"
                    layoutId={`${slug}-home`}
                  >
                    <ul className="h-full">
                      <Card slug={slug} endpoint="projects">
                        <Card.Image
                          title={title}
                          image={image}
                          blurDataURL={blurDataURL}
                        />
                        <Card.Date
                          publishedAt={publishedAt}
                          readingTime={readingTime}
                        />
                        <Card.Text title={title} desc={desc} />
                        <Card.Footer
                          slug={slug}
                          icons={icons}
                          numberOfComments={numberOfComments}
                          views={views}
                          title={title}
                          numberOfReactions={numberOfReactions}
                        />
                      </Card>
                    </ul>
                  </motion.li>
                );
              }
            )}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
