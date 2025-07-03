import { useState } from "react";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos los componentes
import RedesSociales from "./RedesSociales";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los iconos
import { FaWhatsapp } from "react-icons/fa";

//Importamos los estilos
import './FooterMobile.css'

const FooterMobile = () => {

  const { idioma } = useIdioma();
  const i = infoFooter[idioma];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="fm-footer-seccion">
      <div className="fm-info-container">

        {/* POLÍTICAS */}
        <div className="fm-info-politicas">
          <div className="fm-info-politicas-titulo fm-desplegable-titulo" onClick={() => toggleSection("politicas")}>
            <h2>{i.titulos.politica}</h2>
          </div>
          <span><hr /></span>
          <div className="fm-info-politicas-opciones">
            <a href="/Privacidad">{i.politica.privacidad}</a>
            <a href="/Cookies">{i.politica.cookies}</a>
            <a href="/AvisosLegales">{i.politica.avisos}</a>
          </div>
        </div>

        {/* AYUDA */}
        <div className="fm-info-ayuda">
          <div className="fm-info-ayuda-titulo fm-desplegable-titulo" onClick={() => toggleSection("ayuda")}>
            <h2>{i.titulos.ayuda}</h2>
          </div>
          <span><hr /></span>
          <div className="fm-info-ayuda-parrafos">
            <div>
              <a
                href="https://wa.me/34679847618"
                target="_blank"
                rel="noopener noreferrer"
                className="fmenlace-footer-whatsapp"
              >
                <p style={{ textShadow: "none" }}>{i.ayuda}</p>
                <FaWhatsapp size={25} />
              </a>
            </div>
            <p style={{ textShadow: "none" }}>{i.telefono}</p>
          </div>
        </div>

        {/* REDES */}
        <div className="fm-info-redes">
          <div className="fm-info-redes-titulo">
            <h2>{i.titulos.redes}</h2>
          </div>
          <span><hr /></span>
          <div className="fm-iconos-redes">
            <RedesSociales />
          </div>
        </div>
      </div>

      <div className="fm-copyright">
        <p>
          © {new Date().getFullYear()} Toldos Andalucía - {i.copy}
        </p>
      </div>
    </div>
  );

};

export default FooterMobile
