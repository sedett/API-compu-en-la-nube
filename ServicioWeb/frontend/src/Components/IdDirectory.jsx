import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetDirectory = ({ id }) => {
  const [directory, setDirectory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/directories/${id}`);
        setDirectory(response.data);
      } catch (error) {
        setError(error.response.data.detail);
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!directory) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Directorio {directory.id}</h2>
      <p>Nombre: {directory.name}</p>
      <p>Ruta: {directory.path}</p>
    </div>
  );
};

export default GetDirectory;