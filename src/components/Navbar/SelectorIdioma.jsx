import { useState, useEffect, useRef } from "react";

//Importamos el hook del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

//Importamos los iconos
import { IoIosArrowDown } from "react-icons/io";

//Importamos los idiomas
import { idiomas } from "../../constants/infoNavbar.js";

//Importamos los estilos
import "../../sections/Navbar/Navbar.css";

const SelectorIdioma = () => {
  const { idioma, cambiarIdioma } = useIdioma();
  const [desplegado, setDesplegado] = useState(false);
  const contenedorRef = useRef(null);

  // Cuando el componente carga, lee el idioma guardado en localStorage (si existe)
  useEffect(() => {
    const idiomaGuardado = localStorage.getItem("idioma");
    if (idiomaGuardado && idiomaGuardado !== idioma) {
      cambiarIdioma(idiomaGuardado);
    }
  }, [cambiarIdioma, idioma]);

  // Cuando cambias el idioma, lo guardamos en localStorage
  const seleccionarIdioma = (codigo) => {
    cambiarIdioma(codigo);
    localStorage.setItem("idioma", codigo);
    setDesplegado(false);
  };

  const toggleMenu = () => setDesplegado(!desplegado);

  // Detectar clic fuera para cerrar menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(event.target)
      ) {
        setDesplegado(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const labels = {
    es: "Cambiar idioma",
    en: "Switch language",
    de: "Sprache ändern",
    fr: "Changer de langue",
    ru: "Изменить язык",
    da: "Skift sprog",
  };

  const altIdiomas = {
    es: "Español",
    en: "English",
    de: "Deutsch",
    ru: "Русский",
    fr: "Français",
    da: "Dansk",
  };

  return (
    <div className="selector-idioma-dropdown" ref={contenedorRef}>
      <button
        className="boton-idioma-actual"
        onClick={toggleMenu}
        aria-label={labels[idioma]}
      >
        <img src={idiomas[idioma]} alt={altIdiomas[idioma]} width={30} height={20} />
        <IoIosArrowDown
          size={20}
          style={{
            transform: desplegado ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
            color: "white",
          }}
        />
      </button>

      <div className={`menu-idiomas ${desplegado ? "visible" : ""}`}>
        {Object.entries(idiomas).map(([codigo, ruta]) => (
          <button
            key={codigo}
            onClick={() => seleccionarIdioma(codigo)}
            className={`idioma-opcion ${idioma === codigo ? "activo" : ""}`}
          >
            <img src={ruta} alt={codigo} width={30} height={20} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectorIdioma;
