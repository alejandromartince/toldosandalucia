//Importamos lo necesario para el carrusel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Importamos las fotos
import { imagesNuestrosTrabajos } from "../../constants/infoNuestrosTrabajos.js";

//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

const CarruselTrabajos = () => {
  const trabajos = imagesNuestrosTrabajos;
  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto

  return (
    <div className="carrusel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={false}
        direction="horizontal"
        simulateTouch={false}
        className="carrusel-trabajos"
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1450:{
            slidesPerView: 4,
            slidesPerGroup: 1,
          }
        }}
      >
        {trabajos.map((trabajo, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <a href="/Galeria" target="_blank" rel="noopener noreferrer">
              <div className="slide-container">
                <h3 className="image-title">{trabajo.titulo[idioma]}</h3>{" "}
                <div className="watermark-container">
                  <span className="watermark-text">{trabajo.descripcion[idioma]}</span>
                </div>
                <img
                  src={trabajo.imagen} // Ruta de la imagen
                  alt={`Trabajo ${index + 1}`}
                  className="slide-image"
                  draggable="false"
                />
                <div className="overlay"></div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselTrabajos;
