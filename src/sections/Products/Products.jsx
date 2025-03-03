import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import CanvasLoader from "../../components/CanvasLoader";
import { getSlides } from "../../constants/index"; // Importa la función
import { useToldosControls } from "../../constants/levaControls";
import { IconoProducto } from "../../constants/svg"; // Importa el componente

import CasaProductos from "../../components/Toldos/CasaProductos";

import { useIdioma } from "../../contexts/IdiomaContext"; // Usa el contexto de idioma

import "./Products.css";
import BotonSubrayado from "../../components/BotonSubrayado";

const Products = () => {
  const { idioma } = useIdioma(); // Obtén el idioma y la función para cambiarlo
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
    DirectionalLightPosX,
    DirectionalLightPosY,
    DirectionalLightPosZ,
    CasaPosX,
    CasaPosY,
    CasaPosZ,
    CasaRotationX,
    CasaRotationY,
    CasaRotationZ,
  } = useToldosControls();

  return (
    <section className="products" id="products">
      <div className="productos-contenedor">
        {/* Izquierda: Slider de descripciones */}
        <div className="productos-slider">
          <div className="titulo">
            <IconoProducto />
            <h1>{idioma === "es" ? "NUESTROS PRODUCTOS" : "OUR PRODUCTS"}</h1>
          </div>
          <div className="descripciones-toldo">
            <div className="productos-slide">
              <h1>{slides[currentIndex].title}</h1>
              <div className="parrafo">
                <p>{slides[currentIndex].description}</p>
              </div>
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
        </div>
        <div className="grid-derecha-canvas">
          <div className="productos-canvas">
            <Canvas
              style={{ height: "100%", width: "70%", cursor: "grab" }}
              shadows
            >
              <PerspectiveCamera
                makeDefault
                position={[CameraPosX, CameraPosY, CameraPosZ]}
                fov={CameraFov}
              />
              <ambientLight intensity={AmbientLightIntensity} />
              <directionalLight
                castShadow
                shadow-mapSize={[2048, 2048]}
                position={[
                  DirectionalLightPosX,
                  DirectionalLightPosY,
                  DirectionalLightPosZ,
                ]}
                intensity={4}
              />
              <Suspense fallback={<CanvasLoader />}>
                <group scale={0.5}>
                  <CasaProductos
                    position={[CasaPosX, CasaPosY, CasaPosZ]}
                    rotation={[CasaRotationX, CasaRotationY, CasaRotationZ]}
                    scale={1}
                  />
                  {slides[currentIndex].model}
                  <OrbitControls
                    makeDefault
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    maxDistance={10}
                    minDistance={5}
                    enablePan={true}
                    enableZoom={false}
                  />
                </group>
              </Suspense>
            </Canvas>
          </div>
          <div className="contenedor-presupuesto">
            <BotonSubrayado idioma={idioma} id="Products" className="saber-mas" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
