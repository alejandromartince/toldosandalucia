//Importamos la información de los productos
import { infoProductos } from "../../constants/infoProductos";


export const useOpcionesTipoToldos = (idioma) => {

  return infoProductos.map(producto => ({
    value: producto.nombre,
    label: producto.nombre[idioma]
  }));
};
