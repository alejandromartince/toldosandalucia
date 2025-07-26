//Importamos los hooks de react
import { useState } from "react";

//Importamos la información
import { imagesNuestrosTrabajos } from "../../constants/infoNuestrosTrabajos.js";

//Importamos los hooks personales
import useTipoDipositivo from "../../Hooks/useTipoDispositivo.js";

//Importamos los componentes
import CarruselGaleria from "../../components/Galeria/CarruselGaleria.jsx";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

//Importamos el estilo
import "./Galeria.css";

const Galeria = () => {
  const dispositivo = useTipoDipositivo();
  const [indiceActual, setIndiceActual] = useState(0);
  const { idioma } = useIdioma();

  const textos = () => {
    switch (idioma) {
      case "es":
        return {
          primerTexto: "Para más información, contacte con nosotros ",
          segundoTexto: "aquí",
        };
      case "en":
        return {
          primerTexto: "For more information, contact us ",
          segundoTexto: "here",
        };
      case "fr":
        return {
          primerTexto: "Pour plus d'informations, contactez-nous ",
          segundoTexto: "ici",
        };
      case "de":
        return {
          primerTexto: "Für weitere Informationen kontaktieren Sie uns ",
          segundoTexto: "hier",
        };
      case "da":
        return {
          primerTexto: "For mere information, kontakt os ",
          segundoTexto: "her",
        };
      case "ru":
        return {
          primerTexto:
            "Для получения дополнительной информации свяжитесь с нами ",
          segundoTexto: "здесь",
        };
      default:
        return {
          primerTexto: "For more information, contact us ",
          segundoTexto: "here",
        };
    }
  };

  const { primerTexto, segundoTexto } = textos();
  const imagenActual = imagesNuestrosTrabajos[indiceActual];

  return (
    <section className="galeria-section">
      <div className="backgroundTopGaleria">
        <div className="contenidoGaleria">
          <h2>{imagenActual.titulo[idioma]}</h2>
          <p style={{ textShadow: "none" }}>
            {primerTexto}
            <a
              href={
                dispositivo !== "movil"
                  ? "https://web.whatsapp.com/send?phone=34679847618&text="
                  : "https://wa.me/34679847618"
              }
              style={{ textDecoration: "underline" }}
            >
              {segundoTexto}
            </a>
          </p>
        </div>
      </div>

      <div className="carrusel-galeria-container">
        <CarruselGaleria
          infoTrabajos={imagesNuestrosTrabajos}
          setIndiceActual={setIndiceActual}
          indiceActual={indiceActual}
        />
      </div>
    </section>
  );
};

export default Galeria;
