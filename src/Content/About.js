import React from "react";
import 'react-awesome-slider/dist/styles.css';
import tema from '../images/téma.png';
import stred from '../images/stred.png';

// import zub from '../images/lineUp/zubajovci_foto mozno zmenit.png'

function About(){
    return (
        <section id="about">
            <div className="sectionNameContainer" id="top">
                <p className="sectionName" id="aboutHead">O festivale</p>
            </div>
            
                <div className="row">
                    <div className="column1">
                        <img src={tema} alt="tema" className="themeColumn">
                        </img>
                    </div>
                    <div className="column2">
                        <img src={stred} alt="koruna" className="themeColumn">
                        </img>
                    </div>

                </div>
            
            <div className="row">
                    <p className="infoText">
                    Hontfest je kresťanský hudobný festival, ktorý sa každoročne odohráva na konci leta v meste Dudince. Naším hlavným cieľom je hovoriť o Bohu prostredníctvom kvalitného umenia, hudby, svedectiev, osobného príkladu či diskusie. Myslíme aj na rodiny s deťmi, pre ktoré je každý rok pripravený špeciálny program, ale aj na tých, ktorí si nemôžu dovoliť platiť vysoké vstupné. Vstup na festival je preto voľný a vítaný je každý s túžbou zažiť kúsok neba už tu, na zemi.</p>
            </div>
            
            

        </section> 
    )
}

export default About