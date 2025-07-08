// Importamos la información de los productos
import { infoProductos } from "../../constants/infoProductos";

export const useOpcionesTipoToldos = (idioma) => {
  return infoProductos.map(producto => ({
    value: producto.nombre.es || producto.nombre,       // valor en español fijo (asumiendo estructura)
    label: producto.nombre[idioma] || producto.nombre.es || producto.nombre // etiqueta en idioma con fallback
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
  const opcionesEs = tipoTela['es'];      // valores en español
  const opcionesIdioma = tipoTela[idioma] || tipoTela['es']; // etiquetas según idioma o español si no existe

  return Object.entries(opcionesEs).map(([key, valorEs]) => ({
    value: valorEs,                      // valor en español fijo
    label: opcionesIdioma[key] || valorEs  // etiqueta según idioma, fallback a español
  }));
};
