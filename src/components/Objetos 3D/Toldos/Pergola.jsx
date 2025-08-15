import { useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// Configuración de DRACO
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
useGLTF.loader = dracoLoader;

const Pergola = (props) => {
  const { nodes, materials } = useGLTF("/models/pergola-draco.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2.geometry}
          material={materials.Metal_Seamed_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2002.geometry}
          material={materials.Metal_Embossed}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2003.geometry}
          material={materials.Translucent_Glass_Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3.geometry}
          material={materials.Color_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3001.geometry}
          material={materials.Wood_Veneer_02_1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche.geometry}
        material={materials['Material.001']}
        position={[0.427, 1.121, -0.245]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.323, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche001.geometry}
        material={materials['Material.002']}
        position={[0.427, 1.121, 0.154]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.323, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche002.geometry}
        material={materials['Material.005']}
        position={[0.427, 1.121, 0.549]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.323, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche003.geometry}
        material={materials['Material.003']}
        position={[0.427, 1.121, 0.943]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.323, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche004.geometry}
        material={materials['Material.007']}
        position={[0.43, 1.142, -0.048]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.357, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche005.geometry}
        material={materials['Material.006']}
        position={[0.43, 1.142, 0.351]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.357, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche006.geometry}
        material={materials['Material.004']}
        position={[0.43, 1.142, 0.74]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.357, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche007.geometry}
        material={materials['Material.008']}
        position={[0.43, 1.142, -0.446]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.357, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche008.geometry}
        material={materials['Material.011']}
        position={[0.43, 1.142, -0.734]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.357, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche009.geometry}
        material={materials['Material.010']}
        position={[0.43, 1.142, -0.639]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.357, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sup_parche010.geometry}
        material={materials['Material.009']}
        position={[0.43, 1.142, -0.546]}
        rotation={[3.129, 0.001, 0.01]}
        scale={[1.18, 0.357, 0.101]}
      />
    </group>
  )
};

// Precarga del modelo DRACO
useGLTF.preload("/models/pergola-draco.glb");

export default Pergola;
