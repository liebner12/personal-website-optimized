'use client';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  IoMdArrowDropdown,
  IoMdCalendar,
  IoMdCheckmark,
  IoMdEye,
} from 'react-icons/io';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const MotionButton = motion(Listbox.Button);

type SortListType = {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  sortByList: Array<string>;
};

export const SortList = ({ sortBy, setSortBy, sortByList }: SortListType) => {
  return (
    <div className="h-full w-full min-w-[12rem]">
      <Listbox value={sortBy} onChange={setSortBy}>
        <div className="relative h-full">
          <MotionButton className="focus-state relative h-full w-full rounded-xl border-2 border-grey-800 bg-grey-800 px-4 py-4 transition-colors hover:bg-grey-900">
            <span className="flex items-center gap-2 text-grey-300">
              {sortBy === 'date' ? (
                <IoMdCalendar className="h-6 w-6" />
              ) : (
                <IoMdEye className="h-6 w-6" />
              )}
              Sort by {sortBy}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <IoMdArrowDropdown
                className="h-6 w-6 text-grey-300"
                aria-hidden="true"
              />
            </span>
          </MotionButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-grey-800 ring-1 ring-grey-800 focus:outline-none">
              {sortByList.map((sortItem, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    clsx(
                      'relative cursor-default select-none py-3.5 pl-10 pr-4',
                      { 'bg-primary-dark': active }
                    )
                  }
                  value={sortItem}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={clsx('block truncate', {
                          'text-primary-main': selected,
                        })}
                      >
                        Sort by {sortItem}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-main">
                          <IoMdCheckmark
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
