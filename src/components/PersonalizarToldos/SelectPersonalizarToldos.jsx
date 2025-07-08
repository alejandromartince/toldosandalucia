//Importamos los hooks de react
import Select from "react-select";
import { useState } from "react";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

const SelectPersonalizarToldos = ({ opcionesSelect, onSelectMenuChange }) => {

  // eslint-disable-next-line no-unused-vars
  const [selectActivo, setSelectActivo] = useState(false);

  const toggleSelectActivo = (estado) => {
    setSelectActivo(estado);
    if (onSelectMenuChange) {
      onSelectMenuChange(estado); // Avisamos al padre
    }
  };

  const { idioma } = useIdioma();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Select
        placeholder={idioma === 'es' ? "Selecciona tu toldo..." : "Select your awning..."}
        options={opcionesSelect}
        onMenuOpen={() => toggleSelectActivo(true)}
        styles={{
          container: (base) => ({
            ...base,
            width: '90%',
            maxWidth: '400px',
          }),
          control: (baseStyle, state) => ({
            ...baseStyle,
            backgroundColor: state.isFocused ? 'whitesmoke' : 'white',
            cursor: 'pointer',
          }),
          singleValue: (base) => ({
            ...base,
            color: 'black',
          }),
          menuList: (base) => ({
            ...base,
            maxHeight: '150px',
            overflowY: 'auto',
          }),
          input: (base) => ({
            ...base,
            color: 'black',
          }),
          option: (base, state) => ({
            ...base,
            color: 'black',
            backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
            cursor: 'pointer',
          }),
        }}
      />
    </div>
  );
};

export default SelectPersonalizarToldos;