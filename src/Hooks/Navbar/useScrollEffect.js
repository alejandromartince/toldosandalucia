import { useEffect } from 'react';

export const useScrollEffect = (secciones, setActiveSection) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70;

      for (let i = 0; i < secciones.length; i++) {
        const { id } = secciones[i];
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          // Ajustamos la lógica para manejar las secciones especiales
          // 'historia' y 'beneficios' para que se comporten como 'home' y 'products'
          if (scrollPosition >= top && scrollPosition < bottom) {
            if (id === 'historia') {
              setActiveSection('home');
            } else if (id === 'beneficios') {
              setActiveSection('products');
            } else {
              setActiveSection(id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecuta una vez al montar

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [secciones, setActiveSection]);
};
