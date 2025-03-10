import React from "react";

// Importamos los componentes
import Terraza from "../objects/Toldos/Terraza";
import Veranda from "../objects/Toldos/Veranda";

const infoProductos = (id) => {
  const Producto = [
    {
      id: 1,
      producto: <Terraza scale={1.2} position={[0, 0, 0]} />,
      titulo:{
        es: "Terraza",
        en: "Terrace"
      },
      descripcion:{
        es: "Son la solución ideal para crear un ambiente agradable.",
        en: "They are the perfect solution to create a pleasant environment."
      },
    },
    {
      id: 2,
      producto: <Veranda scale={1.2} position={[0, 0, 0]} />,
      titulo:{
          es: "Veranda",
          en: "Veranda"
      },
      descripcion: {
          es: "Ideal para cubrir techos acristalados y buhardillas.",
          en: "Ideal for covering glass roofs and attics."
      }
    },
  ];

  // Buscar el producto con el ID dado
  return Producto.find((item) => item.id === id) || null;
};

export default infoProductos;
