import React from "react";

//Importamos lo necesario para el carrusel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Importamos las fotos
import { imagesNuestrosTrabajos } from "../constants/infoNuestrosTrabajos";

//Importamos estilos
import "../sections/nuestrosTrabajos/nuestrosTrabajos.css";

const CarruselTrabajos = () => {
  const trabajos = imagesNuestrosTrabajos;

  return (
    <div className="carrusel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        loop={true}
        pagination={false}
        direction="horizontal" // Carrusel en vertical
        slidesPerView={4} // Siempre 4 imágenes visibles
        slidesPerGroup={1} // Se mueve de una en una
        className="carrusel-trabajos"
      >
        {trabajos.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Trabajo ${index + 1}`}
              className="slide-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselTrabajos;
