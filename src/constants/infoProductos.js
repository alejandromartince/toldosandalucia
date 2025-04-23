// infoProductos.js
import Terraza from "../objects/Toldos/Terraza";
import Veranda from "../objects/Toldos/Veranda";
import Capota from "../objects/Toldos/Capota";
import Cofre from "../objects/Toldos/Cofre";
import Pergola from "../objects/Toldos/Pergola";
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
  {
    producto: Capota,
    titulo: {
      es: "Capota",
      en: "Capota",
    },
    descripcion: {
      es: "Los toldos capota son estructuras abatibles con forma semicircular o de cuarto de esfera que se fijan encima de ventanas o puertas; aportan un toque clásico, protegen del sol y la lluvia y pueden personalizarse en tamaño y tejido.",
      en: "Capota awnings are fold out, semicircular (quarter sphere) frames mounted above windows or doors; they add a classic look, shield against sun and rain, and can be customized in size and fabric.",
    },
    position: [0, -5, 0],
    escala: 2.5,
  },
  {
    producto: Cofre,
    titulo: {
      es: "Cofre",
      en: "Cofre",
    },
    descripcion: {
      es: "Los toldos cofre son una opción elegante y funcional para proteger espacios exteriores del sol y la lluvia. Su diseño compacto y retráctil permite un fácil almacenamiento cuando no están en uso, manteniendo la estética del lugar. Además, ofrecen una excelente resistencia a las inclemencias del tiempo, garantizando durabilidad y protección a largo plazo.",
      en: "Cofre awnings are an elegant and functional option for protecting outdoor spaces from sun and rain. Their compact and retractable design allows for easy storage when not in use, maintaining the aesthetics of the area. Additionally, they offer excellent resistance to weather conditions, ensuring long-lasting durability and protection.",
    },
    position: [0, -5, 0],
    escala: 9,
  },
  {
    producto: Pergola,
    titulo: {
      es: "Pérgola",
      en: "Pergola",
    },
    descripcion: {
      es: "Las pérgolas son estructuras arquitectónicas que proporcionan sombra y protección en espacios exteriores. Su diseño abierto permite disfrutar de la luz natural mientras se protege del sol y la lluvia. Son ideales para jardines, patios y terrazas, creando un ambiente acogedor y elegante.",
      en: "Pergolas are architectural structures that provide shade and protection in outdoor spaces. Their open design allows for natural light while shielding against sun and rain. They are perfect for gardens, patios, and terraces, creating a cozy and elegant atmosphere.",
    },
    position: [0, -1.3, 0],
    escala: .7,
  },
  // Agregamos mas productos aquí si es necesario
];