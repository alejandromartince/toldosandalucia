import { useState } from "react";

//Importamos los hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js";

// Importamos la informacion
import { infoProductos } from "../../constants/infoProductos.jsx";

import { useDriverProductos } from "../../Hooks/Productos/useDriver.jsx";

// Importamos los componentes
import ToldosProductos from "../../EscenasObjetos/ToldosProductos.jsx";
import BotonProductos from "../../components/Botones/BotonProductos.jsx";
import BotonInterrogacion from "../../components/Botones/BotonInterrogacion.jsx";
import PersonalizarToldos from "../PersonalizarToldos/PersonalizarToldos.jsx";

//Importamos los iconos
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


// Importamos los contextos
import { useIdioma } from '../../Hooks/General/useIdioma.js'

// Estilos
import "./Products.css";

const Products = () => {
  const { idioma } = useIdioma();
  const [currentProductIndex, setCurrentProductIndex] = useState(0); //Asignamos el valor del producto
  const [mostrarPopup, setMostrarPopup] = useState(false); // Nuevo estado para mostrar el popup
  const dispositivo = useTipoDispositivo(); //Hook para saber si es movil o pc

  const informacionProductos = infoProductos; //Cogemos la informacion de los productos
  const productoActual = informacionProductos[currentProductIndex]; //Asignamos el valor del producto actual

  //Funcion para elegir el siguiente objeto
  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === infoProductos.length - 1 ? 0 : prevIndex + 1
    );
  };

  //Funciona para elegir el anterior objeto
  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? infoProductos.length - 1 : prevIndex - 1
    );
  };

  //Informacion del titulo cambiando el idioma
  const tituloProducto = {
    es: "Nuestros productos",
    en: "Our products",
  };

  
  useDriverProductos(); //Llamamos al driver de productos

  return (
    <section className="seccion-productos" id="products">

      {/* CONTENEDOR SUPERIOR - Ocupa toda la pantalla */}
      <div className="contenedor-superior-productos">

        {/* IZQUIERDA: OBJETO 3D + NAVEGACIÓN */}
        <div className="contenedor-izquierda" id="driver-productos3d">
          <ToldosProductos
            id={productoActual.id}
          />

          <div className="contenedor-navegacion-productos">
            <IoIosArrowBack
              onClick={prevProduct}
              className="icono-productos"
            />
            <IoIosArrowForward
              onClick={nextProduct}
              className="icono-productos"
            />
          </div>
        </div>


        {/* DERECHA: TEXTO Y BOTÓN DE INFO */}
        <div className="contenedor-derecha">
          <div className="text-contenedor-productos">
            <h1>{dispositivo === 'movil' ? productoActual.titulo[idioma] : tituloProducto[idioma]}</h1>
            <hr className="hr-productos" />
            <div className="text-productos">
              <h3>{dispositivo !== 'movil' ? productoActual.titulo[idioma] : ''}</h3>
              <p>{dispositivo === 'movil' ? productoActual.descripcion.movil[idioma] : productoActual.descripcion.pc[idioma]}</p>
            </div>
          </div>
          <div className="boton-derecha-prueba">
            <BotonInterrogacion mensaje={productoActual.copy} />
          </div>
        </div>
      </div>



      {/* BOTÓN FIJO EN LA PARTE INFERIOR (30% de altura visible) */}
      <div className="contenedor-botones-prueba">
        <div className="boton-centro-prueba">
          <BotonProductos onAbrir={() => setMostrarPopup(true)} />
            <p>&gt;Solicita tu presupuesto sin compromiso</p>
        </div>
      </div>


      {/* POPUP DE PERSONALIZACIÓN */}
      {mostrarPopup && (
        <PersonalizarToldos onCerrar={() => setMostrarPopup(false)} />
      )}
    </section>
  );
}

export default Products;
