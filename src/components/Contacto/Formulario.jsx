import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

//Importamos la informacion
import { infoContacto } from "../../constants/infoContacto";

export default function Formulario({ onSubmissionChange }) {
  const { idioma } = useIdioma();
  const i = infoContacto[idioma];

  const label = {
    es: "Enviar petición",
    en: "Send request",
    de: "Anfrage senden",
    da: "Send forespørgsel",
    fr: "Envoyer la demande",
    ru: "Отправить запрос",
  };

  const [result, setResult] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false); // nuevo estado para el checkbox

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!acceptTerms) return; // evitamos enviar si no acepta términos
    setResult(i.enviado);

    const formData = new FormData(event.target);
    formData.append("access_key", "42bedf14-fbb6-416d-960d-7511db0eb8e0");
    formData.append(
      "subject",
      "Nueva petición de contacto a través de la página web"
    );
    formData.append("from_name", formData.get("nombre"));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(i.exito);
      setFormData({ nombre: "", correo: "", mensaje: "" });
      setIsSubmitted(true);
      if (onSubmissionChange) onSubmissionChange(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const sxPersonalizado = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: 2,
      "& fieldset": {
        borderColor: "white",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        backgroundColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "var(--blanco)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        boxShadow: "none",
        backgroundColor: "transparent",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "gray",
        backgroundColor: "rgba(0, 0, 0, 0.12);",
      },
      "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px transparent inset !important",
        WebkitTextFillColor: "white !important",
        caretColor: "white",
        transition: "background-color 5000s ease-in-out 0s",
      },
    },
    "& .MuiInputLabel-root": {
      color: "var(--gris-claro)",
      "&.Mui-focused": {
        color: "var(--gris-claro)",
      },
      "&.Mui-disabled": {
        color: "#00000042",
        backgroundColor: "transparent",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      "&::placeholder": {
        color: "white",
        opacity: 1,
      },
      "&.Mui-disabled": {
        color: "#00000042",
        WebkitTextFillColor: "#00000042",
        backgroundColor: "transparent",
      },
    },
  };

  const [formData, setFormData] = React.useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        "& .MuiTextField-root": { width: "100%" },
        maxWidth: 500,
        width: "25rem",
        margin: "0 auto",
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="tituloContactForm">
        <h2>{i.tituloForm}</h2>
      </div>

      {/* Inputs */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <TextField
          id="nombre"
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
          id="correo"
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
        />
      </Box>

      {/* Checkbox de términos */}
      <FormControlLabel
        className="conctactCheckbox"
        control={
          <Checkbox
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            sx={{
              color: "white",
              "&.Mui-checked": { color: "var(--verde-logo)" },
            }}
          />
        }
        label={
          <span style={{ color: "white" }}>
            {i.aceptarTerminos}{" "}
            <a
              href="/Privacidad"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span style={{ color: "var(--verde-claro)" }}>{i.terminos}</span>
            </a>
          </span>
        }
        sx={{ mt: 1 }}
      />

      {/* Botón */}
      <Box sx={{ mt: "1rem" }} className="botonMensajeForm">
        <Button
          type="submit"
          variant="contained"
          color="success"
          aria-label={label[idioma]}
          sx={{
            backgroundColor: "var(--verde-logo)",
            width: "100%",
            height: "2.5rem",
            "&:hover": {
              backgroundColor: "var(--verde2)",
            },
          }}
          disabled={isSubmitted || !acceptTerms}
        >
          {i.boton}
        </Button>

        <span>{result}</span>
      </Box>
    </Box>
  );
}
