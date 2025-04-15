import React from "react";
import { informacionBoton } from "../../constants/infoBotones";

import "./BotonImportante.css"

const BotonImportante = ({ idioma, className, id }) => {
  const boton = informacionBoton(idioma, id);

  return (
    <a
      className={className}
      role="button"
      tabIndex="0"
      target="_blank"
      href={boton ? boton.url : "#"}
      style={{ textDecoration: "none" }}
    >
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">
        {boton ? boton.texto : "Texto no disponible"}
      </span>
    </a>
  );
};

export default BotonImportante;
