import SportCard from "../../components/SportCard";

export default function SportPage() {
  return (
    <main>
      <div className="container innerPage">
        <div className="pageHeader">
          <p className="sectionBadge">💪 SPORT</p>

          <h1>
            O‘zingizga mos
            <span> sportni tanlang</span>
          </h1>

          <p>
            Mashg‘ulot turini tanlang va o‘z
            natijalaringizni kuzatishni boshlang.
          </p>
        </div>

        <SportCard />

        <div className="sportTips">
          <div>
            <span>🔥</span>
            <h3>Kaloriyani yoqing</h3>
            <p>
              Muntazam mashg‘ulot sog‘lom vaznni
              saqlashga yordam beradi.
            </p>
          </div>

          <div>
            <span>❤️</span>
            <h3>Yurakni mustahkamlang</h3>
            <p>
              Kardio mashqlar yurak salomatligi
              uchun foydali.
            </p>
          </div>

          <div>
            <span>⚡</span>
            <h3>Energiya oshiring</h3>
            <p>
              Faol hayot sizga ko‘proq energiya beradi.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}