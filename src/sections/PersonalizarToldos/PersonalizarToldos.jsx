//Importamos los hooks de react
import { useState } from 'react';

//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

//Importamos los compoenntes
import BotonCerrarMenu from '../../components/Botones/BotonCerrarMenu';
import SelectPersonalizarToldos from "../../components/PersonalizarToldos/SelectPersonalizarToldos"

//Importamos la informacion
import { infoPersonalizarToldos } from '../../constants/infoPersonalizarToldos';
import { useOpcionesTipoToldos } from '../../components/PersonalizarToldos/OpcionesSelect';

//Importamos los hooks personalizados
import useBloquearScroll from '../../Hooks/PersonalizarToldos/BloquearScroll';

//Importamos los iconos
import { FaArrowLeftLong } from "react-icons/fa6";

//Importamos el estilo de la pagina
import './PersonalizarToldos.css';
import useAnimacionSalida from '../../Hooks/PersonalizarToldos/useAnimacionSalida';

const PersonalizarToldos = () => {
  const { idioma } = useIdioma();
  const [cerrando, setCerrando] = useState(false);
  const [selectMenuActivo, setSelectMenuActivo] = useState(false);

  const informacion = infoPersonalizarToldos;

  const opcionesTipoToldos = useOpcionesTipoToldos(idioma);

  // Cuando termine la animación de salida, desmonta el componente
  useAnimacionSalida();
  //Bloqueamos el scroll cuando hay un popup
  useBloquearScroll();


  return (
    <div className={`menu-main ${cerrando ? 'salida' : ''}`}>
      <div className={`popup-contenido-prueba ${cerrando ? 'salida' : ''}`}>
        <div className='contenido-PersonalizarToldos-izquierda'>
          <h2>{informacion.titulo[idioma]}</h2>
          <p>{informacion.subtitulo[idioma]}</p>
          <SelectPersonalizarToldos opcionesSelect={opcionesTipoToldos} onSelectMenuChange={setSelectMenuActivo} />
        </div>

        {/* CONTENIDO QUE SALDRA CUANDO EL FORMULARIO NO ESTE COMPLETO */}
        <div className='contenido-PersonalizarToldos-derecha'>
          <div className='contenido-bloqueado'>
            <div className='contenedor-Boton'>
              <BotonCerrarMenu onClick={() => setCerrando(true)} />
            </div>

            {!selectMenuActivo && (
              <div className='contenedorFlechaSelect flecha-animada'>
                <FaArrowLeftLong size={30} />
              </div>
            )}

            <p>{informacion.descripcion[idioma]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizarToldos;
