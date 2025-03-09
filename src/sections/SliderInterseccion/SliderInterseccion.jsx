//Importamos los hooks generales
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importamos la informacion
import { infoSliderInterseccion } from "../../constants/infoSliderInterseccion";

//Importamos los estilos
import "./SliderInterseccion.css";

const SliderInterseccion = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <div className="slider-interseccion-container">
      <Slider {...settings}>
        {Object.entries(infoSliderInterseccion).map(([id, item]) => (
          <div key={id}>
            <img
              src={item.imgsource}
              alt={`Imagen ${id}`}
              className="slider-interseccion-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderInterseccion;
