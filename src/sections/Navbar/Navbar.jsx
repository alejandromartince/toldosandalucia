import React, { useState, useEffect, useRef } from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa"; // Iconos de menú
import "./Navbar.css";

const Navbar = () => {
  const { idioma, cambiarIdioma } = useIdioma(); // Obtener el idioma actual y la función para cambiarlo
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar el dropdown del idioma
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIdiomaChange = (lang) => {
    cambiarIdioma(lang);
    setIsDropdownOpen(false); // Cierra el dropdown después de cambiar el idioma
  };

  return (
    <div className="navbar fixed elegant-navbar">
      <nav>
        <div className="menu">
          <a href="/"><img src="assets/Logo/Logo_Transparent.png" className="logo" alt="Logo" /></a>
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={`menu-navbar ${isMenuOpen ? "activo" : ""}`}
            ref={menuRef}
          >
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

              {/* Menú desplegable para seleccionar el idioma */}
              <li className="menu-navbar-lista-item">
                <button onClick={toggleDropdown} className="idioma-button">
                  <img
                    src="../assets/Bandera/España.png"
                    alt="España"
                    style={{ width: "1.3rem", paddingRight:".3rem" }}
                  />
                  <FaArrowDown />
                </button>
                {isDropdownOpen && (
                  <ul className="idioma-dropdown">
                    <li>
                      <button onClick={() => handleIdiomaChange("es")}>
                        <img src="../assets/Bandera/España.png" alt="España" style={{width:"1.3rem"}}/>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleIdiomaChange("en")} >
                        <img src="../assets/Bandera/UK.png" alt="UK" style={{width:"1.3rem"}} />
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
