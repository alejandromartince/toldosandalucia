import { useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

// Configuración del loader DRACO
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')
useGLTF.loader = dracoLoader

const Terraza = (props) => {
  const { nodes, materials } = useGLTF('/models/terraza-draco.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Awning_Awning_0.geometry}
        material={materials.Awning}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
    </group>
  )
}

// Precarga del modelo DRACO
useGLTF.preload('/models/terraza-draco.glb')

export default Terraza
