// CarruselGaleria.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarruselGaleria = ({ infoTrabajos, setIndiceActual, indiceActual }) => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            slidesPerView={4}
            slidesPerGroup={1}
            onSlideChange={(swiper) => setIndiceActual(swiper.realIndex)}
            className="swiper-galeria"
        >
            {infoTrabajos.map((trabajo, index) => (
                <SwiperSlide key={index}>
                    <div className={`galeria-slide ${indiceActual === index ? 'slide-activo' : ''}`}>
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
