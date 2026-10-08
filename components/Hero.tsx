import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <div className="badge">
          🔥 SOG‘LOM HAYOT TARZI
        </div>

        <h1>
          Har kuni
          <br />
          <span>yaxshiroq</span> bo‘l.
        </h1>

        <p className="heroText">
          Sport, sog‘liq va faol hayotingizni bitta
          zamonaviy platformada boshqaring.
        </p>

        <div className="heroButtons">
          <Link href="/sport" className="mainButton">
            Sportni boshlash →
          </Link>

          <Link href="/timer" className="secondButton">
            ⏱ Taymer
          </Link>
        </div>

        <div className="heroMiniStats">
          <div>
            <strong>10K+</strong>
            <span>Qadam maqsadi</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Faollik</span>
          </div>

          <div>
            <strong>4+</strong>
            <span>Sport turi</span>
          </div>
        </div>
      </div>

      <div className="heroVisual">
        <div className="circle circleOne"></div>
        <div className="circle circleTwo"></div>

        <div className="runnerCard">
          <div className="runnerEmoji">🏃‍♂️</div>

          <h3>Bugungi maqsad</h3>

          <div className="heroSteps">
            7,248
          </div>

          <p>qadam</p>

          <div className="progress">
            <div className="progressFill"></div>
          </div>

          <div className="progressInfo">
            <span>7,248</span>
            <span>10,000</span>
          </div>

          <div className="goalText">
            🎯 Maqsadning 72% bajarildi
          </div>
        </div>

        <div className="floatingCard calories">
          🔥
          <div>
            <strong>486</strong>
            <span>kcal</span>
          </div>
        </div>

        <div className="floatingCard distance">
          📍
          <div>
            <strong>5.8</strong>
            <span>km</span>
          </div>
        </div>
      </div>
    </section>
  );
}