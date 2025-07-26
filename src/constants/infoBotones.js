import useTipoDispositivo from "../Hooks/useTipoDispositivo";

const useInformacionBoton = (idioma, id) => {
  const dispositivo = useTipoDispositivo();

  const botones = [
  {
    id: "Home",
    texto: {
      es: "Realizar un presupuesto",
      en: "Make a quote",
      fr: "Faire un devis",
      de: "Ein Angebot machen",
      ru: "Сделать расчет",
      da: "Få et tilbud"
    },
    url:
      dispositivo !== "movil"
        ? "https://web.whatsapp.com/send?phone=34679847618&text="
        : "https://wa.me/34679847618",
  },
  {
    id: "Historia",
    texto: {
      es: "Ver Productos",
      en: "See Products",
      fr: "Voir les produits",
      de: "Produkte ansehen",
      ru: "Смотреть продукты",
      da: "Se produkter"
    },
    url: "products",
    offset: -20,
  },
  {
    id: "Productos",
    texto: {
      es: "Personaliza tu toldo",
      en: "Customize your awning",
      fr: "Personnalisez votre store",
      de: "Gestalten Sie Ihre Markise",
      ru: "Персонализируйте ваш навес",
      da: "Tilpas din markise"
    },
    url: "/PersonalizarToldos",
  },
  {
    id: "Beneficios",
    texto: {
      es: "MÁS INFORMACIÓN",
      en: "MORE INFORMATION",
      fr: "PLUS D'INFORMATIONS",
      de: "MEHR INFORMATIONEN",
      ru: "БОЛЬШЕ ИНФОРМАЦИИ",
      da: "MERE INFORMATION"
    },
    subtexto: {
      es: "SIN COMPROMISO",
      en: "NO STRING ATTACHED",
      fr: "SANS ENGAGEMENT",
      de: "OHNE VERPFLICHTUNG",
      ru: "БЕЗ ОБЯЗАТЕЛЬСТВ",
      da: "UDEN FORPLIGTELSE"
    },
    url:
      dispositivo !== "movil"
        ? "https://web.whatsapp.com/send?phone=34679847618&text="
        : "https://wa.me/34679847618",
  },
  {
    id: "GoogleReview",
    texto: {
      es: "¡Puntúanos en Google!",
      en: "Rate us on Google!",
      fr: "Notez-nous sur Google !",
      de: "Bewerten Sie uns bei Google!",
      ru: "Оцените нас на Google!",
      da: "Bedøm os på Google!"
    },
    url: "https://search.google.com/local/writereview?placeid=ChIJZbTMBpr8cg0R-sIe7716UhQ"
  },
  {
    id: "Presupuesto",
    texto: {
      es: "Realiza tu presupuesto aquí",
      en: "Get your quote here",
      fr: "Faites votre devis ici",
      de: "Holen Sie sich Ihr Angebot hier",
      ru: "Сделайте свой расчет здесь",
      da: "Få dit tilbud her"
    },
  }
];


  const boton = botones.find((b) => b.id === id);

  return boton
    ? {
      id: boton.id,
      texto: boton.texto[idioma] || boton.texto.es,
      url: boton.url,
      offset: boton.offset || 0,
    }
    : null;
};

export default useInformacionBoton;
