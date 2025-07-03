
import Toldo from "../components/Objetos 3D/Toldos/Toldo.jsx";
import Veranda from "../components/Objetos 3D/Toldos/Veranda.jsx";
import Capota from "../components/Objetos 3D/Toldos/Capota.jsx";
import Cofre from "../components/Objetos 3D/Toldos/Cofre.jsx";
import Pergola from "../components/Objetos 3D/Toldos/Pergola.jsx";

export const infoProductos = [
  {
    id: 1,
    modelo: Toldo,
    nombre: "Toldo",
    titulo: {
      es: "Toldo Articulado",
      en: "Articulated Awning",
    },
    descripcion: {
      pc: {
        es: "Los toldos para terraza son la solución ideal para proteger del sol y crear un ambiente confortable y elegante en cualquier espacio exterior. Además de brindar sombra, ayudan a mantener una temperatura agradable, permiten disfrutar del aire libre durante más tiempo y aportan un toque estético que mejora la apariencia del entorno.",
        en: "Terrace awnings are the ideal solution for protecting against the sun while creating a comfortable and stylish atmosphere in any outdoor space. In addition to providing shade, they help maintain a pleasant temperature, allow you to enjoy the outdoors for longer periods, and add an aesthetic touch that enhances the look of the surroundings.",
      },
      movil: {
        es: "Protege tu terraza del sol con estilo y confort gracias a nuestros toldos articulados, ideales para disfrutar del exterior en cualquier momento.",
        en: "Stay cool and stylish outdoors with our articulated terrace awnings, perfect for enjoying open-air spaces longer.",
      }
    },
    position: [0, -.5, 0],
    positionMovil: [0, -.5, 0],
    rotation: [0.2, 0, 0],
    escala: 2.1,
    escalaMovil: 2,
    copy: "Awning (https://skfb.ly/osVXs) by 1-3D.com is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/)."
  },
  {
    id: 2,
    modelo: Cofre,
    nombre: "Cofre",
    titulo: {
      es: "Toldo Cofre",
      en: "Chest Awning",
    },
    descripcion: {
      pc: {
        es: "Los toldos cofre son una opción elegante y funcional para proteger espacios exteriores del sol y la lluvia. Su diseño compacto y retráctil permite un fácil almacenamiento cuando no están en uso, manteniendo la estética del lugar. Además, ofrecen una excelente resistencia a las inclemencias del tiempo, garantizando durabilidad y protección a largo plazo.",
        en: "Chest awnings are an elegant and functional option for protecting outdoor spaces from sun and rain. Their compact and retractable design allows for easy storage when not in use, maintaining the aesthetics of the area. Additionally, they offer excellent resistance to weather conditions, ensuring long-lasting durability and protection."
      },
      movil: {
        es: "Elegancia y protección para tu terraza con nuestros toldos cofre retráctiles, ideales para mantener tu espacio siempre preparado.",
        en: "Stylish and weather-resistant chest awnings for any outdoor space, perfect for year-round use.",
      }
    },
    position: [0, -5, 0],
    positionMovil: [0, -4.5, 0],
    escala: 9,
    escalaMovil: 8,
    copy: "SKYSHADES™ - SkyLine - Night view (https://skfb.ly/putHY) by ko_renders is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).",
  },
  {
    id: 3,
    modelo: Veranda,
    nombre: "Veranda",
    titulo: {
      es: "Veranda",
      en: "Veranda",
    },
    descripcion: {
      pc: {
        es: "Los toldos veranda están diseñados para cubrir techos de cristal, pérgolas y estructuras similares, ofreciendo una protección solar eficiente sin comprometer la entrada de luz natural. Su instalación elegante y discreta se integra perfectamente con la arquitectura del espacio, proporcionando confort térmico y visual.",
        en: "Veranda awnings are designed to cover glass roofs, pergolas, and similar structures, offering effective sun protection without compromising natural light. Their elegant and discreet installation blends seamlessly with the architecture, providing thermal and visual comfort.",
      },
      movil: {
        es: "Protege techos de cristal o pérgolas del sol sin perder luz natural gracias a nuestros toldos veranda, discretos y funcionales.",
        en: "Protect glass roofs or pergolas from the sun without losing natural light with our elegant and effective veranda awnings.",
      }
    },
    position: [-2, -1.2, 0.9],
    positionMovil: [-1.8, -1, 1],
    escala: .75,
    escalaMovil: .7,
    copy: "Veranda (https://skfb.ly/ooKO7) by omerfurkanerasmus is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)."
  },
  {
    id: 4,
    modelo: Capota,
    nombre: "Capota",
    titulo: {
      es: "Capota",
      en: "Hoods",
    },
    descripcion: {
      pc: {
        es: "Los toldos tipo capota son ideales para ventanas y balcones, proporcionando una protección solar eficaz con un diseño clásico y elegante. Su forma curva no solo protege del sol frontal, sino también lateral, siendo perfectos para mantener interiores frescos y resguardar mobiliario del desgaste solar.",
        en: "Capota awnings are ideal for windows and balconies, offering effective sun protection with a classic and elegant design. Their curved shape provides front and side shade, making them perfect for keeping interiors cool and protecting furniture from sun damage.",
      },
      movil: {
        es: "Elegancia clásica y sombra frontal y lateral para ventanas y balcones con estilo.",
        en: "Classic elegance and all-around shade for windows and balconies with a refined touch.",
      }
    },
    position: [0, -5, 0],
    positionMovil: [0, -4.5, 0],
    escala: 2.5,
    escalaMovil: 2.3,
    copy: "Awning (https://skfb.ly/67RCA) by Mirandanimator is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).",
  },
  {
    id: 5,
    modelo: Pergola,
    nombre: "Pergola",
    titulo: {
      es: "Pérgola",
      en: "Pergola",
    },
    descripcion: {
      pc: {
        es: "Las pérgolas son estructuras elegantes y resistentes que permiten crear espacios exteriores funcionales y confortables. Ofrecen una excelente protección solar y contra la lluvia, ideales para jardines, patios o terrazas, y pueden personalizarse para integrarse perfectamente en cualquier entorno.",
        en: "Pergolas are elegant and durable structures that create functional and comfortable outdoor spaces. They offer excellent protection from the sun and rain, making them ideal for gardens, patios, or terraces, and can be customized to blend seamlessly with any environment.",
      },
      movil: {
        es: "Crea un espacio único al aire libre con nuestras pérgolas resistentes y elegantes, perfectas para cualquier clima y estilo.",
        en: "Create a unique outdoor space with our strong and stylish pergolas, perfect for any weather or setting.",
      }
    },
    position: [0, -1.3, 0],
    positionMovil: [0, -1.3, 0],
    escala: .7,
    escalaMovil: .7,
    copy: "SKYSHADES™ - Sky X - Night view (https://skfb.ly/putHR) by ko_renders is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)."
  },

  // {
  //   producto: Quitavientos,
  //   titulo:{
  //     es: "Quitavientos",
  //     en: "Windbreak Awning"
  //   },
  // },
];