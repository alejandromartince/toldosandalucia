//Improtamos los hooks de react
import { useState } from "react";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los componentes personalizados
import BotonLinea from "../Botones/BotonLinea";

//Importamos los iconos
import { FaExternalLinkAlt } from "react-icons/fa";

//Importamos el estilo
import "./GoogleReview.css";


const GoogleReview = () => {

  const { idioma } = useIdioma();
  const [enlaceHover, setEnlaceHover] = useState(false)
  const toggleEnlace = () => {
    setEnlaceHover((prev) => !prev)
  };

  const GoogleOpiniones = [
    {
      id: 1,
      autor: "ANA Ma DOBLAS",
      descripcion:
        idioma === 'es'
          ? "Todo perfecto, contentísima con Sergio y su equipo de montaje. Puntuales, rápidos y de gran calidad. Recomendables 100%."
          : "Everything was perfect, I'm extremely happy with Sergio and his installation team. Punctual, fast, and of great quality. 100% recommended.",
      fecha: idioma === 'es' ? "Julio de 2024" : "July 2024",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/L3r6gQbVW9rApcRJ9",
    },
    {
      id: 2,
      autor: "Lucky Lucciano",
      descripcion:
        idioma === 'es'
          ? "Servicio preventa inmejorable [...] Muy contento con ellos y los recomiendo."
          : "Unbeatable pre-sales service [...] I highly recommend them.",
      fecha: idioma === 'es' ? "Junio de 2022" : "June 2022",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/eEymFwGmvGSTQznV7",
    },
    {
      id: 3,
      autor: "Rubén Fez",
      descripcion:
        idioma === 'es'
          ? "La atención de Sergio, su comercial, fué de 10. Paciente, rápido en la comunicación [...] Relación calidad/precio excelente. Altamente recomendable."
          : "The attention from Sergio, their sales rep, was top-notch. Patient, quick in communication [...] Excellent quality/price ratio. Highly recommended.",
      fecha: idioma === 'es' ? "Noviembre de 2023" : "November 2023",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/gDLwaEfX5SQvchiq5",
    },
    {
      id: 4,
      autor: "Natalia Pino Domínguez",
      descripcion:
        idioma === 'es'
          ? "Profesionales de los pocos que quedan, Sergio y su equipo instalaron varios toldos en casa [...] Muy puntuales, limpios y precisos. Gracias equipo."
          : "True professionals, Sergio and his team installed several awnings at home [...] Very punctual, clean, and precise. Many thanks, team.",
      fecha: idioma === 'es' ? "Febrero de 2023" : "February 2023",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/TmRhhbb59C1p5PKx9",
    },
    {
      id: 5,
      autor: "Ana zurita",
      descripcion:
        idioma === 'es'
          ? "Muy contenta con el trato recibido desde el comercial hasta los montadores que vinieron a casa. Amables, rápidos, limpios y muy profesionales."
          : "Very happy with the service I received, from the salesperson to the installers who came to my home. Friendly, fast, tidy, and very professional.",
      fecha: idioma === 'es' ? "Junio de 2022" : "June 2022",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/RMcWEDffc58a6Cgb6",
    },
    {
      id: 6,
      autor: "Pablo Di Cocco",
      descripcion:
        idioma === 'es'
          ? "Productos de 1ra calidad y excelentes profesionales. Los recomiendo 100%."
          : "Top-quality products and excellent professionals. I highly recommend them.",
      fecha: idioma === 'es' ? "Enero de 2023" : "January 2023",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/aQcdnj4k8BUpyfAH6",
    },
    {
      id: 7,
      autor: "ANDRIU FOX",
      descripcion:
        idioma === 'es'
          ? "Me pusieron los dos toldos de mi casa y súper contento.dieron con la medida y el color exacto .súper recomendable gracias."
          : "They installed both awnings at my house and I'm super happy. They got the exact size and color. Highly recommended, thank you!",
      fecha: idioma === 'es' ? "Diciembre de 2022" : "December 2022",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/T8tPF8dgeBhJWy3W7",
    },
    {
      id: 8,
      autor: "Alberto Martín Lillo",
      descripcion:
        idioma === 'es'
          ? "Hoy me han montado por primera vez y muy contento con el trato, sobre todo el trabajador joven llamado LORENZO."
          : "Today they installed for me for the first time and I'm very happy with the service, especially with the young worker named LORENZO.",
      fecha: idioma === 'es' ? "Julio de 2021" : "July 2021",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/sysmg6zUu55dMayA7",
    }

  ];

  return (
    <div className="googleReviews-container">
      <div className="googleCards-container">
        <div className="googleCards-track">

          {[...GoogleOpiniones, ...GoogleOpiniones].map((opinion, index) => (
            <div key={index} className="cardReview" onMouseEnter={toggleEnlace} onMouseLeave={toggleEnlace}>
              <div className="fotoAutor-GoogleReview">
                <div>
                  <a href={opinion.enlace} target="_blank">
                    <img src={`assets/GoogleReviews/review-${opinion.id}.png`} alt="foto" />
                    <p>{opinion.autor}</p>
                    <FaExternalLinkAlt size={15} color="var(--gris)" className={enlaceHover ? 'iconoEnlaceGoogleReview' : 'iconoEnlaceGoogleReviewTrue'} />
                  </a>
                </div>
                <img src="assets/GoogleReviews/googleFavicon.png" alt="iconoGoogle" style={{ height: "25px" }} />
              </div>
              <div className="puntuacionFecha-GoogleReview">
                <p className="contenedorEstrellas">
                  {[...Array(+opinion.estrellas)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined">
                      star
                    </span>
                  ))}
                </p>
                <p>{opinion.fecha}</p>
              </div>
              <p className="descripcionGoogleReview">{opinion.descripcion}</p>
            </div>
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
