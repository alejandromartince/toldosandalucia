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

// Contexto
import { IdiomaProvider } from "./contexts/IdiomaContext";
import { useProgress } from "@react-three/drei";

const App = () => {
  const [cargando, setCargando] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setCargando(false), 1000);
    }
  }, [progress]);

  return (
    <IdiomaProvider>
      <Router>
        {cargando && <PantallaCarga />}
        {!cargando && <Navbar />}

        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Historia />
                <NuestrosTrabajos />
                <Products />
                <Beneficios />
                <Contacto />
                <Footer />
              </>
            }
          />

          <Route path="/PersonalizarToldos" element={<PersonalizarToldo />} />
        </Routes>
      </Router>
    </IdiomaProvider>
  );
};

export default App;
