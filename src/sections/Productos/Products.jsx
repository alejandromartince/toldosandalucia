import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import CanvasLoader from "../../components/CanvasLoader";
import { getSlides } from "../../constants/slides"; // Importa la función

import "./Products.css";

const Products = () => {
  const slides = getSlides(); // Llama a la función dentro del componente
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
