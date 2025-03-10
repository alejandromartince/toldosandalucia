import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

//Importamos la informacion
import  infoProductos  from "../constants/infoProductos";

//Importamos los componentes
import CanvasLoader from "../components/CanvasLoader";
import Terraza from "../objects/Toldos/Terraza";

const ToldosProductos = () => {
  return (
    <div className="model-proyecto-container">
      <Canvas className="model-productos" shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={1} />
        <directionalLight
          position={[0, 10, 2]}
          intensity={2}
          shadow-mapSize={[2048, 2048]}
          castShadow
        />
        <Suspense fallback={<CanvasLoader />}>
        
          {infoProductos(1).producto}
        </Suspense>
        <OrbitControls enablePan={false} autoRotate rotateSpeed={0.5} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ToldosProductos;