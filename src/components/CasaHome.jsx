import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ModelHome from "../objects/ModelHome";

const CasaHome = () => {
    return (
        <div className="model-home-container">
        <Canvas
          camera={{ position: [3, 2, 5], fov: 50 }}
          className="model-home"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <ModelHome />
          <OrbitControls />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    );
  };
  
  export default CasaHome;