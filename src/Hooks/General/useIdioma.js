import { useContext } from 'react';
import { IdiomaContext } from '../../contexts/IdiomaContext.jsx';

export const useIdioma = () => useContext(IdiomaContext);
