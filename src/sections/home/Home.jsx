//Importamos los hooks de swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

// Importamos las constantes
import { textoHome } from "../../constants/infoHome.js";

// Importamos los componentes
import BotonLinea from "../../components/Botones/BotonLinea.jsx";

//Importamos los hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js";

// Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

// Estilos
import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma();
  const fondos = Object.values(textoHome.fondo);
  const dispositivo = useTipoDispositivo();

  // Ya no usamos estados ni efectos para el fondo con cambio manual

  return (
    <section className="home" id="home" style={{ position: "relative" }}>
      
      {/* Fondo con Swiper */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={600}
        style={{
          position: "absolute", // posición absoluta para que sea fondo
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // detrás del contenido
        }}
      >
        {fondos.map((url, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contenido principal */}
      <div
        className="contenedor-home"
        style={{ position: "relative", zIndex: 10 }} // contenido encima del fondo
      >
        <div className="contenido-home">
          {dispositivo !== "movil" ? (
            <>
              <h1>{textoHome.titulo[idioma]}</h1>
              <p>{textoHome.parrafo[idioma]}</p>
            </>
          ) : (
            <>
              {/* <h1 className="tituloMovilVacio">{textoHome.tituloMovil[idioma]}</h1> */}
              {/* <p>{textoHome.subtituloMovil[idioma]}</p> */}
              {dispositivo}
            </>
          )}
        </div>

        <div className="boton-container">
          <BotonLinea idioma={idioma} id="Home" className="boton-linea" />
        </div>
      </div>
    </section>
  );
};

export default Home;
