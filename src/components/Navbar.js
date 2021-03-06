import React, {useState, useEffect} from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // imports the main icon thingy
import { faCoffee, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // imports the actual icon from the icon pkg thingy
import { Button } from './Button';
// import Charts from "./components/pages/Charts"
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu= () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else { 
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-log" onClick={closeMobileMenu}>
                    Home <FontAwesomeIcon icon={faCoffee} />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav=item'>
                        <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav=item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav=item'>
                        <Link to="./Charts" className='nav-links' onClick={closeMobileMenu}>
                            Charts
                        </Link> 
                    </li>
                </ul> 
                {button && <Button buttonStyle='btn--outline'>services</Button>}
            </div> 
        </nav>
       </>
    )
}

export default Navbar;
