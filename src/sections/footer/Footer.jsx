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
                <a
                  href="https://www.facebook.com/profile.php?id=100069359261072&mibextid=wwXIfr&rdid=TFKKyCeTM9mYAP5T&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV9Xfr3Y1%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={20} className="icon-redondo" />
                </a>

                <a
                  href="https://www.tiktok.com/@toldos.andalucia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={20} className="icon-redondo" />
                </a>

                <a
                  href="https://www.instagram.com/toldosandalucia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} className="icon-redondo" />
                </a>
              </div>
            </div>
          </div>
          <div className="logo-footer">
            <img src="/assets/Logo/Logo_Transparent.png" alt="logo-footer" />
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
