import React, { useContext } from "react";
import { cartActionCreator } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../components/Header/themes";

const SingleCountry = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { id } = useParams();

  const dispatch = useDispatch();

  const { themes } = useContext(ThemeContext);

  const country = countries.find((country) => country.name.common === id);
  const { flags, name, official, subregion, capital } = country;

  return (
    <div className="flex justify-center pt-40">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img
          className="rounded-t-lg w-full"
          src={flags.png}
          alt={name.common}
        />

        <div className="p-6">
          <h5
            className="text-purple-700 text-xl font-medium mb-2"
            style={{ color: themes.background }}
          >
            {name.common}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {name.common}, officially the {official} is a country in {subregion}
            . {capital}, the capitol is the home for thousand of {name.common}.
          </p>
        </div>
        <div className="flex justify-around pb-4">
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-400 disabled:bg-slate-500"
            style={{ background: themes.background }}
            onClick={() => dispatch(cartActionCreator.addToCart(country))}
            disabled={cartItems.includes(country)}
          >
            Favorite
          </button>
          <Link
            to="/"
            className=" inline-block px-6 py-2.5  bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-400 "
            style={{ background: themes.background }}
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
