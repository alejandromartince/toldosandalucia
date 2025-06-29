import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Importamos las paginas
import RutaPrincipal from "./paginas/Principal/RutaPrincipal";
import RutaGaleria from "./paginas/galeria/RutaGaleria";
import RutaPrivacidad from "./paginas/Privacidad/RutaPrivacidad";

// Contexto
import { IdiomaProvider } from "./contexts/IdiomaContext";
import { useProgress } from "@react-three/drei";


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
            <Route path="/" element={<RutaPrincipal cargando={cargando} />} />
            <Route path="/Privacidad" element={<RutaPrivacidad />} />
            <Route path="/Galeria" element={<RutaGaleria />} />
          </Routes>
      </Router>
    </IdiomaProvider>
  );
};

export default App;
