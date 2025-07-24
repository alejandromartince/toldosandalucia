//Improtamos los hooks de react
import { useState } from "react";

//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos la informacion
import { alts, GoogleOpiniones } from "../../constants/infoGoogleReviews.js";

//Importamos los componentes personalizados
import BotonLinea from "../Botones/BotonLinea.jsx";

//Importamos los iconos
import { FaExternalLinkAlt } from "react-icons/fa";

//Importamos el estilo
import "./GoogleReview.css";


const GoogleReview = () => {

  const { idioma } = useIdioma();
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const Opiniones = GoogleOpiniones;

  const alt = alts;

  return (
    <div className="googleReviews-container">
      <div className="googleCards-container">
        <div className="googleCards-track">

          {[...Opiniones, ...Opiniones].map((opinion, index) => (
            <a
              key={`${opinion.id}-${index}`}
              href={opinion.enlace}
              target="_blank"
              className="enlaceCartaGoogle"
              aria-label={alt[idioma].enlace}
            >
              <div
                className="cardReview"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="fotoAutor-GoogleReview">
                  <div>
                    <img src={`assets/GoogleReviews/review-${opinion.id}.png`} alt={alt[idioma].foto} />
                    <p>{opinion.autor}</p>
                    <FaExternalLinkAlt
                      size={15}
                      style={{ paddingBottom: ".2rem" }}
                      color="var(--gris)"
                      cursor={"pointer"}
                      className={
                        hoverIndex === index
                          ? 'iconoEnlaceGoogleReview'
                          : 'iconoEnlaceGoogleReviewTrue'
                      }
                    />
                  </div>
                  <img
                    src="assets/GoogleReviews/googleFavicon.webp"
                    alt=""
                    style={{ height: "25px" }}
                  />
                </div>
                <div className="puntuacionFecha-GoogleReview">
                  <p className="contenedorEstrellas">
                    {[...Array(+opinion.estrellas)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined">
                        star
                      </span>
                    ))}
                  </p>
                  <p>{opinion.fecha[idioma]}</p>
                </div>
                <p className="descripcionGoogleReview">{opinion.descripcion[idioma]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="puntuarEmpresa">
        <BotonLinea id="GoogleReview" idioma={idioma} className="boton-linea" />
      </div>
    </div>
  );
}


export default GoogleReview;
