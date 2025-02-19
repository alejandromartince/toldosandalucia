// levaControls.js
import { useControls } from "leva";

export const useCasaHomeControls = () => {
  return useControls("Escena", {
    // Para la cámara
    CameraPosX: { value: 30.85, step: 0.05, min: -10, max: 50 },
    CameraPosY: { value: 6.20, step: 0.05, min: -10, max: 50 },
    CameraPosZ: { value: 12.80, step: 0.05, min: -10, max: 50 },
    CameraFov: { value: 45, step: 1, min: 10, max: 100 },

    // Para la luz ambiental
    AmbientLightIntensity: { value: 1, step: 0.1, min: 0, max: 10 },

    // Para la luz direccional
    DirectionalLightPosX: { value: -4.20, step: 0.05, min: -20, max: 20 },
    DirectionalLightPosY: { value: 24.40, step: 0.05, min: -50, max: 50 },
    DirectionalLightPosZ: { value: 6.20, step: 0.05, min: -20, max: 20 },
    DirectionalLightIntensity: { value: 1.8, step: 0.1, min: 0, max: 10 },

    // Para la Casa
    CasaPosX: { value: 0, step: 0.05, min: -10, max: 10 },
    CasaPosY: { value: -1.05, step: 0.05, min: -10, max: 10 },
    CasaPosZ: { value: 0.05, step: 0.05, min: -10, max: 10 },
    CasaRotationX: { value: 0.0, step: 0.1, min: -3.14, max: 3.14 },
    CasaRotationY: { value: 0, step: 0.1, min: -3.14, max: 3.14 },
    CasaRotationZ: { value: 0, step: 0.1, min: -3.14, max: 3.14 },
  }, { collapsed: true });
};
