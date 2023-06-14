import React from "react";
import { Link } from "react-scroll"
import logo from "./images/logo-transformed.jpeg"

function Navbar(){
    return (
        <nav className="navbar__actions">
            <img className="logo" src={logo} style={{float: 'left', marginLeft: -50+'px'}}></img>
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
                    <Link activeClass="active" smooth spy to='faq'>
                        faq
                    </Link>
                    
                </li>
                <li>
                    <Link activeClass="active" smooth spy to='sponzors'>
                        sponzori
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to='contact'>
                        kontakty
                    </Link>
                </li>
            </ul>
            {/* <h2 style={{float: 'inline-end', paddingLeft: 50, paddingBottom: -20}}>Hontfest 2023</h2> */}
        </nav>
    )
}

export default Navbar

