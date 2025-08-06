import { useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

// Configuración de DRACO para este modelo
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')
useGLTF.loader = dracoLoader

const Toldo = (props) => {
  const { nodes, materials } = useGLTF('/models/toldo-draco.glb')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Waterboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Hinges}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Metal}
        />
      </group>
    </group>
  )
}

// Precarga del modelo DRACO
useGLTF.preload('/models/toldo-draco.glb')

export default Toldo
