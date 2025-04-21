// infoProductos.js
import React from "react";
import Terraza from "../objects/Toldos/Terraza";
import Veranda from "../objects/Toldos/Veranda";

// Exportar los productos como objetos
export const Productos = [
  {
    producto: Terraza,
    titulo: {
      es: "Terraza",
      en: "Terrace",
    },
    descripcion: {
      es: "Los toldos para terraza son la solución ideal para proteger del sol y crear un ambiente confortable y elegante en cualquier espacio exterior.",
      en: "Terrace awnings are the perfect solution for sun protection, creating a comfortable and stylish outdoor space.",
    },
    position: [0, 0, 0], // Aquí agregamos la posición para este producto
    escala: 1.3, //Lo mismo con la escala
  },
  {
    producto: Veranda,
    titulo: {
      es: "Veranda",
      en: "Veranda",
    },
    descripcion: {
      es: "Los toldos veranda son la solución perfecta para cubrir techos acristalados y buhardillas, ofreciendo protección solar eficiente y reduciendo la acumulación de calor en el interior.",
      en: "Veranda awnings are the perfect solution for covering glass roofs and attics, providing effective sun protection and reducing heat buildup indoors.",
    },
    position: [-2, -1.2, 0.9], 
    escala: .8
  },
  // Puedes agregar más productos aquí si lo deseas
];
