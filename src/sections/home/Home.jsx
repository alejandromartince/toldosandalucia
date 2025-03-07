import React from "react";
import { useIdioma } from "../../contexts/IdiomaContext";

// Importamos las constantes
import { textoHome } from "../../constants/infoHome";

//Importamos los componentes
import BotonLinea from "../../components/BotonLinea/BotonLinea";
import CasaHome from "../../components/CasaHome";

// Estilos
import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto

  return (
    <section className="home" id="home">
      <div className="home-container">

        <div className="home-right-container">
          <CasaHome />
        </div>
        
        <div className="home-left-container">
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
      </div>
    </section>
  );
};

export default Home;
