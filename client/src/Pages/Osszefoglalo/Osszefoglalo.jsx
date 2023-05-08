import { useState, useEffect } from 'react';
import './Osszefoglalo.css';

const Osszefoglalo = () => {
    const datum = localStorage.getItem('datum');
    const vizsgalat = localStorage.getItem('vizsgalat');
    const doktor = localStorage.getItem('doktor');
    const doktorkep = localStorage.getItem('doktorkep');
    const name = localStorage.getItem('name');
    const phone = localStorage.getItem('phone');
    const email = localStorage.getItem('email');

    const [exams, setExams] = useState([]);

    useEffect(() => {
        const leker = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/chosentest/leker'
                );

                if (response.ok) {
                    const adat = await response.json();
                    const valogat = adat.chosenTest.filter((elem) => {
                        return (
                            elem.client.name === name &&
                            elem.client.phone === phone &&
                            elem.client.email === email
                        );
                    });
                    console.log(valogat);
                    const data = [];
                    for (let i = 0; i < valogat.length - 1; i++) {
                        data.push(valogat[i]);
                    }
                    console.log(data);
                    setExams(data);
                } else {
                    const adat = await response.json();
                    console.log(adat.msg);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        leker();
    }, [email, name, phone]);

    return (
        <div>
            <div className='container-ossz'>
            <div className='ossz-kep0'/>
            <div className='osszefoglalo-h'>
            <div className='osszefoglalo'>
                <div className='kozepre'>
                <h1>Kedves {name}!</h1>
                <p><b>Az ön által választott teszt:</b> {vizsgalat}</p>
                <p><b>Orvos:</b> {doktor}</p>
                <img className='kep' src={doktorkep} alt="doki" />
                <p><b>Foglalás időpontja: </b>{datum}</p>
            </div>
            <div className='koszono-sz'>
                <p>
                Az Ön által kiválasztott vizsgálatot rögzítettük rendszerünkben, és hamarosan kapni fog tőlünk egy megerősítő e-mailt a megadott címre. Az e-mailben található információk segítségével megerősítheti a vizsgálat időpontját és megbizonyosodhat arról, hogy minden a megfelelően alakul-e.
                </p>
                <p>Kérjük, hogy érkezzen meg a megadott időpontra, és hozza magával a megfelelő dokumentumokat, igazolványokat, amelyekre a vizsgálat során szükség lesz. Amennyiben bármilyen kérdése van, kérjük, lépjen velünk kapcsolatba az oldalon található elérhetőségeken keresztül.</p>
                <p>Rendkívül fontos számunkra, hogy vizsgálatainkat a lehető legmagasabb színvonalon végezzük el, így szakember gárdánk mindent megtesz annak érdekében, hogy a vizsgálat zökkenőmentesen és hatékonyan zajljon le.</p>
                <p>Köszönjük, hogy minket választott, és reméljük, hogy elégedett lesz a szolgáltatásainkkal.</p>
            </div>
            </div>
            </div>
            <div className='valami'/>
            {/*<h2>Eddigi vizsgálatok</h2>
            {exams.length === 0 ? (
                <h1>Eddig még nem volt teszt!</h1>
            ) : (
                exams.map((elem) => (
                    <div key={elem._id}>
                        <h2>{elem.examination.title}</h2>
                        <h3>{elem.doctor.name}</h3>
                        <img src={elem.doctor.image} alt="doki" />
                        <p>{elem.datum}</p>
                    </div>
                ))
            )}*/}
            </div>
        </div>
    );
};

export default Osszefoglalo;
