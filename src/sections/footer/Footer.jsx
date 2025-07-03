//Importamos los componentes
import FooterDefault from "../../components/Footer/FooterDefault";
import FooterMobile from "../../components/Footer/FooterMobile";


//Importamos los hooks personales
import useTipoDispositivo from "../../Hooks/useTipoDispositivo"

const Footer = () => {

  let dispositivo = useTipoDispositivo();
  
  return (
    <footer>
      {dispositivo === 'ordenador' ? <FooterDefault /> : <FooterMobile />}
    </footer>
  );
};

export default Footer;
