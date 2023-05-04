import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { HiSearch } from 'react-icons/hi';

export const Search = ({
  setSearch,
  value,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
  value: string;
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative flex w-full items-center rounded-xl border-2 border-grey-800 bg-grey-900 transition-colors focus-within:border-primary-main hover:bg-grey-800">
      <label
        className="absolute pl-4 focus-visible:ring-2 focus-visible:ring-primary-main"
        htmlFor="search"
      >
        <span>
          <HiSearch className="h-6 w-6 text-grey-300" />
        </span>
      </label>
      <input
        className="focus-state w-full rounded-xl bg-transparent py-4 pl-12 pr-4 text-lg text-white placeholder:text-grey-300"
        placeholder="Search..."
        onChange={handleSearch}
        value={value}
        id="search"
      />
    </div>
  );
};
