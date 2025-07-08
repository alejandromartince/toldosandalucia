import { useEffect } from 'react';

const useBloquearScroll = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const popup = document.querySelector('.contenido-PersonalizarToldos-derecha');
    const handleWheel = (e) => {
      e.preventDefault(); // Bloquea el scroll fuera del popup
    };

    popup?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = 'auto';
      popup?.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

export default useBloquearScroll;
