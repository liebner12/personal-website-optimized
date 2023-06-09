'use client';
import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { IconType } from 'react-icons/lib';

export const DesktopPopover = ({
  children,
  button,
}: {
  children: ReactNode;
  button: ReactNode;
}) => {
  return (
    <div className="popover relative hidden lg:block">
      {button}
      <div className="absolute bottom-1/2 right-[100%] -z-50 hidden translate-y-1/2 pr-[20%]">
        <div className="rounded-full border-2 border-grey-800 bg-grey-900 px-6 py-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export const MobilePopover = ({
  isNavbarHidden,
  children,
  ButtonIcon,
}: {
  isNavbarHidden: boolean;
  children: ReactNode;
  ButtonIcon: IconType;
}) => {
  return (
    <li>
      <Popover>
        <Popover.Panel>
          <div
            className={clsx(
              'absolute bottom-[120%] left-1/2 z-20 flex w-full -translate-x-1/2 justify-center px-4 transition-transform',
              {
                'translate-y-[calc(100%+6rem)]': isNavbarHidden,
              }
            )}
          >
            <div className="flex justify-center rounded-2xl border-2 border-grey-800 bg-grey-900 px-4d py-1 shadow-lg">
              {children}
            </div>
          </div>
        </Popover.Panel>
        <Popover.Button
          aria-label="Add reactions"
          className="focus-state rounded-full p-2 text-white hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main sm:p-3"
        >
          <ButtonIcon className="h-6 w-6" />
        </Popover.Button>
      </Popover>
    </li>
  );
};
