//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

//Importamos la informacion
import useInformacionBoton from "../../constants/infoBotones.js";

//Importamos los iconos
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

//Importamos el estilo
import "./BotonProductos.css";

const BotonProductos = ({ onAbrir }) => {
  const { idioma } = useIdioma();
  const titulo = useInformacionBoton(idioma, "Productos");

  const onHover = () => {
    const onHoverButton = document.querySelector(".boton-centro-prueba");
    onHoverButton.classList.add("hovered");
  };

  const label = {
    es: "Personaliza tu toldo y envía la petición",
    en: "Customize your awning and send your request",
  };

  const texto = {
    es: "Solicita tu presupuesto sin compromiso",
    en: "Request your quote without obligation!",
    fr: "Demandez votre devis sans engagement",
    de: "Fordern Sie Ihr Angebot unverbindlich an",
    da: "Anmod om dit tilbud uden forpligtelse",
    ru: "Запросите свой прайс без обязательств",
  };

  return (
    <div className="boton-centro-prueba">
      <button
        onMouseOver={onHover}
        onClick={onAbrir}
        className="boton-producto"
        aria-label={label[idioma]}
      >
        <MdOutlineKeyboardDoubleArrowRight size={20} />
        &nbsp;{titulo?.texto}
      </button>
      <p className="texto-detras" style={{ display: "flex", alignItems: "center" }}>
        <MdOutlineKeyboardArrowRight/>{texto[idioma]}</p>
    </div>
  );
};

export default BotonProductos;
