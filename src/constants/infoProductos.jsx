import React from "react";

// Importamos los componentes
import Terraza from "../objects/Toldos/Terraza";
import Veranda from "../objects/Toldos/Veranda";

export const Productos = () => ({
  1: {
    producto: <Terraza scale={1.2} position={[0, 0, 0]} />,
    titulo: {
      es: "Terraza",
      en: "Terrace",
    },
    descripcion: {
      es: "Los toldos para terraza son la solución ideal para proteger del sol y crear un ambiente confortable y elegante en cualquier espacio exterior. Gracias a su diseño funcional, permiten disfrutar de la terraza durante todo el año, regulando la temperatura y aportando un toque estético que se adapta a cualquier estilo arquitectónico. Además, ayudan a optimizar el uso de la luz natural y brindan privacidad sin renunciar a la sensación de amplitud y frescura.",
      en: "Terrace awnings are the perfect solution for sun protection, creating a comfortable and stylish outdoor space. With their functional design, they allow you to enjoy your terrace all year round by regulating temperature and enhancing the overall aesthetics to match any architectural style. Additionally, they help optimize natural light while providing privacy without sacrificing a sense of openness and freshness.",
    },
  },
  2: {
    id: 2,
    producto: <Veranda scale={0.7} position={[-2, -1, 0.9]} />,
    titulo: {
      es: "Veranda",
      en: "Veranda",
    },
    descripcion: {
      es: "Los toldos veranda son la solución perfecta para cubrir techos acristalados y buhardillas, ofreciendo protección solar eficiente y reduciendo la acumulación de calor en el interior. Su diseño elegante y funcional permite regular la entrada de luz, creando un ambiente más fresco y confortable sin renunciar a la luminosidad natural. Además, contribuyen al ahorro energético al minimizar la necesidad de aire acondicionado en los días más calurosos.",
      en: "Veranda awnings are the perfect solution for covering glass roofs and attics, providing effective sun protection and reducing heat buildup indoors. Their elegant and functional design allows for light regulation, creating a cooler and more comfortable environment without compromising natural brightness. Additionally, they help improve energy efficiency by minimizing the need for air conditioning on hot days.",
    },
  },
});
