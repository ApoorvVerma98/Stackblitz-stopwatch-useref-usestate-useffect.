import React, { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [status, setStatus] = useState(false);
  const [runningTime, setRunningTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const handleClick = () => {
    setStatus(prevStatus => {
      if (prevStatus) {
        clearInterval(timerRef.current);
      } else {
        const startTime = Date.now() - runningTime;
        timerRef.current = setInterval(() => {
          setRunningTime(Date.now() - startTime);
        }, 10);
      }
      return !prevStatus;
    });
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setRunningTime(0);
    setStatus(false);
  };

  return (
    <div>
      <p>{(runningTime / 1000).toFixed(2)}</p>
      <button onClick={handleClick}>{status ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <Stopwatch />
    </div>
  );
}

export default App;
