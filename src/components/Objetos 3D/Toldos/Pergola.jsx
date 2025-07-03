import { useGLTF } from '@react-three/drei'


const Pergola = (props) => {

  
  
  const { nodes, materials } = useGLTF('/models/pergola.glb')
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.022}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2.geometry}
          material={materials['0056_Yellow']}
          scale={[1, 0.543, 1]}
          />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2001.geometry}
          material={materials.Color_M03}
          scale={[1, 0.543, 1]}
          />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2002.geometry}
          material={materials.auto_1}
          />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2003.geometry}
          material={materials.auto_4}
          />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3.geometry}
          material={materials.GDLM2_5011_1}
          scale={[1, 0.543, 1]}
          />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3001.geometry}
          material={materials.GDLM1___________1}
          scale={[1, 0.543, 1]}
          />
      </group>
    </group>
  )
}

useGLTF.preload('/models/pergola.glb')
export default Pergola
