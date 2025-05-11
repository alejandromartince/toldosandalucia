import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Componentes principales
import PantallaCarga from "./components/PantallaCarga";
import Navbar from "./sections/navbar/Navbar";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";
import Historia from "./sections/historia/Historia";
import Beneficios from "./sections/Beneficios/Beneficios";
import NuestrosTrabajos from "./sections/nuestrosTrabajos/nuestrosTrabajos";
import Contacto from "./sections/contacto/Contacto";
import Footer from "./sections/footer/Footer";

// Página nueva
import PersonalizarToldo from "./sections/PaginaPersonalizarToldos/PersonalizarToldo";
import Privacidad from "./sections/PaginaPrivacidad/Privacidad";

// Contexto
import { IdiomaProvider } from "./contexts/IdiomaContext";
import { useProgress } from "@react-three/drei";

// Componente que gestiona la ruta principal con lógica de carga
const RutaPrincipal = ({ cargando }) => {
  if (cargando) return <PantallaCarga />;

  return (
    <>
      <Navbar />
      <Home />
      <Historia />
      <NuestrosTrabajos />
      <Products />
      <Beneficios />
      <Contacto />
      <Footer />
    </>
  );
};

const App = () => {
  const [cargando, setCargando] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setCargando(false), 0);
    }
  }, [progress]);

  return (
    <IdiomaProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<RutaPrincipal cargando={cargando} />} />
          <Route
            path="/PersonalizarToldos"
            element={
              <>
                <Navbar />
                <PersonalizarToldo />
              </>
            }
          />
          <Route
            path="/Privacidad"
            element={
              <>
                <Navbar />
                <Privacidad />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </IdiomaProvider>
  );
};

export default App;
