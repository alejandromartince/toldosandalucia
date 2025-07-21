import "./BotonInterrogacion.css";

const BotonInterrogacion = ({ mensaje }) => {

  return (
    <div className="tooltip-container">
      <button className="boton-interrogacion" aria-label="Copyright">
        ?
        <span className="tooltip-mensaje">{mensaje}</span>
      </button>
    </div>
  );
};

export default BotonInterrogacion;
