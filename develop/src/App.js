import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Home />
    </Provider>
  );
}

export default App;
