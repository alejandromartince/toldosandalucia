import React from "react";
import "./App.css";

import Navbar from "./sections/navbar/Navbar";
import Home from "./sections/home/Home";

import { IdiomaProvider } from "./contexts/IdiomaContext";
const App = () => {
  return (
    <>
      <IdiomaProvider>
      <Navbar />
      <Home />
      </IdiomaProvider>
    </>
  );
};

export default App;
