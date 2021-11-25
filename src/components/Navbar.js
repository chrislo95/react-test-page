import React, {useState} from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // imports the main icon thingy
import { faCoffee, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // imports the actual icon from the icon pkg thingy
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu= () => setClick(false);
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-log">
                    WOW
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav=item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav=item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                </ul> 
                {button && <Button buttonStyle='btn--outline'>services</Button>}
            </div> 
        </nav>
       </>
    )
}

export default Navbar
