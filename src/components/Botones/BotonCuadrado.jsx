import './BotonCuadrado.css'

const BotonCuadrado = ({ text, onClick }) => {
  return (
    <button className="botonCuadrado" onClick={onClick}>
      <span className="top-key"></span>
      <span className="text">{text}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
  );
};

export default BotonCuadrado;
