import React from "react";

import Contact from "./Content/Contact"
import About from "./Content/About.js";
import { Countdown } from "./Content/Countdown";
import { LineUp } from "./Content/LineUp";
import { FAQ } from "./Content/FAQ";
import stred from "../src/images/stred.png"
import QR from '../src/images/QR.jpg'
import slider from '../src/images/slider.jpg'
import obl from '../src/images/obdklznik.png'

function Content(){

    return (
        <div className="app-contatiner">
            <div className="home">
                
                <img src={slider}></img>
                <Countdown/>
            </div>
            <div className="content_container">
           
                <section id='program'>
                    <hr></hr>
                    <div className="sectionNameContainer">
                        <h1 className="sectionName">program</h1>
                    </div>
                        
                    <LineUp/> 
                </section>
                <About/>
                {/* <FAQ /> */}
                <section id="support">
                    <hr></hr>
                    <div className="sectionNameContainer">
                        <h1 className="sectionName">Podporte nás</h1>
                       
                        
                    </div>
                    
                    <div className="row">
                        <div className="column">
                            <h4>Aj ty môžeš spolu s nami tvoriť Hontfest.</h4>
                            <p>Našou kazdorocnou snahou je umožniť vstup na festival  každému a zadarmo. Hľadáme ľudí, ktorým je naša snaha sympatická a chcú nás v tomto diele podporiť. Ak máš možnosť a chuť, staň sa aj Ty tvorcom Hontfestu.</p>
                        </div>
                        <div className="column">
                            <img src={QR}>
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