import { Suspense, lazy, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

// Info de productos
import { infoProductos } from "../constants/infoProductos.jsx";

// Componentes
import PantallaCargaProductos from "../components/General/PantallaCargaProductos";

// Hooks
import useTipoDispositivo from "../Hooks/useTipoDispositivo.js";
import { preloadModelos } from "../Hooks/Productos/preloadModelos.js";

// Lazy load de modelos (todos usan DRACO)
const modelosMap = {
  1: lazy(() => import("../components/Objetos 3D/Toldos/Toldo.jsx")),
  2: lazy(() => import("../components/Objetos 3D/Toldos/Cofre.jsx")),
  3: lazy(() => import("../components/Objetos 3D/Toldos/Veranda.jsx")),
  4: lazy(() => import("../components/Objetos 3D/Toldos/Capota.jsx")),
  5: lazy(() => import("../components/Objetos 3D/Toldos/Pergola.jsx")),
  6: lazy(() => import("../components/Objetos 3D/Toldos/Store1.jsx")),
  7: lazy(() => import("../components/Objetos 3D/Toldos/Store2.jsx")),
  9: lazy(() => import("../components/Objetos 3D/Toldos/Vela.jsx")),
};

const ToldosProductos = ({ id }) => {
  // Precargar modelos al entrar en la página
  useEffect(() => {
    preloadModelos();
  }, []);

  const dispositivo = useTipoDispositivo();
  const producto = infoProductos.find((item) => item.id === id);

  if (!producto) return <div>Producto no encontrado</div>;

  const { position, rotation, escala, escalaMovil, positionMovil } = producto;
  const Modelo = modelosMap[producto.id] || null;

  return (
    <div className="model-proyecto-container">
      <Canvas className="model-productos" shadows style={{ width: "100%" }}>
        {/* Cámara */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

        {/* Luces */}
        <ambientLight intensity={1} />
        <directionalLight
          position={[0, 10, 2]}
          intensity={2}
          shadow-mapSize={[2048, 2048]}
          castShadow
        />

        {/* Suspense para lazy load */}
        <Suspense fallback={<PantallaCargaProductos />}>
          {Modelo && (
            <Modelo
              position={dispositivo !== "movil" ? position : positionMovil}
              rotation={rotation}
              scale={dispositivo !== "movil" ? escala : escalaMovil}
            />
          )}
        </Suspense>

        {/* Controles */}
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
