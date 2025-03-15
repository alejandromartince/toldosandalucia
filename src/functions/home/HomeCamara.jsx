import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

import { useModelHomeControls } from "../../constants/infoHome";
import useWindowSize from "../general/tamanoPantalla";

const HomeCamara = ({ children, sensitivity = 2 }) => {
  const { isMobile, isPantallaPequena, isTablet } = useWindowSize();

  const groupRef = useRef();
  const controls = useModelHomeControls();

  useFrame((state, delta) => {
    // Mueve la posición de la cámara suavemente
    easing.damp3(
      state.camera.position,
      [controls.cameraPosX, controls.cameraPosY, controls.cameraPosZ],
      1,
      delta
    );

    easing.dampE(
      groupRef.current.rotation,
      [-state.pointer.y / (sensitivity * 3), state.pointer.x / sensitivity, 0],
      0.25,
      delta
    );
  });

  return (
    <group
      ref={groupRef}
      scale={isTablet ? 0.7 : isPantallaPequena ? 0.7 : 0.9}
      position={
        isMobile
          ? [0, 0, 0]
          : isTablet
          ? [0, 1, 0]
          : isPantallaPequena
          ? [2.2, 0, 0]
          : [2.6, 0, 0]
      }
      rotateX={2}
    >
      {children}
    </group>
  );
};

export default HomeCamara;
