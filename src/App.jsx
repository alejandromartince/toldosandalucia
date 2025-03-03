import React from "react";

import Home from "./sections/Home/Home";
import Navbar from "./sections/Navbar/Navbar"
import Products from "./sections/Products/Products";
import Contacto from "./sections/Contacto/Contacto";

import { IdiomaProvider } from "./contexts/IdiomaContext";
import Beneficios from "./sections/Beneficios/Beneficios";
import SectionDivider from "./components/Section";



const App = () => {
  return (
    <IdiomaProvider>
      <Navbar />
      <Home />
      <SectionDivider />
      <Beneficios />
      <Products />
      <Contacto />
    </IdiomaProvider>
  );
};

export default App;
