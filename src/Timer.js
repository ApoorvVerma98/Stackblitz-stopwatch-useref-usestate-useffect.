import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";


function Timer() {
  const [status, setStatus] = useState(false);
  const [runningTime, setRunningTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const handleStart = () => {
    if (!status) {
      setStartTime(Date.now() - runningTime);
      timerRef.current = setInterval(() => {
        setRunningTime(Date.now() - startTime);
      }, 10);
      setStatus(true);
    }
  };

  const handlePause = () => {
    if (status) {
      clearInterval(timerRef.current);
      setStatus(false);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setRunningTime(0);
    setStatus(false);
  };

  return (
    <div className="timer">
      <p className="timer__display">{(runningTime / 1000).toFixed(2)}</p>
      <div className="timer__buttons">
        <Button
          onClick={handleStart}
          disabled={status}
          text={status ? "Running" : "Start"}
        />
        <Button onClick={handlePause} disabled={!status} text="Pause" />
        <Button onClick={handleReset} text="Reset" />
      </div>
    </div>
  );
}

export default Timer;
