import React, { useState } from "react";
import { Link } from "react-scroll"
import { Link as RedirectLink } from "react-router-dom";
import logo from "./images/logo-transformed.jpeg"
import { SocialIcon } from 'react-social-icons'
// import Hamburger from "./Hamburger";

function Navbar(){

    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <nav className="navbar">
            <div className="logoContainer">
                 <RedirectLink to='/'>
                    <img className="logo" src={logo}></img>
                </RedirectLink>
            </div>
            <ul className={active ? "active nav-menu" : "nav-menu"}>
                <div className="nav-links">
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy to='about'>
                            o festivale
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy to='program'>
                            program
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy to='support'>
                            podporte nás
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy to='contact'>
                            kontakty
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <RedirectLink to="/faq">
                            faq
                        </RedirectLink>
                    </li> */}
                </div>   
                <div className="nav-icons">
                    <ul className={active ? "active nav-menu" : "nav-menu"}>      
                        <li className="nav-item">
                            <SocialIcon url="https://www.facebook.com/HONTfestNavrat"  /> 
                        </li>
                        <li className="nav-item">
                            <SocialIcon url="https://www.youtube.com/@spolocenstvosion8512"/>
                        </li>
                        <li className="nav-item">
                            <SocialIcon url="https://www.instagram.com/hontfest/"/>
                        </li>             
                    </ul>
                </div>
            </ul>

            


            <div className="mobileNav" onClick={()=> toggleActive()}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    )
}

export default Navbar

