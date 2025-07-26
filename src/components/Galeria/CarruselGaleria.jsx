// CarruselGaleria.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarruselGaleria = ({ infoTrabajos, setIndiceActual, indiceActual }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={false}
      direction="horizontal"
      simulateTouch={false}
      onSlideChange={(swiper) => setIndiceActual(swiper.realIndex)}
      spaceBetween={"4rem"}
      className="swiper-galeria"
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
        1450: {
          slidesPerView: 4,
          slidesPerGroup: 1,
        },
      }}
    >
      {infoTrabajos.map((trabajo, index) => (
        <SwiperSlide key={index}>
          <div
            className={`galeria-slide ${
              indiceActual === index ? "slide-activo" : ""
            }`}
          >
            <img
              src={trabajo.imagen}
              alt={trabajo.titulo?.es || `Trabajo ${index + 1}`}
              className="galeria-imagen"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarruselGaleria;
