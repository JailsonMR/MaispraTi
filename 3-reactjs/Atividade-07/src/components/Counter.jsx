
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    // Desafio: Não permitir valor menor que zero
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <div className="counter">
      <h2>Contador Simples</h2>
      <p>Valor atual: {count}</p>
      <div className="counter-buttons">
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
    </div>
  );
}

export default Counter;