import React from "react";
import Map from "./Map";

function Contact(){
    const location = {
        center: {
            lat: 48.1681454,
            lng: 18.878047
        },
        zoom: 10,
        address: 'Amfiteáter Dudince'
    }

    return (
        <section id="contact">
            <hr></hr>
            <h1 className="sectionName">Kontakty</h1>
            
            <div className="row">
                <div className="column">
                        <p className="contactText">Kontaktná osoba: Dominik Belica</p>
                        <p className="contactText">Telefónne číslo: +421904343305</p>
                        <p className="contactText">Email: dominik.belica@gmail.com</p>
                </div>
                <div className="column">
                    <div className="Map">
                        <Map
                            location={location}
                        /> 
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default Contact