import { useEffect, useState } from "react";

// Importamos las constantes
import { textoHome } from "../../constants/infoHome.js";

// Importamos los componentes
import BotonLinea from "../../components/Botones/BotonLinea.jsx";

//Importamos los hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js";

// Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

// Estilos
import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma();
  const fondos = Object.values(textoHome.fondo);
  const dispositivo = useTipoDispositivo();

  const [fondoActual, setFondoActual] = useState(fondos[0]);
  const [fondoNuevo, setFondoNuevo] = useState(null);
  const [mostrarNuevo, setMostrarNuevo] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const siguienteFondo =
        fondos[(fondos.indexOf(fondoActual) + 1) % fondos.length];
      setFondoNuevo(siguienteFondo);

      // Esperamos un poco antes de activar la clase .mostrar
      setTimeout(() => {
        setMostrarNuevo(true); // esto activa la transición
      }, 10);

      // Después de 1s (cuando termina el fade), actualizamos
      setTimeout(() => {
        setFondoActual(siguienteFondo);
        setMostrarNuevo(false);
        setFondoNuevo(null);
      }, 1010); // un poco más de 1s para asegurar la animación
    }, 5000);

    return () => clearInterval(intervalo);
  }, [fondoActual, fondos]);

  return (
    <section className="home" id="home">
      {/* Fondo actual */}
      <div
        className="fondo-img"
        style={{
          backgroundImage: `url(${fondoActual})`,
        }}
      />

      {/* Fondo en transición */}
      {fondoNuevo && (
        <div
          className={`fondo-img-fade ${mostrarNuevo ? "mostrar" : ""}`}
          style={{
            backgroundImage: `url(${fondoNuevo})`,
            backgroundColor: "transparent",
            backgroundBlendMode: "normal",
          }}
        />
      )}

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
