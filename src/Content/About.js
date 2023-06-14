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
            <span style={{fontSize: 100+'px', textTransform: 'uppercase'}}>O nás</span>
            <br/>
            <div className="row">
                <div className="column content">
                    <p>
                    Hontfest je kresťanský hudobný festival v regióne Hont, v meste Dudince. Našim hlavným cieľom je hovoriť ľudom o Bohu a to prostredníctvom umenia, hudby, príjemnej atmosféry, svedectiev, osobného príkladu či diskusie. Návštevníkom sa takisto snažíme zaručiť umelecký zážitok vďaka kvalitným interpretom z celého Slovenska, ktorí na festivale každoročne vystupujú. Na Hontfeste myslíme aj na rodiny s deťmi a preto každý rok pre deti chystáme množstvo programu. 
                    </p>
                </div>
                <div className="column">
                    <iframe 
                        src="https://www.youtube.com/embed/aV7xjehmwCg"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="promo"
                        width={100+'%'}
                        height={400}
                    />
                </div>
            </div>
            <br>
            </br>
            <div className="row">
                <div className="column-desc">
                    
                    Hont <br></br>
                    fest <br></br>
                    2022
                    
                </div>
                <div className="column-gallery">
                    <div className="gallery">
                        <AwesomeSlider>
                            <div data-src={hf1} />
                            <div data-src={hf2} />
                            <div data-src={hf3} />
                            <div data-src={hf4} />
                        </AwesomeSlider>
                    </div>
                    
                </div>
            </div>
            
            

        </section> 
    )
}

export default About