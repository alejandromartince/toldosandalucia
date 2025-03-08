import React from "react";

//Importamos informacion
import { infoHistoria } from "../../constants/infoHistoria";

//Importamos el contexto
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos estilos
import "./Historia.css";

const Historia = () => {
  const { idioma } = useIdioma();
  return (
    <section className="historia" id="historia">
      <div className="historia-container">
        <div className="info-historia">
          <h1>{infoHistoria[idioma].titulo}</h1>
          <p>{infoHistoria[idioma].contenido}</p>
        </div>
        <div className="historia-logo">
          <img src="/assets/Logo/1999_blanco.png" alt="logo1999" />
        </div>
      </div>
    </section>
  );
};

export default Historia;
