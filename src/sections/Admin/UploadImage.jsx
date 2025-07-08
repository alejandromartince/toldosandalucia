import { useState } from 'react';

const UploadImage = ({ onUploadSuccess }) => {
  const [imagen, setImagen] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imagen || !categoria) {
      setMensaje('❌ Debes seleccionar una imagen y una categoría');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('categoria', categoria);

    try {
      const res = await fetch('http://localhost:3000/imagenes', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        setMensaje('✅ Imagen subida correctamente');
        setImagen(null);
        setCategoria('');
        if (onUploadSuccess) onUploadSuccess(); // 🔄 actualiza la lista
      } else {
        const data = await res.json();
        setMensaje(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setMensaje('❌ Error al subir la imagen');
    }
  };

  return (
    <div>
      <h3>Subir imagen</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
        /><br /><br />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccionar categoría</option>
          <option value="pergola">Pérgola</option>
          <option value="terraza">Terraza</option>
          <option value="veranda">Veranda</option>
        </select><br /><br />
        <button type="submit">Subir</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default UploadImage;
