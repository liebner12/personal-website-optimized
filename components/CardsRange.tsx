'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from './Card';
import { FADE_IN_VIEW } from 'data/constants';

export const CardsRange = () => {
  return (
    <div className="relative mx-auto">
      <div className="theme-projects relative h-[28rem] w-80">
        <ul className="cards-range"></ul>
      </div>
    </div>
  );
};
