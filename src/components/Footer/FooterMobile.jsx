import { useState } from "react";

//Importamos la informacion
import { alts, infoFooter } from "../../constants/infoFooter.js";

//Importamos los componentes
import RedesSociales from "./RedesSociales.jsx";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

//Importamos los iconos
import { MdEmail } from "react-icons/md";
import {FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

//Importamos los estilos
import "./FooterMobile.css";

const FooterMobile = () => {
  const { idioma } = useIdioma();
  const i = infoFooter[idioma];
  const alt = alts[idioma];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="fm-footer-seccion">
      <div className="fm-info-container">
        {/* POLÍTICAS */}
        <div className="fm-info-politicas">
          <div
            className="fm-info-politicas-titulo fm-desplegable-titulo"
            onClick={() => toggleSection("politicas")}
          >
            <h2>{i.titulos.politica}</h2>
          </div>
          <span>
            <hr />
          </span>
          <div className="fm-info-politicas-opciones">
            <a href="/Privacidad" aria-label={alt.privacidad}>
              {i.politica.privacidad}
            </a>
            <a href="/Cookies" aria-label={alt.cookies}>
              {i.politica.cookies}
            </a>
            <a href="/AvisosLegales" aria-label={alt.avisosLegales}>
              {i.politica.avisos}
            </a>
          </div>
        </div>

        {/* AYUDA */}
        <div className="fm-info-ayuda">
          <div
            className="fm-info-ayuda-titulo fm-desplegable-titulo"
            onClick={() => toggleSection("ayuda")}
          >
            <h2>{i.titulos.ayuda}</h2>
          </div>
          <span>
            <hr />
          </span>
          <div className="fm-info-ayuda-parrafos">
            <div>
              <a
                href="https://wa.me/34679847618"
                target="_blank"
                rel="noopener noreferrer"
                className="fmenlace-footer-whatsapp"
                aria-label="Whatsapp"
              >
                <p style={{ textShadow: "none" }}>{i.ayuda}</p>
                <FaWhatsapp size={25} />
              </a>
            </div>
            <a
              href="tel:+34952562668"
              style={{ textShadow: "none" }}
              aria-label={alt.telefono}
            >
              {i.telefono}
              <FaPhone size={17} />
            </a>
            <a href="mailto:info@toldosandalucia.com">
              info@toldosandalucia.com <MdEmail size={25} />
            </a>
          </div>
        </div>

        {/* REDES */}
        <div className="fm-info-redes">
          <div className="fm-info-redes-titulo">
            <h2>{i.titulos.redes}</h2>
          </div>
          <span>
            <hr />
          </span>
          <div className="fm-iconos-redes">
            <RedesSociales />
          </div>
        </div>
      </div>

      <div className="fm-copyright">
        <p>
          © {new Date().getFullYear()} Toldos Andalucía - {i.copy}

        </p>
        <p style={{fontSize:".9rem", marginTop:"1rem"}}>{i.hechoPor} <span style={{fontWeight:"600"}}>&nbsp;Kometta</span></p>
      </div>
    </div>
  );
};

export default FooterMobile;
