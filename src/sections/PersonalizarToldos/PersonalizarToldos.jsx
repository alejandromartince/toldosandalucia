//Importamos los hooks de react
import { useState, useEffect, useRef } from "react";

//Importamos los hooks personalizados
import usePosicionTop from "../../Hooks/usePosicionTop.js";

//Importamos los compoenntes
import BotonCerrarMenu from "../../components/Botones/BotonCerrarMenu.jsx";
import ComponenteSelects from "../../components/PersonalizarToldos/ComponenteSelects.jsx";

//Importamos la informacion
import { infoPersonalizarToldos } from "../../constants/infoPersonalizarToldos.jsx";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

//Importamos los iconos
import { BsArrowLeft } from "react-icons/bs";

//Importamos el estilo de la pagina
import "./PersonalizarToldos.css";
import BotonWhatsapp from "../../components/Botones/BotonWhatsapp.jsx";

const PersonalizarToldos = ({ onCerrar }) => {
  const { idioma } = useIdioma();
  const contenido = infoPersonalizarToldos;

  const [selectMenuActivo, setSelectMenuActivo] = useState(false);
  const refContenedorPadre = useRef(null);
  const [refSelects, top] = usePosicionTop(refContenedorPadre);

  //Script para bloquear el scroll cuando se abre el pop-up de Personalziar Toldos
  const [cerrando, setCerrando] = useState(false);
  useEffect(() => {
    const popup = document.querySelector(".popup-contenido-prueba ");
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

        <div className="contenido-PersonalizarToldos-derecha">
          <div className="contenido-bloqueado">
            <BotonCerrarMenu
              onClick={() => setCerrando(true)}
              idioma={idioma}
            />

            {/* FLECHA QUE SALDRA CUANDO EL FORMULARIO NO ESTE COMPLETO PARA EL TUTORIAL DE LA SECCION PERSONALIZAR TOLDOS */}
            {!selectMenuActivo && (
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
                ></BsArrowLeft>
              </div>
            )}

            <div className="descripcionBloqueoPT">
              <p>{contenido.descripcion[idioma]}</p>
            </div>
          </div>

          {/* <div style={{display:"flex", gap:"1rem"}}>
              <img src="/assets/Lonas/Arizona.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/AzulX.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/BeigeX.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/Beige.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/Castor.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/Marfil.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/Natural.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/Sand.webp" alt="beige" style={{width:"4rem"}} />
              <img src="/assets/Lonas/VerdeX.webp" alt="beige" style={{width:"4rem"}} />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalizarToldos;
