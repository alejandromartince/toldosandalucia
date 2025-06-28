//Importamos las secciones principales
import Navbar from "../../sections/Navbar/Navbar"
import Home from "../../sections/home/Home"
import Historia from "../../sections/historia/Historia"
import GoogleReview from "../../components/General/GoogleReviews"
import Products from "../../sections/products/Products"
import Beneficios from "../../sections/Beneficios/Beneficios"
import NuestrosTrabajos from "../../sections/nuestrosTrabajos/nuestrosTrabajos"
import Contacto from "../../sections/contacto/Contacto"
import Footer from "../../sections/footer/Footer"


//Importamos los hooks
import PantallaCarga from "../../components/General/PantallaCarga"
import useTipoDispositivo from "../../Hooks/useTipoDispositivo"

//Importamos los estilos
import './RutaPrincipal.css'

// Componente que gestiona la ruta principal con lógica de carga
const RutaPrincipal = ({ cargando }) => {

  const dispositivo = useTipoDispositivo();

  if (cargando) return <PantallaCarga />;
  const pagina = "principal";

  return (
    dispositivo !== 'movil' ?
      <>
        <Navbar pagina={pagina} />
        <Home />
        <div className="pagina-principal">
          <div className="Historia-GoogleReview">
            <Historia />
            <GoogleReview />
          </div>
          <NuestrosTrabajos />
          <Products />
          <Beneficios />
          <Contacto />
          <Footer />
        </div>
      </>

      :

      <>
        <Navbar pagina={pagina} />
        <Home />
        <div className="pagina-principal">
          <NuestrosTrabajos />
          <div className="Historia-GoogleReview">
            <Historia />
            <GoogleReview />
          </div>
          <Beneficios />
          <Products />
          <Contacto />
          <Footer />
        </div>
      </>

  );
};

export default RutaPrincipal