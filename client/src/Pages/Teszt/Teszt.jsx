import React from 'react'
import "./Teszt.css";
import Image from "../Teszt/4.png";


const Teszt = () => {
  const gentestItems = [
    {
      id: 1,
      title: "Kromoszomális nem meghatározás / férfi meddőség vérből",
      description: "22000 Ft",
      image: Image,
      url: "",
    },
    {
      id: 2,
      title: "Alzheimer kór hajlam genetika vérből",
      description: "39000 Ft",
      image: Image,
      url: "",
    },
    {
      id: 3,
      title: "Sportgenetika és táplálkozás",
      description: "260000 Ft",
      image: Image,
      url: "",
    },
    {
      id: 4,
      title: "Leiden mutáció",
      description: "12000",
      image: Image,
      url: "",
    },
    {
      id: 5,
      title: "Tejcukor/laktóz-érzékenység",
      description: "15000 Ft",
      image: Image,
      url: "",
    },
    {
      id: 6,
      title: "PREMIUM+ 25 GÉNTÉRKÉP",
      description: "850000 Ft",
      image: Image,
      url: "",
    },
  ];
  return (
    <div>
      <div className='container'>
        <div className='kep3'/>
        <div className='kinek'><h2>Kinek ajánlott?</h2></div>
        <div className='felsorol'>
          <ul>
            <li>akiknek a családjában halmozottan fordul elő pl. daganatos vagy szív és érrendszeri megbetegedés, trombózis, cukorbetegség..stb. </li>
            <li>akik családtervezés előtt állnak és szeretnék kizárni az öröklődő betegségeket, esetleges kromoszóma rendellenességeket. </li>
            <li>meddőség esetén pl. kariotipizálás</li>
            <li>panasz esetén pl. laktóz,- vagy gluténérzékenység </li>
            <li>hosszantartó gyógyszerszedés vagy együttesen több gyógyszert szedőknél a mellékhatás vizsgálatára</li>
            <li>azoknak, akik hosszútávon szeretnék megőrizni egészségi állapotukat</li>
          </ul>

            <p>A vizsgálatokat csak egyszer kell elvégeztetnünk az életben, s hogy erre mikor kerül sor, már egyéni döntés. Ha a családban ismert betegségek állnak fent, már kicsi gyermekeknek is javasolt a megfelelő tesztet elvégezni, hogy annak ismeretében valóban a megelőzésre fókuszáljunk! Ne felejtsük el, hogy a legtöbb esetben nem magát a betegséget, hanem az arra való hajlamot mutatjuk ki! Tehát közel sem biztos, hogy a vizsgált betegséget "meg is fogjuk kapni". Viszont a genetika mellett az életmód, a környezeti hatások is nagy befolyással bírnak, tehát egy infarktusra hajlamosító génmutáció lehet végzetes is, ha nem figyelünk magunkra kellőképp. Elősegítjük az életmóddal: dohányzás, stressz, nem megfelelő élelmiszerek fogyasztása...stb.</p>
        </div>
        <div className='gentest-h2'><h2>Genetika, Génteszt</h2></div>

    <div className="gentest">
      {gentestItems.map((item) => (
        <div key={item.id} className="gentest-item">
          <img src={item.image} alt={item.title} />
          <div className="gentest-item-info">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url}>További információ</a>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default Teszt
