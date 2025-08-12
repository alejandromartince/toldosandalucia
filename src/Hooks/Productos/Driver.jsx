import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const DriverProductos = (idioma) => {
  const driverObj = driver({
    showProgress: true,
    smoothScroll: true,
    allowClose: false,
    stagePadding: 0,
    nextBtnText: idioma === "es" ? "Siguiente" : "Next",
    prevBtnText: idioma === "es" ? "Anterior" : "Previous",
    doneBtnText: idioma === "es" ? "Terminar" : "Done",
    progressText:
      idioma === "es"
        ? "Página {{current}} de {{total}}"
        : "{{current}} of {{total}}",
    steps: [
      {
        element: ".model-productos div",
        popover: {
          title: idioma === "es" ? "Ver el modelo 3D" : "View the 3D Model",
          description:
            idioma === "es"
              ? "Arrastra el modelo 3D con el ratón para explorarlo desde diferentes ángulos."
              : "Drag the 3D model with your cursor to explore it from different angles.",
          side: "left",
          align: "start",
        },
      },
      {
        element: ".contenedor-navegacion-productos",
        popover: {
          title:
            idioma === "es" ? "Botones de navegación" : "Navigation Buttons",
          description:
            idioma === "es"
              ? "Utiliza estas flechas para cambiar entre los diferentes productos."
              : "Use these arrows to switch between different products.",
          side: "right",
          align: "start",
        },
      },
      {
        element: ".boton-producto",
        popover: {
          title:
            idioma === "es"
              ? "Personaliza tu toldo aquí"
              : "Customize your awning here",
          description:
            idioma === "es"
              ? "Aquí puedes personalizar tu toldo con diferentes opciones."
              : "Here you can customize your awning with different options.",
          side: "top", // <-- Cambiado a 'top'
          align: "start",
        },
      },
    ],
  });

  driverObj.drive();
};
