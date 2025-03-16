import React, { useState, useEffect } from "react";
import "./App.css";

// Importamos los componentes
import PantallaCarga from "./components/PantallaCarga";
import Navbar from "./sections/navbar/Navbar";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";
import Historia from "./sections/historia/Historia";
import Beneficios from "./sections/Beneficios/Beneficios";
import SliderInterseccion from "./sections/SliderInterseccion/SliderInterseccion";
import NuestrosTrabajos from "./sections/nuestrosTrabajos/nuestrosTrabajos";
import Contacto from "./sections/contacto/Contacto";
import Footer from "./sections/footer/Footer";

//Importamos los contextos
import { IdiomaProvider } from "./contexts/IdiomaContext";
import { useProgress } from "@react-three/drei";

const App = () => {
  const [cargando, setCargando] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setCargando(false), 500); // Retraso opcional para suavidad
    }
  }, [progress]);

  return (
    <IdiomaProvider>
      {cargando && <PantallaCarga />}
      {!cargando && <Navbar />}
      <Home />
      <Historia />
      <Beneficios />
      {/* <SliderInterseccion /> */}
      <Products />
      <NuestrosTrabajos />
      <Contacto />
      <Footer />
    </IdiomaProvider>
  );
};

export default App;
