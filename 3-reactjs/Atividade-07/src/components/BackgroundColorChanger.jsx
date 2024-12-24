import React, { useState, useEffect } from 'react';

function BackgroundColorChanger() {
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = ''; // Resetar ao desmontar
    };
  }, [color]);

  const generateRandomColor = () => {
    // Desafio: Gerar cor aleatória
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="color-changer">
      <h2>Alteração de Cor de Fundo</h2>
      <p>Cor atual: {color}</p>
      <button onClick={generateRandomColor}>Mudar Cor</button>
    </div>
  );
}

export default BackgroundColorChanger;