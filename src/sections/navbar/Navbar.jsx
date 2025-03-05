import React, { useState, useEffect, useRef } from "react";

// Hooks
import { useIdioma } from "../../contexts/IdiomaContext";
import { Link } from "react-scroll";

// Constants
import { secciones, idiomas } from "../../constants/navbar";

// Utils
import { handleScroll } from "../../functions/handleScroll"; // Importa la función handleScroll

//Icons
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";

// Styles
import "./Navbar.css";

const Navbar = () => {
  const { idioma, cambiarIdioma } = useIdioma();
  const [activeSection, setActiveSection] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar el menú desplegable

  const dropdownRef = useRef(null); // Referencia para el dropdown

  // Actualiza el texto cuando cambia el idioma
  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScroll(secciones, setActiveSection)
    ); // Usa la función handleScroll
    return () =>
      window.removeEventListener("scroll", () =>
        handleScroll(secciones, setActiveSection)
      );
  }, []);

  // Cerrar el dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-nav">
      <div className="nav-container">
        <div className="logo-nav-container">
          <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
        </div>

        <nav>
          <ul>
            {secciones.map(({ id, es, en, offset }) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                className={`nav_link ${
                  activeSection === id ? "active_link" : ""
                }`}
              >
                {idioma === "es" ? es : en}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Botón para mostrar el menú desplegable de idiomas */}
        <div className="language-button-container" ref={dropdownRef}>
          <button
            className="language-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Cambia el estado para abrir/cerrar el dropdown
          >
            <img
              src={idiomas[idioma]} // Muestra la bandera del idioma actual
              alt={idioma}
              className="language-flag"
            />
            <FaArrowDown size={15} style={{ marginLeft: "5px" }}/>
          </button>

          {isDropdownOpen && (
            <ul className="language-dropdown">
              {Object.keys(idiomas).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => cambiarIdioma(key)}
                    className="language-button"
                  >
                    <img
                      src={idiomas[key]} // Muestra la bandera correspondiente
                      alt={key}
                      className="language-flag"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
