import React from "react";
import { SocialIcon } from 'react-social-icons'

export const Footer = () => {
    return (
        <div className="footer-box">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column">
                        <p className="footer-heading">ODKAZY</p>

                    </div> 
                    <div className="footer-column">
                        <p className="footer-heading">Sledujte nás aj na sociálnych sieťach</p>
                        
                        <ul>
                            <li>
                                <SocialIcon url="https://www.facebook.com/HONTfestNavrat"  /> 
                            </li>
                            <li>
                                <SocialIcon url="https://www.youtube.com/@spolocenstvosion8512"/>
                            </li>
                            <li>
                                <SocialIcon url="https://www.instagram.com/hontfest/"/>
                            </li>
                        </ul>       
                    </div> 
                </div>           
            </div>
        </div>
    )
}