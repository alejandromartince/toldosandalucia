//Improtamos los hooks de react
import { useState } from "react";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

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

  const opiniones = {
  es: 'Ver más opiniones',
  en: 'See more opinions',
  fr: 'Voir plus d’avis',
  de: 'Weitere Bewertungen anzeigen',
  ru: 'Смотреть больше отзывов',
  da: 'Se flere anmeldelser',
};


  return (
    <>
      <div className="moreOpinions"><a href="https://www.google.com/maps/place/Toldos+Andalucía/@36.6060358,-4.5334475,17z/data=!4m8!3m7!1s0xd72fc9a06ccb465:0x14527abdef1ec2fa!8m2!3d36.6060315!4d-4.5308726!9m1!1b1!16s%2Fg%2F11b6dq7hnl?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">{opiniones[idioma]}</a></div>
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
                      <img
                        src={`assets/GoogleReviews/review-${opinion.id}.png`}
                        alt={alt[idioma].foto}
                      />
                      <p>{opinion.autor}</p>
                      <FaExternalLinkAlt
                        size={15}
                        style={{ paddingBottom: ".2rem" }}
                        color="var(--gris)"
                        cursor={"pointer"}
                        className={
                          hoverIndex === index
                            ? "iconoEnlaceGoogleReview"
                            : "iconoEnlaceGoogleReviewTrue"
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
                  <p className="descripcionGoogleReview">
                    {opinion.descripcion[idioma]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="puntuarEmpresa">
          <BotonLinea
            id="GoogleReview"
            idioma={idioma}
            className="boton-linea"
          />
        </div>
      </div>
    </>
  );
};

export default GoogleReview;
