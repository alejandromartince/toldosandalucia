import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import PantallaCargaProductos from "../components/General/PantallaCargaProductos";
import useTipoDispositivo from "../Hooks/useTipoDispositivo.js";
import { infoProductos } from "../constants/infoProductos.jsx";

const ToldosProductos = ({ id }) => {
  const dispositivo = useTipoDispositivo();
  const producto = infoProductos.find((item) => item.id === id);

  if (!producto) return <div>Producto no encontrado</div>;

  const {
    position,
    rotation,
    escala,
    escalaMovil,
    positionMovil,
  } = producto;

  let Modelo;

  switch (producto.id) {
    case 1:
      Modelo = lazy(() => import("../components/Objetos 3D/Toldos/Toldo.jsx"));
      break;
    case 2:
      Modelo = lazy(() => import("../components/Objetos 3D/Toldos/Cofre.jsx"));
      break;
    case 3:
      Modelo = lazy(() => import("../components/Objetos 3D/Toldos/Veranda.jsx"));
      break;
    case 4:
      Modelo = lazy(() => import("../components/Objetos 3D/Toldos/Capota.jsx"));
      break;
    case 5:
      Modelo = lazy(() => import("../components/Objetos 3D/Toldos/Pergola.jsx"));
      break;
    default:
      Modelo = null;
  }

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
          {Modelo ? (
            <Modelo
              position={dispositivo !== "movil" ? position : positionMovil}
              rotation={rotation}
              scale={dispositivo !== "movil" ? escala : escalaMovil}
            />
          ) : (
            <div>Modelo no disponible</div>
          )}
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
