// Importamos la información
import { avisoLegal } from '../../constants/infoEnlacesFooter.jsx';
import { infoFooter } from '../../constants/infoFooter.js';

// Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext.jsx";

const EnlaceAvisoLegal = () => {

    const { idioma } = useIdioma();
    const infoormacionF = infoFooter[idioma];
    const i = avisoLegal[idioma];

    return (
        <section className="enlacePrivacidadSection">
            <div className="encabezadoPoliticas">
                <h3>{infoormacionF.politica.avisos}</h3>
                <p>{idioma === 'es' ? "Última actualización: Junio de 2025" : "Last Updated: June 2025"}</p>
            </div>
            <hr className='hrEnlacePoliticas' />

            <div className='contenidoPrincipal'>
                <div className='textoEnlacePrivacidad'>
                    <p>{i.descripcionIntroductoria}</p>

                    <div>
                        <h4>{i.Titularidad.titulo}</h4>
                        <ul className='listaTitularidad'>
                            {i.Titularidad.datos.map((dato, index) => (
                                <li key={index}>{dato}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>{i.Objeto.titulo}</h4>
                        <p>{i.Objeto.descripcion}</p>
                    </div>

                    <div>
                        <h4>{i.AccesoUso.titulo}</h4>
                        <h5>{i.AccesoUso.puntos.gratuito.subtitulo}</h5>
                        <p>{i.AccesoUso.puntos.gratuito.descripcion}</p>
                        <h5>{i.AccesoUso.puntos.registro.subtitulo}</h5>
                        <p>{i.AccesoUso.puntos.registro.descripcion}</p>
                    </div>

                    <div>
                        <h4>{i.Contenidos.titulo}</h4>
                        <p>{i.Contenidos.descripcion}</p>
                    </div>

                    <div>
                        <h4>{i.Responsabilidad.titulo}</h4>
                        <p>{i.Responsabilidad.descripcion}</p>
                    </div>

                    <div>
                        <h4>{i.Cookies.titulo}</h4>
                        <p>{i.Cookies.descripcion}</p>
                    </div>

                    <div>
                        <h4>{i.PropiedadIntelectual.titulo}</h4>
                        <p>{i.PropiedadIntelectual.descripcion}</p>
                    </div>

                    <div>
                        <h4>{i.ProteccionDatos.titulo}</h4>
                        <p>{i.ProteccionDatos.descripcion}</p>
                    </div>

                    <div>
                        <h4>{i.Legislacion.titulo}</h4>
                        <p>{i.Legislacion.descripcion}</p>
                    </div>
                </div>

                <div className='contenedorImagenEnlacePrivacidad'>
                    <img src="/assets/SVGExtras/Legal.svg" alt="Aviso Legal SVG" className='svgPrivacidad' />
                </div>
            </div>
        </section>
    );
};

export default EnlaceAvisoLegal;
