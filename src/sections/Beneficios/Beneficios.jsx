//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos la informacion
import { encabezadoBeneficios } from '../../constants/infoBeneficios.js'

//Importamos los hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo.js";

//Importamos los componentes
import Ventajas from "../../components/Beneficios/Ventajas.jsx";
import VentajasMobile from "../../components/Beneficios/VentajasMobile.jsx";

//Importamos los estilos
import './Beneficios.css'

const Beneficios = () => {

  const { idioma } = useIdioma();
  const dispositivo = useTipoDispositivo();

  return (
    <section className="beneficios" id="beneficios">
      <div className='encabezado-beneficios'>
        <h1>{encabezadoBeneficios.titulo[idioma]}</h1>
        <p>{dispositivo !== 'movil' ? encabezadoBeneficios.descripcion.pc[idioma] : encabezadoBeneficios.descripcion.movil[idioma]}</p>
      </div>

      {dispositivo !== 'movil' ? <Ventajas /> : <VentajasMobile />}

    </section >
  )
}

export default Beneficios
