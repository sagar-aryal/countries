import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Table = ({ currentCountries }) => {
  return (
    <div className="p-8 mt-6 rounded shadow bg-white">
      <table className="stripe hover">
        <thead>
          <tr>
            <th
              data-priority="1"
              className="text-m font-medium px-6 py-4 text-left"
            >
              Flag
            </th>
            <th
              data-priority="2"
              className="text-m font-medium px-6 py-4 text-left"
            >
              Name
            </th>
            <th
              data-priority="3"
              className="text-m font-medium px-6 py-4 text-left"
            >
              Languages
            </th>
            <th
              data-priority="4"
              className="text-m font-medium px-6 py-4 text-left"
            >
              Population
            </th>
            <th
              data-priority="5"
              className="text-m font-medium px-6 py-4 text-left"
            >
              Region
            </th>
            <th
              data-priority="6"
              className="text-m font-medium px-6 py-4 text-left"
            ></th>
            <th
              data-priority="7"
              className="text-m font-medium px-6 py-4 text-left"
            ></th>
          </tr>
        </thead>

        <tbody>
          {currentCountries.map((country) => (
            <tr
              key={country.name.common}
              className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-200"
            >
              <td className="m-2 object-cover h-10 w-10 ">
                <img src={country.flags.png} alt={country.callingCodes} />
              </td>
              <td className="px-6 py-4 text-sm  font-medium text-gray-900">
                {country.name.common}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {Object.values(country.languages).map((value) => (
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
                  <AddShoppingCartOutlinedIcon color="primary" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
