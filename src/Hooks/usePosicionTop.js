import { useRef, useState, useEffect } from "react";

const usePosicionTop = (refPadre) => {
  const ref = useRef(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (!ref.current || !refPadre?.current) return;

    const calcularTop = () => {
      let topRelativo = 0;
      let elemento = ref.current;

      while (elemento && elemento !== refPadre.current) {
        topRelativo += elemento.offsetTop;
        elemento = elemento.offsetParent;
      }

      setTop(topRelativo);
    };

    // Esperar 1 segundo antes de calcular
    const timeoutId = setTimeout(() => {
      calcularTop();
      // También agregar eventos después del delay
      window.addEventListener("scroll", calcularTop);
      window.addEventListener("resize", calcularTop);
    }, 300);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", calcularTop);
      window.removeEventListener("resize", calcularTop);
    };
  }, [refPadre]);

  return [ref, top];
};

export default usePosicionTop;
