//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

//Importamos los hooks de opciones
import { obtenerTextoSeleccion } from './OpcionesSelect.jsx';

//Importamos el icono
import { FaChevronDown } from "react-icons/fa";

//Importamos el estilo
import "./SelectPersonalizarToldos.css";

const SelectPersonalizarToldos = ({
  palabra,
  opcionesSelect = [],
  valorSeleccionado = "",
  onChange = () => {},
  deshabilitado = false,
  opcionesDeshabilitadas = [],
  onSelectMenuChange = () => {},
}) => {
  const handleFocus = () => onSelectMenuChange(true);
  const handleBlur = () => onSelectMenuChange(false);
  const { idioma } = useIdioma();
  const texto = obtenerTextoSeleccion(idioma, palabra);


  return (
    <div className="contenedorSelectPT">
      <div className="select-wrapper">
        <select
          value={valorSeleccionado}
          onChange={(e) => onChange(e.target.value)}
          disabled={deshabilitado}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="select-personalizado-tutorial"
        >
          <option value="" disabled>
          {texto}
          </option>
           
          {opcionesSelect.map(({ value, label }) => (
            <option
              key={value}
              value={value}
              className="optionSelectPersonalizado"
              disabled={opcionesDeshabilitadas.includes(value)}
            >
              {label}
            </option>
          ))}
        </select>
        <FaChevronDown className="icono-select" color="#27272797" />
      </div>
    </div>
  );
};

export default SelectPersonalizarToldos;
