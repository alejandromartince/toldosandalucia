import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const DriverProductos = (idioma) => {
  const traducciones = {
    nextBtnText: {
      es: "Siguiente",
      en: "Next",
      fr: "Suivant",
      de: "Weiter",
      ru: "Далее",
      da: "Næste",
    },
    prevBtnText: {
      es: "Anterior",
      en: "Previous",
      fr: "Précédent",
      de: "Zurück",
      ru: "Назад",
      da: "Forrige",
    },
    doneBtnText: {
      es: "Terminar",
      en: "Done",
      fr: "Terminer",
      de: "Fertig",
      ru: "Готово",
      da: "Færdig",
    },
    progressText: {
      es: "Página {{current}} de {{total}}",
      en: "{{current}} of {{total}}",
      fr: "Page {{current}} sur {{total}}",
      de: "{{current}} von {{total}}",
      ru: "{{current}} из {{total}}",
      da: "Side {{current}} af {{total}}",
    },
    titleModel: {
      es: "Ver el modelo 3D",
      en: "View the 3D Model",
      fr: "Voir le modèle 3D",
      de: "3D-Modell ansehen",
      ru: "Посмотреть 3D-модель",
      da: "Se 3D-modellen",
    },
    descriptionModel: {
      es: "Arrastra el modelo 3D con el ratón para explorarlo desde diferentes ángulos.",
      en: "Drag the 3D model with your cursor to explore it from different angles.",
      fr: "Faites glisser le modèle 3D avec votre souris pour l'explorer sous différents angles.",
      de: "Ziehen Sie das 3D-Modell mit der Maus, um es aus verschiedenen Winkeln zu betrachten.",
      ru: "Перетащите 3D-модель мышью, чтобы изучить её с разных углов.",
      da: "Træk 3D-modellen med musen for at udforske den fra forskellige vinkler.",
    },
    titleNavegacion: {
      es: "Botones de navegación",
      en: "Navigation Buttons",
      fr: "Boutons de navigation",
      de: "Navigationsschaltflächen",
      ru: "Кнопки навигации",
      da: "Navigationsknapper",
    },
    descriptionNavegacion: {
      es: "Utiliza estas flechas para cambiar entre los diferentes productos.",
      en: "Use these arrows to switch between different products.",
      fr: "Utilisez ces flèches pour passer d'un produit à l'autre.",
      de: "Verwenden Sie diese Pfeile, um zwischen verschiedenen Produkten zu wechseln.",
      ru: "Используйте эти стрелки для переключения между продуктами.",
      da: "Brug disse pile til at skifte mellem forskellige produkter.",
    },
    titleBoton: {
      es: 'Personaliza tu toldo aquí',
      en: 'Customize your awning here',
      fr: 'Personnalisez votre store ici',
      de: 'Passen Sie Ihre Markise hier an',
      ru: 'Настройте свой навес здесь',
      da: 'Tilpas din markise her',
    },
    descriptionBoton: {
      es: 'Aquí puedes personalizar tu toldo con diferentes opciones.',
      en:'Here you can customize your awning with different options.',
      fr: 'Ici, vous pouvez personnaliser votre store avec différentes options.',
      de: 'Hier können Sie Ihre Markise mit verschiedenen Optionen anpassen.',
      ru: 'Здесь вы можете настроить свой навес с различными опциями.',
      da: 'Her kan du tilpasse din markise med forskellige muligheder.',
    }
  };

  const driverObj = driver({
    showProgress: true,
    smoothScroll: true,
    allowClose: true,
    stagePadding: 0,
    nextBtnText: traducciones.nextBtnText[idioma] || traducciones.nextBtnText["en"],
    prevBtnText: traducciones.prevBtnText[idioma] || traducciones.prevBtnText["en"],
    doneBtnText: traducciones.doneBtnText[idioma] || traducciones.doneBtnText["en"],
    progressText: traducciones.progressText[idioma] || traducciones.progressText["en"],
    steps: [
      {
        element: ".model-productos div",
        popover: {
          title: traducciones.titleModel[idioma] || traducciones.titleModel["en"],
          description: traducciones.descriptionModel[idioma] || traducciones.descriptionModel["en"],
          side: "left",
          align: "start",
        },
      },
      {
        element: ".contenedor-navegacion-productos",
        popover: {
          title: traducciones.titleNavegacion[idioma] || traducciones.titleNavegacion["en"],
          description: traducciones.descriptionNavegacion[idioma] || traducciones.descriptionNavegacion["en"],
          side: "right",
          align: "start",
        },
      },
      {
        element: ".boton-producto",
        popover: {
          title: traducciones.titleBoton[idioma] || traducciones.titleBoton["en"],
          description: traducciones.descriptionBoton[idioma] || traducciones.descriptionBoton["en"],
          side: "top",
          align: "start",
        },
      },
    ],
  });

  driverObj.drive();

  // Guardar la posición inicial
  const startScroll = window.scrollY;
  const vh80 = window.innerHeight * 0.8;

  setTimeout(() => {
    const onScroll = () => {
      if (Math.abs(window.scrollY - startScroll) > vh80) {
        driverObj.destroy();
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, 1000); // 1 segundo después
};
