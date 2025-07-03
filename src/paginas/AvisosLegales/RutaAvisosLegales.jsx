//Importamos los compoenentes
import EnlaceAvisosLegales from "../../components/Footer/EnlaceAvisosLegales"
import Footer from "../../sections/footer/Footer"
import Navbar from "../../sections/Navbar/Navbar"

import '../../components/Footer/Enlaces.css'
import '../Principal/RutaPrincipal.css'

const RutaAvisosLegales = () => {
  return (
    <>
      <Navbar />
      <EnlaceAvisosLegales />
      <div className='pagina-principal'>
        <Footer />
      </div>
    </>
  )
}

export default RutaAvisosLegales