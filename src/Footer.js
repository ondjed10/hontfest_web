import React from "react";
import sponsors from '../src/images/sponzori_2.png'

export const Footer = () => {
    return (
        <div className="footer-box">
            {/* <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column"> */}
                        {/* <p className="footer-heading">Partneri a sponzori</p> */}
                        <img src={sponsors} className="footer-img" alt="sponzori" />
                    {/* </div>  */}
                     {/* <div className="footer-column"> */}
                            
                    {/* </div> 
                </div>           
            </div> */}
        </div>
    )
}