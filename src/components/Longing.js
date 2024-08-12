import React, { useState } from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/photos/Tyla_SignUp.jpg'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Longing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would typically verify the login credentials
       
        console.log('Email:', email);
        console.log('Password:', password);

        // After successful login, navigate to the OrganizerAccountDesktop page
        navigate('/organizer-account-desktop');
    };

    return (
        <div className='background_change'>  
            <div className="registration-wrapper">
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">
                            <img className='ztmlogo' src={image} alt="Side" />
                            <div className="text">
                                <p>The Best Artist Booking Site In <i>- Mzanzi</i></p>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <header>Log In</header>
                                <form onSubmit={handleLogin}>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="password"
                                            className="input"
                                            id="pass"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="pass">Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" className="submit" value="Log In" />
                                    </div>
                                </form>
                                <div className="signin">
                                    <span>Do not have an account? <a href="#">Sign Up here</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );
};

export default Longing;
