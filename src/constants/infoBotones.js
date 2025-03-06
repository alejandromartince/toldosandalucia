export const informacionBoton = (idioma, id) => {
  const botones = [
    {
      id: "Home",
      texto: {
        es: "Realizar un presupuesto",
        en: "Make a quote",
      },
      url: "https://web.whatsapp.com/send?phone=34679847618&text=",
    },
    {
      id: "Products",
      texto: {
        es: "Saber más",
        en: "Learn more",
      },
    },
  ];
  // Encuentra el botón con el ID dado
  const boton = botones.find((boton) => boton.id === id);
  // Si el botón existe, devuelve el texto en el idioma seleccionado
  return boton
    ? {
        id: boton.id,
        texto: boton.texto[idioma] || boton.texto.es,
        url: boton.url,
      }
    : null;
};
