import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import "./PantallaCarga.css";

const PantallaCarga = () => {
  const { progress } = useProgress();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsVisible(false), 500); // Espera para transición
    }
  }, [progress]);

  if (!isVisible) return null; // Ocultar pantalla al terminar

  return (
    <div className={`pantalla-carga ${progress >= 100 ? "fade-out" : ""}`}>
      <div className="carga-contenedor">
        <img src="/assets/Logo/Logo.png" alt="Logo" className="carga-logo" />
        <div className="spinner"></div>
        <p>Cargando... {Math.round(progress)}%</p>
        
      </div>
        {/* Barra de progreso */}
        <div className="barra-progreso">
          <div
            className="barra-progreso-inner"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
    </div>
  );
  
};

export default PantallaCarga;
