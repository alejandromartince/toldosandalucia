import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
  // Estado para el link activo
  const [activeSection, setActiveSection] = useState("");

  // Función que detecta la sección activa según la posición del scroll
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.pageYOffset + 70; // Ajusta según el offset de tu navbar

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveSection(section.id); // Establece el ID de la sección activa
      }
    });
  };

  useEffect(() => {
    // Se ejecuta al hacer scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='nav-container'>
      <Link
        to='home'
        smooth={true}
        duration={300}
        className={`nav_link ${activeSection === "home" ? "active_link" : ""}`}
        spy={true}
        offset={0}
      >
        Inicio
      </Link>
      <Link
        to='products'
        smooth={true}
        duration={300}
        className={`nav_link ${activeSection === "products" ? "active_link" : ""}`}
        spy={true}
        offset={0}
      >
        Products
      </Link>
    </div>
  );
}

export default Navbar;
