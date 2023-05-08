import React from 'react';
import "./Rolunk.css";

const Rolunk = () => {
  return (
    <div>
        <div className='kep9'/>
        <div className='rolunk-kep'>
            <h1>Rólunk</h1>
        </div>
        <div className='container'>
        <div className='egesz'>
            <h2>Miért érdemes a PrivateLabet választani?</h2>

            <div className='rolunk-t'>
                <div className='jobb-t'>
                    <div className='kep-rolunk'/>
                </div>
                <div className='bal-t1'>
                    <div className='bal-t1-1'>
                    <h3>Nálunk mindig Ön az első</h3>
                    <p>Rendszerünk minden eleme az Ön egészségi állapotáról való gyors visszajelzést szolgálja.</p>
                    </div>
                    <div className='bal-t1-2'>
                        <h3>Gyors, rugalmas ügyintézés</h3>
                        <p>Várakozás és felesleges adminisztráció nélkül veheti igénybe teljes körű laborszolgáltatásunkat.</p>
                    </div>                   
                </div>
              
            </div>


            <div className='rolunk-t2'>               
                    <div className='bal-t2'>
                        <div className='bal-t2-1'>
                            <h3>Nincs várakozási idő</h3>
                            <p>Kiválaszthatja az Önnek legalkalmasabb időpontot a mintavételre.</p>
                        </div>
                        <div className='bal-t2-2'>
                            <h3>Diszkréció</h3>
                            <p>Ügyfeleink adatait maximális diszkrécióval kezeljük.</p>
                        </div>
                    </div>
                    <div className='jobb-t2'>
                        <div className='kep-rolunk2'/>
                    </div>
            </div>
        </div>


        </div>
    </div>
  )
}

export default Rolunk