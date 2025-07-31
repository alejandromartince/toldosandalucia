import { useState } from "react";

import useInformacionBoton from "../../constants/infoBotones";

import { FaWhatsapp } from "react-icons/fa";

import "./BotonLinea.css";

const BotonLinea = ({ idioma, className, id }) => {
  const boton = useInformacionBoton(idioma, id); // Usamos hook aquí
  const [hovered, setHovered] = useState(false); // Estado para el hover del icono

  return (
    <a
      className={className}
      role="button"
      aria-label={boton?.texto || "Botón"}
      tabIndex="0"
      target="_blank"
      href={boton?.url || "#"}
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        gap: ".5rem",
      }}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {boton?.texto || "Texto no disponible"}

      {id === "Home" && (
        <FaWhatsapp
          size={24}
          style={{
            color: hovered ? "var(--negro-claro)" : "white",
            transition: "color 0.3s ease",
          }}
        />
      )}
    </a>
  );
};

export default BotonLinea;