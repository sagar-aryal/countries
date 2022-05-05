import React from "react";

const SwitchTheme = () => {
  return (
    <div className="fixed h-screen md:w-1/5 shadow-md text-black bg-white top-20 left-0 ">
      <h1 className="  font-medium rounded text-xl p-4 mx-5 my-2">
        Switch Theme
      </h1>
      <ul>
        <li>
          <button
            type="button"
            className="  font-medium rounded text-lg p-4 mx-5 my-2 focus:ring-1 focus:ring-purple-100  dark:bg-purple-600 focus:outline-none "
          >
            <span className=" rounded text-lg px-5 py-2.5 mr-2 text-white bg-purple-700  hover:bg-purple-800">
              P
            </span>
            <span>Purple</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="  font-medium rounded text-lg p-4 mx-5 my-2 focus:ring-1 focus:ring-blue-100  dark:bg-blue-600 focus:outline-none "
          >
            <span className=" rounded text-lg px-5 py-2.5 mr-2  text-white bg-blue-700  hover:bg-blue-800">
              B
            </span>
            <span>Blue</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="  font-medium rounded text-lg p-4 mx-5 my-2 focus:ring-1 focus:ring-green-100  dark:bg-green-600 focus:outline-none "
          >
            <span className=" rounded text-lg px-5 py-2.5 mr-2  text-white bg-green-700  hover:bg-green-800">
              G
            </span>
            <span>Green</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="  font-medium rounded text-lg p-4 mx-5 my-2 focus:ring-1 focus:ring-red-100  dark:bg-red-600 focus:outline-none "
          >
            <span className=" rounded text-lg px-5 py-2.5 mr-2  text-white bg-red-700  hover:bg-red-800">
              R
            </span>
            <span>Red</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SwitchTheme;
