import { IoMdClose } from "react-icons/io";
import "./BotonCerrarMenu.css";

const BotonCerrarMenu = ({ onClick, idioma }) => {
  const labels = {
    es: "Cerrar menú",
    en: "Close menu"
  };

  return (
    <button
      className="botonCerrarMenu"
      onClick={onClick}
      aria-label={labels[idioma]}
    >
      <IoMdClose size={25} color="black" />
    </button>
  );
};

export default BotonCerrarMenu;
