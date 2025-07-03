//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

import './BotonCerrarMenu.css';

const BotonCerrarMenu = ({ onClick }) => {

    const { idioma } = useIdioma()

    const texto = {
    es: "Volver",
    en: "Back"
}


    return (
        <button className="botonCerrarMenu" onClick={onClick}>
            <span className="icon-textCerrarMenu">{texto[idioma]}</span>
        </button>
    );
};

export default BotonCerrarMenu;
