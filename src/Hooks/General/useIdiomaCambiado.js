import { useLocation } from 'react-router-dom';

const idiomasDisponibles = ['es', 'en', 'fr', 'de', 'ru', 'da'];

export const useIdiomaCambiado = () => {
  const location = useLocation();
  const path = location.pathname;
  const idiomaURL = path.split('/')[1]; // Ej: 'es' de /es/Privacidad

  const idiomaValido = idiomasDisponibles.includes(idiomaURL) ? idiomaURL : 'es';

  return { idioma: idiomaValido };
};
