import React, { useContext } from "react";
import { ThemeContext, themes } from "./themes";

const SwitchTheme = ({ closeSideBar }) => {
  const { setThemes } = useContext(ThemeContext);

  const themePurple = () => {
    setThemes(themes.purple);
  };

  const themeBlue = () => {
    setThemes(themes.blue);
  };

  const themeGreen = () => {
    setThemes(themes.green);
  };

  const themeRed = () => {
    setThemes(themes.red);
  };
  return (
    <div className="fixed h-screen md:w-1/5 shadow-md text-black bg-white top-20 left-0 ">
      <h1 className="  font-medium rounded text-xl p-4 mx-5 my-2">
        Switch Theme
      </h1>
      <ul>
        <li>
          <button
            type="button"
            className="  font-medium rounded text-lg p-4 mx-5 my-2 hover:bg-fuchsia-100"
            onClick={() => {
              themePurple();
              closeSideBar();
              window.scrollTo(0, 0);
            }}
          >
            <span className=" rounded text-lg px-5 py-2.5 mr-2 text-white bg-fuchsia-900  ">
              P
            </span>
            <span>Purple</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="font-medium rounded text-lg p-4 mx-5 my-2 hover:bg-blue-100 "
            onClick={() => {
              themeBlue();
              closeSideBar();
              window.scrollTo(0, 0);
            }}
          >
            <span className=" rounded text-lg px-5 py-2.5 mr-2  text-white bg-blue-700">
              B
            </span>
            <span>Blue</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="font-medium rounded text-lg p-4 mx-5 my-2 hover:bg-green-100"
            onClick={() => {
              themeGreen();
              closeSideBar();
              window.scrollTo(0, 0);
            }}
          >
            <span className="rounded text-lg px-5 py-2.5 mr-2  text-white bg-green-700">
              G
            </span>
            <span>Green</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="font-medium rounded text-lg p-4 mx-5 my-2 hover:bg-red-100"
            onClick={() => {
              themeRed();
              closeSideBar();
              window.scrollTo(0, 0);
            }}
          >
            <span className=" rounded text-lg px-5 py-2.5 mr-2  text-white bg-red-500">
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
