import React from "react";
import { Link } from "react-scroll"

function Navbar(){
    return (
        <nav className="navbar__actions">
            <ul style={{float: 'left'}}>
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

