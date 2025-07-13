//Importamos los hooks de react
import { useState, useEffect, useRef } from "react";

//Importamos los hooks personalizados
import usePosicionTop from "../../Hooks/usePosicionTop";

//Importamos los compoenntes
import BotonCerrarMenu from "../../components/Botones/BotonCerrarMenu";
import ComponenteSelects from "../../components/PersonalizarToldos/ComponenteSelects";

//Importamos la informacion
import { infoPersonalizarToldos } from "../../constants/infoPersonalizarToldos";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los iconos
import { BsArrowLeft } from "react-icons/bs";

//Importamos el estilo de la pagina
import "./PersonalizarToldos.css";

const PersonalizarToldos = ({ onCerrar }) => {
  const { idioma } = useIdioma();
  const contenido = infoPersonalizarToldos;

  const [selectMenuActivo, setSelectMenuActivo] = useState(false);
  const refContenedorPadre = useRef(null);
  const [refSelects, top] = usePosicionTop(refContenedorPadre);

  //Script para bloquear el scroll cuando se abre el pop-up de Personalziar Toldos
  const [cerrando, setCerrando] = useState(false);
  useEffect(() => {
    const popup = document.querySelector(
      ".contenido-PersonalizarToldos-derecha"
    );
    const handleWheel = (e) => e.preventDefault();

    if (!cerrando) {
      document.body.style.overflow = "hidden";
      popup?.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      popup?.removeEventListener("wheel", handleWheel);
    }

    return () => {
      document.body.style.overflow = "auto";
      popup?.removeEventListener("wheel", handleWheel);
    };
  }, [cerrando]);

  useEffect(() => {
    if (cerrando) {
      const timer = setTimeout(() => {
        onCerrar(); // Avisamos al padre que cierre el popup y lo desmonte
      }, 400); // Duración animación salida
      return () => clearTimeout(timer);
    }
  }, [cerrando, onCerrar]);

  return (
    <div className={`menu-main ${cerrando ? "salida" : ""}`}>
      <div
        className={`popup-contenido-prueba ${cerrando ? "salida" : ""}`}
        ref={refContenedorPadre} // Aquí asignamos la referencia al padre
        style={{ position: "relative" }} // Muy importante para posicionar hijos absolute/fixed
      >
        <div className="contenido-PersonalizarToldos-izquierda">
          <h2>{contenido.titulo[idioma]}</h2>
          <p>{contenido.subtitulo[idioma]}</p>

          <div
            className="contenedorHRPT"
            style={{ padding: "1.5rem 0", marginTop: "4rem" }}
          >
            <hr style={{ width: "90%", margin: "0 auto" }} />
          </div>

          {/* COMPONENTE DONDE VAN TODOS LOS SELECTS */}
          <ComponenteSelects
            ref={refSelects}
            selectMenuActivo={selectMenuActivo}
            setSelectMenuActivo={setSelectMenuActivo}
          />
        </div>

        <div className="contenido-PersonalizarToldos-derecha">
          <div className="contenido-bloqueado">
            <div className="contenedor-Boton">
              <BotonCerrarMenu onClick={() => setCerrando(true)} />
            </div>

            {/* FLECHA QUE SALDRA CUANDO EL FORMULARIO NO ESTE COMPLETO PARA EL TUTORIAL DE LA SECCION PERSONALIZAR TOLDOS */}
            {!selectMenuActivo && (
              <div className="contenedorFlechaTutorial">
                <BsArrowLeft className="flecha-animada "
                  size={30}
                  style={{
                    position: "absolute",
                    top: top,
                    left: "0",
                    transform: "translateX(0)",
                    zIndex: 1000,
                  }}
                >
                </BsArrowLeft>
              </div>
            )}
            
            <div className="descripcionBloqueoPT">
              <p>{contenido.descripcion[idioma]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizarToldos;
