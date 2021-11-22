import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-log">
                    WOW
                    <font FontAwesomeIcon icon={faCoffee}></font>
                </Link>
            </div> 
        </nav>
       </>
    )
}

export default Navbar
