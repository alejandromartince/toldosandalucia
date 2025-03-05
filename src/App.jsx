import React from "react";
import "./App.css";

import Navbar from "./sections/navbar/Navbar";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";

import { IdiomaProvider } from "./contexts/IdiomaContext";
const App = () => {
  return (
    <>
      <IdiomaProvider>
      <Navbar />
      <Home />
      <Products />
      </IdiomaProvider>
    </>
  );
};

export default App;
