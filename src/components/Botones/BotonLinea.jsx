  import React from "react";
  import { informacionBoton } from "../../constants/infoBotones";  // Asegúrate de importar la función

  import "./BotonLinea.css";

  const BotonLinea = ({ idioma, className, id }) => {
    const boton = informacionBoton(idioma, id);

    return (
        <a
          className={className}
          role="button"
          tabIndex="0"
          target="_blank"
          href={boton ? boton.url : "#"}
          style={{textDecoration:"none"}}
        >
          {boton ? boton.texto : "Texto no disponible"}
        </a>
    );
  };


  export default BotonLinea;
