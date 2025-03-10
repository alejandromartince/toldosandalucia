// components/PantallaCarga.jsx
import React from "react";
import { useProgress } from "@react-three/drei";
import "./PantallaCarga.css"; // Asegúrate de crear este archivo para estilos

const PantallaCarga = () => {
  const { progress } = useProgress();
  return (
    <div className="pantalla-carga">
      <p>Cargando... {Math.round(progress)}%</p>
    </div>
  );
};

export default PantallaCarga;
