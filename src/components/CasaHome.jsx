import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import ModelHome from "../objects/ModelHome";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const CasaHome = () => {
  return (
    <div className="model-home-container">
      <Canvas className="model-home" shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />

        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}          
        />

        <Suspense fallback={<CanvasLoader />}>
          <ModelHome castShadow receiveShadow />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default CasaHome;
