// hooks/useWindowSize.js
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Cerrar el menú en pantallas grandes
      } else {
        setIsMenuOpen(true); // Abrir el menú en pantallas pequeñas
      }
    };

    // Listener para cambios de tamaño de pantalla
    window.addEventListener("resize", handleResize);

    // Ejecutar al montar el componente para obtener el tamaño inicial
    handleResize();

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMenuOpen; // Devolver el estado del menú (abierto o cerrado)
};

