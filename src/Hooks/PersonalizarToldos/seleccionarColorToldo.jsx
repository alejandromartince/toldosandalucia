export function seleccionarColorToldo(tipoToldoSeleccionado, setColorSeleccionado) {
  switch (tipoToldoSeleccionado) {
    case "Toldo Articulado":
      return (
        <div className="selector-colores" style={{ display: "flex", gap: "2rem" }}>
          {/* Recorremos los colores y los mostramos como opciones clicables */}
          {["Antracita", "Arizona", "AzulX"].map((color) => (
            <div
              key={color}
              className="color-item"
              onClick={() => setColorSeleccionado(color)} // Actualizamos el color seleccionado al hacer click
              style={{ cursor: "pointer" }}
            >
              <h4>{color}</h4>
              <picture>
                <source srcSet={`/assets/Lonas/${color}.webp`} type="image/webp" />
                <img
                  src={`/assets/Lonas/${color}.webp`}
                  alt={`Color de lona ${color}`}
                  loading="lazy"
                  style={{ width: "auto", height: "3rem" }}
                />
              </picture>
            </div>
          ))}
        </div>
      );
    case "Veranda":
      // Por ahora no hay colores definidos para Veranda
      return <div>No hay colores definidos para Veranda</div>;
    case "Cofre":
      // Por ahora no hay colores definidos para Cofre
      return <div>No hay colores definidos para Cofre</div>;
    default:
      return null;
  }
}
