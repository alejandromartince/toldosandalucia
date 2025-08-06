import React from 'react'
import { useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

// Crear el DRACOLoader y configurar la ruta donde están los decoders
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/') // ruta pública con los archivos draco

// Decirle a useGLTF que use el dracoLoader para cargar modelos comprimidos
useGLTF.loader = dracoLoader

const Capota = (props) => {
  // Cargar el modelo comprimido con draco
  const { nodes, materials } = useGLTF('/models/capota-draco.glb')

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

// Pre-cargar el modelo comprimido para mejor experiencia
useGLTF.preload('/models/capota-draco.glb')

export default Capota
