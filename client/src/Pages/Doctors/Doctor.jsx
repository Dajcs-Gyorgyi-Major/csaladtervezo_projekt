import { useEffect, useState } from 'react';
import './Doctor.css'

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const leker = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/doctor/leker'
                );

                if (response.ok) {
                    const adat = await response.json();
                    console.log(adat);
                    setDoctors(adat);
                } else {
                    const adat = await response.json();
                    console.log(adat.msg);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        leker();
    }, []);
    return (
        <div>
            
            <div className='doctor-kep0'/>
            <div className='container'>
            <div className='szoveg'>
                <h1>Kollégáink</h1>
                <p>Orvosaink elhivatottak és magasan képzettek, mindannyian elkötelezettek az Ön egészségének javítása érdekében. Széleskörű tapasztalattal rendelkeznek és folyamatosan képzik magukat, hogy mindig a legújabb és legjobb kezelési lehetőségeket kínálhassák. Az orvosaink kölünböző szakterületen végeztek, így garantáltan megtalálja a megfelelő szakembert az Ön számára. Tekintse át orvosaink profiljait, hogy jobban megismerje őket és bízalmat építsen velük szemben. Bármilyen egészségügyi problémája is van, az orvosaink minden esetben készséggel állnak rendelkezésére, hogy segítsenek Önnek a gyógyulás útján.</p>
            </div>
            <div className='docs'>
                {doctors.map((doctor) => (
                    <div key={doctor._id} className='docs-item'>
                        <img src={doctor.image} alt="doki" />
                        <p><b>Név:</b> {doctor.name}</p>
                        <p><b>Végzettség:</b> {doctor.skill}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Doctor;
