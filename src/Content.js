import React from "react";

import Contact from "./Content/Contact"
import About from "./Content/About.js";
import { Countdown } from "./Content/Countdown";
import { LineUp } from "./Content/LineUp";


function Content(){
    return (
        <div className="content_container">
            
            <Countdown/>
            <LineUp/>
            <About/>
            <section id="program">
                Program
            </section>
            <section id="faq">
                Časté otázky
            </section>
            <section id="sponzors">
                Sponzori a partneri
            </section>
            <Contact/>
        </div>
    )
}

export default Content