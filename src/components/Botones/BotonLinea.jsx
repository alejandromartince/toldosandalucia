import useInformacionBoton from "../../constants/infoBotones";

import "./BotonLinea.css";

const BotonLinea = ({ idioma, className, id }) => {
  const boton = useInformacionBoton(idioma, id); // Usamos hook aquí

  return (
    <a
      className={className}
      role="button"
      aria-label={boton.texto}
      tabIndex="0"
      target="_blank"
      href={boton ? boton.url : "#"}
      style={{ textDecoration: "none" }}
      rel="noopener noreferrer"
    >
      {boton ? boton.texto : "Texto no disponible"}
    </a>
  );
};

export default BotonLinea;
