import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { cartActionCreator } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../Header/themes";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const tableHeadings = [
  "Flag",
  "Name",
  "Languages",
  "Population",
  "Region",
  "",
  "",
];

const Table = ({ paginatedCountries }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const { themes } = useContext(ThemeContext);

  return (
    <div className="sm:-mx-8 px-4 sm:px-8 py-4 overflow-auto ">
      <div className="inline-block min-w-full rounded-lg p-2  border-purple-300">
        <table>
          <thead>
            <tr>
              {tableHeadings.map((heading, index) => (
                <th key={index} className="font-medium px-6 py-4 text-left">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedCountries.map((country) => (
              <tr
                key={country.name.common}
                className="border-b border-purple-300 duration-300 ease-in-out hover:bg-gray-200"
              >
                <td className="m-2 object-cover h-10 w-10 ">
                  <img src={country.flags.png} alt={country.name.common} />
                </td>
                <td className="px-6 py-4 text-sm  font-medium text-gray-900">
                  {country.name.common}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {country.languages &&
                    Object.values(country.languages).map((value) => (
                      <li key={value} className="list-none">
                        {value}
                      </li>
                    ))}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {country.population}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {country.region}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 ">
                  <Link to={`countries/${country.name.common}`}>
                    <VisibilityOutlinedIcon
                      color="primary"
                      className="hover:animate-spin"
                      style={{ fill: themes.background }}
                    />
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 disabled:bg-gray ">
                  <button
                    className="disabled:bg-slate-300 rounded-full p-1"
                    onClick={() =>
                      dispatch(cartActionCreator.addToCart(country))
                    }
                    disabled={cartItems.includes(country)}
                  >
                    <FavoriteBorderIcon
                      color="primary"
                      className="hover:animate-spin"
                      style={{ fill: themes.background }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
