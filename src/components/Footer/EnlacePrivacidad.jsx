//Importamos la informacion
import infoPrivacidad from '../../constants/infoPrivacidad.js';

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext.jsx"

//Importamos el estilo
import './EnlacePrivacidad.css';


const EnlacePrivacidad = () => {

    const { idioma } = useIdioma();
    // const i = infoPrivacidad[idioma];

    return (
        <section className="enlacePrivacidad-section">
            <div className="enlacePrivacidad-contenedorPrincipal">
                <p>hola</p>
            </div>
        </section>
    );
};

export default EnlacePrivacidad;
