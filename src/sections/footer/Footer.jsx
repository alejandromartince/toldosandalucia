import React from "react";

//Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos los iconos
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

//Importamos los estilos
import "./Footer.css";

const Footer = () => {
  const { idioma } = useIdioma();
  const informacion = infoFooter;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-info">
          <div className="privacidad-footer">
            <div className="footer-titulo">
              <h1>
                {informacion[idioma].titulos.politica}
                <span>
                  <hr />
                </span>
              </h1>
            </div>
            <div className="footer-info">
              <p>{informacion[idioma].politica.privacidad}</p>
              <p>{informacion[idioma].politica.cookies}</p>
              <p>{informacion[idioma].politica.avisos}</p>
            </div>
          </div>
          <div className="ayuda-footer">
            <div className="footer-titulo">
              <h1>
                {informacion[idioma].titulos.ayuda}
                <span>
                  <hr />
                </span>
              </h1>
            </div>
            <div className="footer-info">{informacion[idioma].ayuda}</div>
          </div>
          <div className="redes-footer">
            <div className="footer-titulo">
              <h1>
                {informacion[idioma].titulos.redes}
                <span>
                  <hr />
                </span>
              </h1>
            </div>
            <div className="footer-info">
              <div>
                <FaFacebookF size={20} className="icon-redondo" />
                <FaTiktok size={20} className="icon-redondo" />
                <FaInstagram size={20} className="icon-redondo" />
              </div>
            </div>
          </div>
          <div className="logo-footer">
            <img src="/assets/Logo/Logo.png" alt="logo-footer" />
          </div>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Toldos Andalucía -&nbsp;
          {informacion[idioma].copy}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
