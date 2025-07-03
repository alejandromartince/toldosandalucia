//Importamos los compoenentes
import Navbar from "../../sections/Navbar/Navbar"
import EnlaceCookies from "../../components/Footer/EnlaceCookies"
import Footer from "../../sections/footer/Footer"

import '../Principal/RutaPrincipal.css'

const RutaCookies = () => {
  return (
    <>
      <Navbar />
      <EnlaceCookies />
      <div className='pagina-principal'>
        <Footer />
      </div>
    </>
  )
}

export default RutaCookies