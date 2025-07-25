// Importamos la información de los productos
import { infoProductos } from "../../constants/infoProductos";
import { traducciones } from "../../constants/infoPersonalizarToldos";

export const useOpcionesTipoToldos = (idioma) => {
  return infoProductos.map((producto) => ({
    value: producto.nombre.es,
    label: producto.nombre[idioma],
  }));
};


export const useOpcionesTipoTela = (idioma) => {
  const opcionesEs = traducciones.tipoTela["es"];
  const opcionesIdioma = traducciones.tipoTela[idioma] || opcionesEs;

  return Object.entries(opcionesEs).map(([key, valorEs]) => ({
    value: key,
    label: opcionesIdioma[key] || valorEs,
  }));
};

export const usePalabras = {
  es: {
    toldo: "toldo",
    tela: "tela",
    sistema: "sistema",
    ubicacion: "ubicación",
  },
  en: {
    toldo: "awning",
    tela: "fabric",
    sistema: "system",
    ubicacion: "location",
  },
  fr: {
    toldo: "auvent",
    tela: "tissu",
    sistema: "système",
    ubicacion: "emplacement",
  },
  de: {
    toldo: "Markise",
    tela: "Stoff",
    sistema: "System",
    ubicacion: "Standort",
  },
  ru: {
    toldo: "тент",
    tela: "ткань",
    sistema: "система",
    ubicacion: "местоположение",
  },
  da: {
    toldo: "markise",
    tela: "stof",
    sistema: "system",
    ubicacion: "placering",
  },
}

export const obtenerTextoSeleccion = (idioma, palabra) => {
  switch (idioma) {
    case "es":
      return `Selecciona tu ${palabra}`;
    case "en":
      return `Select your ${palabra}`;
    case "fr":
      return `Sélectionnez votre ${palabra}`;
    case "de":
      return `Wählen Sie Ihr ${palabra} aus`;
    case "ru":
      return `Выберите ваш ${palabra}`;
    case "dan":
      return `Vælg din ${palabra}`;
    default:
      return `Select your ${palabra}`;
  }
};



export const useTipoSistemaToldo = (idioma) => {
  const opcionesEs = traducciones.tipoSistemaToldo["es"];
  const opcionesIdioma = traducciones.tipoSistemaToldo[idioma] || opcionesEs;

  return Object.entries(opcionesEs).map(([key, valorEs]) => ({
    value: key,
    label: opcionesIdioma[key] || valorEs,
  }));
};

const ubicaciones = {
  malaga: "Málaga",
  torremolinos: "Torremolinos",
  benalmadena: "Benalmádena",
  arroyo: "Arroyo de la Miel",
  fuengirola: "Fuengirola",
  mijas: "Mijas",
  marbella: "Marbella",
  sanpedro: "San Pedro",
  estepona: "Estepona",
  alhaurin: "Alhaurín de La Torre",
  churriana: "Churriana",
  ricon: "Rincón de La Victoria",
  elpalo: "El Palo",
  malagaeste: "Málaga Este",
};

export const useUbicacion = () => {
  const opciones = Object.entries(ubicaciones).map(([value, label]) => ({
    value,
    label,
  }));

  return opciones;
};

