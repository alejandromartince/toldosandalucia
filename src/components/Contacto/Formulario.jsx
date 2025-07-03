//Importamos los componentes de MUI para el contact form
import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';

//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext.jsx';

//Importamos la informacion
import { infoContacto } from '../../constants/infoContacto';


export default function Formulario({ onSubmissionChange }) {

  const { idioma } = useIdioma()
  const i = infoContacto[idioma]


  /* ============================
  API PARA EL REDIRECCIONAMIENTO DEL CORREO
  ============================ */
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(i.enviado);
    const formData = new FormData(event.target);

    formData.append("access_key", "42bedf14-fbb6-416d-960d-7511db0eb8e0");
    formData.append("subject", "Nueva petición de contacto a través de la página web");
    formData.append("from_name", formData.get("nombre"));


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(i.exito);
      setFormData({ nombre: '', correo: '', mensaje: '' }); // borrar campos cuando se envia
      setIsSubmitted(true); // bloqueamos reenvio de mensaje cuando se envia
      if (onSubmissionChange) onSubmissionChange(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  /*============================================ */
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  //Personalizacion de las cajitas de textos
  const sxPersonalizado = {
    '& .MuiOutlinedInput-root': {
      color: 'white',
      borderRadius: 2,
      '& fieldset': {
        borderColor: 'white',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
        backgroundColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'var(--blanco)',  // color que quieras en hover
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',  // Sin cambios para focus
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
      '&.Mui-disabled fieldset': {
        borderColor: 'gray',
        backgroundColor: '#f0f0f0',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'var(--gris-claro)',
      '&.Mui-focused': {
        color: 'var(--gris-claro)',
      },
      '&.Mui-disabled': {
        color: 'gray',
      },
    },
    '& .MuiOutlinedInput-input': {
      color: 'white',
      '&::placeholder': {
        color: 'white',
        opacity: 1,
      },
      '&.Mui-disabled': {
        color: 'gray',
        WebkitTextFillColor: 'gray',
      },
    },
  }

  //Diferentes cajitas de textos que tenemos
  const [formData, setFormData] = React.useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  //Obtener el valor de cada cajita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        '& .MuiTextField-root': { my: 2, width: '100%' },
        maxWidth: 400,
        margin: '0 auto',
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.18)', // blanco transparente
        backdropFilter: 'blur(10px)', // desenfoque
        WebkitBackdropFilter: 'blur(10px)', // soporte para Safari
      }}

    >
      <div className='tituloContactForm'>
        <h2>{i.tituloForm}</h2>
      </div>

      <TextField
        id='nombre'
        name="nombre"
        label={i.placeholderUsuario}
        variant="outlined"
        value={formData.nombre}
        onChange={handleChange}
        disabled={isSubmitted}
        sx={sxPersonalizado}
        autoComplete="on"
        required
      />

      <TextField
        id='correo'
        name="correo"
        label={i.placeholderEmail}
        type="email"
        variant="outlined"
        value={formData.correo}
        onChange={handleChange}
        disabled={isSubmitted}
        sx={sxPersonalizado}
        autoComplete="on"
        required
      />

      <TextField
        id="mensaje"
        name="mensaje"
        label={i.placeholderMensaje}
        variant="outlined"
        multiline
        rows={4}
        value={formData.mensaje}
        onChange={handleChange}
        disabled={isSubmitted}
        sx={sxPersonalizado}
        autoComplete="on"
        required
        slotProps={{
          htmlInput: {
            'aria-label': 'Mensaje',
          },
        }}
      />

      <div className='botonMensajeForm'>
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{
            backgroundColor: 'var(--verde-logo)', // mantienes el mismo color o cambias si quieres
            '&:hover': {
              backgroundColor: 'var(--verde2)',
            },
          }}
          disabled={isSubmitted}
        >
          {i.boton}
        </Button>

        <span>{result}</span>
      </div>
    </Box>
  );
}
