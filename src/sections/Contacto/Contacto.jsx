import React, { useState, useEffect } from "react";
import { useIdioma } from "../../contexts/IdiomaContext";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { idioma } = useIdioma(); // Obtén el idioma

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
    // Aquí podrías hacer el envío real del formulario si lo deseas
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Lógica de inicialización si es necesario
  }, []);

  return (
    <section className="contacto" id="contacto">
      <div className="grid-contacto">
        <div className="informacion-grid-izquierda">
          <h1>
            {idioma === "es" ? (
              <>
                Contáctanos<span className="dot">.</span>
              </>
            ) : (
              <>
                Contact Us<span className="dot">.</span>
              </>
            )}
          </h1>
        </div>
        <div className="contenedor-formulario">
          {/* Esquinas inferiores */}
          <span className="esquina esquina-inferior-izq"></span>
          <span className="esquina esquina-inferior-der"></span>

          <h1 className="contact-title">
            {idioma === "es" ? "Formulario de contacto" : "Contact Form"}
          </h1>

          <form className="form" onSubmit={handleSubmit}>
            <p className="message">
              {idioma === "es"
                ? "Regístrate ahora y obtén acceso completo a nuestra aplicación."
                : "Signup now and get full access to our app."}
            </p>

            <label>
              <input
                className="input"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                placeholder=""
                required
              />
              <span>{idioma === "es" ? "Nombre" : "Firstname"}</span>
            </label>

            <label>
              <input
                className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=""
                required
              />
              <span>Email</span>
            </label>

            <label>
              <input
                className="input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder=""
                required
              />
              <span>Password</span>
            </label>

            <label>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder=""
                required
              />
              <span>Confirm Password</span>
            </label>

            <button className="submit" type="submit">
              {idioma === "es" ? "Enviar" : "Submit"}
            </button>

            <p className="signin">
              {idioma === "es"
                ? "¿Ya tienes cuenta?"
                : "Already have an account?"}{" "}
              <a href="#">{idioma === "es" ? "Inicia sesión" : "Signin"}</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
