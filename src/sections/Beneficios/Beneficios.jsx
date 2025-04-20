import React from "react";

//Importamos los componentes

// Importamos la información
import {
  tituloBeneficio,
  subtituloBeneficio,
} from "../../constants/infoBeneficios";

// Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

import "./Beneficios.css";
import CartaBeneficio from "../../components/CartaBeneficio";

const Beneficios = () => {
  const { idioma } = useIdioma();

  return (
    <section className="section-beneficios" id="beneficios">
      <div className="beneficios-container">
        <h1>{tituloBeneficio[idioma]}</h1>
        <br />
        <hr className="hr-beneficios" />
        <br />
        <p>{subtituloBeneficio[idioma]}</p>
      </div>

      <br />

      <div className="grid-beneficios">
        <div><CartaBeneficio /></div>
        <div>adios</div>
        <div>hola</div>
        <div>adios</div>
      </div>
    </section>
  );
};

export default Beneficios;
