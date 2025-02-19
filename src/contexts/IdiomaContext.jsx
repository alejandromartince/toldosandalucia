import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto de idioma
const IdiomaContext = createContext();

// Componente que provee el contexto
export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es'); // Valor predeterminado es español

  const cambiarIdioma = (lang) => {
    setIdioma(lang);
  };

  return (
    <IdiomaContext.Provider value={{ idioma, cambiarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

// Hook para acceder al contexto
export const useIdioma = () => {
  return useContext(IdiomaContext);
};
