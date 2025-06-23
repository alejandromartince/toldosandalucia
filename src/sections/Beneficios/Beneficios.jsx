//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext.jsx"

//Importamos la informacion
import { encabezadoBeneficios } from '../../constants/infoBeneficios.js'

//Importamos los componentes
import Galeria from "../../components/Beneficios/Galeria.jsx";

//Importamos los estilos
import './Beneficios.css'

const Beneficios = () => {

  const { idioma } = useIdioma();

  return (
    <section className="beneficios" id="beneficios">
      <div className='encabezado-beneficios'>
        <h1>{encabezadoBeneficios.titulo[idioma]}</h1>
        <p>{encabezadoBeneficios.descripcion[idioma]}</p>
      </div>

      <Galeria />

    </section >
  )
}

export default Beneficios
