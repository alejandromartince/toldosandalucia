import { Link } from "react-scroll";
import { FiPlay } from "react-icons/fi";
import "./BotonTutorial.css";

const BotonTutorial = ({ idioma, onClick }) => {
  const textos = {
    es: "Ver tutorial",
    en: "See tutorial",
    fr: "Voir le tutoriel",
    de: "Tutorial ansehen",
    ru: "Посмотреть руководство",
    da: "Se tutorial",
  };

  return (
    <Link
      to={"products"}
      smooth={true}
      duration={300}
      offset={-30}
      className="botonTutorial"
      onClick={onClick}
    >
      <FiPlay className="iconoTutorial" />
      {textos[idioma]}
    </Link>
  );
};

export default BotonTutorial;
