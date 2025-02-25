import React from "react";

import { TfiRulerPencil } from "react-icons/tfi";
import { GiFactoryArm } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

import { useIdioma } from "../../contexts/IdiomaContext";

import "./Beneficios.css";

const Beneficios = () => {
  const { idioma } = useIdioma();

  return (
    <section className="beneficios">
      <h1>
        {idioma === "es"
          ? "BENEFICIOS DE TRABAJAR CON NOSOTROS"
          : "BENEFITS OF WORKING WITH US"}
      </h1>
      <div className="beneficios-descripcion">
        <div className="beneficio-item">
          <TfiRulerPencil size={60} />
          <p>
            {idioma === "es"
              ? "Diseñamos e instalamos toldos a medida, tanto manuales como automatizados, integrando soluciones de domótica. Además, ofrecemos el servicio de rotulación para todo tipo de toldos."
              : "We design and install custom-made awnings, both manual and automated, integrating smart home solutions. Additionally, we offer lettering services for all types of awnings."}
          </p>
        </div>
        <div className="beneficio-item">
          <GiFactoryArm size={60} />
          <p>
            {idioma === "es"
              ? "Trabajamos con más de 500 colores en lonas del tipo acrílicas, técnicas, ignífugas e impermeables. Disponemos de un taller propio de costura con equipos de última generación, diseñando cada toldo a medida."
              : "We work with over 500 colors in fabrics such as acrylics, technical fabrics, fire-resistant, and waterproof materials. We have our own sewing workshop with state-of-the-art equipment, designing each awning to measure."}
          </p>
        </div>
        <div className="beneficio-item">
          <GrUserWorker size={60} />
          <p>
            {idioma === "es"
              ? "Contamos con un equipo altamente cualificado para la instalación de toldos en todo tipo de construcciones, garantizando un trabajo profesional y adaptado a las necesidades de cada proyecto."
              : "We have a highly qualified team for the installation of awnings in all types of construction, guaranteeing a professional job and adapted to the needs of each project."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
