import { Link } from "react-scroll";
import  useInformacionBoton  from "../../constants/infoBotones";  // Asegúrate de importar la función

import "./BotonLinea.css";

const LinkLinea = ({ idioma, className, id, offset }) => {
  const boton = useInformacionBoton(idioma, id);

  return (
    <Link
      className={className}
      role="button"
      tabIndex="0"
      smooth={true}
      to={boton ? boton.url : "#"}
      offset={offset || 0}
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      {boton ? boton.texto : "Texto no disponible"}
    </Link>
  );
};

export default LinkLinea;
