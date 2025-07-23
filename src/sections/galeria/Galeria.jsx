//Importamos los hooks de react
import { useState } from 'react';

//Importamos la información
import { imagesNuestrosTrabajos } from '../../constants/infoNuestrosTrabajos.js'

//Importamos los hooks personales
import useTipoDipositivo from "../../Hooks/useTipoDispositivo.js"

//Importamos los componentes
import CarruselGaleria from '../../components/Galeria/CarruselGaleria.jsx';

//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos el estilo
import './Galeria.css'

const Galeria = () => {

    const dispositivo = useTipoDipositivo();
    const [indiceActual, setIndiceActual] = useState(0);
    const { idioma } = useIdioma();
    const imagenActual = imagesNuestrosTrabajos[indiceActual];

    return (

        <section className='galeria-section'>
            <div className='backgroundTopGaleria'>
                <div className='contenidoGaleria'>
                    <h2>{imagenActual.titulo[idioma]}</h2>
                    <p>
                        {idioma === 'es' ? (
                            <>
                                Para más información, contacte con nosotros <a href={dispositivo !== 'movil' ? "https://web.whatsapp.com/send?phone=34679847618&text=" : "https://wa.me/34679847618"} target='_blank'><u>aquí</u></a>
                            </>
                        ) : (
                            <>
                                For more information, contact us <a href={dispositivo !== 'movil' ? "https://web.whatsapp.com/send?phone=34679847618&text=" : "https://wa.me/34679847618"}><u>here</u></a>
                            </>
                        )}
                    </p>
                </div>
            </div>

            <div className='carrusel-galeria-container'>
                <CarruselGaleria
                    infoTrabajos={imagesNuestrosTrabajos}
                    setIndiceActual={setIndiceActual}
                    indiceActual={indiceActual}
                />
            </div>
        </section>
    );
};

export default Galeria
