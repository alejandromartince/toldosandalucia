//Importamos la informacion
import { infoFooter, alts } from "../../constants/infoFooter.js";

//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos los iconos
import { FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

//Importamos los estilos
import './FooterDefault.css'

const FooterDefault = () => {
  
    const { idioma } = useIdioma();
    const i = infoFooter[idioma];
    const alt = alts[idioma];
    

    return (
    <div className="footer-seccion">
      <div className="info-container">
        <div className="info-politicas">
          <div className="info-politicas-titulo">
            <h2>{i.titulos.politica}</h2>
            <span><hr /></span>
          </div>
          <div className="info-politicas-opciones">
            <a href={`/Privacidad`} aria-label={alt.privacidad}>{i.politica.privacidad}</a>
            <a href={`/Cookies`} aria-label={alt.cookies}>{i.politica.cookies}</a>
            <a href={`/AvisosLegales`} aria-label={alt.avisosLegales}>{i.politica.avisos}</a>
          </div>
        </div>

        <div className="info-ayuda">
          <div className="info-ayuda-titulo">
            <h2>{i.titulos.ayuda}</h2>
            <span><hr /></span>
          </div>
          <div className="info-ayuda-parrafos">
            <div>
              <a
                href="https://web.whatsapp.com/send?phone=34679847618&text="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <p style={{ textShadow: "none" }}>{i.ayuda}</p>
                <FaWhatsapp size={25} />
              </a>
            </div>
            <p style={{ textShadow: "none" }}>{i.telefono}</p>
            <div className="espaciador"></div>
          </div>
        </div>

        <div className="info-redes">
          <div className="info-redes-titulo">
            <h2>{i.titulos.redes}</h2>
            <span><hr /></span>
          </div>
          <div className="iconos-redes">
            <a
              href="https://m.facebook.com/profile.php?id=100069359261072"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={25} className="icono-footer" color="white" />
            </a>
            <a
              href="https://www.tiktok.com/@toldos.andalucia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tik Tok"
            >
              <FaTiktok size={25} className="icono-footer" color="white" />
            </a>
            <a
              href="https://www.instagram.com/toldosandalucia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={25} className="icono-footer" color="white" />
            </a>
          </div>
        </div>

        <div className="logo">
          <a href={`/`} aria-label={alt.logo} style={{display:"flex", height:"auto"}}>
            <img
              src="/assets/Logo/Logo_Transparent.png"
              alt={alt.logo}
              style={{ cursor: "pointer" }}
            />
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>© {new Date().getFullYear()} Toldos Andalucía - {i.copy}</p>
        <p>Hecho por <img src="/assets/Logo/LogoKomettaBlanco.png" alt="Logo de nuestra querida empresa" width={100}/></p>
      </div>
    </div>
  );
};

export default FooterDefault
