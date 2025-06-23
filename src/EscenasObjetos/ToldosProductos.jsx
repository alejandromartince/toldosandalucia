import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

//Importamos los hooks
import { lazyModelbyName } from "../Hooks/Productos/lazyLoader";

//Importamos la pantalla de carga para cuando se cargan los productos
import PantallaCargaProductos from "../components/General/PantallaCargaProductos";


const ToldosProductos = ({ productoActual }) => {
  const { nombre, escala, position, rotation } = productoActual;
  const Modelo = lazyModelbyName(nombre);

  return (
    <div className="model-proyecto-container">
      <Canvas className="model-productos" shadows style={{ width: "100%" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={1} />
        <directionalLight
          position={[0, 10, 2]}
          intensity={2}
          shadow-mapSize={[2048, 2048]}
          castShadow
        />
        <Suspense fallback={<PantallaCargaProductos />}>
          <Modelo
            scale={escala}
            position={position}
            rotation={rotation || [0, 0, 0]}
          />
        </Suspense>
        <OrbitControls
          enablePan={false}
          autoRotate
          rotateSpeed={0.5}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default ToldosProductos;