import React from "react";
import { useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// Configurar DRACOLoader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/"); // Ruta pública donde tienes los archivos draco
useGLTF.loader = dracoLoader;

const Cofre = (props) => {
  // Cargar el modelo comprimido con DRACO
  const { nodes, materials } = useGLTF("/models/cofre-draco.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.004, 0.004, 0.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2001.geometry}
          material={materials.Aluminum}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2002.geometry}
          material={materials.Steel_Brushed_Stainless}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2003.geometry}
          material={materials.Aluminum_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2004.geometry}
          material={materials.Metal_Steel_Textured}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2006.geometry}
          material={materials.material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2008.geometry}
          material={materials["0006_Pink"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2009.geometry}
          material={materials.Metal_Rusted}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2010.geometry}
          material={materials.Color_E04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2011.geometry}
          material={materials.Metal_Rusted_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2012.geometry}
          material={materials.material_14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3001.geometry}
          material={materials.Metal_Steel_Textured_3}
        />
      </group>
    </group>
  );
};

// Pre-cargar el modelo comprimido
useGLTF.preload("/models/cofre-draco.glb");

export default Cofre;
