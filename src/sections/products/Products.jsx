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
  const [currentProductIndex, setCurrentProductIndex] = useState(0); // Estado para almacenar el índice del producto actual

  // Array de productos importado desde el archivo
  const productos = Productos;

  // Función para cambiar al siguiente producto
  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === productos.length - 1 ? 0 : prevIndex + 1
    ); // Si llegas al final, vuelve al primero
  };

  // Función para cambiar al producto anterior
  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? productos.length - 1 : prevIndex - 1
    ); // Si llegas al primero, vuelve al último
  };

  // Obtener el producto actual
  const producto = productos[currentProductIndex];

  const tituloProducto = {
    es: "Nuestros productos",
    en: "Our products",
  };

  return (
    <section className="products-container" id="products">
      <div className="grid-productos-container">
        <div className="left-section">
          {/* Instanciamos el producto y pasamos su posición */}
          <ToldosProductos
            producto={<producto.producto scale={producto.escala} position={producto.position} />}
          />
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

          <div className="product-navigation">
            <BotonAnimado
              idioma={idioma}
              id="Anterior"
              className="reverse"
              onClick={prevProduct}
            />
            <BotonAnimado
              idioma={idioma}
              id="Siguiente"
              className="boton-animado"
              onClick={nextProduct}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
