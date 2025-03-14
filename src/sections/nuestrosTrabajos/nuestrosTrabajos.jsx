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
  imagesNuestrosTrabajos,
} from "../../constants/infoNuestrosTrabajos";

//Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los estilos
import "./NuestrosTrabajos.css"; // Archivo de estilos

const NuestrosTrabajos = () => {
  const informacion = infoNuestrosTrabajos;
  const { idioma } = useIdioma();

  return (
    <section className="nuestrosTrabajos-section" id="works">
      <div className="swiper-container">
        <h1>{informacion[idioma].titulo}</h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Ahora muestra 3 imágenes
          spaceBetween={30} // Espacio entre imágenes
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          coverflowEffect={{
            rotate: 30, // Menos rotación para mejor visibilidad
            stretch: 0,
            depth: 200, // Mayor profundidad
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="swiper-3d"
        >
          {imagesNuestrosTrabajos.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={img} alt={`Imagen ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NuestrosTrabajos;
