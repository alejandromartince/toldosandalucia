import { useState, useEffect } from 'react';
import { IdiomaContext } from './IdiomaContext.jsx';

export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('en'); // valor por defecto

  useEffect(() => {
    const idiomaNavegador = navigator.language.slice(0, 2); // "es-ES" → "es"
    const idiomasSoportados = ['es', 'en'];

    if (idiomasSoportados.includes(idiomaNavegador)) {
      setIdioma(idiomaNavegador);
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
