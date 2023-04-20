import { useEffect, useState } from 'react';

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
            <h1>Kollégáink</h1>
            <ul>
                {doctors.map((doctor) => (
                    <div key={doctor._id}>
                        <img src={doctor.image} alt="doki" />
                        <p>Név: {doctor.name}</p>
                        <p>Végzettség: {doctor.skills}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Doctor;
