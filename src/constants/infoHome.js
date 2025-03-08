
export const textoHome = {
  titulo: {
    es: "¿Quiénes somos?", // Definir el texto en español
    en: "Who are we?", // Usar el mismo texto para inglés
  },
  parrafo: {
    es: "Somos especialistas en la instalación de toldos en Málaga, ofreciendo soluciones efectivas para proteger tu hogar del sol y la lluvia. Diseñamos e instalamos toldos a medida que no solo garantizan una protección duradera, sino que también aportan estilo y funcionalidad a tu espacio. Nuestra misión es brindarte el mejor servicio con productos de alta calidad, adaptados a tus necesidades y con un diseño único.",
    en: "We are specialists in the installation of awnings in Malaga, offering effective solutions to protect your home from the sun and rain. We design and install custom-made awnings that not only guarantee long-lasting protection but also add style and functionality to your space. Our mission is to provide you with the best service with high-quality products, tailored to your needs and with a unique design.",
  },
};

export const useModelHomeControls = () => ({
  // Atributos de la casa
  modelHomePosX: 0,
  modelHomePosY: 0,
  modelHomePosZ: 0,

  modelHomeRotX: -.2,
  modelHomeRotY: -.2,
  modelHomeRotZ: 0.02,

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
