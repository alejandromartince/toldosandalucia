import React from "react";

import Home from "./sections/Home/Home";
import Navbar from "./sections/Navbar/Navbar"
import Products from "./sections/Products/Products";
import Contacto from "./sections/Contacto/Contacto";

import { IdiomaProvider } from "./contexts/IdiomaContext";
import Beneficios from "./sections/Beneficios/Beneficios";



const App = () => {
  return (
    <IdiomaProvider>
      <Navbar />
      <Home />
      {/* <Ventajas /> */}
      <Beneficios />
      <Products />
      <Contacto />
    </IdiomaProvider>
  );
};

export default App;
