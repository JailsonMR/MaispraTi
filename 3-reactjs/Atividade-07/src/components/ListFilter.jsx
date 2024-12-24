import React, { useState } from 'react';

function ListFilter() {
  const initialNames = [
    'João', 'Maria', 'Pedro', 'Ana', 
    'Carlos', 'Mariana', 'José', 
    'Camila', 'Lucas', 'Paula'
  ];

  const [names, setNames] = useState(initialNames);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    // Filtrar ignorando maiúsculas/minúsculas
    const filteredNames = initialNames.filter(name => 
      name.toLowerCase().includes(value.toLowerCase())
    );

    setNames(filteredNames);
  };

  return (
    <div className="list-filter">
      <h2>Filtro de Lista</h2>
      <input 
        type="text"
        placeholder="Filtrar nomes..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p>Total de nomes: {names.length}</p>
    </div>
  );
}

export default ListFilter;