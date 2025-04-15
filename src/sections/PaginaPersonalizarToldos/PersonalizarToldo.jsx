import React, { useState } from "react";
import "./PersonalizarToldo.css";

const PersonalizarToldo = () => {
  const [color, setColor] = useState("blanco");
  const [ancho, setAncho] = useState("3");
  const [alto, setAlto] = useState("2");
  const [tela, setTela] = useState("acrílica");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Has personalizado tu toldo con:
- Color: ${color}
- Tamaño: ${ancho}m x ${alto}m
- Tipo de tela: ${tela}`);
  };

  return (
    <div className="personaliza-container">
      <h1>Personaliza tu toldo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="blanco">Blanco</option>
            <option value="beige">Beige</option>
            <option value="gris">Gris</option>
            <option value="verde">Verde</option>
            <option value="rayas">Rayas</option>
          </select>
        </label>

        <label>
          Ancho (m):
          <input
            type="number"
            min="1"
            max="6"
            value={ancho}
            onChange={(e) => setAncho(e.target.value)}
          />
        </label>

        <label>
          Alto (m):
          <input
            type="number"
            min="1"
            max="4"
            value={alto}
            onChange={(e) => setAlto(e.target.value)}
          />
        </label>

        <label>
          Tipo de tela:
          <select value={tela} onChange={(e) => setTela(e.target.value)}>
            <option value="acrílica">Acrílica</option>
            <option value="poliéster">Poliéster</option>
            <option value="PVC">PVC</option>
          </select>
        </label>

        <button type="submit">Enviar configuración</button>
      </form>
    </div>
  );
};

export default PersonalizarToldo;
