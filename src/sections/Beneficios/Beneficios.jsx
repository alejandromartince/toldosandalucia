import React, { useState, useEffect } from "react";
import { TfiRulerPencil } from "react-icons/tfi";
import { GiFactoryArm } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { useIdioma } from "../../contexts/IdiomaContext";
import "./Beneficios.css";

const Beneficios = () => {
  const { idioma } = useIdioma();
  const [currentIndex, setCurrentIndex] = useState(0);

  const beneficios = [
    {
      icon: <TfiRulerPencil size={60} />,
      texto:
        idioma === "es"
          ? "Diseñamos e instalamos toldos a medida, tanto manuales como automatizados, integrando soluciones de domótica. Además, ofrecemos el servicio de rotulación para todo tipo de toldos."
          : "We design and install custom-made awnings, both manual and automated, integrating smart home solutions. Additionally, we offer lettering services for all types of awnings.",
      imagen: "/assets/Imagenes/fondoo.png",
    },
    {
      icon: <GiFactoryArm size={60} />,
      texto:
        idioma === "es"
          ? "Trabajamos con más de 500 colores en lonas del tipo acrílicas, técnicas, ignífugas e impermeables. Disponemos de un taller propio de costura con equipos de última generación, diseñando cada toldo a medida."
          : "We work with over 500 colors in fabrics such as acrylics, technical fabrics, fire-resistant, and waterproof materials. We have our own sewing workshop with state-of-the-art equipment, designing each awning to measure.",
      imagen: "/assets/Imagenes/fondo.jpg",
    },
    {
      icon: <GrUserWorker size={60} />,
      texto:
        idioma === "es"
          ? "Contamos con un equipo altamente cualificado para la instalación de toldos en todo tipo de construcciones, garantizando un trabajo profesional y adaptado a las necesidades de cada proyecto."
          : "We have a highly qualified team for the installation of awnings in all types of construction, guaranteeing a professional job and adapted to the needs of each project.",
      imagen: "/assets/Imagenes/toldo2.jpg",
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beneficios.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + beneficios.length) % beneficios.length
    );
  };

  const handleCardClick = (index) => {
    setCurrentIndex(index); // Cambia la tarjeta actual
  };

  // Efecto para mover el slider cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextCard, 5000); // Cambia de tarjeta cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <section className="beneficios" id="home">
      <h1>
        {idioma === "es"
          ? "BENEFICIOS DE TRABAJAR CON NOSOTROS"
          : "BENEFITS OF WORKING WITH US"}
      </h1>
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
              style={{ backgroundImage: `url(${beneficio.imagen})` }}
            >
              <div className="card-content">
                {beneficio.icon}
                {index === currentIndex && <p>{beneficio.texto}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
