import { useState, useEffect } from "react";
import { getCookie, setCookie } from "./cookies.js";

export function useCookieConsent() {
  const [consent, setConsent] = useState({
    necesarias: true, // Siempre true, no se puede rechazar
    preferencias: false, // Pendiente hasta que el usuario acepte
  });

  useEffect(() => {
    const consentCookie = getCookie("cookie-consent");
    if (consentCookie) {
      setConsent(JSON.parse(consentCookie));
    }
  }, []);

  function acceptAll() {
    const newConsent = { necesarias: true, preferencias: true };
    setConsent(newConsent);
    setCookie("cookie-consent", JSON.stringify(newConsent), 365);
  }

  function acceptPreferencias(value) {
    const newConsent = { necesarias: true, preferencias: value };
    setConsent(newConsent);
    setCookie("cookie-consent", JSON.stringify(newConsent), 365);
  }

  return { consent, acceptAll, acceptPreferencias };
}
