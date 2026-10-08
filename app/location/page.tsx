"use client";

import { useState } from "react";

type LocationData = {
  latitude: number;
  longitude: number;
  accuracy: number;
};

export default function LocationPage() {
  const [location, setLocation] =
    useState<LocationData | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function getLocation() {
    if (!navigator.geolocation) {
      setError(
        "Brauzeringiz GPS funksiyasini qo‘llab-quvvatlamaydi."
      );
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });

        setLoading(false);
      },
      () => {
        setLoading(false);
        setError(
          "Lokatsiyaga ruxsat berilmadi. Brauzerda GPS uchun Allow bosing."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }

  return (
    <main>
      <div className="container locationPage">
        <div className="pageHeader">
          <p className="sectionBadge">📍 GPS TRACKER</p>

          <h1>
            Lokatsiyangizni
            <span> aniqlang</span>
          </h1>

          <p>
            GPS orqali hozirgi joylashuvingizni aniqlang.
          </p>
        </div>

        <div className="locationMain">
          <div className="mapVisual">
            <div className="mapGrid"></div>

            <div className="mapPin">
              📍
            </div>

            <div className="mapPulse"></div>

            <span className="mapText">
              GPS
            </span>
          </div>

          <div className="locationInfo">
            <div className="locationIcon">
              📡
            </div>

            <h2>
              GPS orqali aniqlash
            </h2>

            <p>
              Joylashuvingizni aniqlash uchun
              quyidagi tugmani bosing.
            </p>

            <button
              className="mainButton"
              onClick={getLocation}
              disabled={loading}
            >
              {loading
                ? "⏳ Aniqlanmoqda..."
                : "📍 Lokatsiyani aniqlash"}
            </button>

            {error && (
              <div className="errorMessage">
                ⚠️ {error}
              </div>
            )}

            {location && (
              <div className="coordinates">
                <h3>📍 Lokatsiya topildi</h3>

                <div>
                  <span>Latitude</span>
                  <strong>
                    {location.latitude.toFixed(6)}
                  </strong>
                </div>

                <div>
                  <span>Longitude</span>
                  <strong>
                    {location.longitude.toFixed(6)}
                  </strong>
                </div>

                <div>
                  <span>Aniqlik</span>
                  <strong>
                    {Math.round(location.accuracy)} m
                  </strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}