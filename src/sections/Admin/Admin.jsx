import { useState } from 'react';

import UploadImage from './UploadImage.jsx';
import ImageList from './ImageList.jsx';


//Importamos el estilo
import './Admin.css'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [imagenes, setImagenes] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, password })
      });

      if (res.ok) {
        setIsLoggedIn(true);
        fetchImagenes();
      } else {
        const data = await res.json();
        alert(data.mensaje || 'Error al iniciar sesión');
      }
    } catch (error) {
      alert('Error de conexión al servidor');
      console.error(error);
    }
  };

  const fetchImagenes = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/imagenes`);
      const data = await res.json();
      setImagenes(data);
    } catch (err) {
      console.error('Error al cargar imágenes:', err);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className='loginSection'>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          /><br /><br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className='dashboardSection'>
      <h2>Bienvenido, {usuario}</h2>
      <UploadImage onUploadSuccess={fetchImagenes} />
      <hr />
      <ImageList imagenes={imagenes} onDeleteSuccess={fetchImagenes} />
    </div>
  );
};

export default Admin;
