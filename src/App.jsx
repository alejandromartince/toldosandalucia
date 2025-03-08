import React from "react";
import "./App.css";

import Navbar from "./sections/navbar/Navbar";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";

import { IdiomaProvider } from "./contexts/IdiomaContext";
import Historia from "./sections/historia/Historia";
import HistoriaBeneficio from "./sections/seccionhistoriabeneficios/HistoriaBeneficio";
const App = () => {
  return (
    <>
      <IdiomaProvider>
      <Navbar />
      <Home />
      <Historia />
      <HistoriaBeneficio />
      <Products />
      </IdiomaProvider>
    </>
  );
};

export default App;
