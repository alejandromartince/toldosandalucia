import React, { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

//Importamos los componentes
import ModelHome from "../objects/ModelHome";
import CanvasLoader from "./CanvasLoader";

// Importa los controles de Leva
import { useModelHomeControls } from "../constants/infoHome"; // Asegúrate de que el archivo sea correcto
import HomeCamara from "../functions/home/HomeCamara";

//Importamos las funciones
import useWindowSize from "../functions/general/tamanoPantalla";

const CasaHome = () => {
  const controls = useModelHomeControls();
  const { isPantallaPequena, isMobile, isTablet } = useWindowSize();

  return (
    <div className="model-home-container">
      <Canvas className="model-home" shadows>
        <PerspectiveCamera
          makeDefault
          position={[
            controls.cameraPosX,
            controls.cameraPosY,
            controls.cameraPosZ,
          ]}
          fov={controls.cameraFov}
        />

        <ambientLight intensity={controls.ambientLightIntensity} />
        <directionalLight
          castShadow
          position={[
            controls.directionalLightPosX,
            controls.directionalLightPosY,
            controls.directionalLightPosZ,
          ]}
          intensity={controls.directionalLightIntensity}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          {/* Solo renderiza HomeCamara si la pantalla es mayor a 1600px */}
          <HomeCamara>
            <group scale={isMobile ? .6 : isTablet ? 0.8 : isPantallaPequena ? 0.8 : 0.6}>
              <ModelHome
                castShadow
                receiveShadow
                position={[
                  controls.modelHomePosX,
                  controls.modelHomePosY,
                  controls.modelHomePosZ,
                ]}
                rotation={
                  isMobile
                    ? [0, 0, 0]
                    : isTablet
                    ? [0, 0, 0]
                    : isPantallaPequena
                    ? [0, -.1, 0]
                    : [
                        controls.modelHomeRotX,
                        controls.modelHomeRotY,
                        controls.modelHomeRotZ,
                      ]
                }
                scale={0.5}
              />
            </group>
          </HomeCamara>
          )
        </Suspense>

        <OrbitControls
          target={[0, 1, 0]}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default CasaHome;
