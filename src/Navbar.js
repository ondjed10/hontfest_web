import React from "react";
import { Link } from "react-scroll"

function Navbar(){
    return (
        <nav className="navbar__actions">
            <ul>
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
        </nav>
    )
}

export default Navbar

