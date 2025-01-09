"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchWords: string) => {
    const params = new URLSearchParams(searchParams);
      if(searchWords){
        params.set("query", searchWords);
      }else{
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="fixed top-0 right-0 p-4">
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <div className="flex items-center justify-center rounded-l-md px-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none p-2 pl-2"
          defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;