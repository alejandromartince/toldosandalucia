//Importamos el estilo
import "./BotonWhatsapp.css";

//Importamos los iconos
import { FaWhatsapp } from "react-icons/fa"

const enviarMensaje = {
  es: "Enviar petición personalizada",
  en: "Send custom request",
  fr: "Envoyer une demande personnalisée",
  de: "Individuelle Anfrage senden",
  da: "Send tilpasset anmodning",
  ru: "Отправить индивидуальный запрос",
};

const BotonWhatsapp = ({idioma}) => {

  const texto = enviarMensaje[idioma]

  return (
      <button className="botonWhatsappPT" style={{color:"gray"}}>{texto} <FaWhatsapp size={20}color="gray"/></button>
  );
};

export default BotonWhatsapp;
