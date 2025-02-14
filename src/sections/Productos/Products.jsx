import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { FaLightbulb, FaTools } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5"; // Iconos de navegación
import CanvasLoader from "../../components/CanvasLoader";
import CasaHome from "../../components/CasaHome"; // Modelo 1
import Toldo from "../../components/Toldo"; // Modelo 2 (Ejemplo)
import "./Products.css";

const slides = [
  {
    id: 1,
    title: "Diseño de toldos",
    description:
      "Diseñamos a medida toldos manuales, automatizados y domótica; rotulamos todo tipo de toldos.",
    icon: <FaLightbulb size={60} />,
    model: <CasaHome scale={1.2} position={[8, -6, 0]} />,
  },
  {
    id: 2,
    title: "Fabricación de toldos",
    description:
      "Trabajamos con más de 500 colores en lonas del tipo acrílicas, técnicas, ignífugas e impermeables.",
    icon: <img src='/assets/Imagenes/lapiz.svg' alt='diseño' className='imagenInfo' />,
    model: <Toldo scale={1.2} position={[8, -6, 0]} />, // Aquí puedes cambiar el modelo
  },
  {
    id: 3,
    title: "Instalación de toldos",
    description:
      "Tenemos el personal idóneo para la instalación de toldos en todo tipo de construcción.",
    icon: <FaTools size={60} />,
    model: <CasaHome scale={1.2} position={[8, -6, 0]} />, // Puedes usar otro modelo si tienes más
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="productos">
      <div className="productos-contenedor">
        {/* Izquierda: Slider de Texto */}
        <div className="productos-slider">
          <div className="productos-slide">
            {slides[currentIndex].icon}
            <h1>{slides[currentIndex].title}</h1>
            <p>{slides[currentIndex].description}</p>
          </div>
          <div className="productos-controles">
            <button onClick={prevSlide} className="productos-btn">
              <IoArrowBack />
            </button>
            <button onClick={nextSlide} className="productos-btn">
              <IoArrowForward />
            </button>
          </div>
        </div>

        {/* Derecha: Canvas con el Modelo */}
        <div className="productos-canvas">
          <Canvas style={{ height: "70vh", width: "100%" }}>
            <PerspectiveCamera makeDefault position={[0, 15, 50]} fov={45} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <Suspense fallback={<CanvasLoader />}>
              {slides[currentIndex].model}
            </Suspense>
            <OrbitControls enableRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Products;
