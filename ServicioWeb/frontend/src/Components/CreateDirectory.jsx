import React, { useState } from 'react';
import axios from 'axios';

const CreateDirectory = () => {
  const [name, setName] = useState('');
  const [path, setPath] = useState('');
  const [emails, setEmails] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePathChange = (event) => {
    setPath(event.target.value);
  };

  const handleEmailsChange = (index, event) => {
    const newEmails = [...emails];
    newEmails[index] = event.target.value;
    setEmails(newEmails);
  };

  const handleAddEmailField = () => {
    const newEmails = [...emails, ''];
    setEmails(newEmails);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://127.0.0.1:8000/directories', {
      name,
      path,
      emails,
    });

    // Aquí puedes manejar la respuesta del servidor, si es necesario
    console.log('Directorio creado:', response.data);
  } catch (error) {
    console.error('Error al crear el directorio:', error);
  }
};
  

return (
  <div>
    <h2>Crear directorio</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="path">Ruta:</label>
        <input type="text" id="path" value={path} onChange={handlePathChange} />
      </div>
      <div>
        <label>Correos electrónicos:</label>
        {emails.map((email, index) => (
          <div key={index}>
            <input
              type="text"
              value={email}
              onChange={(event) => handleEmailsChange(index, event)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddEmailField}>Agregar campo de correo electrónico</button>
      </div>
      <button type="submit">Crear</button>
    </form>
  </div>
);
};

export default CreateDirectory;