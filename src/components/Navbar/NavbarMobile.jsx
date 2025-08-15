//Importamos los compoentnes de react
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

//Importamos el hook personalizado para manejar el scroll
import { useScrollEffect } from "../../Hooks/Navbar/useScrollEffect.js";
import useScrollPositionY from "../../Hooks/useScrollPositionY.js";

//Importamos los compoententes
import SelectorIdioma from "../../components/Navbar/SelectorIdioma.jsx";

//Importamos la info
import { secciones } from "../../constants/infoNavbar.js";
import useInformacionBoton from "../../constants/infoBotones.js";

//Importamos los iconos
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

import "./NavbarMobile.css";

const NavbarMobile = ({ pagina }) => {
  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto
  const [activeSection, setActiveSection] = useState("home"); // Estado para la sección activa
  useScrollEffect(secciones, setActiveSection); // Hook para manejar el scroll

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const i = useInformacionBoton(idioma, "Presupuesto");

  const scrollY = useScrollPositionY(); //Obtenemos el scrol vertical

  //Efecto para quitar o activar el scroll cuando el menu desplegable del navbar_mobile esta abierto o cerrado
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      html.classList.add("no-scroll");
      body.classList.add("no-scroll");
    } else {
      html.classList.remove("no-scroll");
      body.classList.remove("no-scroll");
    }

    return () => {
      html.classList.remove("no-scroll");
      body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const volver = {
    es: "Volver",
    en: "Go Back",
    fr: "Retour", // francés
    de: "Zurück", // alemán
    da: "Tilbage", // danés
    ru: "Назад", // ruso
  };

  const labels = {
    es: {
      abrir: "Abrir menú",
      cerrar: "Cerrar menú",
    },
    en: {
      abrir: "Open menu",
      cerrar: "Close menu",
    },
    fr: {
      abrir: "Ouvrir le menu",
      cerrar: "Fermer le menu",
    },
    de: {
      abrir: "Menü öffnen",
      cerrar: "Menü schließen",
    },
    da: {
      abrir: "Åbn menu",
      cerrar: "Luk menu",
    },
    ru: {
      abrir: "Открыть меню",
      cerrar: "Закрыть меню",
    },
  };

  return (
    <>
      {/* <header className='navbar navbar__scrolled'> */}
      <header
        className={`navbar ${
          scrollY > 100 || pagina !== "principal" ? "navbar__scrolled" : ""
        }`}
      >
        {/* Logo */}
        <div className="navbar__logo">
          {pagina === "principal" && (
            <Link to="home" smooth={true} duration={800}>
              <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
            </Link>
          )}

          {pagina !== "principal" && (
            <a href="/" className="navbar__atrasEnlace">
              <div className="navbar__atras">
                <HiOutlineArrowLongLeft
                  size={25}
                  className="iconNavbar_Atras"
                />
                <p>{volver[idioma]}</p>
              </div>
            </a>
          )}
        </div>

        {/* Selector de idioma + Botón hamburguesa (solo visible si el menú está cerrado) */}
        <div className="menu-parteDerecha">
          <div className="navbar_selector">
            <SelectorIdioma />
          </div>

          <button
            className={`menu-toggle hamburger-btn ${
              menuOpen ? "fade-out" : "fade-in"
            }`}
            onClick={toggleMenu}
            aria-label={labels[idioma].abrir}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menú desplegable desde la izquierda */}
        <div className={`menu-desplegable-navbar ${menuOpen ? "open" : ""}`}>
          <div className="contenedorNavMobile">
            {/* Navegación */}
            <nav className="navbar__navColumna">
              {/* BOTÓN "X" dentro del menú desplegable (solo si está abierto) */}
              <button
                className={`menu-toggle open close-btn`}
                onClick={toggleMenu}
                aria-label={labels[idioma].cerrar}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              {secciones
                .filter(({ id }) => id !== "historia" && id !== "beneficios")
                .map(({ id, texto, offset }) => (
                  <Link
                    key={id}
                    to={id}
                    smooth={true}
                    duration={800}
                    offset={offset}
                    className={`nav_link ${
                      activeSection === id ? "active_link" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    {texto[idioma]}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="contenedor-boton-menu-desplegado">
            <a href="https://wa.me/34679847618">{i?.texto}</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarMobile;
