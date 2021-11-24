import React, {useState} from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // imports the main icon thingy
import { faCoffee, faBars, faTimes, fas } from '@fortawesome/free-solid-svg-icons'; // imports the actual icon from the icon pkg thingy
import { fab } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-log">
                    WOW
                </Link>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
            </div> 
        </nav>
       </>
    )
}

export default Navbar
