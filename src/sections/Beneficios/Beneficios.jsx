import React, { useState, useRef } from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import { informacionSlider } from "../../constants/slides";
import Slider from "react-slick";
import Button from "../../components/Button"; // Importamos el nuevo botón

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Beneficios.css";

const Beneficios = () => {
  const { idioma } = useIdioma();
  const beneficios = informacionSlider(idioma);
  const [indexActivo, setIndexActivo] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 10000,
    arrows: false, // Ocultamos los botones de Slick
    beforeChange: (oldIndex, newIndex) => setIndexActivo(newIndex),
    draggable: false, // Deshabilita la capacidad de arrastrar
  };

  return (
    <section className="section-beneficios" id="home">
      <div className="grid-container">
        <div className="grid-izquierda">
          <div>
            <h1>{beneficios[indexActivo].portada}</h1>
            <p>{beneficios[indexActivo].texto}</p>
          </div>
          <img
            src="/assets/Logo/1999.png"
            alt="Logo1999"
            style={{
              width: "15rem",
              position: "absolute",
              bottom: "4rem",
              left: "-2rem",
            }}
          />
        </div>

        <div className="grid-derecha">
          <div className="beneficios-titulo">
            <h1>
              {idioma === "es"
                ? "Beneficios de trabajar con nosotros"
                : "Benefits of working with us"}
            </h1>
            <p>
              {idioma === "es"
                ? "Desde la planificación hasta el mantenimiento, en Toldos Andalucía ofrecemos una instalación de toldos precisa y de calidad, cuidando cada detalle. Además, realizamos pruebas para asegurar su funcionamiento óptimo y te asesoramos en su mantenimiento para una mayor durabilidad."
                : "From planning to maintenance, at Toldos Andalucía we offer precise and high-quality awning installation, taking care of every detail. Additionally, we conduct tests to ensure optimal performance and provide guidance on maintenance for greater durability."}
            </p>
          </div>
          <div className="beneficios-slider">
            <Slider ref={sliderRef} {...settings}>
              {beneficios.map((beneficio, index) => (
                <div className="card" key={index}>
                  <div
                    className="card-content"
                    style={{
                      backgroundImage: `url(${beneficio.imagen})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  >
                    <div className="background-overlay"></div>
                    <p className="beneficio-texto">{beneficio.portada}</p>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="arrow-hr-number">
              <div className="botones-slider">
                <Button
                  className="prev"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <FaArrowLeft size={30} />
                </Button>
                <Button
                  className="next"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <FaArrowRight size={30} />
                </Button>
              </div>

              <div className="horizontal-line-container">
                <hr className="horizontal-line" />
                <span className="number">0{indexActivo + 1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
