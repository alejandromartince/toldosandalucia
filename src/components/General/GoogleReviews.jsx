import "./GoogleReview.css";

import { useIdioma } from "../../contexts/IdiomaContext";
import BotonLinea from "../Botones/BotonLinea";



const GoogleReview = () => {

  const { idioma } = useIdioma();

  const GoogleOpiniones = [
    {
      id: 1,
      autor: "ANA Ma DOBLAS",
      descripcion:
        idioma === 'es'
          ? "Todo perfecto, contentísima con Sergio y su equipo de montaje. Puntuales, rápidos y de gran calidad. Recomendables 100%"
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
          ? "La atención de Sergio, su comercial, fué de 10. Paciente, rápido en la comunicación y muy buen asesor. El montaje fué igual de bueno; puntuales, resolutivos y con muy buena predisposición. Relación calidad/precio excelente. Altamente recomendable."
          : "Sergio's service, as the sales representative, was outstanding. Patient, quick to communicate, and a great advisor. The installation was just as good—punctual, efficient, and with a great attitude. Excellent value for money. Highly recommended.",
      fecha: idioma === 'es' ? "Noviembre de 2023" : "November 2023",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/gDLwaEfX5SQvchiq5",
    },
    {
      id: 4,
      autor: "Natalia Pino Domínguez",
      descripcion:
        idioma === 'es'
          ? "Profesionales de los pocos que quedan, Sergio y su equipo me instalaron varios toldos en casa, tanto horizontales como verticales y ha sido una maravilla, son puntuales, limpios, precisos. Tenia dudas de si colocarlo en una de las fachadas, pero visto su trabajo lo voy a encargar para lateral ya. Muchísimas gracias equipo."
          : "True professionals, the kind you rarely find anymore. Sergio and his team installed several awnings at my home, both horizontal and vertical, and it was wonderful — they were punctual, tidy, and precise. I had doubts about installing one on a particular façade, but after seeing their work, I'm already planning to order one for the side as well. Many thanks to the whole team!",
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
    }
  ];

  return (
    <div className="googleReviews-container">
      <div className="googleCards-container">

        {GoogleOpiniones.map((opinion) => (
          <div key={opinion.id} className="cardReview">
            <div className="fotoAutor-GoogleReview">
              <img src={`assets/GoogleReviews/review-${opinion.id}.png`} alt="foto" />
              <p>{opinion.autor}</p>
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
            <p>{opinion.descripcion}</p>
          </div>
        ))}

      </div>
      <div className="puntuarEmpresa">
        <BotonLinea id="GoogleReview" idioma={idioma} className="boton-linea-negra" />
      </div>
    </div>
  );
}

export default GoogleReview;
