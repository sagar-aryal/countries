import React from "react";

const SearchBar = ({ searchName, handleSearch }) => {
  return (
    <>
      <input
        className=" text-black placeholder:italic placeholder:text-slate-400 block bg-white px-4 py-2 w-1/5 border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search Countries here..."
        type="text"
        name="search"
        value={searchName}
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchBar;
