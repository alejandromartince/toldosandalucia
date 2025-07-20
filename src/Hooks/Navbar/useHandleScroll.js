export const useHandleScroll = (secciones, setActiveSection) => {
  const scrollY = window.scrollY + 70;

  secciones.forEach(({ id }) => {
    const section = document.getElementById(id);

    if (section) {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;

      if (scrollY >= top && scrollY < bottom) {
        setActiveSection(id);
      }
    }
  });
};
