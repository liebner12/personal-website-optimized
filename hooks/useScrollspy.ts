'use client';
import { useCallback, useEffect, useState } from 'react';

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const actionSectionScrollSpy = useCallback(() => {
    let prevBox: DOMRect | null = null;
    let currentSectionId = activeSection;

    [...document.getElementsByClassName('hash-anchor')].forEach((section) => {
      const sectionId = section.getAttribute('href')?.slice(1);
      const currentId = sectionId ?? null;
      if (!currentSectionId) {
        currentSectionId = currentId;
      }

      const currentSectionBox = section.getBoundingClientRect();
      const prevHeight = prevBox ? currentSectionBox.top - prevBox.bottom : 0;
      const offset = Math.max(200, prevHeight / 8);

      if (currentSectionBox.top - offset < 0) {
        currentSectionId = currentId;
        prevBox = currentSectionBox;
      }
    });

    setActiveSection(currentSectionId);
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', actionSectionScrollSpy);

    actionSectionScrollSpy();

    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy);
    };
  }, [actionSectionScrollSpy]);

  return activeSection;
};
