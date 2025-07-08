//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

//Importamos el estilo
import './SelectPersonalizarToldos.css';

const SelectPersonalizarToldos = ({
  palabra,
  opcionesSelect = [],
  valorSeleccionado = '',
  onChange = () => { },
  deshabilitado = false,
  opcionesDeshabilitadas = [],
  onSelectMenuChange = () => { }
}) => {
  const handleFocus = () => onSelectMenuChange(true);
  const handleBlur = () => onSelectMenuChange(false);
  const { idioma } =  useIdioma();
  
  return (
    <div className='contenedorSelectPT'>
      <select
        value={valorSeleccionado}
        onChange={(e) => onChange(e.target.value)}
        disabled={deshabilitado}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="select-personalizado"
      >
        <option value="" disabled>
        {idioma === 'es' ? `Selecciona tu ${palabra}` : `Select your ${palabra}` }
        </option>
        {opcionesSelect.map(({ value, label }) => (
          <option
            key={value}
            value={value}
            disabled={opcionesDeshabilitadas.includes(value)}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPersonalizarToldos;
