import React, { useEffect, useState } from "react";

//Importamos el consentimiento de las cookies
import { useCookieConsent } from "../../utils/cookies/useCookiesConsent";

//Importamos el estilo
import "./banner.css";

export default function CookieBanner() {
  const { consent, acceptAll, acceptPreferencias } = useCookieConsent();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!consent.preferencias) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [consent]);

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__message">
        Este sitio usa cookies para mejorar tu experiencia. Puedes aceptar todas o rechazar las no necesarias.
      </div>
      <div className="cookie-banner__buttons">
        <button
          onClick={() => {
            acceptAll();
            setShow(false);
          }}
          className="cookie-banner__button cookie-banner__button--accept"
        >
          Aceptar todas
        </button>
        <button
          onClick={() => {
            acceptPreferencias(false);
            setShow(false);
          }}
          className="cookie-banner__button cookie-banner__button--reject"
        >
          Rechazar cookies no necesarias
        </button>
      </div>
    </div>
  );
}
