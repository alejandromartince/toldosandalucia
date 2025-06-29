//Importamos los compoenentes
import Navbar from "../../sections/Navbar/Navbar"
import EnlacePrivacidad from "../../components/Footer/EnlacePrivacidad"
import Footer from "../../sections/footer/Footer"

const RutaPrivacidad = () => {
  return (
    <>
      <Navbar />
      <EnlacePrivacidad />
      <div className='footerGaleria'>
        <Footer />
      </div>
    </>
  )
}

export default RutaPrivacidad