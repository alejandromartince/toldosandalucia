import { useEffect } from 'react';

export const useScrollEffect = (secciones, setActiveSection) => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY + 70;

          for (let i = 0; i < secciones.length; i++) {
            const { id } = secciones[i];
            const section = document.getElementById(id);

            if (section) {
              const rect = section.getBoundingClientRect();
              const top = rect.top + window.scrollY;
              const bottom = top + rect.height;

              if (scrollY >= top && scrollY < bottom) {
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

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Ejecuta una vez al montar

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [secciones, setActiveSection]);
};
