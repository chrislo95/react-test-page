import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // imports the main icon thingy
import { faCoffee } from '@fortawesome/free-solid-svg-icons' // imports the actual icon from the icon pkg thingy


function Navbar() {
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-log">
                    WOW
                </Link>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> 
            </div> 
        </nav>
       </>
    )
}

export default Navbar
