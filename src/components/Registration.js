import React, { useState } from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/photos/ZTM trademark transparent.png'; // Adjust the path accordingly

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
     <div className='background_change'>  
        <div className="registration-wrapper"> {/* Changed class name here */}
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
                            <header>Create account</header>
                            <form onSubmit={handleSignUp}>
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
                                    <input type="submit" className="submit" value="Sign Up" />
                                </div>
                            </form>
                            <div className="signin">
                                <span>Already have an account? <a href="#">Log in here
                                    </a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>     
    );
};

export default Registration;
