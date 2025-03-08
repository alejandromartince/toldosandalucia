import React from "react";
import Slider from "react-slick";

// Importa los estilos de slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importamos los estilos
import "./HistoriaBeneficio.css";

const HistoriaBeneficio = () => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Desplazamiento infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Cuántas imágenes mostrar a la vez
    slidesToScroll: 1, // Cuántas imágenes avanzar al hacer clic en el botón
    autoplay: true, // Autoplay
    autoplaySpeed: 3000, // Velocidad de autoplay
  };
  return (
    <section className="historia-beneficio" id="historia-beneficio">
      <div className="historia-beneficio-container">
        <Slider {...settings}>
          <div>
            <img src="/assets/Logo/1999.png" alt="Slide 1" />
          </div>
          <div>
            <img src="/assets/HistoriaBeneficios/toldo3.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="/assets/HistoriaBeneficios/toldo1.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HistoriaBeneficio;
