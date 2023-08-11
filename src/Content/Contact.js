import React from "react";
import Map from "./Map";
import {IoMdCall, IoMdMail, IoMdContact} from 'react-icons/io'




function Contact(){
    

    return (
        <section id="contact">
            <br></br>
            <div className="sectionNameContainer">
                <h1 className="sectionName" id="contactHead">Kontakty</h1>
            </div>
            
            
            <div className="row">
                
                <div className="columnMap">
                    <Map /> 
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