import React from "react";
import { informacionBoton } from "../../constants/infoBotones"; // Asegúrate de importar la función

import "./BotonLinea.css";

const BotonLinea = ({ idioma, className, id }) => {
  const boton = informacionBoton(idioma, id);

  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
};

export default BotonLinea;
