'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from './Card';
import { FADE_IN_VIEW, PROJECTS } from 'data';

export const CardsRange = () => {
  const [currentPosts, setCurrentPosts] = useState(
    Object.values(PROJECTS)
      .map((project) => project)
      .slice(0, 3)
  );

  return (
    <motion.div className="relative mx-auto" {...FADE_IN_VIEW}>
      <div className="theme-projects relative h-[28rem] w-80">
        <ul className="cards-range">
          {currentPosts.map(
            ({ slug, title, image, tags, publishedAt, desc }, index) => (
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
              >
                <ul className="h-full">
                  <Card
                    slug={slug}
                    endpoint="projects"
                    layoutId={`${slug}-home`}
                  >
                    <Card.Image title={title} image={image} />
                    <Card.Date publishedAt={publishedAt} />
                    <Card.Text title={title} desc={desc} />
                    <Card.Footer slug={slug} icons={tags} title={title} />
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
