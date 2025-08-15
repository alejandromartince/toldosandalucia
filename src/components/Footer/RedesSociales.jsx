import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';


function RedesSociales() {
  const abrirEnlace = (e, appLink, webLink) => {
    e.preventDefault(); // evita que el <a> redireccione de inmediato
    const now = Date.now();
    window.location = appLink;

    setTimeout(() => {
      const later = Date.now();
      if (later - now < 1500) {
        window.location = webLink;
      }
    }, 1000);
  };

  return (
    <>
      <a
        href="https://www.facebook.com/people/toldosandalucia/100069359261072/"
        onClick={(e) =>
          abrirEnlace(
            e,
            'fb://profile/100069359261072',
            'https://www.facebook.com/people/toldosandalucia/100069359261072/'
          )
        }
        className="fm-icono-footer"
        rel="noopener noreferrer"
        aria-label='Facebook'
      >
        <FaFacebookF size={30} color="white" />
      </a>

      <a
        href="https://www.tiktok.com/@toldos.andalucia"
        onClick={(e) =>
          abrirEnlace(e, 'tiktok://user/@toldos.andalucia', 'https://www.tiktok.com/@toldos.andalucia')
        }
        className="fm-icono-footer"
        rel="noopener noreferrer"
        aria-label='Tik Tok'
      >
        <FaTiktok size={30} color="white" />
      </a>

      <a
        href="https://www.instagram.com/toldosandalucia"
        onClick={(e) =>
          abrirEnlace(e, 'instagram://user?username=toldosandalucia', 'https://www.instagram.com/toldosandalucia')
        }
        className="fm-icono-footer"
        rel="noopener noreferrer"
        aria-label='Instagram'
      >
        <FaInstagram size={30} color="white" />
      </a>
    </>
  );
}

export default RedesSociales;
