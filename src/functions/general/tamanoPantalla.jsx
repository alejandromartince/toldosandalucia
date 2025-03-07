import { useState, useEffect } from "react";

// Función para obtener el tamaño actual de la pantalla
const getWindowWidth = () => {
  return window.innerWidth;
};

// Función para detectar si es móvil (pantalla < 769px)
export const isMobile = () => getWindowWidth() < 769;

// Función para detectar si es una pantalla pequeña (pantalla < 1600px)
export const isPantallaPequena = () => getWindowWidth() < 1600;

// Función para detectar si es una tablet (pantalla < 1200px)
export const isTablet = () => getWindowWidth() < 1200;

// Hook que actualiza el estado según el tamaño de la ventana
export const useScreenSize = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(isMobile());
  const [isTabletScreen, setIsTabletScreen] = useState(isTablet());
  const [isPantallaPequenaScreen, setIsPantallaPequenaScreen] = useState(
    isPantallaPequena()
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(isMobile());
      setIsPantallaPequenaScreen(isPantallaPequena());
      setIsTabletScreen(isTablet());
    };

    handleResize(); // Asegurarse de que el tamaño de la pantalla se actualice al cargar la página

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobileScreen, isPantallaPequenaScreen, isTabletScreen };
};
