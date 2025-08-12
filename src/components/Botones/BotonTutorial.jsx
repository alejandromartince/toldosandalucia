import { Link } from "react-scroll";
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
      data-tooltip={textos[idioma] || textos.es}
      to={"products"}
      smooth={true}
      duration={300}
      offset={-30}
      className="botonTutorial"
      onClick={onClick}
    >
      ?
    </Link>
  );
};

export default BotonTutorial;
