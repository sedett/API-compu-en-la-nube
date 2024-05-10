import React, { useState } from 'react';
import CreateDirectory from './CreateDirectory';
import ListDirectories from './ListDirectories';
import IdDirectory from './IdDirectory';
// Importa otros componentes de endpoints aquí

const Menu = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState('');

    const handleEndpointChange = (event) => {
        setSelectedEndpoint(event.target.value);
    };

    const renderEndpointComponent = () => {
        switch (selectedEndpoint) {
            case 'Create':
                return <CreateDirectory />;
            case 'List':
                return <ListDirectories />;
            case 'Search':
                return <IdDirectory />
      // Agrega otros casos para cada endpoint adicional
        default:
            return null;
    }
  };

    return (
        <div>
        <h2>Seleccione un endpoint:</h2>
        <select value={selectedEndpoint} onChange={handleEndpointChange}>
            <option value="">Seleccione</option>
            <option value="Create">Crear Directorio</option>
            <option value="List">Ver Directorios</option>
            <option value="Search">Buscar Directorio</option>
            {/* Agrega otras opciones para cada endpoint adicional */}
        </select>
        {renderEndpointComponent()}
        </div>
    );
};

export default Menu;