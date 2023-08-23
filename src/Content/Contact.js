import React from "react";
import Map from "./Map";
import {IoMdCall, IoMdMail, IoMdContact} from 'react-icons/io'
import mapa from '../images/HF23Mapa.png'



function Contact(){
    

    return (
        <section id="contact">
            <br></br>
            <div className="sectionNameContainer">
                <h1 className="sectionName" id="contactHead">Kontakty</h1>
            </div>
            
            
            <div className="row" style={{alignItems: 'stretch'}}>
                
                <div className="columnMap">
                    <Map /> 
                </div>
                <div className="column">
                    <img src={mapa} alt="mapa"></img>
                </div>
            </div>
            <div className="row" >
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