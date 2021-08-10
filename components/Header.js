import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  console.log(setSearchInput);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="left">
        <div className="logo relative flex items-center h-10 cursor-pointer my-auto ">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </div>
      {/* center */}
      <div className="center flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow px-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 w-8 p-1 mr-2 bg-red-400 text-white rounded-full cursor-pointer" />
      </div>
      {/* right */}
      <div className="middle flex items-center justify-end space-x-4 text-gray-600">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center rounded-full border-2 space-x-2 ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
