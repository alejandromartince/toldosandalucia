import React from "react";

//Importamos los iconos
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

//Importamos la informacion
import { infoContacto } from "../../constants/infoContacto";

//Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los estilos
import "./Contacto.css";

const Contacto = () => {
  const { idioma } = useIdioma();
  const informacion = infoContacto;

  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-grid-container">
        <div className="contacto-grid-izquierda">
          <h1>
            {informacion[idioma].titulo}
            <span>.</span>
          </h1>
          <div className="contacto-grid-izquierda-info">
            <hr className="hr-vertical" />
            <div>
              <br />
              <p className="footer-indicacion">{informacion[idioma].direccion}</p>
              <p>c/ Santo Tomás nº 19. Pol. ind. La Leala</p>
              <p>Arroyo de la Miel, Benalmadena, 29631</p>
              <br />

              <p className="footer-indicacion">{informacion[idioma].contacto}</p>
              <div className="telefono-contacto">
                <FaPhone />
                <p>952 562 668</p>
              </div>

              <div className="email-contacto">
                <MdEmail />
                <p>info@toldosandalucia.com</p>
              </div>
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.846610736203!2d-4.533394423589894!3d36.606003172303176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fc8339c50cdf%3A0x2087123485cb7647!2sC.%20Santo%20Tomas%2C%2019%2C%2029631%20Arroyo%20de%20La%20Miel%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1741848413800!5m2!1ses!2ses"
                width="100%"
                height="250px"
                style={{
                  border: "4px solid var(--negro-muy-claro)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.58)", // Sombra sutil
                  maxWidth: "400px", // Máximo ancho del mapa
                  display: "block", // Asegurar centrado
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="contacto-grid-derecha">
          <div className="container">
            <form className="form">
              <p className="title">{informacion[idioma].tituloForm}</p>
              <div className="input-container-usuario-telefono">
                <input
                  placeholder={informacion[idioma].placeholderUsuario}
                  className="input"
                  type="text"
                  required
                />
                <input
                  placeholder={informacion[idioma].placeholderTelefono}
                  className="input"
                  type="text"
                  required
                />
              </div>

              <input
                placeholder={informacion[idioma].placeholderEmail}
                className="input email"
                type="email"
                required
              />

              <input type="text-area" className="input area" placeholder="Message" />

              <button className="btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
