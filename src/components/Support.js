import React from 'react';
import InnerBody from '../components/Innerbody';


const Support = ({ isScrolled, menuOpen }) => {
    return (
        <InnerBody isScrolled={isScrolled} menuOpen={menuOpen}>
            <div className='support-content'>
                <h2>Support</h2>
                <p>How can we help you?</p>
                {/* Add more support content as needed */}
            </div>
        </InnerBody>
    );
};

export default Support;
