import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Importa Link desde react-scroll
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

  const rutaImagen =
    idioma === "es"
      ? "../assets/Bandera/España.png"
      : "../assets/Bandera/UK.png";

  return (
    <div className="navbar">
      <nav className="menu">
        {/* Zona Izquierda: Logo */}
        <div className="menu-izquierda">
          <Link to="inicio" smooth={true} duration={500} offset={-50} className="logo">
            <img
              src="../assets/Logo/Logo_Transparent.png"
              alt="logo"
              style={{ height: "2rem" }}
            />
          </Link>
        </div>

        {/* Zona Central: Menú de navegación */}
        <div className={`menu-centro ${isMenuOpen ? "activo" : ""}`}>
          <ul className="menu-navbar-lista">
            <li className="menu-navbar-lista-item subrayado">
              <Link to="inicio" smooth={true} duration={500} offset={-50}>
                {idioma === "es" ? "Inicio" : "Home"}
              </Link>
            </li>
            <li className="menu-navbar-lista-item subrayado">
              <Link to="productos" smooth={true} duration={500} offset={-50}>
                {idioma === "es" ? "Productos" : "Products"}
              </Link>
            </li>
            <li className="menu-navbar-lista-item subrayado">
              <Link to="contacto" smooth={true} duration={500} offset={-50}>
                {idioma === "es" ? "Contacto" : "Contact"}
              </Link>
            </li>
            <li className="menu-navbar-lista-item subrayado">
              <Link to="blog" smooth={true} duration={500} offset={-50}>
                {idioma === "es" ? "Blog" : "Blog"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Zona Derecha: Selector de idioma y botón hamburguesa */}
        <div className="menu-derecha">
          {/* Selector de idioma */}
          <div className={`idioma-container ${isMenuOpen ? "activo" : ""}`}>
            <button onClick={toggleDropdown} className="idioma-button">
              <img src={rutaImagen} alt="España" className="idioma-bandera" />
              <FaArrowDown style={{ marginLeft: ".5rem", height: "1rem" }} />
            </button>
            {isDropdownOpen && (
              <ul className="idioma-dropdown">
                <li>
                  <button
                    onClick={() => handleIdiomaChange("es")}
                    className="idioma-button"
                  >
                    <img
                      src="../assets/Bandera/España.png"
                      alt="ES"
                      className="idioma-bandera especial"
                    />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleIdiomaChange("en")}
                    className="idioma-button"
                  >
                    <img
                      src="../assets/Bandera/UK.png"
                      alt="EN"
                      className="idioma-bandera especial"
                    />
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
