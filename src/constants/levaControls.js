// levaControls.js
import { useControls } from "leva";

export const useNombreControls = () => {
  return useControls("NombreLeva", {
    NombrePosX: { value: 0, step: 0.05, min: -10, max: 10 },
    NombrePosY: { value: 0, step: 0.05, min: -10, max: 10 },
    NombrePosZ: { value: 0, step: 0.05, min: -10, max: 10 },
  }, {collapsed:true});
};

export const useCasaHomeControls = () => ({
  // Para la cámara
  CameraPosX: 20,
  CameraPosY: 6.2,
  CameraPosZ: 12.8,
  CameraFov: 45,

  // Para la luz direccional
  DirectionalLightPosX: 20,
  DirectionalLightPosY: 30,
  DirectionalLightPosZ: 10,

  // Para la Casa
  CasaPosX: 1,
  CasaPosY: -1.05,
  CasaPosZ: 0.05,
  CasaRotationX: 0,
  CasaRotationY: 0,
  CasaRotationZ: 0,
});

export const useToldosControls = () => {
  return useControls("NombreLeva", {
    // Para la cámara
    CameraPosX: { value: 0, step: 0.05, min: -10, max: 10 },
    CameraPosY: { value: 1.50, step: 0.05, min: -10, max: 10 },
    CameraPosZ:{ value: 10, step: 0.05, min: -10, max: 10 },
    CameraFov: 45,

    // Para la luz ambiental
    AmbientLightIntensity: 1,

    // Para la luz direccional
    DirectionalLightPosX: { value: -4.2, step: 0.05, min: -10, max: 10 },
    DirectionalLightPosY: { value: 24.4, step: 0.05, min: -10, max: 10 },
    DirectionalLightPosZ: { value: 6.2, step: 0.05, min: -10, max: 10 },
    DirectionalLightIntensity: { value: 1.8, step: 0.05, min: -10, max: 10 },

    // Para la Casa
    CasaPosX: { value: 0, step: 0.05, min: -10, max: 10 },
    CasaPosY: { value: -1.30, step: 0.05, min: -10, max: 10 },
    CasaPosZ: { value: 0, step: 0.05, min: -10, max: 10 },
    CasaRotationX: { value: 0, step: 0.05, min: -10, max: 10 },
    CasaRotationY: { value: -1.50, step: 0.05, min: -10, max: 10 },
    CasaRotationZ: { value: 0, step: 0.05, min: -10, max: 10 },
  }, {collapsed:true});
};
