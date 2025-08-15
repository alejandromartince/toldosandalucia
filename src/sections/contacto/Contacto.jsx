import { useState } from "react";

//Importamos los componentes
import Mapa from "../../components/Contacto/Mapa.jsx";
import Formulario from "../../components/Contacto/Formulario.jsx";

//Importamos los iconos
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

//Importamos los hooks personalizados
import useTipoDispositivo from '../../Hooks/useTipoDispositivo.js'

//Importamos la informacion
import { infoContacto } from "../../constants/infoContacto.js";

//Importamos los contextos
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos los estilos
import "./Contacto.css";

const Contacto = () => {
  const { idioma } = useIdioma();
  const i = infoContacto[idioma];
  const dispositivo = useTipoDispositivo();

  const [isSubmitted, setIsSubmitted] = useState(false); // Estado que va a controlar


  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-container">

        <div className="contacto-izquierda">
          <h1>
            {i.titulo}
            <span>.</span>
          </h1>
          <div className="contacto-izquierda-info">

            {dispositivo !== 'movil' && <hr className="hr-vertical" />}
            
            <div>
              <br />
              <p className="footer-indicacion">{i.direccion}</p>
              <p>c/ Santo Tomás nº 19. Pol. ind. La Leala</p>
              <p>Arroyo de la Miel, Benalmadena, 29631</p>
              <br />

              <p className="footer-indicacion">{i.contacto}</p>
              <div className="telefono-contacto">
                <FaPhone />
                <p>952 562 668</p>
              </div>

              <div className="email-contacto">
                <MdEmail />
                <p>info@toldosandalucia.com</p>
              </div>
              <br />
              <Mapa idioma={idioma}/>
              <br />
              <br />
            </div>
          </div>
        </div>


        <div className="contacto-derecha">
          <div className="containerFormularioContacto">
            <Formulario onSubmissionChange={setIsSubmitted} />
          </div>

          <div className={isSubmitted ? "contactarFuturoForm" : "contactarFuturoFormInvisible"}>
            <p>{i.contactarFuturo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
