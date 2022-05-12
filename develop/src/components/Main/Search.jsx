import React from "react";

import SearchIcon from "@mui/icons-material/Search";

const Search = ({ searchCountry, handleSearchCountry }) => {
  return (
    <div className="flex items-center border border-purple-300 rounded-md sm: w-full lg:w-1/2 ">
      <SearchIcon className="ml-3 text-slate-400" />
      <input
        className=" text-black placeholder:italic placeholder:text-slate-400 bg-white px-4 py-2 outline-none"
        placeholder="Search By Country Name..."
        type="text"
        name="search"
        autoComplete="off"
        value={searchCountry}
        onChange={handleSearchCountry}
      />
    </div>
  );
};

export default Search;
