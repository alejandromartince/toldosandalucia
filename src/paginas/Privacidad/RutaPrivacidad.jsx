//Importamos los compoenentes
import Navbar from "../../sections/Navbar/Navbar"
import EnlacePrivacidad from "../../components/Footer/EnlacePrivacidad"
import Footer from "../../sections/footer/Footer"

import '../Principal/RutaPrincipal.css'

const RutaPrivacidad = () => {
  return (
    <>
      <Navbar />
      <EnlacePrivacidad />
      <div className='pagina-principal'> {/*Ponemos esto para que se aplique el fondo_resto de rutaprincipal.css */}
        <Footer />
      </div>
    </>
  )
}

export default RutaPrivacidad