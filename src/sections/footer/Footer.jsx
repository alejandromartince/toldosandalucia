import React from "react";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

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
          <p>ayuda</p>
          <span>
            <hr />
          </span>
        </div>
        <div className="info-redes">
          <p>redes</p>
          <span>
            <hr />
          </span>
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
