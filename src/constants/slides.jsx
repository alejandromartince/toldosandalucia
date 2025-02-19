import { FaLightbulb, FaTools } from "react-icons/fa";
import { useIdioma } from "../contexts/IdiomaContext"; // Asegúrate de tener el contexto de idioma

import CasaHome from "../components/CasaHome";
import Terraza from "../components/Terraza";
import Pergola from "../components/Pergola";
import Capota from "../components/Capota";
import Veranda from "../components/Veranda";
import Cofre from "../components/Cofre";

export const getSlides = () => {
  const { idioma } = useIdioma(); // Accedemos al idioma desde el contexto

  const slides = [
    {
      id: 1,
      title: idioma === "es" ? "Toldos Veranda" : "Veranda Awnings",
      description:
        idioma === "es"
          ? "Los toldos veranda son estructuras retráctiles que protegen del sol y la lluvia en terrazas y jardines. Ofrecen sombra ajustable y están hechos de materiales resistentes como aluminio y telas impermeables."
          : "Veranda awnings are retractable structures that protect from sun and rain in terraces and gardens. They offer adjustable shade and are made of durable materials like aluminum and waterproof fabrics.",
      model: <Veranda scale={1} position={[0, 0, 0]} />,
    },
    {
      id: 2,
      title: idioma === "es" ? "Toldos Vela" : "Sail Awnings",
      description:
        idioma === "es"
          ? "Los toldos vela son estructuras de sombra que utilizan telas tensadas en forma de vela, proporcionando protección contra el sol y añadiendo un toque moderno al espacio exterior. Son ideales para jardines, terrazas y áreas al aire libre, ya que ofrecen una cobertura efectiva mientras permiten una buena circulación de aire."
          : "Sail awnings are shading structures that use tensioned fabrics in the shape of a sail, providing protection from the sun and adding a modern touch to outdoor spaces. They are ideal for gardens, terraces, and outdoor areas, as they offer effective coverage while allowing good air circulation.",
      
      model: <Terraza scale={1.2} position={[8, -6, 0]} />,
    },
    {
      id: 3,
      title: idioma === "es" ? "Toldo Terraza" : "Terrace Awning",
      description:
        idioma === "es"
          ? "El toldo terraza está diseñado para proporcionar sombra y protección contra el sol en espacios exteriores como terrazas y balcones. Hecho de materiales duraderos, ofrece una solución elegante para ampliar el uso de tu área exterior, creando un ambiente cómodo. Es fácil de operar y se puede retraer cuando no es necesario."
          : "The terrace awning is designed to provide shade and protection from the sun in outdoor spaces like terraces and balconies. Made of durable materials, it offers an elegant solution to extend the use of your outdoor area, creating a comfortable environment. It is easy to operate and can be retracted when not needed.",
      
      model: <Terraza scale={1.2} position={[8, -6, 0]} />,
    },
    
    {
      id: 4,
      title: idioma === "es" ? "Toldos Cofre" : "Cassette Awnings",
      description:
        idioma === "es"
          ? "Los toldos cofre son toldos retráctiles que se alojan en un cofre protector cuando se retraen. Este diseño mantiene la tela a salvo de los elementos climáticos, garantizando una mayor durabilidad. Son ideales para terrazas y ventanas, proporcionando una apariencia limpia y moderna mientras ofrecen una protección solar efectiva."
          : "Cassette awnings are retractable awnings that are housed in a protective cassette when retracted. This design keeps the fabric safe from weather elements, ensuring longer durability. Ideal for terraces and windows, it provides a clean, modern look while offering effective sun protection.",
      
      model: <Cofre scale={.1} position={[0, 0, 0]} />,
    },
    
    {
      id: 5,
      title: idioma === "es" ? "Pérgola" : "Pergola",
      description:
        idioma === "es"
          ? "Una pérgola es una estructura de jardín con un marco abierto, generalmente soportada por columnas o postes, que proporciona sombra y atractivo decorativo. Se puede cubrir con diferentes materiales, como tela o plantas, ofreciendo una solución versátil para crear espacios exteriores. Es perfecta para patios, jardines y terrazas."
          : "A pergola is a garden structure with an open framework, usually supported by columns or posts, that provides shade and decorative appeal. It can be covered with various materials, such as fabric or plants, offering a versatile solution for creating outdoor living spaces. Perfect for patios, gardens, and terraces.",
      
      model: <Pergola scale={1.2} position={[8, -6, 0]} />,
    },
    
    {
      id: 6,
      title: idioma === "es" ? "Cortina de Interior" : "Interior Curtain",
      description:
        idioma === "es"
          ? "Las cortinas de interior son colgaduras de tela que se utilizan para privacidad, control de la luz y decoración dentro de hogares y edificios. Disponibles en varios materiales, colores y diseños, ofrecen versatilidad para diferentes estilos de habitación. Ayudan a regular la temperatura de las habitaciones mientras mejoran el diseño interior."
          : "Interior curtains are fabric hangings used for privacy, light control, and decoration inside homes and buildings. Available in various materials, colors, and designs, they offer versatility for different room styles. Curtains help regulate room temperature while enhancing the interior design.",
      
      model: <Terraza scale={1.2} position={[8, -6, 0]} />,
    },
    
    {
      id: 5,
      title: idioma === "es" ? "Capota" : "Hood",
      description:
        idioma === "es"
          ? "La capota es una cubierta retráctil utilizada comúnmente en ventanas o vehículos para proporcionar sombra y protección contra los elementos. Está diseñada para una fácil instalación y remoción, y puede ser controlada manualmente o de manera automática. Ofrece una solución práctica para proteger espacios exteriores y mejorar la comodidad."
          : "A hood is a retractable cover often used on windows or vehicles to provide shade and protection from the elements. Typically designed for easy installation and removal, it can be manually or automatically controlled. It offers a practical solution for protecting outdoor spaces and improving comfort.",
      
      model: <Capota scale={1} position={[0, 0, 10]} />,
    },    
  ];

  return slides;
};
