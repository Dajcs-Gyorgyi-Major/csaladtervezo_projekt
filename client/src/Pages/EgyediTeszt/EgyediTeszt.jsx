import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EgyediTeszt.css';

const EgyediTeszt = () => {
    const adat = localStorage.getItem('egyediTeszt');
    const teszt = JSON.parse(adat);
    const navigate = useNavigate();
    // console.log(teszt);

    const kivalaszt = (id) => {
        let ugyfel = document.getElementsByClassName(`${id}`);
        let name = ugyfel[0].value;
        let phone = ugyfel[1].value;
        let email = ugyfel[2].value;
        let datum = ugyfel[3].value;
        // let stDatum = datum.toString();

        let patternTelefon = /^06-[237]0-\d{3}-\d{2}-\d{3}$/;
        if (!patternTelefon.test(phone)) {
            window.alert('Nem megfelelő a telefonszám formátuma!');
        }

        let patternEmail = /^[0-9,a-z]{1,}@[a-z]{1,}.[a-z]{1,}$/;
        if (!patternEmail.test(email)) {
            window.alert('Nem megfelelő az e-mail formátuma!');
        }

        console.log(teszt._id, id, name, phone, email, datum);

        //console.log(datum);

        const feltolt = async () => {
            try {
                // lekérjük a mai dátumot és a kiválasztott dátumot
                const today = new Date();
                const selectedDate = new Date(datum);

                // összehasonlítjuk a két dátumot
                if (selectedDate.getTime() > today.getTime()) {
                    // ha a kiválasztott dátum később van, mint a mai dátum
                    const kuld = {
                        name,
                        phone,
                        email,
                        datum,
                        examinationId: teszt._id,
                        doctorId: id,
                    };

                    const response = await fetch(
                        'http://localhost:3500/chosentest',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(kuld),
                        }
                    );

                    if (response.ok) {
                        const res = await response.json();
                        console.log(res);
                        localStorage.setItem('datum', datum);
                        localStorage.setItem('name', name);
                        localStorage.setItem('phone', phone);
                        localStorage.setItem('email', email);
                        localStorage.setItem(
                            'vizsgalat',
                            res.examination.title
                        );
                        localStorage.setItem('doktor', res.doctor.name);
                        localStorage.setItem('doktorkep', res.doctor.image);
                        navigate('/osszefoglalo');
                    } else {
                        const res = await response.json();
                        console.log(res.msg);
                    }
                } else {
                    // ha a kiválasztott dátum korábbi vagy megegyezik a mai dátummal
                    console.log('A kiválasztott dátum nem megfelelő!');
                    alert('A kiválasztott dátum nem megfelelő!');
                }
            } catch (error) {
                console.log('Valami nem jó!');
            }
        };

        feltolt();
    };
    return (
        <div>
            <div className="egyediteszt">
                <div className="container">
                    <div className="kep0" />
                    <div className="leiras">
                        <h1>{teszt.title}</h1>
                        <p>{teszt.description}</p>
                        <h3>Laborvizsgálat ára: {teszt.price} Ft</h3>
                    </div>
                    <div className="vegez">
                        <h2>Tesztet végző kollégák:</h2>

                        <ul>
                            {teszt.doctor.map((elem) => (
                                <li className="like" key={elem._id}>
                                    <div className="teszt-t">
                                        <div className="teszt-bal">
                                            <img
                                                className="imgkosar"
                                                src={elem.image}
                                                alt="kép"
                                            />
                                            <p className="ppp">{elem.name}</p>
                                            <p>{elem.skill}</p>
                                        </div>
                                        <div className="teszt-jobb">
                                            <form>
                                                <div className="nev">
                                                    {/*<label htmlFor="name">Név: </label>*/}
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Név"
                                                        className={elem._id}
                                                    />
                                                </div>
                                                <div className="tel">
                                                    {/*<label htmlFor="phone">Telefonszám: </label>*/}
                                                    <input
                                                        id="phone"
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Telefonszám 06-30-123-45-678"
                                                        className={elem._id}
                                                    />
                                                </div>
                                                <div className="email">
                                                    {/*<label htmlFor="email">E-mail: </label> */}
                                                    <input
                                                        id="email"
                                                        type="text"
                                                        name="email"
                                                        placeholder="E-mail"
                                                        className={elem._id}
                                                    />
                                                </div>
                                                <div className="idopont">
                                                    <label htmlFor="datum">
                                                        Időpont:{' '}
                                                    </label>
                                                    <input
                                                        id="datum"
                                                        type="datetime-local"
                                                        name="datum"
                                                        className={elem._id}
                                                    />
                                                </div>
                                            </form>
                                            <button
                                                className="kival"
                                                onClick={() =>
                                                    kivalaszt(elem._id)
                                                }
                                            >
                                                Foglalás
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EgyediTeszt;
