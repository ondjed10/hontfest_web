import React from "react";
import 'react-awesome-slider/dist/styles.css';
import tema from '../images/téma.png';
import stred from '../images/stred1.png';

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
                    Hontfest je kresťanský hudobný festival v regióne Hont, v meste Dudince. Našim hlavným cieľom je hovoriť ľudom o Bohu a to prostredníctvom umenia, hudby, príjemnej atmosféry, svedectiev, osobného príkladu či diskusie. Návštevníkom sa takisto snažíme zaručiť umelecký zážitok vďaka kvalitným interpretom z celého Slovenska, ktorí na festivale každoročne vystupujú. Na Hontfeste myslíme aj na rodiny s deťmi a preto každý rok pre deti chystáme množstvo programu. 
                    </p>
            </div>
            
            

        </section> 
    )
}

export default About