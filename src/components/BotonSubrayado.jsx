import React from "react";
import { informacionBoton } from "../constants/index";  // Asegúrate de importar la función

import "./BotonSubrayado.css";

const BotonSubrayado = ({ idioma, className, id }) => {
  const boton = informacionBoton(idioma, id);

  return (
    <div className="contenedor-presupuesto">
      <a
        className={className}
        role="button"
        tabIndex="0"
        target="_blank"
        href={boton ? boton.url : "#"}
        style={{ textDecoration: "none" }}
      >
        {boton ? boton.texto : "Texto no disponible"}
      </a>
    </div>
  );
};


export default BotonSubrayado;
