import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import CanvasLoader from "../../components/CanvasLoader";
import { getSlides } from "../../constants/slides"; // Importa la función
import { useToldosControls } from "../../constants/levaControls";

import { useIdioma } from "../../contexts/IdiomaContext"; // Usa el contexto de idioma

import "./Products.css";

const Products = () => {
  const { idioma, cambiarIdioma } = useIdioma(); // Obtén el idioma y la función para cambiarlo
  const slides = getSlides(idioma); // Llama a la función pasando el idioma
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const {
    CameraPosX,
    CameraPosY,
    CameraPosZ,
    CameraFov,
    AmbientLightIntensity,
    DirectionalLightIntensity,
    DirectionalLightPosX,
    DirectionalLightPosY,
    DirectionalLightPosZ,
  } = useToldosControls();

  return (
    <section className="products" id="products">
      <div className="productos-contenedor">
        {/* Izquierda: Slider de Texto */}
        <div className="productos-slider">
          <div className="titulo">
            <h1>{idioma === "es" ? "Nuestros Productos" : "Our Products"}</h1>
          </div>
          
            <div className="productos-slide">
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
          <Canvas style={{ height: "100%", width: "100%", cursor: "grab" }}>
            <PerspectiveCamera
              makeDefault
              position={[CameraPosX, CameraPosY, CameraPosZ]}
              fov={CameraFov}
            />
            <ambientLight intensity={AmbientLightIntensity} />
            <directionalLight
              position={[
                DirectionalLightPosX,
                DirectionalLightPosY,
                DirectionalLightPosZ,
              ]}
              intensity={DirectionalLightIntensity}
            />
            <Suspense fallback={<CanvasLoader />}>
              <group scale={0.5}>
                {slides[currentIndex].model}
                <OrbitControls
                  makeDefault
                  enableRotate={true}
                  // maxPolarAngle={Math.PI / 2}
                  maxDistance={15}
                  minDistance={5}
                  enablePan={true}
                  enableZoom={false}
                />
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Products;
