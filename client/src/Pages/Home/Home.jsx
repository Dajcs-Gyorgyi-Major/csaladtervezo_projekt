import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className='kep1'/>
      <div className='container'>
        <div className='kont'>
          <div className='bal_h'>
            <div className='intro'>
              <h1>Üdvözöljük a PrivateLab honlapján!</h1>
              <p>Célunk, hogy a legmagasabb minőségű és megbízható laboratóriumi vizsgálatokat biztosítsuk ügyfeleink számára. Magasan képzett és tapasztalt szakembereink a legújabb technológiákat és módszereket alkalmazzák a pontos és megbízható eredmények eléréséhez. A laboratóriumunkban számos területen végeznek vizsgálatokat, beleértve a vérképet, a hormonszinteket, a baktériumokat és vírusokat, az allergiát, valamint az egészséges életmódra vonatkozó szűrővizsgálatokat is. Az ügyfeleink magánéletének és adatvédelmének fontosságát mindenkor szem előtt tartjuk, és biztosítjuk, hogy az összes adat bizalmasan kezelve legyen. Ha laboratóriumi vizsgálatokra van szüksége, akkor mi vagyunk az Ön megbízható partnere. Kérjük, tekintse át a szolgáltatásainkat és vegye fel velünk a kapcsolatot, hogy megtudja, hogyan segíthetünk Önnek egészségi problémái kezelésében.</p>
            </div>
          </div>
          <div className='jobb_h'>
            <div className='pic'/>
          </div>
        </div>
        <div className='genet'>
          <h1>Mi az a genetika?</h1>
          <p>A genetika röviden az öröklődéssel foglalkozó tudományág, vagyis amit öröklünk szüleinktől, nagyszüleinktől. Meghatározza az egyénre jellemző tulajdonságokat pl. szem és a hajszín, valamint a bennünk lévő örökítő anyag -, más néven a DNS vizsgálatai alapján megismerhető a betegségekre való hajlam, illetve egyes betegségek is kiolvashatóak. Az utóbbi években a genetikai vizsgálatokkal, az un. emberi test géntérképezésével hatalmas ugrást értünk el az egészség megelőzésében, de a gyógyításban is. Ennek köszönhetően számos betegségre derülhetett fény, azokat pedig a megfelelő módon kezelni vagy megelőzni lehet. </p>

          <p>Ha meghalljuk a szót, DNS teszt, a legtöbbünknek elsőre az apasági vizsgálat ugrik be, pedig a genetikai vizsgálatok segítségével rejtett betegségekre is fény derülhet, akár életek is múlhatnak rajta.</p>
          
          <p>A genetikai tesztek előnye, hogy azokat csupán egyszer kell elvégezni életünkben, hiszen a genetikai állományunk születéskor adott, ez nem változik. Tudjuk, hogy drágák a tesztek, de a DNS elemzése nem egyenlő egy vércukor méréssel. Rendkívül komoly szakképesítést, precizitást és felszereltséget követel.  </p>


        </div>
        
        <div className='Kont2'>
          <h1>Felkészülés a vizsgálatra</h1>
          <div className='kont2'>         
            <div className='jobb_h2'>
              <div className='ehgy_h2'><h2>Éhgyomri vérvétel</h2></div>
              <div className='ehgy-sz'>
                  <p>A vérvizsgálatok többségéhez általában 12 órás éhezés utáni, éhgyomri minta szükséges, emiatt a vérvételt a reggeli órákban javasoljuk. Táplálékfelvétel egyes laboratóriumi vizsgálatok eredményét jelentősen befolyásolja – pl.: vércukor, terheléses vércukor, vérzsírok (koleszterin, triglicerid), májenzimek stb. Éhgyomri vérvétel előtt vizet fogyaszthat (javasolt is), alkoholt, üdítőt, kávét, ételt nem. Javasolt legkésőbbi időpont 11 óra, ezen túl már éhezési paraméterekről beszélünk, melyek eltérhetnek.</p>
                <ul>
                  <li>ha Önnek éhgyomri vérvétele lesz, nagyon fontos, hogy mindenre kellő figyelmet fordítson, mert nem csak az étkezés, de számos egyéb tényező is nagy mértékben befolyásolhatja a kapott eredményeket!</li>
                  <li>bő folyadékpótlás 2-3 dl javasolt víz formájában!</li>
                  <li>szokásos napi gyógyszereit minden esetben előírás szerint vegye be! (inzulin, cukorbetegségre, vagy magas vérnyomásra szedett gyógyszerek) kérdezze meg kezelőorvosát a laborvizsgálat előtt, hogy az egyéb szedett gyógyszerek mennyire befolyásolják az Ön eredményét!</li>
                </ul>
              </div>
            </div>
            <div className='bal_h2'>
              <div className='nemehgy_h2'><h2>Nem éhgyomri vérvétel</h2></div>
              <div className='n-ehgy'>
                <ul>
                  <li>Amennyiben az Ön vizsgálatához nem szükséges éhgyomorra érkezni, javasoljuk, hogy inkább könnyebb reggelit fogyasszon. A laboratóriumi méréseket befolyásolhatják a szervezetben lévő szénhidrátok és zsírok mennyisége.</li>
                  <li>A fizikai aktivitás is emeli bizonyos sejtek értékét a vérben, így tanácsos vérvétel előtt kerülni a jelentősebb megterhelést.</li>
                  <li>Gyógyszerek és élvezeti szerek (pl. kávé) is befolyással lehet az eredményekre.</li>
                  <li>A vérvétel előtt, - legyen szó bármilyen vizsgálatról, lehetőség szerint 2 órán belül ne érkezzen! </li>
                </ul>
              </div>
            </div>
          </div>
        </div>  


      </div>




    </div>
  )
}

export default Home
