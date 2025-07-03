// src/contexts/IdiomaContext.js
import { createContext, useState, useContext } from 'react';

// Creamos el contexto para el idioma
const IdiomaContext = createContext();

// Proveedor del contexto
export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es'); // Idioma por defecto es español

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  return (
    <IdiomaContext.Provider value={{ idioma, cambiarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

// Hook para usar el contexto
export const useIdioma = () => useContext(IdiomaContext);
