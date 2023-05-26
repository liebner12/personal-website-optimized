'use client';
import { ReactNode, useEffect } from 'react';

export function Dialog({
  children,
  isVisible,
  setIsVisible,
}: {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}) {
  useEffect(() => {
    if (!isVisible) {
      return;
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [setIsVisible, isVisible]);

  if (!isVisible) {
    return <></>;
  }

  return (
    <div className="fixed bottom-24 left-1/2 flex w-full -translate-x-1/2">
      <div className="fade-in mx-auto flex items-center gap-2 rounded-full bg-primary-main px-6 py-2 text-base font-bold text-black">
        {children}
      </div>
    </div>
  );
}
