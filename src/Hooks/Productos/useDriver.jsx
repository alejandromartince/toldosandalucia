import { useEffect, useState, useCallback } from "react";
import { secciones } from "../../constants/infoNavbar.js";
import { useScrollEffect } from "../Navbar/useScrollEffect.js";
import { getCookie, setCookie } from "../../utils/cookies/cookies.js";
import { useIdioma } from "../../Hooks/General/useIdioma.js";
import { DriverProductos } from "./Driver";

export const useDriverProductos = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { idioma } = useIdioma();

  useScrollEffect(secciones, setActiveSection);

  const runDriver = useCallback((force = false) => {
    const tourYaVistoCookie = getCookie("driver-products");
    const tourYaVistoSession = sessionStorage.getItem("driver-products-session");
    const cookieConsent = getCookie("cookie-consent");
    const preferenciasAceptadas = cookieConsent ? JSON.parse(cookieConsent).preferencias : false;

    if (!force) {
      if (preferenciasAceptadas && tourYaVistoCookie) return;
      if (!preferenciasAceptadas && tourYaVistoSession) return;
    }

    DriverProductos(idioma);

    if (preferenciasAceptadas) {
      setCookie("driver-products", "true", 365);
    } else {
      sessionStorage.setItem("driver-products-session", "true");
    }
  }, [idioma]);

  useEffect(() => {
    if (activeSection === "products") {
      runDriver();
    }
  }, [activeSection, runDriver]);

  return { activeSection, runDriver };
};
