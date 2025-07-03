
//Importamos los estilos obligatorios para que el swiper funcione
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Importamos los componentes
import CarruselTrabajos from "../../components/Trabajos/carrouselTrabajos";

//Importamos los estilos
import './nuestrosTrabajos.css'

const NuestrosTrabajos = () => {
 
  return (
    <section className="nuestrosTrabajos-section" id="trabajos">
        <CarruselTrabajos />
    </section>
  );
  
};

export default NuestrosTrabajos;
