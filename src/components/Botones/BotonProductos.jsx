//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos la informacion
import useInformacionBoton from "../../constants/infoBotones.js";

//Importamos los iconos
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

//Importamos el estilo
import "./BotonProductos.css";

const BotonProductos = ({ onAbrir }) => {
  const { idioma } = useIdioma();
  const titulo = useInformacionBoton(idioma, "Productos");

  const label = {
    es: "Personaliza tu toldo y envía la petición",
    en: "Customize your awning and send your request"
  }
  
  return (
    <button onClick={onAbrir} className="boton-producto" aria-label={label[idioma]}>
      <MdOutlineKeyboardDoubleArrowRight size={20}/>&nbsp;{titulo?.texto}
    </button>
  );
};

export default BotonProductos;
