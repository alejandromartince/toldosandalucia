import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../../components/CanvasLoader";
import CasaHome from "../../components/CasaHome";

import { useIdioma } from "../../contexts/IdiomaContext";

import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma(); // Obtener el valor del idioma

  return (
    <section className="inicio">
      <div className="contenido-principal">
        <div className="contenido-descripcion">
          <div className="descripcion">
            <h1>
              {idioma === "es"
                ? "EMPRESA DE INSTALACIÓN DE TOLDOS EN MÁLAGA"
                : "AWNING INSTALLATION COMPANY IN MALAGA"}
            </h1>
            <p>
              {idioma === "es"
                ? "Es crucial elegir el servicio adecuado que se adapte a tus necesidades específicas. Los profesionales en la instalación de toldos no solo deben ser expertos en su trabajo, sino que también deben comprender tus deseos y expectativas de manera precisa, es por ello que en Toldos Andalucía contamos con los profesionales más cualificados para satisfacer todas tus necesidades."
                : "It is crucial to choose the right service that suits your specific needs. Professionals in the installation of awnings must not only be experts in their work, but they must also understand your wishes and expectations precisely, which is why at Toldos Andalucía we have the most qualified professionals to meet all your needs."}
            </p>
          </div>
        </div>

        <div className="contenido3d">
          <img
            src="/assets/Logo/Logo_Transparent.png"
            alt="Logo"
            className="logo-inicio"
          />
          <Canvas style={{ width: "100%", height: "100%" }}>
            <PerspectiveCamera makeDefault position={[0, 20, 70]} fov={45} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 30, 10]} intensity={2} />
            <Suspense fallback={<CanvasLoader />}>
              <CasaHome scale={5} position={[6, 0, 0]} rotation={[0, 2, 0]} />
            </Suspense>
            <OrbitControls enableRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Home;
