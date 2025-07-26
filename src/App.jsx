import { useState, useEffect, Suspense, lazy } from "react";
import { useProgress } from "@react-three/drei";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Páginas
const RutaPrincipal = lazy(() =>
  import("./paginas/Principal/RutaPrincipal.jsx")
);
const RutaGaleria = lazy(() => import("./paginas/galeria/RutaGaleria.jsx"));
const RutaPrivacidad = lazy(() =>
  import("./paginas/Privacidad/RutaPrivacidad.jsx")
);
const RutaCookies = lazy(() => import("./paginas/Cookies/RutaCookies.jsx"));
const RutaAvisosLegales = lazy(() =>
  import("./paginas/AvisosLegales/RutaAvisosLegales.jsx")
);
const Admin = lazy(() => import("./sections/Admin/Admin.jsx"));

// Contexto
import { IdiomaProvider } from "./contexts/IdiomaProvider.jsx";
import PantallaCarga from "./components/General/PantallaCarga.jsx";

//Hooks
import { useIdioma } from "./Hooks/General/useIdioma.js";
import { useIdiomaCambiado } from "./Hooks/General/useIdiomaCambiado.js";

// Componente de redirección automática al idioma del navegador
const RedireccionIdioma = () => {

  let { idioma } = useIdioma(); 
  let IdiomaCambiado = useIdiomaCambiado(); // Hook para obtener el idioma cambiado

  if (idioma && idioma !== IdiomaCambiado) {
    idioma = IdiomaCambiado; // Actualiza el idioma si ha cambiado
  }else {
    idioma = navigator.language.slice(0, 2); // Obtiene el idioma del navegador
  }

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (idioma && location.pathname === "/") {
      navigate(`/${idioma}`, { replace: true });
    }
  }, [idioma, location.pathname, navigate]);

  return null; // No renderiza nada
};

const AppContent = () => {
  const [cargando, setCargando] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setCargando(false), 0);
    }
  }, [progress]);

  return (
    <Suspense fallback={<PantallaCarga />}>
      <RedireccionIdioma />

      <Routes>
        {/* Página principal */}
        <Route path="/:lang" element={<RutaPrincipal cargando={cargando} />} />

        {/* Rutas secundarias con idioma */}
        <Route path="/:lang/Privacidad" element={<RutaPrivacidad />} />
        <Route path="/:lang/Galeria" element={<RutaGaleria />} />
        <Route path="/:lang/Cookies" element={<RutaCookies />} />
        <Route path="/:lang/AvisosLegales" element={<RutaAvisosLegales />} />

        {/* Dashboard no necesita idioma */}
        <Route path="/Dashboard" element={<Admin />} />

        {/* Redirección en caso de ruta inválida */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <IdiomaProvider>
    <Router>
      <AppContent />
    </Router>
  </IdiomaProvider>
);

export default App;
