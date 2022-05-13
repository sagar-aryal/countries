import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

import SwitchTheme from "./SwitchTheme";

import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "./themes";

const NavBar = ({ toggleTheme }) => {
  const [switchThemeOpen, setswitchThemeOpen] = useState(false);
  const { themes } = useContext(ThemeContext);

  const cartItems = useSelector((state) => state.cart.cartItems);

  // toggling switch theme button
  const showSwitchTheme = () => {
    setswitchThemeOpen(!switchThemeOpen);
  };

  return (
    <nav
      className="fixed w-full h-20 flex justify-between items-center bg-purple-600 text-white  border-gray-200 px-4"
      style={{ background: themes.background }}
    >
      <div className="flex items-center gap-2 ">
        <button onClick={showSwitchTheme}>
          <MenuOpenOutlinedIcon className="hover:animate-spin" />
        </button>
        {switchThemeOpen ? (
          <SwitchTheme
            toggleTheme={toggleTheme}
            closeSideBar={showSwitchTheme}
          />
        ) : (
          " "
        )}

        <Link to="/">
          <h1 className="text-3xl font-bold hover:animate-pulse">Countries</h1>
        </Link>
      </div>

      <Link to="/cart" className="animate-bounce ">
        <Badge badgeContent={cartItems.length} color="error">
          <FavoriteBorderIcon />
        </Badge>
      </Link>
    </nav>
  );
};

export default NavBar;
