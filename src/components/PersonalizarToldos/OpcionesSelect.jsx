// Importamos la información de los productos
import { infoProductos } from "../../constants/infoProductos";

export const useOpcionesTipoToldos = (idioma) => {
  return infoProductos.map(producto => ({
    value: producto.nombre.es,
    label: producto.nombre[idioma] 
  }));
};

const tipoTela = {
  es: {
    1: "PVC (Impermeable)",
    2: "Acrílico",
    3: "Microperforada"
  },
  en: {
    1: "PVC (Waterproof)",
    2: "Acrylic",
    3: "Microperforated"
  }
};

export const useOpcionesTipoTela = (idioma) => {
  const opcionesEs = tipoTela['es'];
  const opcionesIdioma = tipoTela[idioma] 

  return Object.entries(opcionesEs).map(([key, valorEs]) => ({
    value: valorEs,                      // valor en español fijo
    label: opcionesIdioma[key] || valorEs  // etiqueta según idioma, fallback a español
  }));
};
