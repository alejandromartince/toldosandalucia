import React, { useState, useEffect, useRef } from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import { informacionSlider } from "../../constants/slides";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Beneficios.css";

const Beneficios = () => {
  const { idioma } = useIdioma();
  const beneficios = informacionSlider(idioma);
  const [indexActivo, setIndexActivo] = useState(0);
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 10000,
    beforeChange: (oldIndex, newIndex) => setIndexActivo(newIndex),
  };

  return (
    <section className="section-beneficios" id="home">
      <div
        className={`grid-container`}
        style={{
          backgroundImage: `url(${
            beneficios[
              indexActivo === 0 ? beneficios.length - 1 : indexActivo - 1
            ].imagen
          })`,
        }}
      >
        <div className="grid-izquierda">
          <h1>hola</h1>
        </div>
        <div className="grid-derecha">
          <div className="beneficios-slider">
            <Slider ref={sliderRef} {...settings}>
              {beneficios.map((beneficio, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => {
                    setIndexActivo(index);
                    sliderRef.current.slickGoTo(index);
                  }}
                >
                  <div className="card-content">
                    <img
                      src={beneficio.imagen} // Asumiendo que 'imagen' es la propiedad de la URL de la imagen en 'beneficio'
                      alt={beneficio.portada}
                      className="beneficio-imagen"
                    />
                    <p className="beneficio-texto">{beneficio.icon}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
