import { useState, useEffect } from "react";
import { getCookie, setCookie } from "./cookies.js";

export function useCookieConsent() {
  const [consent, setConsent] = useState({
    necesarias: true,
    preferencias: null, // null = aún no decide
  });

  useEffect(() => {
    const consentCookie = getCookie("cookie-consent");
    if (consentCookie) {
      try {
        setConsent(JSON.parse(consentCookie));
      } catch {
        // Si hay un valor corrupto en la cookie, la ignoramos
        setConsent({ necesarias: true, preferencias: null });
      }
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
