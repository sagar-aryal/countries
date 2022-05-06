import React, { useState } from "react";

import SearchBar from "./SearchBar";
import SwitchTheme from "./SwitchTheme";

import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const NavBar = () => {
  const [switchThemeOpen, setswitchThemeOpen] = useState(false);

  // toggling switch theme button
  const showSwitchTheme = () => {
    setswitchThemeOpen(!switchThemeOpen);
  };
  return (
    <nav className="fixed w-full h-20 flex justify-between items-center bg-purple-600 text-white  border-gray-200 px-4">
      <div className="flex items-center gap-2">
        <button onClick={showSwitchTheme}>
          <MenuOpenOutlinedIcon />
        </button>
        {switchThemeOpen ? <SwitchTheme /> : " "}
        <h1 className="text-3xl font-bold">Countries</h1>
      </div>
      <SearchBar />
      <Badge badgeContent={2} color="error">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </nav>
  );
};

export default NavBar;
