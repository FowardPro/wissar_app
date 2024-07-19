import { Button } from "bootstrap";
import { useState } from "react";
import React from 'react';


import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(false)
        }
    };
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo'>
                        WISSAR <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nave-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/event' className="nav-links" onClick={closeMobileMenu}>Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/testimonials' className="nav-links" onClick={closeMobileMenu}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/team' className="nav-links" onClick={closeMobileMenu}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-links-mobile" onClick={closeMobileMenu}>Login</Link>
                            <li className="nav-item">
                                <Link to='/signup' className="nav-links-mobile" onClick={closeMobileMenu}>SignUp</Link>
                            </li>
                        </li>
                    </ul>
                    {Button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>


    )
}

export default Navbar
