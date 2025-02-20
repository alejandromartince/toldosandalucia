// levaControls.js
import { useControls } from "leva";

export const useNombreControls = () => {
  return useControls("NombreLeva", {
    NombrePosX: { value: 0, step: 0.05, min: -10, max: 10 },
    NombrePosY: { value: 0, step: 0.05, min: -10, max: 10 },
    NombrePosZ: { value: 0, step: 0.05, min: -10, max: 10 },
  });
};

export const useCasaHomeControls = () => ({
  // Para la cámara
  CameraPosX: 30.85,
  CameraPosY: 6.2,
  CameraPosZ: 12.8,
  CameraFov: 45,

  // Para la luz ambiental
  AmbientLightIntensity: 1,

  // Para la luz direccional
  DirectionalLightPosX: -4.2,
  DirectionalLightPosY: 24.4,
  DirectionalLightPosZ: 6.2,
  DirectionalLightIntensity: 1.8,

  // Para la Casa
  CasaPosX: 0,
  CasaPosY: -1.05,
  CasaPosZ: 0.05,
  CasaRotationX: 0.0,
  CasaRotationY: 0,
  CasaRotationZ: 0,
});

export const useToldosControls = () => ({
  // Para la cámara
  CameraPosX: 30.85,
  CameraPosY: 6.2,
  CameraPosZ: 12.8,
  CameraFov: 45,

  // Para la luz ambiental
  AmbientLightIntensity: 1,

  // Para la luz direccional
  DirectionalLightPosX: -4.2,
  DirectionalLightPosY: 24.4,
  DirectionalLightPosZ: 6.2,
  DirectionalLightIntensity: 1.8,
});