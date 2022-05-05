import React, { useState } from "react";
import SwitchTheme from "./SwitchTheme";

import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [switchThemeOpen, setswitchThemeOpen] = useState(false);

  // toggling switch theme button
  const showSwitchTheme = () => {
    setswitchThemeOpen(!switchThemeOpen);
  };
  return (
    <nav className="fixed w-full h-20 flex justify-between items-center bg-purple-600 text-white  border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="flex items-center gap-2">
        <button onClick={showSwitchTheme}>
          <MenuOpenOutlinedIcon />
        </button>
        {switchThemeOpen ? <SwitchTheme /> : " "}
        <h1 className="text-3xl font-bold">Countries</h1>
      </div>
      <SearchBar />
      <ShoppingCartOutlinedIcon />
    </nav>
  );
};

export default NavBar;
