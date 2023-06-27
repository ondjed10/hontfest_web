import React, { useState } from "react";


export const FAQ = () => {

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

    const [toggle, setToggle] = useState([false, false, false, false, false, false, false])

    const toggleState = (index) => {
        console.log('hi')
        let array = [...toggle]
        array[index] = !toggle[index]
        setToggle(array)
    }

    return (
        <div className="content_container">
            <div className="home">
                
                <div className='intro'>
                    <h1 className="sectionName">Časté otázky</h1>
                </div>
            
                <section id="faq">
                    <div className="faq">
                        {
                            [...Qs].map((val,i) => {
                                return (
                                    <div>
                                        <div className="Q" onClick={() => toggleState(i)} >{val} </div>
                                        {toggle[i] && <div className="A">{As[i]}</div>}
                                    
                                    </div>

                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </div>       
    )
}