// Importamos los hooks de react
import { useState, useEffect, useRef } from "react";

// Importamos los hooks personalizados
import usePosicionTop from "../../Hooks/usePosicionTop.js";

// Importamos los componentes
import BotonCerrarMenu from "../../components/Botones/BotonCerrarMenu.jsx";
import BotonWhatsapp from "../../components/Botones/BotonWhatsapp.jsx";
import ComponenteSelects from "../../components/PersonalizarToldos/ComponenteSelects.jsx";
import ComponenteLonas from "../../components/PersonalizarToldos/ComponenteLonas.jsx";

// Importamos la información
import { infoPersonalizarToldos } from "../../constants/infoPersonalizarToldos.jsx";

// Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

// Importamos los iconos
import { BsArrowLeft } from "react-icons/bs";

// Importamos el estilo de la página
import "./PersonalizarToldos.css";

const PersonalizarToldos = ({ onCerrar }) => {
  const { idioma } = useIdioma();
  const contenido = infoPersonalizarToldos;

  const [selectMenuActivo, setSelectMenuActivo] = useState(false);
  const [tipoToldoSeleccionado, setTipoToldoSeleccionado] = useState("");
  const [colorSeleccionado, setColorSeleccionado] = useState(null);
  const [seleccionCompletada, setSeleccionCompletada] = useState(false);

  const [showArrow, setShowArrow] = useState(false); 
  const [cerrando, setCerrando] = useState(false); 

  const refContenedorPadre = useRef(null);
  const [refSelects, top] = usePosicionTop(refContenedorPadre);
  const refPopup = useRef(null);

  const disabled = useState(true);

  // Mostrar flecha después de 400ms si el menú no está activo
  useEffect(() => {
    setShowArrow(false);
    if (!selectMenuActivo) {
      const timer = setTimeout(() => setShowArrow(true), 400);
      return () => clearTimeout(timer);
    }
  }, [selectMenuActivo]);

  // Bloquear scroll mientras el popup esté abierto
  useEffect(() => {
    const handleWheel = (e) => e.preventDefault();
    const handleTouchMove = (e) => e.preventDefault();

    if (!cerrando) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);

      const timer = setTimeout(onCerrar, 400); // animación de salida
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [cerrando, onCerrar]);

  return (
    <div className={`menu-main ${cerrando ? "salida" : ""}`}>
      <div
        className={`popup-contenido-prueba ${cerrando ? "salida" : ""}`}
        ref={refContenedorPadre}
        style={{ position: "relative" }}
      >
        {/* Columna izquierda */}
        <div className="contenido-PersonalizarToldos-izquierda">
          <div className="text-descriptivoTutorialSelect">
            <h2>{contenido.titulo[idioma]}</h2>
          </div>

          <div className="contenedorCentrado">
            <div className="contenedorOpcionesPT">
              <div className="contenedorHRPT" style={{ padding: "0rem 0 .5rem 0" }}>
                <p>{contenido.ajustes[idioma]}</p>
                <hr style={{ width: "100%", margin: "0 auto" }} />
              </div>

              <ComponenteSelects
                seleccionCompletada={seleccionCompletada}
                setSeleccionCompletada={setSeleccionCompletada}
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
            <BotonWhatsapp idioma={idioma} disabled={disabled}/>
          </div>
        </div>

        <hr style={{ width: ".25rem", backgroundColor: "white", border: "none" }} />

        {/* Columna derecha */}
        <div
          className="contenido-PersonalizarToldos-derecha"
          style={colorSeleccionado ? { backgroundImage: "none" } : {}}
          ref={refPopup}
        >
          <div className="contenido-bloqueado">
            <BotonCerrarMenu onClick={() => setCerrando(true)} idioma={idioma} />

            {!selectMenuActivo && showArrow && (
              <div className="contenedorFlechaTutorial">
                <BsArrowLeft
                  className="flecha-animada"
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
              src="/assets/PersonalizarToldos/2.jpeg"
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
