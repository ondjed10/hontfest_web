import React from 'react';
import petrovci from '../images/petrovci.png'
import tema2 from '../images/tema2.png'
import tema3 from '../images/patrik struk.png'

function DiskusnyStanMobile(){

    return (
        <div>
            <div className="row">
                <div className="column">
                    <img alt="basa" src={tema2} className="speaker"></img>
                </div>
                <div className="column">
                    <h4>Odsúdení na spásu</h4>   
                </div>
                <div className="column">
                    <p className="speakerText"> 
                        Odsúdení vo väzniciach sú obmedzení na slobode, to však nie je problém pre Ježiša. O tom, ako je možné aj vo väznici praktizovať vieru, aké úskalia zažívajú veriaci odsúdení a o mnohom ďalšom nám porozpráva kpt. Michal Libant, zakladateľ spoločenstva Dismas spolu s hosťom.
                    </p>
                </div>
                <div className="column">
                    <img alt="petro" className="speaker" src={petrovci}></img>
                </div>
                <div className="column">
                    <h4>Povolanie manžel/ka</h4>
                </div> 
                <div className="column">
                    <p className="speakerText"> 
                        V dnešnej dobe existuje už mnoho príručiek o tom, ako budovať a udržiavať zdravý vzťah. Nič však nie je nad osobné svedectvo páru, ktorý sa o to usiluje a je ochotný o tom porozprávať aj u nás v diskusnom stane. Manželia Petrovci sa už na Vás tešia!
                        <br></br><span>&nbsp;&nbsp;</span>
                    </p>
                </div>
                <div className="column">
                    <img alt="struk" className="speaker" src={tema3}></img>
                </div>
                <div className="column">
                    <h4>Spýtaj sa o Cirkvi</h4>
                </div> 
                <div className="column">
                    <p className='speakerText'>
                        Otvorená diskusia, na ktorej sa môžete spýtať čokoľvek čo vás zaujima o Katolíckej Cirkvi či viere. Odpovedať bude kňaz, o. Ján Vígľaš a aktívna laička, Mária Škovierová.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default DiskusnyStanMobile