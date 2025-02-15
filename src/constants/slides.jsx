import React from "react";
import { FaLightbulb, FaTools } from "react-icons/fa";
import CasaHome from "../components/CasaHome";
import Toldo from "../components/Toldo";

export const getSlides = () => [
  {
    id: 1,
    title: "Diseño de toldos",
    description:
      "Diseñamos a medida toldos manuales, automatizados y domótica; rotulamos todo tipo de toldos.",
    icon: <FaLightbulb size={60} />,
    model: <CasaHome scale={1.2} position={[8, -6, 0]} />,
  },
  {
    id: 2,
    title: "Fabricación de toldos",
    description:
      "Trabajamos con más de 500 colores en lonas del tipo acrílicas, técnicas, ignífugas e impermeables.",
    icon: <img src='/assets/Imagenes/lapiz.svg' alt='diseño' className='imagenInfo' width={60} />,
    model: <Toldo scale={1.2} position={[8, -6, 0]} />, 
  },
  {
    id: 3,
    title: "Instalación de toldos",
    description:
      "Tenemos el personal idóneo para la instalación de toldos en todo tipo de construcción.",
    icon: <FaTools size={60} />,
    model: <CasaHome scale={1.2} position={[8, -6, 0]} />,
  },
];
