import React, { useContext } from "react";
import { ThemeContext } from "../Header/themes";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pagination = ({
  countriesPerPage,
  currentPage,
  totalCountries,
  prevPage,
  nextPage,
}) => {
  const { themes } = useContext(ThemeContext);
  return (
    <div className="flex flex-col items-center mt-8">
      <span className="text-sm text-gray-700 ">
        Showing{" "}
        <span className="font-semibold text-gray-900 ">
          {currentPage * countriesPerPage - countriesPerPage}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 ">
          {currentPage * countriesPerPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 ">{totalCountries}</span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => {
            prevPage();
            window.scrollTo(0, 0);
          }}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-purple-600 rounded-l hover:bg-purple-900 "
          style={{ background: themes.background }}
        >
          <ArrowBackIcon />

          <span className="pl-2"> Prev</span>
        </button>
        <button
          onClick={() => {
            nextPage();
            window.scrollTo(0, 0);
          }}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-purple-600 rounded-r border-0 border-l border-purple-700 hover:bg-purple-900"
          style={{ background: themes.background }}
        >
          <span className="pr-2"> Next</span>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
