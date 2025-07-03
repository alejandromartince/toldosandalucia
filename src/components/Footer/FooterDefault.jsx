//Importamos los hooks
import { Link } from "react-scroll";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los iconos
import { FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

//Importamos los estilos
import './FooterDefault.css'

const FooterDefault = () => {

    const { idioma } = useIdioma();
    const i = infoFooter[idioma];

    return (
        <div className="footer-seccion">
            <div className="info-container">
                <div className="info-politicas">
                    <div className="info-politicas-titulo">
                        <h2>{i.titulos.politica}</h2>
                        <span>
                            <hr />
                        </span>
                    </div>
                    <div className="info-politicas-opciones">
                        <a href="/Privacidad">{i.politica.privacidad}</a>
                        <a href="/Cookies">{i.politica.cookies}</a>
                        <a href="/AvisosLegales">{i.politica.avisos}</a>
                    </div>
                </div>
                <div className="info-ayuda">
                    <div className="info-ayuda-titulo">
                        <h2>{i.titulos.ayuda}</h2>
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
                                <p style={{ textShadow: "none" }}>{i.ayuda} </p>
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
                        <span>
                            <hr />
                        </span>
                    </div>
                    <div className="iconos-redes">
                        <a
                            href="https://m.facebook.com/profile.php?id=100069359261072"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF size={25} className="icono-footer" color="white" />
                        </a>

                        <a
                            href="https://www.tiktok.com/@toldos.andalucia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTiktok size={25} className="icono-footer" color="white" />
                        </a>

                        <a
                            href="https://www.instagram.com/toldosandalucia/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={25} className="icono-footer" color="white" />
                        </a>
                    </div>
                </div>
                <div className="logo">
                    <a href="/">
                        <img
                            src="/assets/Logo/Logo_Transparent.png"
                            alt="Logo de la empresa"
                            style={{ cursor: "Pointer" }}
                        />
                    </a>
                </div>
            </div>

            <div className="copyright">
                <p>
                    © {new Date().getFullYear()} Toldos Andalucía -&nbsp;
                    {i.copy}
                </p>
            </div>
        </div>
    );
}

export default FooterDefault
