import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      alert('Tempo esgotado!');
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const handleTimeChange = (e) => {
    setTime(Number(e.target.value));
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="countdown-timer">
      <h2>Timer com Intervalo</h2>
      <div className="timer-input">
        <label>
          Definir tempo (segundos):
          <input 
            type="number" 
            value={time}
            onChange={handleTimeChange}
            min="0"
            disabled={isRunning}
          />
        </label>
      </div>
      <div className="timer-display">
        <p>Tempo restante: {formatTime(time)}</p>
      </div>
      <div className="timer-controls">
        <button 
          onClick={startTimer} 
          disabled={time === 0 || isRunning}
        >
          Iniciar
        </button>
        
        {isRunning ? (
          <button onClick={pauseTimer}>Pausar</button>
        ) : (
          <button 
            onClick={resetTimer}
            disabled={time === 0}
          >
            Reiniciar
          </button>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;