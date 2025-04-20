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
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }} // Asegurar que siga funcionando tras interacción
        pagination={false}
        direction="horizontal"
        slidesPerView={4}
        slidesPerGroup={1}
        className="carrusel-trabajos"
      >
        {trabajos.map((trabajo, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="slide-container">
              <h3 className="image-title">{trabajo.titulo}</h3> {/* Titulo del trabajo */}
              <div className="watermark-container">
                <span className="watermark-text">Toldos Andalucía</span>
              </div>
              <img
                src={trabajo.imagen} // Ruta de la imagen
                alt={`Trabajo ${index + 1}`}
                className="slide-image"
              />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselTrabajos;
