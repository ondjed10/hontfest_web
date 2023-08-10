import React from "react";
import sponsors from '../src/images/sponzori_2.png'

export const Footer = () => {
    return (
        <div className="footer-box">
           <img src={sponsors} className="footer-img" alt="sponzori" />
        </div>
    )
}