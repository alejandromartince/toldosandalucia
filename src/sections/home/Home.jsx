import React from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import { informacionBoton } from "../../constants/infoBotones";

// Importamos las constantes
import { textoHome } from "../../constants/infoHome";

//Importamos los componentes
import BotonLinea from "../../components/BotonLinea/BotonLinea";

// Estilos
import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto

  return (
    <section className="home-container" id="home">
      <div className="grid-container-home">
        <div className="left-grid-home">
          <div>
            <h1>{textoHome.titulo[idioma]}</h1>
          </div>
          <div>
            <p>{textoHome.parrafo[idioma]}</p>
          </div>
          <div className="boton-container">
            <BotonLinea
              idioma={idioma}
              id="Home" // Pasa un id único si es necesario
              className="boton-home" // Puedes agregar una clase personalizada si lo necesitas
            />
          </div>
        </div>
        <div className="right-grid-home">Contenido Derecho</div>
      </div>
    </section>
  );
};

export default Home;
