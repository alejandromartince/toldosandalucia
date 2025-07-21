import './BotonCuadrado.css'

const BotonCuadrado = ({ text, onClick, idioma }) => {
  
  const i = idioma;
  const labels = {
    es: "Mas información",
    en: "More information"
  }

  return (
    <button className="botonCuadrado" onClick={onClick} aria-label={labels[i]}>
      <span className="top-key"></span>
      <span className="text">{text}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
  );
};

export default BotonCuadrado;
