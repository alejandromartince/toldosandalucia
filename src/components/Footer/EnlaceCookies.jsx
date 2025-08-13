// Importamos la información
import { politicaCookies } from '../../constants/infoEnlacesFooter.jsx';
import { infoFooter } from "../../constants/infoFooter.js";

// Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

import './Enlaces.css'

const EnlaceCookies = () => {
  const { idioma } = useIdioma();
  const informacionF = infoFooter[idioma];
  const i = politicaCookies[idioma];

  return (
    <section className="enlacePrivacidadSection">
      {/* Encabezado */}
      <div className="encabezadoPoliticas">
        <h3>{informacionF.politica.cookies}</h3>
        <p>
          {idioma === "es"
            ? "Última actualización: Junio de 2025"
            : "Last Updated: June 2025"}
        </p>
      </div>
      <hr className="hrEnlacePoliticas" />

      {/* Contenido principal */}
      <div className="contenidoPrincipal">
        {/* Texto */}
        <div className="textoEnlacePrivacidad">
          <p>{i.descripcionIntroductoria}</p>

          <div>
            <h4>{i.QueSonCookies.titulo}</h4>
            <p>{i.QueSonCookies.descripcion}</p>
          </div>

          <div>
            <h4>{i.TiposCookies.titulo}</h4>
            <ul className="listaTitularidad">
              {i.TiposCookies.datos.map((dato, index) => (
                <li key={index}>{dato}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{i.FinalidadCookies.titulo}</h4>
            <p>{i.FinalidadCookies.descripcion}</p>
          </div>

          <div>
            <h4>{i.GestionCookies.titulo}</h4>
            <p>{i.GestionCookies.descripcion}</p>
          </div>

          <div>
            <h4>{i.CookiesTerceros.titulo}</h4>
            <p>{i.CookiesTerceros.descripcion}</p>
          </div>

          <div>
            <h4>{i.CambiosPolitica.titulo}</h4>
            <p>{i.CambiosPolitica.descripcion}</p>
          </div>
        </div>

        {/* Imagen SVG */}
        <div className="contenedorImagenEnlacePrivacidad">
          <img
            src="/assets/SVGExtras/Cookies.svg"
            alt=""
            aria-hidden="true"
            className="svgPrivacidad"
          />
        </div>
      </div>
    </section>
  );
};

export default EnlaceCookies;
