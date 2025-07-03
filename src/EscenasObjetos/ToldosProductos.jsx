import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

//Importamos los hooks/componentes de carga para cuando se cargan los productos
import PantallaCargaProductos from "../components/General/PantallaCargaProductos";

//Importamos el hook de dispositivo
import useTipoDispositivo from "../Hooks/useTipoDispositivo.js";

//Importamos la informacion de los productos
import { infoProductos } from "../constants/infoProductos.jsx";

const ToldosProductos = ({ id }) => {

  const dispositivo = useTipoDispositivo(); // Obtenemos el tipo de dispositivo

  // Usamos useMemo para evitar recomputaciones innecesarias si el ID no cambia
  const producto = useMemo(() => infoProductos.find((item) => item.id === id), [id]);

  // Si no se encuentra el producto, mostramos un mensaje
  if (!producto) return <div>Producto no encontrado</div>;


  // Desestructuramos las propiedades del producto para que haya un por defecto si no se encuentra la propiedad
  const {
    modelo: Modelo,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    escala = 1,
    escalaMovil = 1,
    positionMovil = [0, 0, 0],
  } = producto;



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
          <Modelo position={dispositivo !== 'movil' ? position : positionMovil} rotation={rotation} scale={dispositivo !== 'movil' ? escala : escalaMovil}/>
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