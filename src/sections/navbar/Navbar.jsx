// Navbar.jsx
import React, { useState, useRef } from "react";

// Hooks
import { useIdioma } from "../../contexts/IdiomaContext";
import { Link } from "react-scroll";

// Constants
import { secciones, idiomas } from "../../constants/navbar";

// Hooks personalizados
import { useScrollEffect } from "../../functions/navbar/useScrollEffect"; // Importa el hook para el scroll
import { useClickOutsideEffect } from "../../functions/navbar/useClickOutsideEffect"; // Importa el hook para el clic fuera del dropdown
import useScrollProgress from "../../functions/navbar/barraProgress"; // Importar el hook
import { useWindowSize } from "../../functions/navbar/useWindowSize";

// Icons
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";

// Styles
import "./Navbar.css";

const Navbar = () => {
  const { idioma, cambiarIdioma } = useIdioma();
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar el menú desplegable
  const scrollProgress = useScrollProgress(); // Usar el hook para obtener el progreso
  const isMenuOpen = useWindowSize();

  const dropdownRef = useRef(null); // Referencia para el dropdown

  // Usamos los hooks personalizados
  useScrollEffect(secciones, setActiveSection); // Hook para manejar el scroll
  useClickOutsideEffect(dropdownRef, setIsDropdownOpen); // Hook para manejar clics fuera del dropdown

  return (
    <header className="header-nav">
      <div className="nav-container">
        <div className="logo-nav-container">
          <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
        </div>

        <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
          <nav>
            <ul>
              {secciones.map(({ id, texto, offset }) => (
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
                  {texto[idioma]}
                </Link>
              ))}
            </ul>
          </nav>
        </div>

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
            <FaArrowDown size={15} style={{ marginLeft: "5px" }} />
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
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
