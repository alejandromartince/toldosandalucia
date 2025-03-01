import React, { useState, useEffect, useRef } from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import { informacionSlider } from "../../constants/slides";
import "./Beneficios.css";

const Beneficios = () => {
  const { idioma } = useIdioma();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const beneficios = informacionSlider(idioma);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beneficios.length);
  };

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextCard, 6000);
  };

  const handleCardClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      restartTimer();
    }
  };

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
  }, [idioma]);

  return (
    <section className="beneficios" id="home">
      <div className="container">
        <div className="titulo-container">
          {" "}
          {/* Contenedor para el título */}
          <h1>
            {idioma === "es"
              ? "BENEFICIOS DE TRABAJAR CON NOSOTROS"
              : "BENEFITS OF WORKING WITH US"}
          </h1>
        </div>

        <div className="slider-container">
          <div className="cards">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className={`card ${
                  index === currentIndex
                    ? "center"
                    : index === (currentIndex + 1) % beneficios.length
                    ? "right"
                    : "left"
                }`}
                onClick={() => handleCardClick(index)}
                style={{
                  transition: "all 0.5s ease",
                }}
              >
                <div className="card-inner">
                  <div className="card-content">
                    {index !== currentIndex && (
                      <div className="icono">{beneficio.icon}</div>
                    )}
                    {index === currentIndex && (
                      <>
                        <div className="contenido">
                          <h1>{beneficio.portada}</h1>
                          <p>{beneficio.texto}</p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="barra-abajo-carta-color"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="info-abajo">
            <img src="./assets/Logo/1999.png" alt="logo-1999" />
            <p>
              Toldos Andalucía ofrece fabricación, diseño e instalación de
              toldos en Málaga. Contamos con materiales de alta calidad, más de
              500 colores y opciones personalizadas para cada necesidad. Protege
              tu hogar del sol, mejora la eficiencia energética y disfruta de
              espacios exteriores cómodos con nuestros toldos a medida.
            </p>
          </div>
        </div>
    </section>
  );
};

export default Beneficios;
