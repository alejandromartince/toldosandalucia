import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { useIdioma } from "../../contexts/IdiomaContext";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  // Estado para el link activo
  const [activeSection, setActiveSection] = useState("");

  const { idioma, cambiarIdioma } = useIdioma();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función que detecta la sección activa según la posición del scroll
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 70; // Ajusta según el offset de tu navbar

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setActiveSection(section.id); // Establece el ID de la sección activa
      }
    });
  };

  useEffect(() => {
    // Llama a handleScroll para que detecte la sección activa cuando el componente se carga
    handleScroll();

    // Se ejecuta al hacer scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="nav-container">
      <nav className="menu">
        {/* MENU IZQUIERDA */}
        <div className="menu-left">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className={"logo"}
          >
            <img
              src="../assets/Logo/Logo_Transparent.png"
              alt="logo"
              style={{ height: "2rem" }}
            />
          </Link>
        </div>

        {/* MENU CENTRAL */}
        <div className="menu-center">
          <Link
            to="home"
            smooth={true}
            duration={300}
            className={`nav_link ${
              activeSection === "home" ? "active_link" : ""
            }`}
            spy={true}
            offset={0}
          >
            {idioma === "es" ? "Inicio" : "Home"}
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={300}
            className={`nav_link ${
              activeSection === "products" ? "active_link" : ""
            }`}
            spy={true}
            offset={0}
          >
            {idioma === "es" ? "Productos" : "Products"}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            className={`nav_link ${
              activeSection === "contact" ? "active_link" : ""
            }`}
            spy={true}
            offset={0}
          >
            {idioma === "es" ? "Contacto" : "Contact"}
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={300}
            className={`nav_link ${
              activeSection === "blog" ? "active_link" : ""
            }`}
            spy={true}
            offset={0}
          >
            {idioma === "es" ? "Blog" : "Blog"}
          </Link>
        </div>

        {/* MENU DERECHA */}
        <div className="menu-right">
          {/* Language selector */}
          <div className={`language-container ${isMenuOpen ? "active" : ""}`}>
            <button onClick={toggleDropdown} className="language-button">
              <img src={rutaImagen} alt="Spain" className="language-flag" />
              <FaArrowDown style={{ marginLeft: ".5rem", height: "1rem" }} />
            </button>
            {isDropdownOpen && (
              <ul className="language-dropdown">
                <li>
                  <button
                    onClick={() => handleIdiomaChange("es")}
                    className="language-button"
                  >
                    <img
                      src="../assets/Bandera/España.png"
                      alt="ES"
                      className="language-flag special"
                    />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleIdiomaChange("en")}
                    className="language-button"
                  >
                    <img
                      src="../assets/Bandera/UK.png"
                      alt="EN"
                      className="language-flag special"
                    />
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Hamburger menu button */}
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
