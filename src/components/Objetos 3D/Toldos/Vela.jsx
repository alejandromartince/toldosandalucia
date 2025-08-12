import { useGLTF } from '@react-three/drei'

const Vela = (props) => {
  const { nodes, materials } = useGLTF('/models/vela-draco.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.337, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2036.geometry}
          material={materials.Metal_Rusted}
          position={[0, 0, -80.019]}
          scale={[1, 1, 1.586]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2037.geometry}
          material={materials.Metal_Rusted}
          position={[0, 0, -80.019]}
          scale={[1, 1, 1.586]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2039.geometry}
          material={materials.Color_A03}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/vela-draco.glb')
export default Vela;