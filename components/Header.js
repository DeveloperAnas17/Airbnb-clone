import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noofGuest, setNoofGuest] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noofGuest,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="left">
        <div
          onClick={() => router.push("/")}
          className="logo relative flex items-center h-10 cursor-pointer my-auto "
        >
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
          placeholder={placeholder || "Start your search"}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-0 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserGroupIcon className="h-5" />
            <input
              value={noofGuest}
              onChange={(e) => setNoofGuest(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
            />
          </div>
          <div className="flex items-center">
            <button onClick={resetInput} className="flex-grow text-gray-400">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
