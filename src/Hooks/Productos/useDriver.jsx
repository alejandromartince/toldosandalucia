// Importamos React y hooks necesarios
import { useEffect, useState } from "react";

// Importamos los hooks para manejar el scroll y saber la sección activa
import { secciones } from "../../constants/infoNavbar.js";
import { useScrollEffect } from "../Navbar/useScrollEffect.js";
import { getCookie, setCookie } from "../../utils/cookies/cookies.js";

// Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

// Importamos el driver.js
import { DriverProductos } from "./Driver";

export const useDriverProductos = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { idioma } = useIdioma();

  useScrollEffect(secciones, setActiveSection);

  useEffect(() => {
    const tourYaVistoCookie = getCookie("driver-products");
    const tourYaVistoSession = sessionStorage.getItem(
      "driver-products-session"
    );
    const cookieConsent = getCookie("cookie-consent");
    const preferenciasAceptadas = cookieConsent
      ? JSON.parse(cookieConsent).preferencias
      : false;

    if (activeSection === "products") {
      // Si se aceptan preferencias y ya vio tutorial en cookie => no mostrar
      if (preferenciasAceptadas && tourYaVistoCookie) return;

      // Si NO se aceptan preferencias y ya vio tutorial en session => no mostrar
      if (!preferenciasAceptadas && tourYaVistoSession) return;

      // Mostrar tutorial
      setTimeout(() => {
        DriverProductos(idioma);

        if (preferenciasAceptadas) {
          setCookie("driver-products", "true", 365);
        } else {
          sessionStorage.setItem("driver-products-session", "true");
        }
      }, 0);
    }
  }, [activeSection, idioma]);

  return { activeSection };
};
