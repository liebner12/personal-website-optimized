import { Dispatch, SetStateAction } from 'react';
import { Search } from './Search';
import { SortList } from './SortList';
import { TagsList } from './TagsList';
import { BLOG_SORT_LIST, FADE_IN_SECOND } from 'data/constants';
import { TagsType } from 'lib/getTags';
import { checkTagged } from 'utils/checkTagged';

type SearchContainerType = {
  sortBy?: string;
  setSortBy?: Dispatch<SetStateAction<string>>;
  tags: TagsType | Array<string>;
  toggleTag: (item: string) => void;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

export const SearchContainer = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
  tags,
  toggleTag,
}: SearchContainerType) => {
  return (
    <div
      {...FADE_IN_SECOND}
      className="fade-in-x mb-auto block w-full flex-shrink-0 flex-col rounded-xl text-white lg:col-span-12 lg:flex xl:col-span-4 xl:col-start-9 xl:row-span-3"
    >
      <div className="flex flex-col gap-3 md:flex-row xl:flex-col">
        <Search value={search} setSearch={setSearch} />
        {setSortBy && sortBy && (
          <div className="flex items-center justify-between">
            <SortList
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortByList={BLOG_SORT_LIST}
            />
          </div>
        )}
      </div>
      <p className="mb-6 mt-8 text-lg font-semibold">Search blog by topics</p>
      <div className="mb-6 flex flex-col gap-4">
        <TagsList
          tags={tags}
          onClick={toggleTag}
          checkTagged={(tag) => checkTagged(tags, tag, search)}
        />
      </div>
    </div>
  );
};
