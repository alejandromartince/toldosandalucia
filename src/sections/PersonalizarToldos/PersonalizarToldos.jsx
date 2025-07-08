//Importamos los hooks de react
import React, { useState, useEffect, Suspense } from 'react';

//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

//Importamos los compoenntes
import BotonCerrarMenu from '../../components/Botones/BotonCerrarMenu';
const SelectPersonalizarToldos = React.lazy(() => import("../../components/PersonalizarToldos/SelectPersonalizarToldos"));

//Importamos la informacion
import { infoPersonalizarToldos } from '../../constants/infoPersonalizarToldos';
import { useOpcionesTipoTela, useOpcionesTipoToldos } from '../../components/PersonalizarToldos/OpcionesSelect';

//Importamos los iconos
import { FaArrowLeftLong } from "react-icons/fa6";

//Importamos el estilo de la pagina
import './PersonalizarToldos.css';



const PersonalizarToldos = ({ onCerrar }) => {
  const { idioma } = useIdioma();
  const [cerrando, setCerrando] = useState(false);
  const [selectMenuActivo, setSelectMenuActivo] = useState(false);

  //OPCIONES PARA LOS SELECTS
  const [tipoToldoSeleccionado, setTipoToldoSeleccionado] = useState('');
  const [tipoTelaSeleccionado, setTipoTelaSeleccionado] = useState('');

  const opcionesTipoToldos = useOpcionesTipoToldos(idioma);
  const opcionesTipoTela = useOpcionesTipoTela(idioma);

  const contenido = infoPersonalizarToldos;


  useEffect(() => {
    const popup = document.querySelector('.contenido-PersonalizarToldos-derecha');
    const handleWheel = (e) => e.preventDefault();

    if (!cerrando) {
      document.body.style.overflow = 'hidden';
      popup?.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
      popup?.removeEventListener('wheel', handleWheel);
    }

    return () => {
      document.body.style.overflow = 'auto';
      popup?.removeEventListener('wheel', handleWheel);
    };
  }, [cerrando]);

  useEffect(() => {
    if (cerrando) {
      const timer = setTimeout(() => {
        onCerrar();  // Avisamos al padre que cierre el popup y lo desmonte
      }, 400); // Duración animación salida
      return () => clearTimeout(timer);
    }
  }, [cerrando, onCerrar]);

  return (
    <div className={`menu-main ${cerrando ? 'salida' : ''}`}>
      <div className={`popup-contenido-prueba ${cerrando ? 'salida' : ''}`}>
        <div className='contenido-PersonalizarToldos-izquierda'>
          <h2>{contenido.titulo[idioma]}</h2>
          <p>{contenido.subtitulo[idioma]}</p>

          <div className='contenedorHRPT' style={{ padding: "1.5rem 0", marginTop: "4rem" }}>
            <hr style={{ width: "90%", margin: "0 auto" }} />
          </div>

          <div className='contenedorPSelect'>
            <p>{contenido.tipoToldo[idioma]}</p>
            <Suspense fallback={<p>Cargando...</p>}>
              <SelectPersonalizarToldos
                opcionesSelect={opcionesTipoToldos}
                palabra={idioma === 'es' ? 'toldo' : 'awning'}
                valorSeleccionado={tipoToldoSeleccionado}
                onChange={(valor) => setTipoToldoSeleccionado(valor)}
                onSelectMenuChange={setSelectMenuActivo}
              />
            </Suspense>
          </div>

          <div className='contenedorPSelect'>
            <p>{contenido.tipoTela[idioma]}</p>
            <Suspense fallback={<p>Cargando...</p>}>
              <SelectPersonalizarToldos
                opcionesSelect={opcionesTipoTela}
                palabra={idioma === 'es' ? 'tela' : 'fabric'}
                valorSeleccionado={tipoTelaSeleccionado}
                onChange={(valor) => setTipoTelaSeleccionado(valor)}
                deshabilitado={!tipoToldoSeleccionado} // No se puede seleccionar si no hay toldo
                opcionesDeshabilitadas={tipoToldoSeleccionado === 'Cofre' ? ['PVC (Impermeable)'] : []}
              />
            </Suspense>
          </div>

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

            <p>{contenido.descripcion[idioma]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizarToldos;
