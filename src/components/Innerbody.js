import React from 'react';
import './InnerBody.css';

const InnerBody = ({ isScrolled, menuOpen }) => {
    return (
        <div className={`content-area ${menuOpen ? 'menu-is-open' : ''}`}>
            <main>
                <div className={`heading-top ${isScrolled ? 'stuck' : ''}`}>
                    <h1>Artists...</h1>
                </div>
                <div className='main-page'>
                    <div className='panel1'>
                        <p>
                            Hi My Name Is Tshiamo
                        </p>
                    </div>
                    <div className='panel1'>
                        {/* Panel content goes here */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InnerBody;
