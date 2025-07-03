import Select from "react-select";

const opcionesSelect1 = [
  { value: 'organge', label: 'organge' },
  { value: 'verde', label: 'verde' },
  { value: 'verde2', label: 'verde' },
  { value: 'verde3', label: 'verde' },
  { value: 'verde4', label: 'verde' },
  { value: 'verde5', label: 'verde' },
  { value: 'verde6', label: 'verde' },
  { value: 'verde7', label: 'verde' },
  { value: 'verde8', label: 'verde' },
  { value: 'verde9', label: 'verde' },
  { value: 'verde0', label: 'verde' },
  { value: 'rojo', label: 'rojo' },
];

const SelectPersonalizarToldos = () => {
  return (
    <Select
      options={opcionesSelect1}
      styles={{
        control: (baseStyle, state) => ({ //La base principal (lo que se ve sin desplegar)
          ...baseStyle,
          borderColor: state.isFocused ? 'grey' : 'red',
          backgroundColor: state.isFocused ? 'grey' : 'white',
          cursor: 'pointer',
        }),
        singleValue: (base) => ({ //Opcion elegida  o por defecto
          ...base,
          color: 'black',

        }),
        menuList: (base) => ({ //Menu donde ver las opciones
          ...base,
          maxHeight: '150px', 
          overflowY: 'auto',
        }),

        input: (base) => ({ //Cursor
          ...base,
          color: 'black',
        }),
        option: (base, state) => ({ //Opciones del select
          ...base,
          color: 'black',
          backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
          cursor: 'pointer',

        }),
      }}
    />
  );
};

export default SelectPersonalizarToldos;
