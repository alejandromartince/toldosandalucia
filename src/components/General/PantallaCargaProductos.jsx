import { Html } from "@react-three/drei";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

import "./PantallaCargaProductos.css";

const PantallaCargaParaCanvas = () => {
  const { idioma } = useIdioma();
  const textoCarga = () => {
    switch (idioma) {
      case "es":
        return "Cargando...";
      case "en":
        return "Loading...";
      case "fr":
        return "Chargement...";
      case "ru":
        return "Загрузка...";
      case "de":
        return "Laden...";
      case "da":
        return "Indlæser...";
      default:
        "Loading...";
    }
  };

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Spinner */}
      <div className="carga-contenedor">
        <div className="spinner"></div>
      </div>
      {/* Texto de carga */}
      <p
        style={{
          fontSize: "1rem",
          color: "#f1f1f1",
          fontWeight: "300",
          marginTop: 50,
        }}
      >
        {textoCarga()}
      </p>
    </Html>
  );
};

export default PantallaCargaParaCanvas;
