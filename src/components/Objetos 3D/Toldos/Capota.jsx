import { useGLTF } from '@react-three/drei'


const Capota = (props) => {
  const { nodes, materials } = useGLTF('/models/capota.glb')

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.012, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.006}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_001_1_Mat_0.geometry}
            material={materials.material}
            position={[0, 322.796, 0]}
            />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/capota.glb')
export default Capota
