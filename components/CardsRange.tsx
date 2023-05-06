'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from './Card';
import { FADE_IN_VIEW } from 'data/constants';

export const CardsRange = () => {
  return (
    <motion.div className="relative mx-auto" {...FADE_IN_VIEW}>
      <div className="theme-projects relative h-[28rem] w-80">
        <ul className="cards-range"></ul>
      </div>
    </motion.div>
  );
};
