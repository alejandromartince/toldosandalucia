import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js";
import { infoLonas } from "../../constants/infoPersonalizarToldos";
import "./ComponenteLonas.css";

const ComponenteLonas = ({ idioma }) => {
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

  return (
    <div
      ref={contenedorRef}
      className={`contenedorLonasFlotante ${
        abierto ? "abierto" : "cerrado"
      }`}
    >
      <div className="lonasContainer">
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
						{dispositivo}
            {info.movil[idioma]}
          </button>
        )}
      </div>
    </div>
  );
};

export default ComponenteLonas;
