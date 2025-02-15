import React, { useState, useEffect } from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { idioma, cambiarIdioma } = useIdioma();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Cargar el script para animated-icons
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://animatedicons.co/scripts/embed-animated-icons.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <a
            className="qlwapp-toggle"
            data-action="open"
            data-phone="34679847618"
            data-message=""
            role="button"
            tabIndex="0"
            target="_blank"
            href="https://web.whatsapp.com/send?phone=34679847618&text="
            style={{ textDecoration: "none" }}
          >
            <p className="qlwapp-icon qlwapp-whatsapp-icon"></p>
            <p className="qlwapp-close" data-action="close">
              <animated-icons
                src="https://animatedicons.co/get-icon?name=Calling%20V4&style=minimalistic&token=859dc27a-a900-4715-b449-a72e5ee0270a"
                trigger="loop-on-hover"
                attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":0.5,"defaultColours":{"group-1":"#000000","background":"#FFFFFF"}}'
                height="2.1rem"
                width="2.1rem"
              ></animated-icons>
            </p>
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
