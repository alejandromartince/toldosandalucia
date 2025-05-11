import React from "react";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

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
    <footer>
      <div className="info-container">
        <div className="info-politicas">
          <div className="info-politicas-titulo">
            <h2>{informacion[idioma].titulos.politica}</h2>
            <span>
              <hr />
            </span>
          </div>
          <p>{informacion[idioma].politica.privacidad}</p>
        </div>
        <div className="info-ayuda">
          <div className="info-ayuda-titulo">
            <h2>{informacion[idioma].titulos.ayuda}</h2>
            <span>
              <hr />
            </span>
          </div>
          <p>{informacion[idioma].ayuda}</p>
        </div>
        <div className="info-redes">
          <div className="info-redes-titulo">
            <h2>{informacion[idioma].titulos.redes}</h2>
            <span>
              <hr />
            </span>
          </div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100069359261072&mibextid=wwXIfr&rdid=TFKKyCeTM9mYAP5T&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV9Xfr3Y1%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} className="icon-redondo" color="white"/>
            </a>

            <a
              href="https://www.tiktok.com/@toldos.andalucia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={20} className="icon-redondo" color="white"/>
            </a>

            <a
              href="https://www.instagram.com/toldosandalucia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} className="icon-redondo" color="white"/>
            </a>
          </div>
        </div>
        <div className="logo">
          <img
            src="/assets/Logo/Logo_Transparent.png"
            alt="Logo de la empresa"
          />
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Toldos Andalucía -&nbsp;
        {informacion[idioma].copy}
      </div>
    </footer>
  );
};

export default Footer;
