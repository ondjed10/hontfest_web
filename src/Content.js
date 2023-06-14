import React from "react";

import Contact from "./Content/Contact"
import About from "./Content/About.js";
import { Countdown } from "./Content/Countdown";
import { LineUp } from "./Content/LineUp";


function Content(){

    let Qs = [
        'Kedy a kde bude festival?',
        'Aké je vstupné?',
        'Dá sa na festival prísť autom?',
        'Je festival vhodný aj pre rodiny s deťmi?',
        'Bude na festivale občerstvenie?',
        'Môžem prísť na festival so psom?',
        'Ako môžem festival podporiť?'
    ]
    let As = [
        'Festival bude 26.8. od 14:00 v amfiteátri v Dudinciach.',
        'Chceme, aby bol festival dostupný pre každého bez ohľadu na jeho rozpočet. Na festivale máme preto dobrovoľné vstupné.',
        'Áno. Parkovať sa dá pri futbalovom ihrisku. Dobrovoľníci zodpovední za parkovanie vás usmernia.',
        'Áno! Pre deti máme nachystaný všelijaký program, atrakcie a cukrovú vatu zadarmo.',
        'Samozrejme. Na festivale bude viacero stánkov s jedlom a nápojmi.',
        'Keďže je na festivale hluk a veľa detí, asi nebude najlepším miestom pre vašeho psíka. Priniesť ho napriek tomu môžete, ale považujeme za samozrejmosť, že budete udržiavať areál festivalu v čistote.',
        'V prvom rade modlitbou! Ale potešíme sa aj akejkoľvek inej forme pomoci - dobrovoľníctvo, zdieľanie na sociálnych sieťach, pozvanie známych či finančná podpora. Finančne nás môžete podporiť príspevkom na náš transparentný účet: SK9183300000002402570697 Ďakujeme!'
    ]


    return (
        <div className="content_container">
            
            <div className="home">
                <div className='intro'>
                    <h1 style={{fontSize: 120+'px', textTransform: 'uppercase'}}>Ako v nebi, tak i na zemi</h1>
                </div>
                <Countdown/>
            </div>
            

            <About/>
            <section id='program'>
                <hr></hr>
                <h1 style={{fontSize: 100+'px', textTransform: 'uppercase'}}>program</h1>
                <LineUp/> 
            </section>
            <section id="faq">
            <hr></hr>
                <h1 style={{fontSize: 100+'px', textTransform: 'uppercase'}}>Časté otázky</h1>
                <div className="faq">
                    {
                        [...Qs].map((val,i) => {
                            return (
                                <div>
                                    <p className="Q">{val}</p>
                                    <p className="A">{As[i]}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section id="sponzors">
                <hr></hr>
                <h1 style={{fontSize: 100+'px', textTransform: 'uppercase'}}>Sponzori a partneri</h1>
            
            </section>
            <Contact/>
        </div>
    )
}

export default Content