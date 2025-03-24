import React from "react";

// Importamos la información
import {
  tituloBeneficio,
} from "../../constants/infoBeneficios";

// Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

import "./Beneficios.css";

const Beneficios = () => {
  const { idioma } = useIdioma();

  return (
    <section className="section-beneficios" id="beneficios">
      <div className="beneficios-container">
        <h1>{tituloBeneficio[idioma]}</h1>
        <br />
        <hr className="hr-beneficios" />
      </div>
    </section>
  );
};

export default Beneficios;
