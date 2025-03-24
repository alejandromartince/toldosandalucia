import React from "react";

//Importamos informacion
import { infoHistoria } from "../../constants/infoHistoria";

//Importamos el contexto
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos componentes
import LinkLinea from "../../components/Botones/LinkLinea";
import parse from 'html-react-parser';

//Importamos estilos
import "./Historia.css";

const Historia = () => {
  const { idioma } = useIdioma();
  return (
    <section className="historia" id="historia">
      <div className="historia-container">
        <div className="info-historia">
          <div>
            <h1>{infoHistoria[idioma].titulo}</h1>
            <p>{parse(infoHistoria[idioma].contenido)}</p> <br />

            <p>
              {parse(infoHistoria[idioma].titulosubcontenido)}
              Málaga / Torremolinos / Benalmádena / Arroyo de la Miel /
              Fuengirola / Mijas / Marbella / San Pedro / Estepona / Alhaurín de
              La Torre / Churriana / Rincón de La Victoria / El Palo / Málaga
              Este.
            </p>

          </div>
          <br />
          <br />
          <LinkLinea idioma={idioma} id="Historia" className="boton-linea" />
        </div>
        <div className="historia-logo">
          <img src="/assets/Logo/1999_blanco.png" alt="logo1999" />
        </div>
      </div>
    </section>
  );
};

export default Historia;
