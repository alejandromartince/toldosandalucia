import { useEffect, useRef, useState } from "react";

// Importamos los iconos
import { IoIosArrowDown } from "react-icons/io";

// Importamos los hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js";
import { seleccionarColorToldo } from "../../Hooks/PersonalizarToldos/seleccionarColorToldo.jsx";

// Importamos la informacion
import { infoLonas } from "../../constants/infoPersonalizarToldos";

// Importamos los estilos
import "./ComponenteLonas.css";

const ComponenteLonas = ({
  idioma,
  tipoToldoSeleccionado,
  colorSeleccionado,
  setColorSeleccionado,
}) => {
  const dispositivo = useTipoDispositivo();
  const info = infoLonas;

  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef(null);

  // Cerrar al hacer clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(event.target)
      ) {
        setAbierto(false);
      }
    };

    if (dispositivo !== "ordenador") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispositivo]);

  useEffect(() => {
    if (!tipoToldoSeleccionado) {
      setAbierto(false);
    }
  }, [tipoToldoSeleccionado]);

  return (
    <div
      ref={contenedorRef}
      onMouseEnter={() => {
        if (tipoToldoSeleccionado) {
          setAbierto(true);
        }
      }}
      onMouseLeave={()=> {
        if(tipoToldoSeleccionado){
          setAbierto(false);
        }
      }}
      className={`contenedorLonasFlotante ${abierto ? "abierto" : "cerrado"}`}
    >
      <div className="lonasContainer">
        {/* Mostrar texto o botón según tipo de dispositivo */}
        {dispositivo === "ordenador" ? (
          <div className="deslizarArribaPT">
            <p>{info.pc[idioma]}</p>
            <IoIosArrowDown size={25} className="flechaLonas" />
          </div>
        ) : (
          <button
            className="botonColoresPT"
            onClick={() => setAbierto(!abierto)}
          >
            {info.movil[idioma]}
          </button>
        )}

        {/* Mostrar el selector de colores, pasando la función para actualizar el color seleccionado */}
        <div style={{ marginTop: "1rem", color: "#fff" }}>
          {seleccionarColorToldo(tipoToldoSeleccionado, setColorSeleccionado)}
        </div>

      </div>
    </div>
  );
};

export default ComponenteLonas;
