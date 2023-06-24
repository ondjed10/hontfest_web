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
            <h1 style={{fontSize: 100+'px', textTransform: 'uppercase'}}>Kontakty</h1>
            
            <div className="row">
                <div className="column">
                        <p>Kontaktná osoba: Dominik Belica</p>
                        <p>Telefónne číslo: +421904343305</p>
                        <p>Email: dominik.belica@gmail.com</p>
                </div>
                <div className="column">
                    <Map
                        location={location}
                    />
                </div>
            </div>
            
        </section>
    )
}

export default Contact