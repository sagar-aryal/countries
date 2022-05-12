import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home/Home";
import Cart from "./components/Header/Cart";
import { ThemeContext } from "./components/Header/themes";

function App() {
  const [themes, setThemes] = useState(" ");

  return (
    <ThemeContext.Provider value={{ themes, setThemes }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
