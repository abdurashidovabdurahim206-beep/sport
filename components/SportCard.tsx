"use client";

import { useState } from "react";

type Sport = {
  icon: string;
  title: string;
  description: string;
  calories: string;
};

const sports: Sport[] = [
  {
    icon: "🏃",
    title: "Yugurish",
    description: "Tezlik va chidamlilikni oshiring.",
    calories: "10 kcal/min",
  },
  {
    icon: "🚴",
    title: "Velosiped",
    description: "Ochiq havoda faol harakat qiling.",
    calories: "8 kcal/min",
  },
  {
    icon: "🏋️",
    title: "Fitness",
    description: "Kuch va mushaklarni rivojlantiring.",
    calories: "7 kcal/min",
  },
  {
    icon: "🧘",
    title: "Yoga",
    description: "Tana va ongni birlashtiring.",
    calories: "4 kcal/min",
  },
];

export default function SportCard() {
  const [selected, setSelected] = useState("Yugurish");

  return (
    <div>
      <div className="sportGrid">
        {sports.map((sport) => (
          <button
            key={sport.title}
            className={`sportCard ${
              selected === sport.title ? "sportSelected" : ""
            }`}
            onClick={() => setSelected(sport.title)}
          >
            <div className="sportIcon">
              {sport.icon}
            </div>

            <h3>{sport.title}</h3>

            <p>{sport.description}</p>

            <div className="sportCalories">
              🔥 {sport.calories}
            </div>
          </button>
        ))}
      </div>

      <div className="selectedSport">
        <div className="selectedIcon">⚡</div>

        <div>
          <span>Tanlangan mashg‘ulot</span>
          <h3>{selected}</h3>
        </div>

        <a href="/timer" className="startWorkout">
          Boshlash →
        </a>
      </div>
    </div>
  );
}