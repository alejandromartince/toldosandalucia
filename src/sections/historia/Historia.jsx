//Importamos informacion
import { infoHistoria, alts } from "../../constants/infoHistoria.jsx";

//Importamos el contexto
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos componentes
import LinkLinea from "../../components/Botones/LinkLinea.jsx";

//Importamos los hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js"

//Importamos estilos
import "./Historia.css";

const Historia = () => {

  const { idioma } = useIdioma();
  const informacion = infoHistoria;
  const dispositivo = useTipoDispositivo();
  const alt = alts[idioma];

  return (
    <section className="historia" id="historia">
      <div className="historia-izquierda">
        <div className="historia-texto">
          <h1>{informacion.titulo[idioma]}</h1>
          <p>{dispositivo === 'movil' ? informacion.contenido[idioma].mobile : informacion.contenido[idioma].pc}</p><br />

          <p>
            {informacion.subcontenido[idioma]} &nbsp;
            <span>
              Málaga / Torremolinos / Benalmádena / Arroyo de la Miel / Fuengirola / Mijas / Marbella / San Pedro / Estepona / Alhaurín de La Torre / Churriana / Rincón de La Victoria / El Palo / Málaga Este.
            </span>
          </p>

        </div>

        <div className="contenedor-botonHistoria">
          <LinkLinea idioma={idioma} offset={-50} id="Historia" className="boton-linea" />
        </div>
      </div>


      {dispositivo === 'ordenador' && (
        <div className="historia-logo">
          <img src="/assets/Logo/1999_blanco.png" alt={alt} />
        </div>
      )}
    </section>
  );
};

export default Historia;
