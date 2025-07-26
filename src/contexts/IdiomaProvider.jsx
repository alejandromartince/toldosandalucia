// IdiomaProvider.jsx
import { useState, useEffect } from 'react';
import { IdiomaContext } from './IdiomaContext.jsx';

export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState(null); // null al inicio

  useEffect(() => {
    const idiomaNavegador = navigator.language.slice(0, 2); // ej: "es-ES" → "es"
    const idiomasSoportados = ['es', 'en', 'fr', 'de', 'da', 'ru'];

    if (idiomasSoportados.includes(idiomaNavegador)) {
      setIdioma(idiomaNavegador);
    } else {
      setIdioma('en'); // fallback
    }
  }, []);

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  return (
    <IdiomaContext.Provider value={{ idioma, cambiarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};
