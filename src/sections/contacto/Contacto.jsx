import React from "react";

//Importamos los estilos
import "./Contacto.css";

const Contacto = () => {
  return (
    <section className="contacto-section">
      <div className="contacto-grid-container">
        {/* Sección Izquierda - Dirección y Mapa */}
        <div className="contacto-grid-izquierda">
          <h1>Contáctanos</h1>
          <p>Nos encontramos en:</p>
          <p>
            <strong>C/Santo Tomás nº 19. Pol. ind. La Leala</strong>
          </p>
          <p>Arroyo de la Miel / Benalmadena / CP: 29631</p>
          <div className="mapa-container">
            <iframe
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.846610736203!2d-4.533394423589894!3d36.606003172303176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fc8339c50cdf%3A0x2087123485cb7647!2sC.%20Santo%20Tomas%2C%2019%2C%2029631%20Arroyo%20de%20La%20Miel%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1741754548254!5m2!1ses!2ses"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Sección Derecha - Formulario */}
        <div className="contacto-grid-derecha">
          <form className="contacto-form">
            <label>Nombre</label>
            <input type="text" required />

            <label>Email</label>
            <input type="email" required />

            <label>Mensaje</label>
            <textarea rows="5" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
