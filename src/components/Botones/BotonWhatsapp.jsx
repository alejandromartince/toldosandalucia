//Importamos el estilo
import "./BotonWhatsapp.css";

//Importamos los iconos
import { FaWhatsapp } from "react-icons/fa"

const enviarMensaje = {
  es: "Enviar petición",
  en: "Send request",
  fr: "Envoyer une demande",
  de: "Individuelle senden",
  da: "Send anmodning",
  ru: "Отправить запрос",
};

const BotonWhatsapp = ({idioma, disabled}) => {

  const texto = enviarMensaje[idioma]

  return (
      <a className="botonWhatsappPT" href={!disabled ? "https://web.whatsapp.com/send?phone=34679847618&text=" : ""} target="_blank">{texto} <FaWhatsapp size={24}color="#ffffff58"/></a>
  );
};

export default BotonWhatsapp;
