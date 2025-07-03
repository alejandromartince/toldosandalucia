export const useHandleScroll = (secciones, setActiveSection) => {
    const scrollPosition = window.scrollY + 70;
    secciones.forEach(({ id, offset }) => {
      const section = document.getElementById(id);
      if (section) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
        }
      }
    });
  };