import { useGLTF } from '@react-three/drei'

const Store2 = (props) => {
  const { nodes, materials } = useGLTF('/models/store-2-draco.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.001, 0.01, 0.011]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Blinds}
            position={[-294.612, 164.329, -199.939]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/store-2-draco.glb')
export default Store2;
