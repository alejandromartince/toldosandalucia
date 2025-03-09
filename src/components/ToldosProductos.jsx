import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

//Importamos los componentes
import CanvasLoader from "../components/CanvasLoader";
import Capota from "../objects/Toldos/capota";

const ToldosProductos = () => {
  return (
    <div className="model-proyecto-container">
      <Canvas className="model-productos" shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 0]} fov={50} />
        <ambientLight intensity={1} />
        <directionalLight
          position={[-10, 15, -10]}
          intensity={4}
          shadow-mapSize={[2048, 2048]}
          castShadow
        />
        <Suspense fallback={<CanvasLoader />}>
          <Capota />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ToldosProductos;
