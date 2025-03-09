import React from "react";
import "./App.css";

import Navbar from "./sections/navbar/Navbar";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";
import Historia from "./sections/historia/Historia";
import Beneficios from "./sections/Beneficios/Beneficios";

import { IdiomaProvider } from "./contexts/IdiomaContext";
import SliderInterseccion from "./sections/SliderInterseccion/SliderInterseccion";
const App = () => {
  return (
    <>
      <IdiomaProvider>
      <Navbar />
      <Home />
      <Historia />
      <Beneficios />
      <SliderInterseccion />
      <Products />
      </IdiomaProvider>
    </>
  );
};

export default App;
