import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home/Home";
import SingleCountry from "./pages/Countries.js/SingleCountry";
import Cart from "./components/Header/Cart";
import { ThemeContext } from "./components/Header/themes";
import CountriesList from "./pages/Countries.js/CountriesList";

function App() {
  const [themes, setThemes] = useState(" ");

  return (
    <ThemeContext.Provider value={{ themes, setThemes }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="countries">
            <Route index element={<CountriesList />} />
            <Route path=":id" element={<SingleCountry />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
