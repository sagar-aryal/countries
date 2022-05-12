import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pagination = ({
  countriesPerPage,
  currentPage,
  totalCountries,
  prevPage,
  nextPage,
}) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage * countriesPerPage - countriesPerPage}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage * countriesPerPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalCountries}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => prevPage()}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-600 rounded-l hover:bg-gray-900 "
        >
          <ArrowBackIcon />
          <span className="pl-2"> Prev</span>
        </button>
        <button
          onClick={() => nextPage()}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-600 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900"
        >
          <span className="pr-2"> Next</span>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
