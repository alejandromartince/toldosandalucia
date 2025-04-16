import React, {useState} from "react";

// Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

// Importamos la informacion
import { Productos } from "../../constants/infoProductos"; // Aquí importamos ambos correctamente

// Importamos los componentes
import ToldosProductos from "../../components/ToldosProductos";

//Importamos los iconos
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Importamos los estilos
import "./Productos.css";
import BotonImportante from "../../components/Botones/BotonImportante";

const Productos = () => {
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
      <div className="boton-container-productos">
        <BotonImportante idioma={idioma} id="Productos"></BotonImportante>
      </div>
    </section>
  );
};

export default Productos;
