// Importamos hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo";

// Importamos el estilo
import "./BotonWhatsapp.css";

// Importamos los iconos
import { FaWhatsapp } from "react-icons/fa";

const enviarMensaje = {
  es: "Enviar petición",
  en: "Send request",
  fr: "Envoyer une demande",
  de: "Individuelle senden",
  da: "Send anmodning",
  ru: "Отправить запрос",
};

const BotonWhatsapp = ({ idioma, disabled, mensaje }) => {
  const dispositivo = useTipoDispositivo();
  const texto = enviarMensaje[idioma];
  const mensajeCodificado = encodeURIComponent(mensaje || "");

  const telefono = "34679847618";
  const urlWhatsappMovilApp = `whatsapp://send?phone=${telefono}&text=${mensajeCodificado}`;
  const urlWhatsappMovilWeb = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  const urlWhatsappPC = `https://web.whatsapp.com/send?phone=${telefono}&text=${mensajeCodificado}`;

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (dispositivo === "mobile") {
      // Primero intenta abrir la app de WhatsApp
      window.location.href = urlWhatsappMovilApp;

      // Si en ~600ms no se abrió, usa la versión web
      setTimeout(() => {
        window.location.href = urlWhatsappMovilWeb;
      }, 600);
    } else {
      // En PC: abrir WhatsApp Web (y que el navegador ofrezca la app si existe)
      window.open(urlWhatsappPC, "_blank");
    }

    e.preventDefault(); // Evita que el <a> navegue de forma predeterminada
  };

  return (
    <a
      className={`botonWhatsappPT ${disabled ? "deshabilitado" : ""}`}
      href="#"
      onClick={handleClick}
      style={{
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {texto} <FaWhatsapp size={24} color="#4b4b4b" />
    </a>
  );
};

export default BotonWhatsapp;
