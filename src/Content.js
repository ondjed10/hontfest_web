import React, { useEffect, useMemo, useState } from "react";

import Contact from "./Content/Contact"
import About from "./Content/About.js";
// import { LineUp } from "./Content/LineUp";
import QR from '../src/images/QR.jpeg'
import slider from '../src/images/slider.jpg'
import sima from '../src/images/lineUp/sima magušinová.png'
import agatik from '../src/images/lineUp/FS AGATIk.png'
import darmo from '../src/images/lineUp/andrej darmo.png'
import ego from '../src/images/lineUp/ego.png'
import lamac from '../src/images/lineUp/lch live.png'
import mdom from '../src/images/lineUp/martindom_2.png'
import timothy from '../src/images/lineUp/timothy.png'
import tomw from '../src/images/lineUp/towmeot.png'
import { Countdown } from "./Content/Countdown";
import DiskusnyStanDesktop from "./Content/DiskusnyStanDesktop";
import DiskusnyStanMobile from "./Content/DiskusnyStavMobile";
import { LineUp } from "./Content/LineUp";

function useMediaQuery(query) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);
  
    useEffect(() => {
      const onChange = () => setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);
  
      return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);
  
    return match;
}

function useMediaQueries() {
    const md = useMediaQuery("(max-width: 800px)");
    // const lg = useMediaQuery("(min-width: 1200px)");
  
    return { md };
}

function Content(){

    const { md } = useMediaQueries()
    return (
        <div className="app-contatiner">
            <div className="home">
                <img alt="hero" src={slider}></img>
            </div>
            <Countdown/>
            <div className="content_container">       
                <About/>
                <section id='ucink'>
                    <div className="sectionNameContainer">
                        <h1 className="sectionName" id="ucinkHead">Účinkujúci</h1>
                    </div>
                    <br></br>
                    <div className="grid">
                        <div className="cell">
                            <img className="lineUpImg" alt="sima" src={sima}></img>
                        </div>
                        <div className="cell">
                            <img className="lineUpImg" alt="timothy" src={timothy}></img>
                        </div>
                        <div className="cell">
                            <img className="lineUpImg" alt="lamace" src={lamac}></img>
                        </div>
                        <div className="cell">
                            <img className="lineUpImg" alt="ego" src={ego}></img>
                        </div>
                        <div className="cell">
                            <img className="lineUpImg" alt="tomw" src={tomw}></img>
                        </div>
                        <div className="cell">
                            <img className="lineUpImg" alt="agatik" src={agatik}></img>
                        </div>
                        <div className="cell">
                            <img className="lineUpImg" alt="martin" src={mdom}></img>
                        </div>
                        <div className="cell">
                            <img className="lineUpImg" alt="darmo" src={darmo}></img>
                        </div>
                    </div>
                        

                    <div className="sectionNameContainer">
                        <h1 className="sectionName" >Diskusný stan</h1>
                    </div>
                    <br></br>
                    { !md ? 
                        <DiskusnyStanDesktop/>
                    :
                        <DiskusnyStanMobile/>
                    }
                </section>
            </div>
            <section id="program">
                <LineUp/>
            </section> 
            <br></br>          
            <div className="content_container">       
                <section id="support">
                    <div className="sectionNameContainer">
                        <h1 className="sectionName" id="supportHead">Podporte nás</h1>      
                    </div>
                    
                    <div className="row">
                        <div className="column">
                            <h4>Aj ty môžeš spolu s nami tvoriť Hontfest.</h4>
                            <p className="callText">Našou každoročnou snahou je umožniť vstup na festival každému a zadarmo. Hľadáme ľudí, ktorým je naša snaha sympatická a chcú nás v tomto diele podporiť. Ak máš možnosť a chuť, staň sa aj Ty tvorcom Hontfestu.</p>
                        </div>
                        <div className="column">
                            <img alt="qr" id="qr" src={QR}>
                            </img>
                        </div>
                    </div>            
                </section>
                <br></br>
                <Contact/>
                
            </div>
        </div>
        
    )
}

export default Content