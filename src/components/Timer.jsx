import React from 'react';
import usePomodoroTimer from '../hooks/usePomodoroTimer';

function Timer() {
  const { seconds, start, stop, reset } = usePomodoroTimer();

  return (
    <div className="timer">
      <h3>Pomodoro Timer</h3>
      <p>Time: {seconds} seconds</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
