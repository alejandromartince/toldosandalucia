import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { useCasaHomeControls } from "../../constants/levaControls";
import CasaHome from "../../components/Toldos/CasaHome";
import CanvasLoader from "../../components/CanvasLoader";
import { useIdioma } from "../../contexts/IdiomaContext";

import "./Home.css";

const LimitarPan = ({ controlsRef }) => {
  useFrame(() => {
    if (controlsRef.current) {
      const { target } = controlsRef.current;

      // Límites del pan en X, Y y Z
      const minPan = [-1, -0.5, -1]; // [minX, minY, minZ]
      const maxPan = [1, 0.5, 1]; // [maxX, maxY, maxZ]

      target.x = Math.max(minPan[0], Math.min(maxPan[0], target.x));
      target.y = Math.max(minPan[1], Math.min(maxPan[1], target.y));
      target.z = Math.max(minPan[2], Math.min(maxPan[2], target.z));
    }
  });

  return null;
};

const Home = () => {
  const { idioma } = useIdioma();
  const controlsRef = useRef(); // Referencia para los controles

  const {
    CameraPosX,
    CameraPosY,
    CameraPosZ,
    CameraFov,
    DirectionalLightPosX,
    DirectionalLightPosY,
    DirectionalLightPosZ,
    CasaPosX,
    CasaPosY,
    CasaPosZ,
    CasaRotationX,
    CasaRotationY,
    CasaRotationZ,
  } = useCasaHomeControls();

  return (
    <section className="home" id="home">
      <div className="grid">
        <div className="contenido3d">
          <div className="casa">
            <Canvas shadows style={{ width: "100%", height: "100%" }}>
              <PerspectiveCamera
                makeDefault
                position={[CameraPosX, CameraPosY, CameraPosZ]}
                fov={CameraFov}
              />

              {/* Luz ambiental tenue para no eliminar el contraste */}
              <ambientLight intensity={0.6} />

              {/* Luz direccional principal (lanza sombras) */}
              <directionalLight
                castShadow
                position={[
                  DirectionalLightPosX,
                  DirectionalLightPosY,
                  DirectionalLightPosZ,
                ]} // Iluminación desde arriba a la derecha
                intensity={4}
                shadow-mapSize={[2048, 2048]} // Mayor resolución de sombras
              />

              {/* Luz direccional de relleno para suavizar sombras muy duras */}
              <directionalLight position={[-10, 15, -10]} intensity={1.5} />

              <Suspense fallback={<CanvasLoader />}>
                <group scale={.7}>
                  {/* Modelo con sombra */}
                  <CasaHome
                    castShadow
                    scale={1}
                    position={[CasaPosX, CasaPosY, CasaPosZ]}
                    rotation={[CasaRotationX, CasaRotationY, CasaRotationZ]}
                    
                  />

                  <OrbitControls
                    ref={controlsRef}
                    makeDefault
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    maxDistance={20}
                    minDistance={5}
                    enablePan={true}
                    autoRotate
                    autoRotateSpeed={1.3}
                  />
                  <LimitarPan controlsRef={controlsRef} />
                </group>
              </Suspense>
            </Canvas>
          </div>
          <div className="contenedor-presupuesto">
            <a
              className="presupuesto"
              data-action="open"
              data-phone="34679847618"
              data-message=""
              role="button"
              tabIndex="0"
              target="_blank"
              href="https://web.whatsapp.com/send?phone=34679847618&text="
              style={{ textDecoration: "none" }}
              data-text={
                idioma === "es" ? "Realizar presupuesto" : "Make a quote"
              }
            >
              {idioma === "es" ? "Realizar presupuesto" : "Make a quote"}
            </a>
          </div>
        </div>
        <div className="informacion">
          <div className="texto">
            <h1>{idioma === "es" ? "¿QUIÉNES SOMOS?" : "WHO ARE WE?"}</h1>
            <p>
              {idioma === "es"
                ? "Somos una empresa especializada en la instalación de toldos en Málaga, comprometidos en ofrecer soluciones efectivas para proteger tu hogar del sol y las lluvias. Con más de 25 años de experiencia, diseñamos e instalamos toldos a medida que no solo brindan una protección duradera, sino que también aportan estilo y funcionalidad a tu espacio. Nuestra misión es ofrecerte el mejor servicio con productos de alta calidad, adaptados a tus necesidades y con un toque de diseño único."
                : "We are a company specialized in the installation of awnings in Málaga, committed to offering effective solutions to protect your home from the sun and rain. With more than 25 years of experience, we design and install custom awnings that not only provide lasting protection, but also add style and functionality to your space. Our mission is to offer you the best service with high-quality products, adapted to your needs and with a unique design touch."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
