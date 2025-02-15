import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import { IoIosConstruct } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { GiFactoryArm } from "react-icons/gi";

import CanvasLoader from "../../components/CanvasLoader";
import CasaHome from "../../components/CasaHome";

import { useIdioma } from "../../contexts/IdiomaContext";
import { useCasaHomeControls } from "../../constants/levaControls";

import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma(); // Obtener el valor del idioma

  const {
    CameraPosX,
    CameraPosY,
    CameraPosZ,
    CameraFov,
    AmbientLightIntensity,
    DirectionalLightPosX,
    DirectionalLightPosY,
    DirectionalLightPosZ,
    DirectionalLightIntensity,
    CasaPosX,
    CasaPosY,
    CasaPosZ,
    CasaRotationX,
    CasaRotationY,
    CasaRotationZ,
  } = useCasaHomeControls();

  return (
    <section className="inicio">
      {/* IZQUIERDA: Imagen + Canvas */}
      <div className="contenido-visual">
        <div className="contenido3d">
          <Canvas style={{ width: "100%", height: "100%" }}>
            <PerspectiveCamera
              makeDefault
              position={[CameraPosX, CameraPosY, CameraPosZ]}
              fov={CameraFov}
            />
            <ambientLight intensity={AmbientLightIntensity} />
            <directionalLight
              position={[
                DirectionalLightPosX,
                DirectionalLightPosY,
                DirectionalLightPosZ,
              ]}
              intensity={DirectionalLightIntensity}
            />
            <Suspense fallback={<CanvasLoader />}>
              <group scale={0.8}>
                <CasaHome
                  scale={0.5}
                  position={[CasaPosX, CasaPosY, CasaPosZ]}
                  rotation={[CasaRotationX, CasaRotationY, CasaRotationZ]}
                />
                <OrbitControls
                  enableRotate={true}
                  maxPolarAngle={Math.PI / 2}
                  autoRotate
                  maxDistance={15}
                  minDistance={5}
                />
              </group>
            </Suspense>
          </Canvas>
        </div>
        
      </div>

      {/* DERECHA: Descripción + Beneficios + Presupuesto */}
      <div className="contenido-texto">
        <div className="contenedor-logo">
          <img
            src="/assets/Logo/Logo_Transparent.png"
            alt="Logo"
            className="logo-inicio"
          />
        </div>
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

        <div className="beneficios">
          <h1>
            {idioma === "es"
              ? "BENEFICIOS DE TRABAJAR CON NOSOTROS"
              : "BENEFITS OF WORKING WITH US"}
          </h1>
          <div>
            <ul className="beneficios-lista">
              <li className="item-lista">
                <MdDesignServices size={40} />
                {idioma === "es" ? (
                  <>
                    <b>Diseño de toldos</b> Diseñamos a medida toldos manuales,
                    automatizados y domótica; rotulamos todo tipo de toldos.
                  </>
                ) : (
                  <>
                    <b>Designing awnings</b> We design manual, automated and
                    domotic awnings; we label all types of awnings.
                  </>
                )}
              </li>

              <li className="item-lista">
                <GiFactoryArm size={40} />

                {idioma === "es" ? (
                  <>
                    <b>Fabricación de toldos</b> Trabajamos con más de 500
                    colores en lonas del tipo acrílicas, técnicas, ignífugas e
                    impermeables. Taller propio de costura con equipos de última
                    generación, diseñando cada toldo a medida.
                  </>
                ) : (
                  <>
                    <b>Manufacturing of awnings</b> We work with more than 500
                    colors in acrylic, technical, ignifugous, and impermeable
                    fabrics. Our own sewing workshop with the latest generation
                    equipment, designing each awning to measure.
                  </>
                )}
              </li>

              <li className="item-lista">
                <IoIosConstruct size={40} />
                {idioma === "es" ? (
                  <>
                    <b>Instalación de toldos</b> Tenemos el personal idóneo para
                    la instalación de toldos en todo tipo de construcción.
                  </>
                ) : (
                  <>
                    <b>Awnings installation</b> We have the ideal staff to
                    install awnings in any type of construction.
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="contenedor-presupuesto">
          <a href="/" className="presupuesto">
            Realizar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
