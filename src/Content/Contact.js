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
            Kontakty
            <div className="row">
                <div className="column">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In ut interdum risus, in commodo sem. Sed sed porta tellus, 
                        in consectetur libero. Donec pharetra, tortor eget ultrices blandit, 
                        ex lectus egestas dui, eu porttitor lectus massa et ipsum. 
                    </p>
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