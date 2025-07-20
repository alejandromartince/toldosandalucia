// Importamos la información de los productos
import { infoProductos } from "../../constants/infoProductos";

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
  const opcionesEs = tipoTela["es"];
  const opcionesIdioma = tipoTela[idioma];

  return Object.entries(opcionesEs).map(([key, valorEs]) => ({
    value: key,
    label: opcionesIdioma[key] || valorEs, // etiqueta según idioma, fallback a español
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
  const opcionesES = tipoSistemaToldo["es"];
  const opciones = tipoSistemaToldo[idioma];

  return Object.entries(opcionesES).map(([key, valorEs]) => ({
    value: key,
    label: opciones[key] || valorEs,
  }));
};

const ubicaciones = {
  es: {
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
  },
  en: {
    malaga: "Malaga",
    torremolinos: "Torremolinos",
    benalmadena: "Benalmadena",
    arroyo: "Arroyo de la Miel",
    fuengirola: "Fuengirola",
    mijas: "Mijas",
    marbella: "Marbella",
    sanpedro: "San Pedro",
    estepona: "Estepona",
    alhaurin: "Alhaurin de La Torre",
    churriana: "Churriana",
    ricon: "Rincon de La Victoria",
    elpalo: "El Palo",
    malagaeste: "Malaga Este",
  },
};


export const useUbicacion = (idioma) => {
  const opciones = Object.entries(ubicaciones[idioma] || {}).map(([value, label]) => ({
    value,
    label,
  }));

  return opciones;
};

