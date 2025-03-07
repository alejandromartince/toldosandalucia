import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

import { useModelHomeControls } from "../../constants/infoHome";

const HomeCamara = ({ children, sensitivity = 5 }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPantallaPequena, setIsPantallaPequena] = useState(false);

  console.log(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769); // Cambia el valor de isMobile en función de la ventana
      setIsPantallaPequena(window.innerWidth < 1600); // Cambia el valor de isPantallaPequena en función de la ventana
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

    // Si no es móvil, rota el grupo en función del puntero con sensibilidad ajustable
    if (isMobile === false) {
      if (groupRef.current) {
        easing.dampE(
          groupRef.current.rotation,
          [
            -state.pointer.y / (sensitivity * 3),
            state.pointer.x / sensitivity,
            0,
          ],
          0.25,
          delta
        );
      }
    }
  });

  return (
    <group
      ref={groupRef}
      scale={1}
      position={
        isMobile ? [0, 0, 0] : isPantallaPequena ? [2, 0, 0] : [3, 0, 0]
      }
      rotateX={2}
    >
      {children}
    </group>
  );
};

export default HomeCamara;