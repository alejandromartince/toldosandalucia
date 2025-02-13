import React from "react";

import Navbar from "./sections/Navbar/Navbar";
import Home from "./sections/Home/Home";
import Productos from "./sections/Productos/Products";

import { IdiomaProvider } from "./contexts/IdiomaContext";

const App = () => {
  return (
    <IdiomaProvider>
      <Navbar />
      <Home />
      <Productos />
    </IdiomaProvider>
  );
};

export default App;
