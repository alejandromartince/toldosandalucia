import React from "react";

//Importamos los componentes
import BotonLinea from "../../components/BotonLinea/BotonLinea";

//Importamos la informacion
import {
  tituloBeneficio,
  textoBeneficio,
} from "../../constants/infoBeneficios";

//Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

import "./Beneficios.css";

const Beneficios = () => {
  const { idioma } = useIdioma();

  const beneficios = [
    {
      key: "medicion",
      icono: textoBeneficio[idioma].medicion.icono,
      titulo: textoBeneficio[idioma].medicion.titulo,
      informacion: textoBeneficio[idioma].medicion.informacion,
    },
    {
      key: "diseno",
      icono: textoBeneficio[idioma].diseno.icono,
      titulo: textoBeneficio[idioma].diseno.titulo,
      informacion: textoBeneficio[idioma].diseno.informacion,
    },
    {
      key: "fabricacion",
      icono: textoBeneficio[idioma].fabricacion.icono,
      titulo: textoBeneficio[idioma].fabricacion.titulo,
      informacion: textoBeneficio[idioma].fabricacion.informacion,
    },
    {
      key: "instalacion",
      icono: textoBeneficio[idioma].instalacion.icono,
      titulo: textoBeneficio[idioma].instalacion.titulo,
      informacion: textoBeneficio[idioma].instalacion.informacion,
    },
  ];

  return (
    <section className="section-beneficios" id="beneficios">
      <div className="beneficios-container">
        <h1>{tituloBeneficio[idioma]}</h1>
        <div className="beneficios-informacion">
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.key}
              className={`div-${beneficio.key}-beneficios`}
            >
              <div>{beneficio.icono}</div>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.informacion}</p>
            </div>
          ))}
        </div>
        <div className="boton-container-linea-negra">
          <BotonLinea
            idioma={idioma}
            id="Beneficios"
            className="boton-linea-negra"
          />
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
