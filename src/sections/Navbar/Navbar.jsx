//Importamos los hooks personales
import useTipoDispositivo from "../../Hooks/useTipoDispositivo"

//Importamos los componentes
import NavbarDefault from '../../components/Navbar/NavbarDefault';
import NavbarMobile from "../../components/Navbar/NavbarMobile";

//Importamos los estilos
import './Navbar.css';

const Navbar = ({pagina}) => {

  const dispositivo = useTipoDispositivo(); //Asi sabemos que dispositivo manejamos
  

  return (
    <>
      {dispositivo === 'movil' ? <NavbarMobile pagina={pagina}/> : <NavbarDefault pagina={pagina}/>}
    </>
  );
};

export default Navbar;
