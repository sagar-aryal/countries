import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const tableHeadings = [
  "Flag",
  "Name",
  "Languages",
  "Population",
  "Region",
  "",
  "",
];

const Table = ({ currentCountries, handleAddToCart }) => {
  return (
    <table className="table-auto">
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
        {currentCountries.map((country) => (
          <tr
            key={country.name.common}
            className="border-b transition duration-300 ease-in-out hover:bg-gray-200"
          >
            <td className="m-2 object-cover h-10 w-10 ">
              <img src={country.flags.png} alt={country.callingCodes} />
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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              <button>
                <VisibilityOutlinedIcon color="primary" />
              </button>
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              <button>
                <AddShoppingCartOutlinedIcon
                  color="primary"
                  onClick={handleAddToCart}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
