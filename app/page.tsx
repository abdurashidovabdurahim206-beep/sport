import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />

        <Stats />

        <section className="featuresSection">
          <div className="sectionTitle centerTitle">
            <div>
              <p className="sectionBadge">
                ✨ ASOSIY FUNKSIYALAR
              </p>

              <h2>
                Sog‘lom hayot uchun <span>hammasi</span>
              </h2>
            </div>
          </div>

          <div className="featureGrid">
            <Link href="/sport" className="featureCard">
              <div className="featureIcon">🏋️</div>

              <h3>Sport mashqlari</h3>

              <p>
                Yugurish, fitness, yoga va velosiped
                kabi mashg‘ulotlarni tanlang.
              </p>

              <span>Ko‘rish →</span>
            </Link>

            <Link href="/timer" className="featureCard">
              <div className="featureIcon">⏱️</div>

              <h3>Sport taymeri</h3>

              <p>
                Mashg‘ulot vaqtini aniq hisoblang va
                o‘z natijangizni kuzating.
              </p>

              <span>Timer ochish →</span>
            </Link>

            <Link href="/location" className="featureCard">
              <div className="featureIcon">📍</div>

              <h3>GPS Lokatsiya</h3>

              <p>
                GPS orqali joylashuvingizni aniqlang
                va yugurish marshrutingizni kuzating.
              </p>

              <span>GPS ochish →</span>
            </Link>
          </div>
        </section>

        <section className="quoteSection">
          <div className="quoteIcon">“</div>

          <h2>
            Kichik qadamlar katta
            <span> natijalarga</span> olib keladi.
          </h2>

          <p>
            Bugun boshlang. Ertaga o‘zingizdan minnatdor bo‘lasiz.
          </p>

          <Link href="/sport" className="mainButton">
            Mashg‘ulotni boshlash →
          </Link>
        </section>
      </div>
    </main>
  );
}