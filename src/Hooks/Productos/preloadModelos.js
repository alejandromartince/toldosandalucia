import { useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

// Configurar DRACO para el preload
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')
useGLTF.loader = dracoLoader

export function preloadModelos() {
  // Precargar todos los modelos comprimidos
  useGLTF.preload('/models/toldo-draco.glb')
  useGLTF.preload('/models/cofre-draco.glb')
  useGLTF.preload('/models/veranda-draco.glb')
  useGLTF.preload('/models/capota-draco.glb')
  useGLTF.preload('/models/pergola-draco.glb')
}
