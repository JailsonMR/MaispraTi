import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <h2>Temporizador</h2>
      <div className="timer-display">
        <p>Tempo: {seconds} segundos</p>
      </div>
      <div className="timer-controls">
        {!isRunning ? (
          <button onClick={startTimer}>Iniciar</button>
        ) : (
          <button onClick={pauseTimer}>Pausar</button>
        )}
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Timer;