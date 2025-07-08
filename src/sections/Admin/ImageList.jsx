const ImageList = ({ imagenes, onDeleteSuccess }) => {
  const eliminarImagen = async (id) => {
    const confirmacion = window.confirm('¿Seguro que deseas eliminar esta imagen?');
    if (!confirmacion) return;

    try {
      const res = await fetch(`http://localhost:3000/imagenes/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        if (onDeleteSuccess) onDeleteSuccess(); // 🔄 actualiza la lista
      } else {
        const data = await res.json();
        alert(`Error al eliminar: ${data.error}`);
      }
    } catch (err) {
      console.error('Error al eliminar imagen:', err);
    }
  };

  return (
    <div>
      <h3>Lista de Imágenes</h3>
      {imagenes.length === 0 ? (
        <p>No hay imágenes subidas.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {imagenes.map((img) => (
            <div key={img.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
              
              <img
                src={`http://localhost:3000${img.ruta}`}
                alt={img.nombre}
                style={{ maxWidth: '200px', height: 'auto' }}
              />
              <p><strong>Categoría:</strong> {img.categoria}</p>
              <button onClick={() => eliminarImagen(img.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageList;
