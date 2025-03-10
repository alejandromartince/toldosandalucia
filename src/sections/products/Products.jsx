import React from "react";

//Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los componentes
import ToldosProductos from "../../components/ToldosProductos";
import BotonLinea from "../../components/BotonLinea/BotonLinea";

//Importamos la informacion
import infoProductos from "../../constants/infoProductos";

//Importamos los estilos
import "./Products.css";

const Products = () => {
  const { idioma } = useIdioma();

  return (
    <section className="products-container" id="products">
      <div className="grid-productos-container">
        <div className="left-section">
          <ToldosProductos />
          <div className="boton-container-productos">
            <BotonLinea
              idioma={idioma}
              id="Productos"
              className={"boton-linea"}
            />
          </div>
        </div>
        <div className="right-section">
          <h3>{infoProductos(2).titulo[idioma]}</h3>
          <p>{infoProductos(2).descripcion[idioma]}</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
