import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [isPantallaPequena, setIsPantallaPequena] = useState(window.innerWidth < 1600);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      setIsPantallaPequena(window.innerWidth < 1600);
      setIsTablet(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Para establecer el estado inicial correctamente

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isPantallaPequena, isTablet };
};

export default useWindowSize;
