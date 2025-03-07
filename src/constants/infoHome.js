import { useControls } from "leva";

export const textoHome = {
  titulo: {
    es: "Toldos Andalucía", // Definir el texto en español
    en: "Toldos Andalucía", // Usar el mismo texto para inglés
  },
  parrafo: {
    es: "Somos una empresa especializada en la instalación de toldos en Málaga, comprometidos en ofrecer soluciones efectivas para proteger tu hogar del sol y las lluvias. Con más de 25 años de experiencia, diseñamos e instalamos toldos a medida que no solo brindan una protección duradera, sino que también aportan estilo y funcionalidad a tu espacio. Nuestra misión es ofrecerte el mejor servicio con productos de alta calidad, adaptados a tus necesidades y con un toque de diseño único.",
    en: "We are a company specialized in the installation of awnings in Málaga, committed to offering effective solutions to protect your home from the sun and rain. With more than 25 years of experience, we design and install custom awnings that not only provide lasting protection, but also add style and functionality to your space. Our mission is to offer you the best service with high-quality products, adapted to your needs and with a unique design touch.",
  },
};

export const useModelHomeControls = () => {
  return useControls("ModelHome", {
    //Atributos de la casa
    modelHomePosX: { value: 0, step: 0.05, min: -50, max: 50 },
    modelHomePosY: { value: 0, step: 0.05, min: -50, max: 50 },
    modelHomePosZ: { value: 0, step: 0.05, min: -50, max: 50 },

    modelHomeRotX: { value: 0, step: 0.05, min: -50, max: 50 },
    modelHomeRotY: { value: 0, step: 0.05, min: -50, max: 50 },
    modelHomeRotZ: { value: 0, step: 0.05, min: -50, max: 50 },

    //Atributos de la camara
    cameraPosX: { value: 0, step: 0.05, min: -50, max: 50 },
    cameraPosY: { value: 0, step: 0.05, min: -50, max: 50 },
    cameraPosZ: { value: 0, step: 0.05, min: -50, max: 50 },

    cameraRotX: { value: 0, step: 0.05, min: -50, max: 50 },
    cameraRotY: { value: 0, step: 0.05, min: -50, max: 50 },
    cameraRotZ: { value: 0, step: 0.05, min: -50, max: 50 },

    //Atributos de la luz ambiental
    ambientLightIntensity: { value: 0, step: 0.05, min: -50, max: 50 },

    //Atributos de la luz direccional
    directionalLightPosX: { value: 0, step: 0.05, min: -50, max: 50 },
    directionalLightPosY: { value: 0, step: 0.05, min: -50, max: 50 },
    directionalLightPosZ: { value: 0, step: 0.05, min: -50, max: 50 },
    directionalLightIntensity: { value: 0, step: 0.05, min: -50, max: 50 },
  }, { collapsed: true });
};