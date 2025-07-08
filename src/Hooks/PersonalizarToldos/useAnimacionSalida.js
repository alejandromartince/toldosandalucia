import { useEffect } from 'react';

/**
 * Hook que ejecuta una función de cierre tras una animación de salida.
 * @param {boolean} cerrando - Estado que indica si el componente está cerrándose.
 * @param {function} onCerrar - Función que se llama después del timeout para desmontar.
 * @param {number} duracion - Tiempo en ms que dura la animación (por defecto 400ms).
 */
const useAnimacionSalida = (cerrando, onCerrar, duracion = 400) => {
  useEffect(() => {
    if (cerrando) {
      const timer = setTimeout(() => {
        onCerrar();
      }, duracion);
      return () => clearTimeout(timer);
    }
  }, [cerrando, onCerrar, duracion]);
};

export default useAnimacionSalida;
