"use client";

import { useEffect, useState } from "react";

export default function TimerPage() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((old) => {
        if (old <= 1) {
          setRunning(false);
          return 0;
        }

        return old - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  function resetTimer() {
    setRunning(false);
    setSeconds(60);
  }

  function addTime() {
    setSeconds((old) => Math.min(old + 30, 3600));
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <main>
      <div className="container timerPage">
        <div className="pageHeader">
          <p className="sectionBadge">⏱ SPORT TIMER</p>

          <h1>
            Mashg‘ulot
            <span> taymeri</span>
          </h1>

          <p>
            Mashg‘ulot va dam olish vaqtini nazorat qiling.
          </p>
        </div>

        <div className="timerBox">
          <div className="timerCircle">
            <div className="timerNumber">
              {String(minutes).padStart(2, "0")}:
              {String(remainingSeconds).padStart(2, "0")}
            </div>

            <span>
              {running ? "MASHG‘ULOT" : "TAYYOR"}
            </span>
          </div>

          <div className="timerButtons">
            <button
              className="mainButton timerButton"
              onClick={() => setRunning(!running)}
            >
              {running ? "⏸ Pauza" : "▶ Boshlash"}
            </button>

            <button
              className="secondButton timerButton"
              onClick={resetTimer}
            >
              🔄 Reset
            </button>

            <button
              className="secondButton timerButton"
              onClick={addTime}
            >
              +30 sek
            </button>
          </div>
        </div>

        <div className="timerCards">
          <div>
            <span>🏃</span>
            <strong>Workout</strong>
            <p>Faol mashg‘ulot</p>
          </div>

          <div>
            <span>💧</span>
            <strong>Suv iching</strong>
            <p>Har 20 daqiqada</p>
          </div>

          <div>
            <span>❤️</span>
            <strong>O‘zingizni asrang</strong>
            <p>Ortiqcha zo‘riqmang</p>
          </div>
        </div>
      </div>
    </main>
  );
}