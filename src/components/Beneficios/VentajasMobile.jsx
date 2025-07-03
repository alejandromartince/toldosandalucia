//Importamos React y hooks necesarios
import { useRef, useState } from 'react';

//Importamos la informacion
import { textoBeneficios } from '../../constants/infoBeneficios';
import useInformacionBoton from '../../constants/infoBotones';

//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

//Importamos los iconos
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


//Importamos los estilos
import './VentajasMobile.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BotonCuadrado from '../Botones/BotonCuadrado';

const VentajasMobile = () => {

  const { idioma } = useIdioma();
  const infoBoton = useInformacionBoton(idioma, "Beneficios");

  const beneficiosArray = Object.values(textoBeneficios);

  const [indiceActual, setIndiceActual] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='ventajas-mobile-container'>
      <div className='contenedor-ventajas-mobile-superior'>
        <div className="ventajas-header">
          <button
            ref={prevRef}
            className="nav-button"
            disabled={isBeginning}
            style={{ opacity: isBeginning ? 0.3 : 1, cursor: isBeginning ? 'not-allowed' : 'pointer' }}
          >
            <IoIosArrowBack />
          </button>
          <h2 className='ventajas-titulo'>{beneficiosArray[indiceActual].titulo[idioma]}</h2>
          <button
            ref={nextRef}
            className="nav-button"
            disabled={isEnd}
            style={{ opacity: isEnd ? 0.3 : 1, cursor: isEnd ? 'not-allowed' : 'pointer' }}
          >
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop={false}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          className="swiper-ventajas"
          onSlideChange={(swiper) => {
            setIndiceActual(swiper.realIndex);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {beneficiosArray.map((item, index) => (
            <SwiperSlide key={index} className='swiper-slide-ventajas'>
              <div
                className="ventajas-slide"
                style={{
                  backgroundImage: `url(${item.imagen})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Recuadro para el texto debajo */}
      <div className="ventajas-texto-externo">
        <p>{beneficiosArray[indiceActual].informacion.movil[idioma]}</p>
        <div className='ventajas-boton-container-mobile'>
        <BotonCuadrado
          text={infoBoton.texto}
          onClick={() => window.open(infoBoton.url, "_blank")}
          />
          </div>
      </div>
    </div>
  );
};

export default VentajasMobile;
