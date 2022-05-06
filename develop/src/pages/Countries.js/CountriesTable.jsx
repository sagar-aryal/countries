import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Main/Pagination";
import Table from "../../components/Main/Table";
import Loading from "../../components/Main/Loading";
import { cartActionCreator } from "../../redux/actions";

const CountriesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  console.log(countries);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  // Add to Cart
  const handleAddToCart = (countries) => {
    dispatch(cartActionCreator.addToCart(countries));
    console.log("Added !");
  };

  // Getting  pages

  const indexOfLastPage = currentPage * countriesPerPage;
  const indexOfFirstPage = indexOfLastPage - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstPage, indexOfLastPage);
  const totalCountries = countries.length;
  const lastpage = currentPage * countriesPerPage + 1;

  // Change page
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () =>
    lastpage <= totalCountries && setCurrentPage(currentPage + 1);

  return (
    <div className=" w-full md:w-3/5 xl mx-auto px-2 py-20">
      {countries.loading && countries.loading ? (
        <Loading />
      ) : (
        <div className="p-8 mt-6 rounded shadow bg-white">
          <Table
            currentCountries={currentCountries}
            handleAddToCart={handleAddToCart}
          />
          <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={totalCountries}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default CountriesTable;
