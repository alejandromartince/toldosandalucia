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
      es: "Los toldos para terraza son la solución ideal para proteger del sol y crear un ambiente confortable y elegante en cualquier espacio exterior. Además de brindar sombra, ayudan a mantener una temperatura agradable, permiten disfrutar del aire libre durante más tiempo y aportan un toque estético que mejora la apariencia del entorno.",
      en: "Terrace awnings are the ideal solution for protecting against the sun while creating a comfortable and stylish atmosphere in any outdoor space. In addition to providing shade, they help maintain a pleasant temperature, allow you to enjoy the outdoors for longer periods, and add an aesthetic touch that enhances the look of the surroundings.",
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
      es: "Los toldos veranda son la solución perfecta para cubrir techos acristalados y buhardillas, ofreciendo una protección solar eficiente y reduciendo la acumulación de calor en el interior. Este tipo de toldo permite aprovechar la luz natural sin renunciar al confort térmico, mejorando tanto la eficiencia energética como el bienestar dentro del hogar o espacio cubierto.",
      en: "Veranda awnings are the perfect solution for covering glass roofs and attic spaces, providing efficient sun protection and significantly reducing heat buildup inside. This type of awning allows you to enjoy natural light without sacrificing thermal comfort, enhancing both energy efficiency and the overall comfort of your home or covered area.",
    },
    position: [-2, -1.2, 0.9],
    escala: .8
  },
  // Puedes agregar más productos aquí si lo deseas
];
