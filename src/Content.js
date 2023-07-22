import React from "react";

import Contact from "./Content/Contact"
import About from "./Content/About.js";
// import { LineUp } from "./Content/LineUp";
import QR from '../src/images/QR.jpg'
import slider from '../src/images/slider.jpg'
import sima from '../src/images/lineUp/sima magušinová.png'
import agatik from '../src/images/lineUp/FS AGATIk.png'
import darmo from '../src/images/lineUp/andrej darmo.png'
import ego from '../src/images/lineUp/ego.png'
import lamac from '../src/images/lineUp/lch live.png'
import mdom from '../src/images/lineUp/martindom_2.png'
import timothy from '../src/images/lineUp/timothy.png'
import tomw from '../src/images/lineUp/towmeot.png'

function Content(){

    return (
        <div className="app-contatiner">
            <div className="home">
                
                <img alt="hero" src={slider}></img>
                {/* <Countdown/> */}
            </div>
            <div className="content_container">
                
                <About/>
                
                <section id='ucink'>
                    <div className="sectionNameContainer">
                        <h1 className="sectionName" id="ucinkHead">Účinkujúci</h1>
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
                        {/* <div className="sectionNameContainer">
                            <h1 className="sectionName">program</h1>
                        </div>
                            
                        <LineUp/>  */}
                </section>
                <section id="support">
                    <div className="sectionNameContainer">
                        <h1 className="sectionName" id="supportHead">Podporte nás</h1>      
                    </div>
                    
                    <div className="row">
                        <div className="column">
                            <h4>Aj ty môžeš spolu s nami tvoriť Hontfest.</h4>
                            <p className="infoText">Našou každoročnou snahou je umožniť vstup na festival každému a zadarmo. Hľadáme ľudí, ktorým je naša snaha sympatická a chcú nás v tomto diele podporiť. Ak máš možnosť a chuť, staň sa aj Ty tvorcom Hontfestu.</p>
                        </div>
                        <div className="column">
                            <img alt="qr" src={QR}>
                            </img>
                        </div>
                    </div>            
                </section>
                <Contact/>
                
            </div>
        </div>
        
    )
}

export default Content