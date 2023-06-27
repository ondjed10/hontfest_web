import React from "react";

import Contact from "./Content/Contact"
import About from "./Content/About.js";
import { Countdown } from "./Content/Countdown";
import { LineUp } from "./Content/LineUp";
import { FAQ } from "./Content/FAQ";
import stred from "../src/images/stred.png"

function Content(){


    return (
        <div className="content_container">
            {/* <img
                 className="home-bg"
                 src={stred}
                 alt=""
                 height={507}
                 width={440}
            /> */}
            <div className="home">
                
                <div className='intro'>
                    <h1 className="bigName">Ako v nebi, tak i na zemi</h1>
                </div>
                <Countdown/>
            </div>
            <About/>
            <section id='program'>
                <hr></hr>
                <h1 className="bigName">program</h1>
                <LineUp/> 
            </section>
            {/* <FAQ /> */}
            <section id="support">
                <hr></hr>
                <h1 className="bigName">Podporte nás</h1>
            
            </section>
            <Contact/>
        </div>
    )
}

export default Content