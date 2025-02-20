import React, { useState } from 'react';
import "./Contacto.css";

const Contacto = () => {
  const [captcha, setCaptcha] = useState(0);
  const [userCaptcha, setUserCaptcha] = useState("");
  
  const generarCaptcha = () => {
    return 7 + 10; // Simulación de captcha estático
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userCaptcha) !== captcha) {
      alert("Captcha incorrecto");
      return;
    }
    alert("Formulario enviado");
  };

  useState(() => {
    setCaptcha(generarCaptcha());
  }, []);

  return (
    <section className='contacto' id='contacto'>
      <h1 className='contact-title'>Formulario de contacto</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type='text' name='nombre' required />

        <label>Teléfono</label>
        <input type='tel' name='telefono' required />

        <label>Dirección de correo electrónico</label>
        <input type='email' name='email' required />

        <label>Mensaje</label>
        <textarea name='mensaje' required></textarea>

        <div className='contact-checkbox'>
          <input type='checkbox' id='privacidad' required />
          <label htmlFor='privacidad'>(*) Acepto Política de privacidad</label>
        </div>

        <p className='contact-info'>
          Responsable de los datos: Indutol 2002 S.L. Finalidad de los datos: Envío de boletines de noticias y ofertas. | Legitimación: Tu consentimiento | Destinatario: Abansys & Hostytec, S.L (UE) Derechos: Derecho al acceso, rectificación, supresión, limitación, portabilidad y olvido de sus datos según nuestra política de privacidad.
        </p>

        <label>7 + 10 = </label>
        <input type='number' value={userCaptcha} onChange={(e) => setUserCaptcha(e.target.value)} required />

        <button type='submit'>Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
