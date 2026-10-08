"use client";

import { useState } from "react";

export default function Stats() {
  const [steps, setSteps] = useState(7248);

  const calories = Math.round(steps * 0.04);
  const distance = (steps * 0.00075).toFixed(1);

  function addSteps() {
    setSteps((old) => Math.min(old + 500, 10000));
  }

  function resetSteps() {
    setSteps(0);
  }

  return (
    <section className="statsSection">
      <div className="sectionTitle">
        <div>
          <p className="sectionBadge">📊 BUGUNGI NATIJA</p>

          <h2>
            Faolligingizni <span>kuzating</span>
          </h2>
        </div>

        <button
          className="resetButton"
          onClick={resetSteps}
        >
          Reset
        </button>
      </div>

      <div className="statsGrid">
        <div className="statCard greenCard">
          <div className="statIcon">👟</div>

          <div className="statInfo">
            <span>Qadamlar</span>
            <strong>{steps.toLocaleString()}</strong>
          </div>

          <button onClick={addSteps}>
            +500 qadam
          </button>
        </div>

        <div className="statCard">
          <div className="statIcon">🔥</div>

          <div className="statInfo">
            <span>Kaloriya</span>
            <strong>{calories} kcal</strong>
          </div>

          <small>Bugun yoqilgan</small>
        </div>

        <div className="statCard">
          <div className="statIcon">📍</div>

          <div className="statInfo">
            <span>Masofa</span>
            <strong>{distance} km</strong>
          </div>

          <small>Taxminiy masofa</small>
        </div>

        <div className="statCard">
          <div className="statIcon">💪</div>

          <div className="statInfo">
            <span>Faollik</span>
            <strong>72%</strong>
          </div>

          <small>Kunlik maqsad</small>
        </div>
      </div>
    </section>
  );
}