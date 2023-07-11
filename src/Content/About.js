import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import hf1 from '../images/hf2022/hf1.jpeg'
import hf2 from '../images/hf2022/hf2.jpg'
import hf3 from '../images/hf2022/hf3.jpg'
import hf4 from '../images/hf2022/hf4.jpg'
import tema from '../images/téma.png';
import stred from '../images/stred.png';
import sima from '../images/lineUp/sima magušinová.png'
import agatik from '../images/lineUp/FS AGATIk.png'
import darmo from '../images/lineUp/andrej darmo.png'
import ego from '../images/lineUp/ego.png'
import lamac from '../images/lineUp/lch live.png'
import mdom from '../images/lineUp/martindom.png'
import timothy from '../images/lineUp/timothy.png'
import tomw from '../images/lineUp/towmeot.png'
import zub from '../images/lineUp/zubajovci_foto mozno zmenit.png'



function About(){
    return (
        <section id="about">
            <div className="sectionNameContainer">
                <h1 className="sectionName">O festivale</h1>
            </div>
            
            <br/>
            <div className="row">
                <div className="column">
                    <img src={tema} className="themeColumn">
                    </img>
                </div>
                <div className="column">
                    <img src={stred} className="themeColumn">
                    </img>
                </div>

            </div>
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
                    <img className="lineUpImg" src={sima}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={timothy}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={lamac}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={ego}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={zub}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={tomw}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={agatik}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={mdom}></img>
                </div>
                <div class="cell">
                    <img className="lineUpImg" src={darmo}></img>
                </div>
            </div>

        </section> 
    )
}

export default About