//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos la informacion
import useInformacionBoton from "../../constants/infoBotones";

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
      &gt;&gt;&nbsp;
      {titulo?.texto}
    </button>
  );
};

export default BotonProductos;
