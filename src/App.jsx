import React from "react";

import Home from "./sections/Home/Home";
import Navbar from "./sections/Navbar/Navbar"
import Products from "./sections/Products/Products";

import { IdiomaProvider } from "./contexts/IdiomaContext";

const App = () => {
  return (
    <IdiomaProvider>
      <Navbar />
      <Home />
      <Products />
    </IdiomaProvider>
  );
};

export default App;
