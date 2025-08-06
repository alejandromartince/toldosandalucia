import { useEffect, useState } from "react";

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

  const [fondoActual, setFondoActual] = useState(fondos[0]);
  const [fondoNuevo, setFondoNuevo] = useState(null);
  const [mostrarNuevo, setMostrarNuevo] = useState(false);
  const [imgCargada, setImgCargada] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const siguienteFondo =
        fondos[(fondos.indexOf(fondoActual) + 1) % fondos.length];

      const img = new Image();
      img.src = siguienteFondo;

      img.onload = () => {
        setFondoNuevo(siguienteFondo);
        setImgCargada(true);
      };
    }, 5000);

    return () => clearInterval(intervalo);
  }, [fondoActual, fondos]);

  // Cuando la imagen ya esté cargada, aplicamos la transición
  useEffect(() => {
    if (imgCargada && fondoNuevo) {
      requestAnimationFrame(() => {
        setMostrarNuevo(true);
      });
    }
  }, [imgCargada, fondoNuevo]);

  const handleTransicionFinalizada = () => {
    setFondoActual(fondoNuevo);
    setFondoNuevo(null);
    setMostrarNuevo(false);
    setImgCargada(false);
  };

  return (
    <section className="home" id="home">
      {/* Fondo actual */}
      <div
        className="fondo-img"
        style={{ backgroundImage: `url(${fondoActual})` }}
      />

      <div className="fondo-container">
        <img
          src={fondoActual}
          className="fondo-img visible"
          alt="Fondo actual"
        />
        {fondoNuevo && (
          <img
            src={fondoNuevo}
            className={`fondo-img-fade ${mostrarNuevo ? "mostrar" : ""}`}
            alt="Fondo nuevo"
            onTransitionEnd={handleTransicionFinalizada}
          />
        )}
      </div>

      {/* Contenido principal */}
      <div className="contenedor-home">
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
