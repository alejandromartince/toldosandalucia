import React, { useState } from "react";

// Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

// Importamos la informacion
import { Productos } from "../../constants/infoProductos"; // Aquí importamos ambos correctamente

// Importamos los componentes
import ToldosProductos from "../../components/ToldosProductos";
import BotonLinea from "../../components/Botones/BotonLinea";

// Importamos los estilos
import "./Products.css";
import BotonAnimado from "../../components/Botones/BotonAnimado";

const Products = () => {
  const { idioma } = useIdioma();
  const [currentProductId, setCurrentProductId] = useState(1); // Estado para almacenar el id del producto actual

  // Función para cambiar el producto
  const nextProduct = () => {
    setCurrentProductId((prevId) => (prevId === 2 ? 1 : prevId + 1)); // Si llegas al final, vuelve al primero
  };

  const prevProduct = () => {
    setCurrentProductId((prevId) => (prevId === 1 ? 2 : prevId - 1)); // Si llegas al primero, vuelve al último
  };

  // Obtener el producto actual
  const producto = Productos()[currentProductId];

  const tituloProducto = {
    es: "Nuestros productos",
    en: "Our products",
  };

  return (
    <section className="products-container" id="products">
      <div className="grid-productos-container">
        <div className="left-section">
          {/* Pasamos el producto actual al componente ToldosProductos */}
          <ToldosProductos producto={producto.producto} />
          <div className="boton-container-productos">
            <BotonLinea
              idioma={idioma}
              id="Productos"
              className={"boton-linea"}
            />
          </div>
        </div>
        <div className="right-section">
          <h1>{tituloProducto[idioma]}</h1>
          <h3>{producto.titulo[idioma]}</h3>
          <p>{producto.descripcion[idioma]}</p>

          {/* Botones para navegar entre los productos */}
          <div className="product-navigation">
            <BotonAnimado idioma={idioma} id="Anterior" className="reverse" onClick={prevProduct} />

            <BotonAnimado idioma={idioma} id="Siguiente" className="boton-animado" onClick={nextProduct}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
