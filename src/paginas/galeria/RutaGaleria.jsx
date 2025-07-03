//Importamos los componentes
import Footer from '../../sections/footer/Footer'
import Galeria from '../../sections/galeria/Galeria';
import Navbar from '../../sections/Navbar/Navbar'

//Importamos el estilo
import '../../sections/galeria/Galeria.css'
import '../Principal/RutaPrincipal.css'

const RutaGaleria = () => {

  return (
    <>
      <Navbar />
      <Galeria />
      <div className='pagina-principal'> {/*Ponemos esto para que se aplique el fondo_resto de rutaprincipal.css */}
        <Footer />
      </div>
    </>
  )
}

export default RutaGaleria
