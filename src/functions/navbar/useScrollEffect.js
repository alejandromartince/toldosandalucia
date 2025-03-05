// useScrollEffect.js
import { useEffect } from 'react';
import { handleScroll } from "../../functions/navbar/handleScroll"; // Importa la función handleScroll

export const useScrollEffect = (secciones, setActiveSection) => {
  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(secciones, setActiveSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [secciones, setActiveSection]);
};
