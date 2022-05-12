import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../components/Main/Loading";
import Search from "../../components/Main/Search";
import Table from "../../components/Main/Table";
import Pagination from "../../components/Main/Pagination";

import { fetchCountries } from "../../redux/middleware/fetchCountries";

const CountriesList = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  const loading = useSelector((state) => state.allCountries.loading);
  const dispatch = useDispatch();

  // Dispatch countries when page loads.
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // Filter page for search
  const [searchCountry, setSearchCountry] = useState("");

  const handleSearchCountry = (e) => {
    e.preventDefault();
    setSearchCountry(e.target.value);
  };

  const filterCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchCountry.toLocaleLowerCase())
  );

  // Getting  pages
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  const indexOfLastPage = currentPage * countriesPerPage;
  const indexOfFirstPage = indexOfLastPage - countriesPerPage;
  const paginatedCountries = filterCountries.slice(
    indexOfFirstPage,
    indexOfLastPage
  );
  const totalCountries = filterCountries.length;
  const lastpage = currentPage * countriesPerPage + 1;

  // Change  pages
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () =>
    lastpage <= totalCountries && setCurrentPage(currentPage + 1);

  return (
    <div className=" w-full md:w-3/5  mx-auto px-2 pt-20">
      {loading && loading ? (
        <Loading />
      ) : (
        <div className="p-8 mt-6 rounded shadow bg-white">
          <Search
            searchCountry={searchCountry}
            handleSearchCountry={handleSearchCountry}
          />
          <div>
            <Table paginatedCountries={paginatedCountries} />
            <Pagination
              countriesPerPage={countriesPerPage}
              totalCountries={totalCountries}
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountriesList;
