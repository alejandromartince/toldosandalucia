//Importamos la informacion
import { infoPrivacidad } from '../../constants/infoEnlacesFooter.jsx';
import { infoFooter } from '../../constants/infoFooter.js';

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext.jsx"

//Importamos el estilo
import './Enlaces.css';


const EnlacePrivacidad = () => {

    const { idioma } = useIdioma();
    const infoormacionF = infoFooter[idioma]
    const i = infoPrivacidad[idioma];

    return (
        <section className="enlacePrivacidadSection">
            <div className="encabezadoPoliticas">
                <h3>{infoormacionF.politica.privacidad}</h3>
                <p>{idioma === 'es' ? "Última actualización: Junio de 2025" : "Last Updated: June 2025"}</p>
            </div>
            <hr className='hrEnlacePoliticas' />

            <div className='contenidoPrincipal'>
                <div className='textoEnlacePrivacidad'>
                    <p>{i.descripcionIntroductoria}</p>
                    <div>
                        <h4>{i.BaseLegal.titulo}</h4>
                        <p>{i.BaseLegal.descripcion}</p>
                    </div>
                    <div>
                        <h4>{i.CesionDatos.titulo}</h4>
                        <p>{i.CesionDatos.descripcion}</p>
                    </div>
                    <div>
                        <h4>{i.DerechosInteresados.titulo}</h4>
                        <p>{i.DerechosInteresados.descripcion}</p>
                    </div>
                    <div>
                        <h4>{i.Confidencialidad.titulo}</h4>
                        <p>{i.Confidencialidad.descripcion}</p>
                    </div>
                </div>
                <div className='contenedorImagenEnlacePrivacidad'>
                    <img src="/assets/SVGExtras/Privacidad.svg" alt="Privacidad SVG" className='svgPrivacidad' />
                </div>
            </div>

        </section>
    );
};

export default EnlacePrivacidad;
