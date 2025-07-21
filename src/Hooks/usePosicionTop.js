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

  // Ejecutar con retraso para asegurar que el DOM esté listo
  const timeoutId = setTimeout(calcularTop, 100);

  window.addEventListener("scroll", calcularTop);
  window.addEventListener("resize", calcularTop);

  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener("scroll", calcularTop);
    window.removeEventListener("resize", calcularTop);
  };
}, [refPadre]);


  return [ref, top];
};

export default usePosicionTop;
