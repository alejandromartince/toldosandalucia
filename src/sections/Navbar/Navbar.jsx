import React, { useState } from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { idioma, cambiarIdioma } = useIdioma();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIdiomaChange = (lang) => {
    cambiarIdioma(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <nav className="menu">
        {/* Zona Izquierda: Logo */}
        <div className="menu-izquierda">
          <a href="/">
            <img
              src="assets/Logo/Logo_Transparent.png"
              className="logo"
              alt="Logo"
            />
          </a>
        </div>

        {/* Zona Central: Menú de navegación */}
        <div className={`menu-centro ${isMenuOpen ? "activo" : ""}`}>
          <ul className="menu-navbar-lista">
            <li className="menu-navbar-lista-item subrayado">
              <a href="/">{idioma === "es" ? "Inicio" : "Home"}</a>
            </li>
            <li className="menu-navbar-lista-item subrayado">
              <a href="/">{idioma === "es" ? "Productos" : "Products"}</a>
            </li>
            <li className="menu-navbar-lista-item subrayado">
              <a href="/">{idioma === "es" ? "Contacto" : "Contact"}</a>
            </li>
            <li className="menu-navbar-lista-item subrayado">
              <a href="/">{idioma === "es" ? "Blog" : "Blog"}</a>
            </li>
          </ul>
        </div>

        {/* Zona Derecha: Selector de idioma y botón hamburguesa */}
        <div className="menu-derecha">
          {/* Selector de idioma */}
          <div className="idioma-container">
            <button onClick={toggleDropdown} className="idioma-button">
              <img
                src="../assets/Bandera/España.png"
                alt="España"
                className="idioma-bandera"
              />
              <FaArrowDown style={{ marginLeft: ".5rem", height:"1rem" }}/>
            </button>
            {isDropdownOpen && (
              <ul className="idioma-dropdown">
                <li>
                  <button onClick={() => handleIdiomaChange("es")}>
                    <img src="../assets/Bandera/España.png" alt="ES" className="idioma-bandera"/>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleIdiomaChange("en")}>
                    <img src="../assets/Bandera/UK.png" alt="EN" className="idioma-bandera"/>
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Botón menú hamburguesa */}
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
