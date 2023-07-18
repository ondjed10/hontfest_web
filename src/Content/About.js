import React from "react";
import 'react-awesome-slider/dist/styles.css';
import tema from '../images/téma.png';
import stred from '../images/stred1.png';
import sima from '../images/lineUp/sima magušinová.png'
import agatik from '../images/lineUp/FS AGATIk.png'
import darmo from '../images/lineUp/andrej darmo.png'
import ego from '../images/lineUp/ego.png'
import lamac from '../images/lineUp/lch live.png'
import mdom from '../images/lineUp/martindom_2.png'
import timothy from '../images/lineUp/timothy.png'
import tomw from '../images/lineUp/towmeot.png'
// import zub from '../images/lineUp/zubajovci_foto mozno zmenit.png'

function About(){
    return (
        <section id="about">
            <div className="sectionNameContainer" id="top">
                <h1 className="sectionName">O festivale</h1>
            </div>
            
            <br/>
            {/* <div className="themeContainer"> */}
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
            {/* </div> */}
            
            <div className="row">
                    <p className="infoText">
                    Hontfest je kresťanský hudobný festival v regióne Hont, v meste Dudince. Našim hlavným cieľom je hovoriť ľudom o Bohu a to prostredníctvom umenia, hudby, príjemnej atmosféry, svedectiev, osobného príkladu či diskusie. Návštevníkom sa takisto snažíme zaručiť umelecký zážitok vďaka kvalitným interpretom z celého Slovenska, ktorí na festivale každoročne vystupujú. Na Hontfeste myslíme aj na rodiny s deťmi a preto každý rok pre deti chystáme množstvo programu. 
                    </p>
            </div>
            
            <div className="sectionNameContainer">
                <h1 className="sectionName">Účinkujúci</h1>
            </div>

            <div class="grid">
                <div class="cell">
                    <img className="lineUpImg" alt="sima" src={sima}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" alt="timothy" src={timothy}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" alt="lamace" src={lamac}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" alt="ego" src={ego}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" alt="tomw" src={tomw}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" alt="agatik" src={agatik}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" alt="martin" src={mdom}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" alt="darmo" src={darmo}></img>
                </div>
            </div>

        </section> 
    )
}

export default About