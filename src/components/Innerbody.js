import React from 'react';
import './InnerBody.css';

const InnerBody = ({ isScrolled, menuOpen }) => {
    return (
        <div className={`content-area ${menuOpen ? 'menu-is-open' : ''}`}>
            <main>
                
            </main>
        </div>
    );
};

export default InnerBody;
