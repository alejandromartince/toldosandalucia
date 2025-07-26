import { useState, useEffect, Suspense, lazy } from "react";
import { useProgress } from "@react-three/drei";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Importamos las paginas
const RutaPrincipal = lazy(() => import("./paginas/Principal/RutaPrincipal.jsx"));
const RutaGaleria = lazy(() => import("./paginas/galeria/RutaGaleria.jsx"));
const RutaPrivacidad = lazy(() => import("./paginas/Privacidad/RutaPrivacidad.jsx"));
const RutaCookies = lazy(() => import("./paginas/Cookies/RutaCookies.jsx"));
const RutaAvisosLegales = lazy(() => import("./paginas/AvisosLegales/RutaAvisosLegales.jsx"));
// const Admin = lazy(() => import('./sections/Admin/Admin.jsx'))

// Contexto
import { IdiomaProvider } from "./contexts/IdiomaProvider.jsx";
import PantallaCarga from "./components/General/PantallaCarga.jsx";


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
        <Suspense fallback={<PantallaCarga />}>
          <Routes>
            <Route path="/" element={<RutaPrincipal cargando={cargando} />} />
            <Route path="/Privacidad" element={<RutaPrivacidad />} />
            <Route path="/Galeria" element={<RutaGaleria />} />
            <Route path="/Cookies" element={<RutaCookies />} />
            <Route path="/AvisosLegales" element={<RutaAvisosLegales />} />
            {/* <Route path="/Dashboard" element={<Admin />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </IdiomaProvider>
  );
};

export default App;