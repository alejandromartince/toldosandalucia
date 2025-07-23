// Importamos React y hooks necesarios
import { useEffect, useState } from 'react';

// Importamos los hooks para manejar el scroll y saber la sección activa
import { secciones } from "../../constants/infoNavbar.js";
import { useScrollEffect } from '../Navbar/useScrollEffect.js';

// Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

// Importamos el driver.js
import { DriverProductos } from './Driver';

export const useDriverProductos = () => {
  const [activeSection, setActiveSection] = useState('home');
    const { idioma } = useIdioma();

  useScrollEffect(secciones, setActiveSection);

  useEffect(() => {
  const tourYaVisto = sessionStorage.getItem('driver-products');

  if (activeSection === 'products' && !tourYaVisto) {
    setTimeout(() => {
      DriverProductos(idioma);
      sessionStorage.setItem('driver-products', 'true');  // Marcamos que ya se mostró el tour en esta sesión
    }, 0); // un pequeño retardo para asegurar que el DOM esté listo
  }
}, [activeSection, idioma]);

  return { activeSection };
};
