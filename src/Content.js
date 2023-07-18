import React from "react";

import Contact from "./Content/Contact"
import About from "./Content/About.js";
// import { LineUp } from "./Content/LineUp";
import QR from '../src/images/QR.jpg'
import slider from '../src/images/slider.jpg'


function Content(){

    return (
        <div className="app-contatiner">
            <div className="home">
                
                <img alt="hero" src={slider}></img>
                {/* <Countdown/> */}
            </div>
            <div className="content_container">
           

                <About/>
                
            </div>
            {/* <section id='program'>
                    <div className="sectionNameContainer">
                        <h1 className="sectionName">program</h1>
                    </div>
                        
                    <LineUp/> 
            </section> */}
            <div className="content_container">
                <section id="support">
                    <div className="sectionNameContainer">
                        <h1 className="sectionName">Podporte nás</h1>
                       
                        
                    </div>
                    
                    <div className="row">
                        <div className="column">
                            <h4>Aj ty môžeš spolu s nami tvoriť Hontfest.</h4>
                            <p>Našou kazdorocnou snahou je umožniť vstup na festival  každému a zadarmo. Hľadáme ľudí, ktorým je naša snaha sympatická a chcú nás v tomto diele podporiť. Ak máš možnosť a chuť, staň sa aj Ty tvorcom Hontfestu.</p>
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