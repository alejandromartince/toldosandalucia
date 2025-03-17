import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

//Importamos los estilos obligatorios para que el swiper funcione
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Importamos la informacion
import {
  infoNuestrosTrabajos,
} from "../../constants/infoNuestrosTrabajos";

//Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los componentes
import CarruselTrabajos from "../../components/carrouselTrabajos";

//Importamos los estilos
import "./NuestrosTrabajos.css"; // Archivo de estilos

const NuestrosTrabajos = () => {
  const informacion = infoNuestrosTrabajos;
  const { idioma } = useIdioma();

  return (
    <section className="nuestrosTrabajos-section" id="works">
      <h1>{informacion[idioma].titulo}</h1>
        <CarruselTrabajos />
    </section>
  );
  
};

export default NuestrosTrabajos;
