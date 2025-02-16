import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { useCasaHomeControls } from "../../constants/levaControls";
import CasaHome from "../../components/CasaHome";
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
    AmbientLightIntensity,
    DirectionalLightPosX,
    DirectionalLightPosY,
    DirectionalLightPosZ,
    DirectionalLightIntensity,
    CasaPosX,
    CasaPosY,
    CasaPosZ,
    CasaRotationX,
    CasaRotationY,
    CasaRotationZ,
  } = useCasaHomeControls();

  return (
    <section className="inicio">
      <div className="grid">
        <div className="contenido3d">
          <div className="casa">
            <Canvas style={{ width: "100%", height: "100%" }}>
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
                  <CasaHome
                    castShadow
                    scale={0.9}
                    position={[CasaPosX, CasaPosY, CasaPosZ]}
                    rotation={[CasaRotationX, CasaRotationY, CasaRotationZ]}
                  />
                  <OrbitControls
                    ref={controlsRef}
                    makeDefault
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    maxDistance={15}
                    minDistance={5}
                    enablePan={true}
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
            >
              {idioma === "es" ? "Realizar presupuesto" : "Make a quote"}
            </a>
          </div>
        </div>
        <div className="informacion">
          <div className="texto">
            <h1>{idioma === "es" ? "Servicio de instalación de toldos en Málaga" : "Awnings installation service in Malaga"}</h1>
            <p>
              {idioma === "es"
                ? "Si estás buscando una forma efectiva de proteger tu hogar del sol abrasador o de las lluvias inesperadas en Málaga, los toldos pueden ser la solución perfecta. Los toldos no solo añaden un toque de estilo a tu hogar, sino que también ofrecen una protección invaluable contra los elementos."
                : "If you're looking for an effective way to protect your home from the scorching sun or unexpected rains in Málaga, awnings can be the perfect solution. Awnings not only add a touch of style to your home but also provide invaluable protection against the elements."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
