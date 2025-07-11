import { useRef, useState, useEffect } from "react";

const usePosicionTop = (refPadre) => {
  const ref = useRef(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (!ref.current || !refPadre?.current) return;

    const calcularTop = () => {
      const rectElemento = ref.current.getBoundingClientRect();
      const rectPadre = refPadre.current.getBoundingClientRect();

      // La diferencia es la posición relativa dentro del contenedor padre
      const topRelativo = rectElemento.top - rectPadre.top;

      setTop(topRelativo);
    };

    calcularTop();

    window.addEventListener("scroll", calcularTop);
    window.addEventListener("resize", calcularTop);

    return () => {
      window.removeEventListener("scroll", calcularTop);
      window.removeEventListener("resize", calcularTop);
    };
  }, [refPadre]);

  return [ref, top];
};

export default usePosicionTop;
