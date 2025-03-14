import React from "react";

//Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos los estilos
import "./Footer.css";

const Footer = () => {
  const {idioma} = useIdioma();
  const informacion = infoFooter;

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Toldos Andalucía -&nbsp;
          {informacion[idioma].copy}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
