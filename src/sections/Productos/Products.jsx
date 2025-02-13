import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { FaLightbulb, FaTools } from "react-icons/fa";
import CanvasLoader from "../../components/CanvasLoader";
import Casa from "../../components/Casa";
import "./Products.css";

const Products = () => {
  return (
    <section className="productos">
      <div className="productos-contenedor">
        <div className="productos-texto">
          <h2 className="productos-titulo">Nuestros Productos</h2>
          <p className="productos-descripcion">
            Descubre nuestra selección de productos ecológicos y sostenibles.
          </p>
        </div>
        <div className="productos-lista">
          <Canvas style={{ height: "70vh", width: "100%" }}>
            <PerspectiveCamera makeDefault position={[0, 15, 50]} fov={45} />{" "}
            {/* ✅ Cámara más alejada */}
            <ambientLight intensity={1} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <Suspense fallback={<CanvasLoader />}>
              <Casa scale={1.2} position={[8, -6, 0]} />
            </Suspense>
            <OrbitControls enableRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>

      <div>
        <div className="informacion">
          <div>
            <FaLightbulb size={60} />
            <div>
              <h1>Diseño de toldos</h1>
              <p>
                Diseñamos a medida toldos manuales, automatizados y domótica;
                rotulamos todo tipo de toldos.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/Imagenes/lapiz.svg"
              alt="diseño"
              className="imagenInfo"
            />
            <div>
              <h1>Fabricación de toldos</h1>
              <p>
                Trabajamos con más de 500 colores en lonas del tipo acrílicas,
                técnicas, ignifugas e impermeables. Taller propio de costura con
                equipos de última generación, diseñando cada toldo a medida.
              </p>
            </div>
          </div>
          <div>
            <FaTools size={60} />
            <div>
              <h1>Instalación de toldos</h1>
              <p>
                Tenemos el personal idóneo para la instalación de toldos en todo
                tipo de construcción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
