import { useState } from "react";

// Hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js";
import { useDriverProductos } from "../../Hooks/Productos/useDriver.jsx";
import useInformacionBoton from "../../constants/infoBotones.js";

// Datos y componentes
import { infoProductos } from "../../constants/infoProductos.jsx";
import ToldosProductos from "../../EscenasObjetos/ToldosProductos.jsx";
import PersonalizarToldos from "../PersonalizarToldos/PersonalizarToldos.jsx";
import BotonProductos from "../../components/Botones/BotonProductos.jsx";

// Iconos
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Contexto idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

// Estilos
import "./Products.css";

const Products = () => {
  const { idioma } = useIdioma();
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const dispositivo = useTipoDispositivo();
  const { runDriver } = useDriverProductos();

  const informacionProductos = infoProductos;
  const productoActual = informacionProductos[currentProductIndex];
  const i = useInformacionBoton(idioma, "Tutorial");

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === infoProductos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? infoProductos.length - 1 : prevIndex - 1
    );
  };

  const tituloProducto = {
    es: "Nuestros productos",
    en: "Our products",
    fr: "Nos produits",
    de: "Unsere Produkte",
    da: "Vores produkter",
    ru: "Наши продукты",
  };

  return (
    <section className="seccion-productos" id="products">
      <div className="contenedor-superior-productos">
        <div className="contenedor-izquierda" id="driver-productos3d">
          <ToldosProductos id={productoActual.id} />

          <div className="contenedor-navegacion-productos">
            <IoIosArrowBack onClick={prevProduct} className="icono-productos" />
            <IoIosArrowForward onClick={nextProduct} className="icono-productos" />
          </div>
        </div>

        <div className="contenedor-derecha">
          <div className="text-contenedor-productos">
            <h1>
              {dispositivo === "movil"
                ? productoActual.titulo[idioma]
                : tituloProducto[idioma]}
            </h1>
            <hr className="hr-productos" />
            <div className="text-productos">
              <h3>{dispositivo !== "movil" ? productoActual.titulo[idioma] : ""}</h3>
              <p>
                {dispositivo === "movil"
                  ? productoActual.descripcion.movil[idioma]
                  : productoActual.descripcion.pc[idioma]}
              </p>
            </div>
          </div>
          {/* <div className="boton-derecha-prueba">
            <BotonInterrogacion mensaje={i.texto} onClick={() => {
                console.log("Boton Clicado")
                runDriver(true);
              }} />
          </div> */}

        </div>
      </div>

      <div className="contenedor-botones-prueba">
        <BotonProductos onAbrir={() => setMostrarPopup(true)} />
      </div>

      {mostrarPopup && <PersonalizarToldos onCerrar={() => setMostrarPopup(false)} />}
    </section>
  );
};

export default Products;
