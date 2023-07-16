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
  const [currentPosts, setCurrentPosts] = useState(posts.slice(0, 3));
  // Sory for code quality :sadge:
  return (
    <motion.div className="relative mx-auto" {...FADE_IN_VIEW}>
      <div className="theme-projects relative h-[28rem] w-80">
        <ul className="cards-range">
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
              },
              index
            ) => (
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
                    />
                  </Card>
                </ul>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </motion.div>
  );
};
