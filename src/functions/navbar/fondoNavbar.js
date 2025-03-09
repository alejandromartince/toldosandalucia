import { useState, useEffect } from "react";

export const useScrollFondoNavbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      if (screenWidth > 768) { 
        setIsTransparent(scrollPosition <= 100); // Si scrollY es menor o igual a 100, transparente
      } else {
        setIsTransparent(false); // Siempre opaco en pantallas pequeñas
      }
    };


    checkScroll(); // Verificar al cargar la página

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return isTransparent;
};
