import React, { useEffect, useState } from "react";
import { useCookieConsent } from "../../utils/cookies/useCookiesConsent";
import "./banner.css";

export default function CookieBanner() {
  const { consent, acceptAll, acceptPreferencias } = useCookieConsent();
  const [show, setShow] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [prefs, setPrefs] = useState({
    necesarias: true,
    analiticas: false,
    marketing: false,
  });

  useEffect(() => {
    if (consent.preferencias === null) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [consent]);

  const togglePref = (key) => {
    if (key === "necesarias") return; // Siempre activas
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSavePrefs = () => {
    acceptPreferencias(prefs);
    setShowConfig(false);
    setShow(false);
  };

  const handleRejectAll = () => {
    acceptPreferencias({
      necesarias: true,
      analiticas: false,
      marketing: false,
    });
    setShowConfig(false);
    setShow(false);
  };

  if (!show) return null;

  return (
    <>
      <div className={`cookie-banner ${show ? "mostrar" : ""}`}>
        <div className="cookie-banner__message">
          <h4>🍪 Usamos cookies para mejorar tu experiencia</h4>
          <p>
            Nosotros y nuestros partners usamos cookies para analizar el uso
            del sitio y mostrarte contenido personalizado.{" "}
            <button
              className="cookie-banner__link"
              onClick={() => setShowConfig(true)}
            >
              Configura tus preferencias
            </button>{" "}
            o acepta todas para continuar.
          </p>
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
            Rechazar
          </button>
        </div>
      </div>

      {/* Modal de configuración */}
      {showConfig && (
        <div className="config-overlay">
          <div className="config-panel">
            <h3>Configuración de cookies</h3>
            <p>
              Selecciona qué tipo de cookies permites. Puedes cambiarlo en
              cualquier momento.
            </p>
            <div className="prefs">
              <div className="pref">
                <div className="meta">
                  <h4>Necesarias</h4>
                  <p>Imprescindibles para el funcionamiento del sitio.</p>
                </div>
                <div className="toggle on">
                  <div className="knob"></div>
                </div>
              </div>

              <div className="pref">
                <div className="meta">
                  <h4>Analíticas</h4>
                  <p>Nos ayudan a entender cómo usas el sitio.</p>
                </div>
                <div
                  className={`toggle ${prefs.analiticas ? "on" : ""}`}
                  onClick={() => togglePref("analiticas")}
                >
                  <div className="knob"></div>
                </div>
              </div>

              <div className="pref">
                <div className="meta">
                  <h4>Marketing</h4>
                  <p>
                    Para mostrar anuncios relevantes según tus intereses.
                  </p>
                </div>
                <div
                  className={`toggle ${prefs.marketing ? "on" : ""}`}
                  onClick={() => togglePref("marketing")}
                >
                  <div className="knob"></div>
                </div>
              </div>
            </div>

            <div className="config-footer">
              <button
                className="btn btn-reject"
                onClick={() => setShowConfig(false)}
              >
                Cancelar
              </button>
              <button className="btn btn-config" onClick={handleRejectAll}>
                Rechazar todo
              </button>
              <button className="btn btn-accept" onClick={handleSavePrefs}>
                Guardar y aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
