//Importamos los hooks de react
import { useState } from 'react';

//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos los hooks
import useTipoDispositivo from '../../Hooks/useTipoDispositivo.js';

//Importamos la informacion
import { textoBeneficios } from '../../constants/infoBeneficios.js';
import useInformacionBoton from '../../constants/infoBotones.js';

//Importamos los componentes
import BotonCuadrado from '../Botones/BotonCuadrado.jsx';

// Importamos estilos
import "../../sections/Beneficios/Beneficios.css"

const Galeria = () => {
    const [activo, setActivo] = useState(null);
    const { idioma } = useIdioma();
    const infoBoton = useInformacionBoton(idioma, "Beneficios");
    const dispositivo = useTipoDispositivo();

    const datos = Object.values(textoBeneficios).map(item => ({
        titulo: item.titulo[idioma],
        imagen: item.imagen,
        informacion: item.informacion.pc[idioma]
    }));


    const manejarClick = (index) => {
        setActivo(prev => prev === index ? null : index);
    };


    return (
        <div className="galeria-contenedor">

            {dispositivo !== 'movil' && (
                <div className="contenedorTitulosFotosBeneficios">
                    {datos.map((item, index) => (
                        <div className="tituloContainer" key={index}>
                            <h3
                                className={`titulo ${activo === index ? 'activo' : ''} ${activo !== null && activo !== index ? 'invisible' : ''}`}
                                onClick={() => manejarClick(index)}
                            >
                                {item.titulo}
                            </h3>
                        </div>
                    ))}
                </div>
            )}


            <div className="imagenes-container">
                {datos.map((item, index) => {
                    const esActivo = activo === index;
                    const mostrar = activo === null || esActivo;
                    return (
                        <div
                            key={index}
                            onClick={() => manejarClick(index)}
                            className={`imagen-item ${mostrar ? 'visible' : 'oculto'} ${esActivo ? 'expandida' : ''}`}
                        >
                            {dispositivo === 'movil' && <h3>{item.titulo}</h3>}
                            <img src={item.imagen} alt={item.titulo} draggable="false" />
                            <div
                                className={`info-carta ${esActivo ? 'visible' : ''}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div>
                                    <h3>{item.titulo}</h3>
                                    <p>{item.informacion}</p>
                                </div>
                                <div className="divBotonCartasBeneficios">
                                    <BotonCuadrado
                                        text={infoBoton.texto}
                                        idioma={idioma}
                                        onClick={() => window.open(infoBoton.url, "_blank")}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Galeria;



