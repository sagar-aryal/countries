import { createContext } from "react";

export const themes = {
  purple: {
    color: "white",
    background: "purple",
  },
  blue: {
    color: "white",
    background: "blue",
  },
  green: {
    color: "white",
    background: "green",
  },
  red: {
    color: "white",
    background: "red",
  },
};

export const ThemeContext = createContext({});
