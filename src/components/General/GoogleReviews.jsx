import "./GoogleReview.css";

import { useIdioma } from "../../contexts/IdiomaContext";



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
      autor: "Lucky Lucciano",
      descripcion:
        idioma === 'es'
          ? "Servicio preventa inmejorable [...] Muy contento con ellos y los recomiendo."
          : "Unbeatable pre-sales service [...] I highly recommend them.",
      fecha: idioma === 'es' ? "Junio de 2022" : "June 2022",
      estrellas: "5",
      enlace: "https://maps.app.goo.gl/eEymFwGmvGSTQznV7",
    }
  ];

  return (
    <div className="googleReviews-container">
        {GoogleOpiniones.map((opinion) =>(
          <div key={opinion.id} className="cardReview"> 
            <p>{"*".repeat(+opinion.estrellas)}</p>
            <p>{opinion.autor}</p>
            <p>{opinion.descripcion}</p>
          </div>
        ))}
    </div>
  );
}

export default GoogleReview;
