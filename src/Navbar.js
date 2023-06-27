import React from "react";
import { Link } from "react-scroll"
import { Link as RedirectLink } from "react-router-dom";
import logo from "./images/logo-transformed.jpeg"
import { SocialIcon } from 'react-social-icons'
import Hamburger from "./Hamburger";

function Navbar(){
    return (
        <nav className="navbar__actions">
            <div className="logoContainer">
                 <RedirectLink to='/'>
                    <img className="logo" src={logo}></img>
                </RedirectLink>
            </div>
            <ul style={{float: 'left', marginLeft: 30+'px'}}>
                
                <li>
                    <Link activeClass="active" smooth spy to='about'>
                        o nás
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to='program'>
                        program
                    </Link>
                    
                </li>
                <li>
                    <Link activeClass="active" smooth spy to='support'>
                        podporte nás
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to='contact'>
                        kontakty
                    </Link>
                </li>
                <li>
                    <RedirectLink to="/faq">
                        faq
                    </RedirectLink>
                </li>
            </ul>

            <ul style={{float: 'right'}}>      
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


            <div className="mobileNav">
                    <RedirectLink to='/'>
                        <img className="logo" src={logo}></img>
                    </RedirectLink>
                    <Link activeClass="active" smooth spy to='about'>
                        o nás
                    </Link>
                    <Link activeClass="active" smooth spy to='program'>
                        program
                    </Link>
                    <Link activeClass="active" smooth spy to='support'>
                        podporte nás
                    </Link>
                    <Link activeClass="active" smooth spy to='contact'>
                        kontakty
                    </Link>
                    <RedirectLink to="/faq">
                        faq
                    </RedirectLink>
                    <Hamburger></Hamburger>

            </div>
            {/* <h2 style={{float: 'inline-end', paddingLeft: 50, paddingBottom: -20}}>Hontfest 2023</h2> */}
        </nav>
    )
}

export default Navbar

