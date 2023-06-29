import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import hf1 from '../images/hf2022/hf1.jpeg'
import hf2 from '../images/hf2022/hf2.jpg'
import hf3 from '../images/hf2022/hf3.jpg'
import hf4 from '../images/hf2022/hf4.jpg'


function About(){
    return (
        <section id="about">
            <hr></hr>
            <span className="sectionName">O nás</span>
            <br/>
            <div className="row">
                    <p className="infoText">
                    Hontfest je kresťanský hudobný festival v regióne Hont, v meste Dudince. Našim hlavným cieľom je hovoriť ľudom o Bohu a to prostredníctvom umenia, hudby, príjemnej atmosféry, svedectiev, osobného príkladu či diskusie. Návštevníkom sa takisto snažíme zaručiť umelecký zážitok vďaka kvalitným interpretom z celého Slovenska, ktorí na festivale každoročne vystupujú. Na Hontfeste myslíme aj na rodiny s deťmi a preto každý rok pre deti chystáme množstvo programu. 
                    </p>
            </div>
            <br>
            </br>
            {/* <div className="row"> 
                    <div className="gallery">
                        <AwesomeSlider>
                            <div data-src={hf1} />
                            <div data-src={hf2} />
                            <div data-src={hf3} />
                            <div data-src={hf4} />
                        </AwesomeSlider>
                    </div>
            </div> */}
        </section> 
    )
}

export default About