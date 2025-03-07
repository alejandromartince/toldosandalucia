import { useControls } from "leva";

export const textoHome = {
  titulo: {
    es: "¿Quiénes somos?", // Definir el texto en español
    en: "Who are we?", // Usar el mismo texto para inglés
  },
  parrafo: {
    es: "Somos una empresa especializada en la instalación de toldos en Málaga, comprometidos en ofrecer soluciones efectivas para proteger tu hogar del sol y las lluvias. Con más de 25 años de experiencia, diseñamos e instalamos toldos a medida que no solo brindan una protección duradera, sino que también aportan estilo y funcionalidad a tu espacio. Nuestra misión es ofrecerte el mejor servicio con productos de alta calidad, adaptados a tus necesidades y con un toque de diseño único.",
    en: "We are a company specialized in the installation of awnings in Málaga, committed to offering effective solutions to protect your home from the sun and rain. With more than 25 years of experience, we design and install custom awnings that not only provide lasting protection, but also add style and functionality to your space. Our mission is to offer you the best service with high-quality products, adapted to your needs and with a unique design touch.",
  },
};

export const useModelHomeControls = () => ({
  // Atributos de la casa
  modelHomePosX: 0,
  modelHomePosY: 0,
  modelHomePosZ: 0,

  modelHomeRotX: 0,
  modelHomeRotY: -0.20,
  modelHomeRotZ: 0.01,

  // Atributos de la cámara
  cameraPosX: 0,
  cameraPosY: 4,
  cameraPosZ: 10,

  cameraFov: 45,

  // Atributos de la luz ambiental
  ambientLightIntensity: 1.25,

  // Atributos de la luz direccional
  directionalLightPosX: 2.45,
  directionalLightPosY: 10,
  directionalLightPosZ: -5.55,
  directionalLightIntensity: 6.65,
});
