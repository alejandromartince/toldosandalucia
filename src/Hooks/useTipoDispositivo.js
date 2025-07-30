import { useState, useEffect } from 'react';

//Vemos que dispositivo es
const getTipoDispositivo = () => {
  const width = window.innerWidth;

  if (width < 768) return 'movil';
  if (width < 1024) return 'tablet';
  return 'ordenador';
};





// Actualiza la variable al cambiar el tamaño de la pantalla (solo se dispara el hook cuando cambia de variable)
const useTipoDispositivo = () => {
  const [tipo, setTipo] = useState(getTipoDispositivo());

  useEffect(() => {
    const handleResize = () => {
      setTipo(getTipoDispositivo());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return tipo;
};

export default useTipoDispositivo;
