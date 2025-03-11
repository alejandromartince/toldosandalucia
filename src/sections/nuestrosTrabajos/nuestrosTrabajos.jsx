import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./NuestrosTrabajos.css"; // Archivo de estilos

const images = [
  "/assets/SliderTrabajos/Cortina-1.jpeg",
  "/assets/SliderTrabajos/Pergola-1.jpg",
  "/assets/SliderTrabajos/Cortina-2.jpeg",
  "/assets/SliderTrabajos/Vela-1.jpeg",
  "/assets/SliderTrabajos/Terraza-1.jpg",
];

const NuestrosTrabajos = () => {
  return (
    <section className="nuestrosTrabajos-section" id="works">
      <div className="swiper-container">
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
          {images.map((img, index) => (
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
