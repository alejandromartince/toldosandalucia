// Importamos la información de los productos
import { infoProductos } from "../../constants/infoProductos";
import { traducciones } from "../../constants/infoPersonalizarToldos";

export const useOpcionesTipoToldos = (idioma) => {
  return infoProductos.map((producto) => ({
    value: producto.nombre.es,
    label: producto.nombre[idioma],
  }));
};

const tipoTela = {
  es: {
    1: "PVC (Impermeable)",
    2: "Acrílico",
    3: "Microperforada",
  },
  en: {
    1: "PVC (Waterproof)",
    2: "Acrylic",
    3: "Microperforated",
  },
};

export const useOpcionesTipoTela = (idioma) => {
  const opcionesEs = traducciones.tipoTela["es"];
  const opcionesIdioma = traducciones.tipoTela[idioma] || opcionesEs;

  return Object.entries(opcionesEs).map(([key, valorEs]) => ({
    value: key,
    label: opcionesIdioma[key] || valorEs,
  }));
};

const tipoSistemaToldo = {
  es: {
    1: "Manual",
    2: "Motorizado",
    3: "Motorizado + Detector de viento",
  },
  en: {
    1: "Manual",
    2: "Motorized",
    3: "Motorized + Wind Sensor",
  },
};

export const useTipoSistemaToldo = (idioma) => {
  const opcionesEs = traducciones.tipoToldo["es"];
  const opcionesIdioma = traducciones.tipoToldo[idioma] || opcionesEs;

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

