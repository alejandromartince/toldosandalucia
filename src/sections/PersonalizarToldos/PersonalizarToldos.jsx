//Importamos los hooks de react
import { useState, useEffect, useRef } from "react";

//Importamos los hooks personalizados
import usePosicionTop from "../../Hooks/usePosicionTop.js";

//Importamos los componentes
import BotonCerrarMenu from "../../components/Botones/BotonCerrarMenu.jsx";
import BotonWhatsapp from "../../components/Botones/BotonWhatsapp.jsx";
import ComponenteSelects from "../../components/PersonalizarToldos/ComponenteSelects.jsx";
import ComponenteLonas from "../../components/PersonalizarToldos/ComponenteLonas.jsx";

//Importamos la informacion
import { infoPersonalizarToldos } from "../../constants/infoPersonalizarToldos.jsx";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

//Importamos los iconos
import { BsArrowLeft } from "react-icons/bs";

//Importamos el estilo de la pagina
import "./PersonalizarToldos.css";

const PersonalizarToldos = ({ onCerrar }) => {
  const { idioma } = useIdioma();
  const contenido = infoPersonalizarToldos;

  const [selectMenuActivo, setSelectMenuActivo] = useState(false);
  const [tipoToldoSeleccionado, setTipoToldoSeleccionado] = useState("");
  const [colorSeleccionado, setColorSeleccionado] = useState(null);

  // Estado para controlar la visibilidad de la flecha con delay
  const [showArrow, setShowArrow] = useState(false);

  const refContenedorPadre = useRef(null);
  const [refSelects, top] = usePosicionTop(refContenedorPadre);

  const [cerrando, setCerrando] = useState(false);
  const refPopup = useRef(null);

  // Mostrar flecha después de 400ms si el menú no está activo
  useEffect(() => {
    setShowArrow(false);
    if (!selectMenuActivo) {
      const timer = setTimeout(() => setShowArrow(true), 400);
      return () => clearTimeout(timer);
    }
  }, [selectMenuActivo]);

  // Bloquear scroll y cerrar con animación
  useEffect(() => {
    const popup = refPopup.current;
    const handleWheel = (e) => e.preventDefault();

    if (!cerrando) {
      document.body.style.overflow = "hidden";
      popup?.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      const timer = setTimeout(onCerrar, 400);
      document.body.style.overflow = "auto";
      popup?.removeEventListener("wheel", handleWheel);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "auto";
      popup?.removeEventListener("wheel", handleWheel);
    };
  }, [cerrando, onCerrar]);

  return (
    <div className={`menu-main ${cerrando ? "salida" : ""} `}>
      <div
        className={`popup-contenido-prueba ${cerrando ? "salida" : ""}`}
        ref={refContenedorPadre} // Aquí asignamos la referencia al padre
        style={{ position: "relative" }} // Muy importante para posicionar hijos absolute/fixed
      >
        <div className="contenido-PersonalizarToldos-izquierda">
          <div className="text-descriptivoTutorialSelect">
            <h2>{contenido.titulo[idioma]}</h2>
          </div>

          <div className="contenedorCentrado">
            <div className="contenedorOpcionesPT">
              <div
                className="contenedorHRPT"
                style={{ padding: "0rem 0 .5rem 0" }}
              >
                <p>{contenido.ajustes[idioma]}</p>
                <hr style={{ width: "100%", margin: "0 auto" }} />
              </div>

              {/* COMPONENTE DONDE VAN TODOS LOS SELECTS */}
              <ComponenteSelects
                ref={refSelects}
                selectMenuActivo={selectMenuActivo}
                setSelectMenuActivo={setSelectMenuActivo}
                tipoToldoSeleccionado={tipoToldoSeleccionado}
                setTipoToldoSeleccionado={setTipoToldoSeleccionado}
                colorSeleccionado={colorSeleccionado}
                setColorSeleccionado={setColorSeleccionado}
              />
            </div>
          </div>

          <div className="contenedorBotonWhatsappPT">
            <BotonWhatsapp idioma={idioma} />
          </div>
        </div>

        <hr
          style={{ width: ".25rem", backgroundColor: "white", border: "none" }}
        />

        <div
          className="contenido-PersonalizarToldos-derecha"
          style={colorSeleccionado ? { backgroundImage: "none" } : {}}
        >
          <div className="contenido-bloqueado">
            <BotonCerrarMenu
              onClick={() => setCerrando(true)}
              idioma={idioma}
            />

            {!selectMenuActivo && showArrow && (
              <div className="contenedorFlechaTutorial">
                <BsArrowLeft
                  className="flecha-animada "
                  size={30}
                  style={{
                    position: "absolute",
                    top: top,
                    left: "0",
                    transform: "translateX(0)",
                    zIndex: 1000,
                  }}
                />
              </div>
            )}
          </div>

          {!colorSeleccionado && (
            <div className="descripcionBloqueoPT">
              <p>{contenido.descripcion[idioma]}</p>
            </div>
          )}

          <ComponenteLonas
            idioma={idioma}
            tipoToldoSeleccionado={tipoToldoSeleccionado}
            colorSeleccionado={colorSeleccionado}
            setColorSeleccionado={setColorSeleccionado}
          />

          {colorSeleccionado && (
            <img
              src="/assets/PersonalizarToldos/1.jpeg"
              alt="fondo"
              className="imagen-fondo-lona"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalizarToldos;
