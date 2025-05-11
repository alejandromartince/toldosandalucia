import React from "react";

//Importamos los hooks
import { Link } from "react-scroll";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los iconos
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

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
          <div className="info-politicas-opciones">
            <a href="/Privacidad" target="_blank">{informacion[idioma].politica.privacidad}</a>
            <p>{informacion[idioma].politica.cookies}</p>
            <p>{informacion[idioma].politica.avisos}</p>
          </div>
        </div>
        <div className="info-ayuda">
          <div className="info-ayuda-titulo">
            <h2>{informacion[idioma].titulos.ayuda}</h2>
            <span>
              <hr />
            </span>
          </div>
          <div className="info-ayuda-parrafos">
            <div>
              <a
                href="https://web.whatsapp.com/send?phone=34679847618&text="
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{informacion[idioma].ayuda} </p>
                <FaWhatsapp size={25} />
              </a>
            </div>
            <p>{informacion[idioma].telefono}</p>
            <div className="espaciador"></div>
          </div>
        </div>
        <div className="info-redes">
          <div className="info-redes-titulo">
            <h2>{informacion[idioma].titulos.redes}</h2>
            <span>
              <hr />
            </span>
          </div>
          <div className="iconos-redes">
            <a
              href="https://www.facebook.com/profile.php?id=100069359261072&mibextid=wwXIfr&rdid=TFKKyCeTM9mYAP5T&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV9Xfr3Y1%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={25} className="icon-redondo" color="white"  />
            </a>

            <a
              href="https://www.tiktok.com/@toldos.andalucia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={25} className="icon-redondo" color="white" />
            </a>

            <a
              href="https://www.instagram.com/toldosandalucia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} className="icon-redondo" color="white" />
            </a>
          </div>
        </div>
        <div className="logo">
          <Link to="home" smooth="true">
            <img
              src="/assets/Logo/Logo_Transparent.png"
              alt="Logo de la empresa"
              style={{cursor:"Pointer"}}
            />
          </Link>
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
