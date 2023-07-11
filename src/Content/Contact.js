import React from "react";
import Map from "./Map";
import {IoMdCall, IoMdMail, IoMdContact} from 'react-icons/io'

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
            <div className="sectionNameContainer">
                <h1 className="sectionName">Kontakty</h1>
            </div>
            
            
            <div className="row">
                
                <div className="columnMap">
                    <div className="Map">
                        <Map
                            location={location}
                        /> 
                    </div>
                    
                </div>
                <div className="columnMap">
                    <div className="Map">
                        <Map
                            location={location}
                        /> 
                    </div>
                    
                </div>
            </div>
            <div className="row">
                        <p className="contactText">
                                <IoMdContact/>  Dominik Belica
                        </p>
                        <p className="contactText"><IoMdCall />  +421904343305</p>
                        <p className="contactText"><IoMdMail />  dominik.belica@gmail.com</p>        
            </div>
            
        </section>
    )
}

export default Contact