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
      id: "Historia",
      texto: {
        es: "Ver Productos",
        en: "See Porducts",
      },
      url: "products",
      offset: -20,
    },
    {
      id: "Productos",
      texto: {
        es: "Ver Todos los Productos",
        en: "See All Products",
      },
      url: "/PersonalizarToldos", // Asegúrate de que la URL sea correcta
    },
    {
      id: "Beneficios", // Nuevo botón agregado
      texto: {
        es: "Mira nuestros trabajos", // Texto en español
        en: "See our works", // Texto en inglés
      },
      url: "works", // URL de la nueva sección
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
        offset: boton.offset || 0,
      }
    : null;
};
