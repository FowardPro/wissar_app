// CreateAccount.js

import React from 'react';
import './CreateAccount.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import artistImage from './assets/photos/Tyla_SignUp.jpg';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const navigate = useNavigate();

    const handleEventOrganizerClick = () => {
        navigate('/registration'); 
    };

    return (
        <div className='registration-container'>
            <div className="row">
                <div className="col-md-6 image-side">
                    <img src={artistImage} alt="Artist" className="side-image" />
                </div>
                <div className="col-md-6 form-side">
                    <div className="form-wrapper">
                        <header>Create Account</header>
                        <p>Choose your role below:</p>
                        <div className="role-buttons">
                            <button className="role-btn">ARTIST</button>
                            <button className="role-btn" onClick={handleEventOrganizerClick}>EVENT ORGANISER</button>
                            <button className="role-btn">ATTENDEE</button>
                        </div>
                        <p className="login-prompt">Already have an account? <a href="/login">Login here.</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
