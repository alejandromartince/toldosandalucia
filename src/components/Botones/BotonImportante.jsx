import React from "react";
import { informacionBoton } from "../../constants/infoBotones"; // Asegúrate de importar la función

import "./BotonImportante.css";

const BotonImportante = ({ idioma, className, id }) => {
  const boton = informacionBoton(idioma, id);

  return (
    <a className="saber-mas" href={boton ? boton.url : "#"} target="_blank">
      <span className="circulo" aria-hidden="true">
        <span className="icono arrow"></span>
      </span>
      <span className="button-text">{boton ? boton.texto : "Texto no disponible"}</span>
    </a>
  );
};

export default BotonImportante;
